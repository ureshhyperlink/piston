/*
 * platform/application wide metrics for proper styling
 */
import { Dimensions, Platform } from 'react-native';
const { width, height } = Dimensions.get('window');

const metrics = {
  screenWidth: width < height ? width : height,
  screenHeight: width < height ? height : width,
  navBarHeight: Platform.OS === 'ios' ? '10%' : '10%',
  headerHeight: Platform.OS === 'ios' ? 48 : 0,
  headerLayout: Platform.OS === 'ios' ? '18%' : '14%',
  topLayout: Platform.OS === 'ios' ? '26%' : '26%',

  // Dimn in Percentage... 
  dimn5pr: Platform.OS === 'ios' ? '5%' : '5%',
  dimn8pr: Platform.OS === 'ios' ? '8%' : '8%',
  dimn10pr: Platform.OS === 'ios' ? '10%' : '10%',
  dimn15pr: Platform.OS === 'ios' ? '15%' : '15%',
  dimn20pr: Platform.OS === 'ios' ? '20%' : '20%',
  dimn22pr: Platform.OS === 'ios' ? '22%' : '22%',
  dimn25pr: Platform.OS === 'ios' ? '25%' : '25%',
  dimn28pr: Platform.OS === 'ios' ? '28%' : '28%',
  dimn30pr: Platform.OS === 'ios' ? '30%' : '30%',
  dimn35pr: Platform.OS === 'ios' ? '35%' : '35%',
  dimn40pr: Platform.OS === 'ios' ? '40%' : '40%',
  dimn45pr: Platform.OS === 'ios' ? '45%' : '45%',
  dimn50pr: Platform.OS === 'ios' ? '50%' : '50%',
  dimn60pr: Platform.OS === 'ios' ? '60%' : '60%',
  dimn65pr: Platform.OS === 'ios' ? '65%' : '65%',
  dimn70pr: Platform.OS === 'ios' ? '70%' : '70%',
  dimn75pr: Platform.OS === 'ios' ? '75%' : '75%',
  dimn80pr: Platform.OS === 'ios' ? '80%' : '80%',
  dimn85pr: Platform.OS === 'ios' ? '85%' : '85%',
  dimn90pr: Platform.OS === 'ios' ? '90%' : '90%',

  // Dimn in Pixel... 
  dimn1px: Platform.OS === 'ios' ? 1 : 1,
  dimn2px: Platform.OS === 'ios' ? 2 : 2,
  dimn4px: Platform.OS === 'ios' ? 4 : 4,
  dimn8px: Platform.OS === 'ios' ? 8 : 8,
  dimn12px: Platform.OS === 'ios' ? 12 : 12,
  dimn16px: Platform.OS === 'ios' ? 16 : 16,
  dimn20px: Platform.OS === 'ios' ? 20 : 20,
  dimn24px: Platform.OS === 'ios' ? 24 : 24,
  dimn28px: Platform.OS === 'ios' ? 28 : 28,
  dimn32px: Platform.OS === 'ios' ? 32 : 32,
  dimn36px: Platform.OS === 'ios' ? 36 : 36,
  dimn40px: Platform.OS === 'ios' ? 40 : 40,
  dimn44px: Platform.OS === 'ios' ? 44 : 44,
  dimn48px: Platform.OS === 'ios' ? 48 : 48,
  dimn52px: Platform.OS === 'ios' ? 52 : 52,
  dimn56px: Platform.OS === 'ios' ? 56 : 56,
  dimn60px: Platform.OS === 'ios' ? 60 : 60,
  dimn68px: Platform.OS === 'ios' ? 68 : 68,
  dimn72px: Platform.OS === 'ios' ? 72 : 72,
  dimn80px: Platform.OS === 'ios' ? 80 : 80,
  dimn120px: Platform.OS === 'ios' ? 120 : 120,
  dimn140px: Platform.OS === 'ios' ? 140 : 140,
  dimn160px: Platform.OS === 'ios' ? 160 : 160,
  dimn200px: Platform.OS === 'ios' ? 200 : 200,
  dimn320px: Platform.OS === 'ios' ? 320 : 320,

};

export default metrics;
