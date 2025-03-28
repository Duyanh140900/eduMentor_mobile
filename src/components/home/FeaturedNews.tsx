import React, {useState} from 'react';
import {View, Text, StyleSheet, ImageBackground} from 'react-native';
import {COLORS, FONTS, SCREENS, SIZES} from '@/constants/theme';
import Carousel from 'react-native-snap-carousel';

interface News {
  id: number;
  title: string;
  description: string;
  url: string;
}

const data: News[] = [
  {
    id: 1,
    title: 'Tin mới nổi bật 1',
    description: 'Tin mới nổi bật',
    url: 'https://phanmemmkt.vn/wp-content/uploads/2024/01/anh-bia-story-instagram-27.jpeg',
  },
  {
    id: 2,
    title: 'Tin mới nổi bật 2',
    description: 'Tin mới nổi bật',
    url: 'https://i.pinimg.com/736x/3e/c1/7a/3ec17a7f769fbaa88debb19283c3bd2f.jpg',
  },
  {
    id: 3,
    title: 'Tin mới nổi bật 3',
    description: 'Tin mới nổi bật',
    url: 'https://live.staticflickr.com/3502/3224113807_d184a84be6_b.jpg',
  },
];

const sliderWidth = SCREENS.width;
const itemWidth = SCREENS.width - 100;

const FeaturedNews = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const _renderItem = ({item}: {item: News}) => {
    return (
      <ImageBackground style={[styles.featuredCard]} source={{uri: item.url}}>
        <View style={styles.overlay}></View>
        <View style={styles.content}>
          <View style={styles.tagContainer}>
            <Text style={styles.tag}>Free e-book</Text>
          </View>
          <Text style={styles.title}>{item.title}</Text>
        </View>
      </ImageBackground>
    );
  };

  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Tin mới nổi bật</Text>
      <Carousel
        data={data}
        renderItem={_renderItem}
        sliderWidth={sliderWidth}
        sliderHeight={sliderWidth + 50}
        itemWidth={itemWidth}
        containerCustomStyle={styles.carouselContainer}
        hasParallaxImages={true}
        layout={'default'}
        layoutCardOffset={1}
        inactiveSlideShift={-10}
        activeSlideAlignment={'start'}
        inactiveSlideScale={0.9} // Scale của các slide không active (mặc định: 0.9)
        inactiveSlideOpacity={0.7} // Độ mờ của các slide không active (mặc định: 0.7)
        onSnapToItem={index => setActiveIndex(index)}
      />
      <Pagination totalItems={data.length} activeIndex={activeIndex} />
    </View>
  );
};

const Pagination = ({
  totalItems,
  activeIndex,
}: {
  totalItems: number;
  activeIndex: number;
}) => {
  const getDotStyle = (isActive: boolean) => [
    styles.dot,
    isActive
      ? {width: 20, backgroundColor: COLORS.primary}
      : {width: 8, backgroundColor: COLORS.gray},
  ];
  return (
    <View style={styles.sliderDots}>
      {Array.from(Array(totalItems)).map((_, i) => (
        <View key={i} style={getDotStyle(i === activeIndex)} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  section: {
    marginBottom: SIZES.extraLarge,
  },
  sectionTitle: {
    fontSize: 20,
    fontFamily: FONTS.semiBold,
    color: COLORS.text,
    lineHeight: 22,
  },
  carouselContainer: {
    overflow: 'hidden',
    marginVertical: 20,
    paddingHorizontal: 0,
  },
  featuredCard: {
    width: 300,
    height: 350,
    borderRadius: 24,
    overflow: 'hidden',
    // ...SHADOWS.medium,
  },
  tagContainer: {
    backgroundColor: '#FCCC75',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 20,
    alignSelf: 'flex-start',
    marginBottom: SIZES.base,
  },
  tag: {
    fontSize: 10,
    fontFamily: FONTS.medium,
    color: COLORS.white,
  },
  sliderDots: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: SIZES.base,
    marginTop: SIZES.medium,
  },
  dot: {
    width: 24,
    height: 4,
    backgroundColor: COLORS.gray,
    borderRadius: 4,
  },
  dotActive: {
    width: 24,
    height: 4,
    backgroundColor: COLORS.primary,
    borderRadius: 4,
  },
  image: {
    ...StyleSheet.absoluteFillObject, // Quan trọng
    resizeMode: 'cover',
    // borderRadius: 24,
  },
  imageContainer: {
    flex: 1, // Quan trọng
    marginBottom: 1, // Để tránh spacing issues
    backgroundColor: 'white',
    borderRadius: 8,
  },
  title: {
    fontSize: 18,
    fontFamily: FONTS.semiBold,
    color: COLORS.white,
  },
  description: {
    fontSize: 14,
    fontFamily: FONTS.regular,
    color: COLORS.text,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject, // Phủ toàn bộ không gian của parent
    backgroundColor: 'rgba(0, 0, 0, 0.1)', // Màu đen với độ trong suốt 50%
    zIndex: 1,
  },
  content: {
    ...StyleSheet.absoluteFillObject,
    width: '100%',
    height: '100%',
    justifyContent: 'space-between',
    padding: 16,
    zIndex: 2,
  },
});

export default FeaturedNews;
