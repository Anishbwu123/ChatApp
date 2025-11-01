import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const BASE_WIDTH = 375;
const BASE_HEIGHT = 812;

const scaleSize = (size: number): number => (width / BASE_WIDTH) * size;

const verticalScaleSize = (size: number): number => (height / BASE_HEIGHT) * size;

const responsiveFontSize = (size: number): number => {
  const scaleFactor = Math.min(width / BASE_WIDTH, height / BASE_HEIGHT);
  return Math.round(size * scaleFactor);
};

interface Responsive {
  width: (size: number) => number;
  height: (size: number) => number;
  fontSize: (size: number) => number;
  margin: (size: number) => number;
  padding: (size: number) => number;
  borderRadius: (size: number) => number;
}

const responsive: Responsive = {
  width: scaleSize,
  height: verticalScaleSize,
  fontSize: responsiveFontSize,
  margin: scaleSize,
  padding: scaleSize,
  borderRadius: scaleSize,
};

export default responsive;





------------usage-----------

  const styles = StyleSheet.create({
  box: {flex: 1},
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: responsive.padding(10),
  },
  headerText: {
    fontSize: responsive.fontSize(22),
    fontWeight: 'bold',
    marginBottom: responsive.margin(20),
    textAlign: 'center',
  },
  bannerImage: {
    width: '94%',
    alignSelf: 'center',
    height: responsive.height(150),
    borderRadius: responsive.borderRadius(10),
    marginBottom: responsive.margin(20),
  },
  sectionHeading: {
    fontSize: responsive.fontSize(18),
    fontWeight: 'bold',
    marginBottom: responsive.margin(10),
    marginTop: responsive.margin(20),
  },
  categoriesContainer: {
    marginBottom: responsive.margin(20),
  },
  categoryItem: {
    backgroundColor: '#007bff',
    paddingVertical: responsive.padding(8),
    paddingHorizontal: responsive.padding(15),
    marginRight: responsive.margin(10),
    borderRadius: responsive.borderRadius(10),
  },
  categoryText: {
    fontSize: responsive.fontSize(14),
    color: '#fff',
  },
  trendingItemsContainer: {
    marginBottom: responsive.margin(20),
