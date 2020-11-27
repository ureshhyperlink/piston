import { StyleSheet } from 'react-native';
import COLOR from '../../../../../config/styles'
import MATRICS from '../../../../../config/metrics'

const styles = StyleSheet.create({
  container: {
    width: MATRICS.screenWidth,
    height: MATRICS.screenHeight,
    justifyContent: 'center',
    alignItems: 'center',
  },
  topContainer: {
    width: MATRICS.screenWidth,
    height: MATRICS.dimn15pr,
    justifyContent: 'flex-end',
    padding: MATRICS.dimn16px,
  },
  logoContainer:{
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: MATRICS.dimn16px
  },
  middleContainer: {
    width: MATRICS.screenWidth,
    height: MATRICS.dimn15pr,
    justifyContent: 'center',
    paddingHorizontal: MATRICS.dimn16px,
  },
  bottomContainer: {
    width: MATRICS.screenWidth,
    height: MATRICS.dimn70pr,
    alignItems: 'center',
    justifyContent: 'center',
    borderTopStartRadius:MATRICS.dimn48px,
    borderTopEndRadius: MATRICS.dimn48px,
  },
  LayoutContainer:{
    width: MATRICS.screenWidth,
    height: MATRICS.dimn90pr,
    alignItems: 'center',
    justifyContent: 'center',
    padding: MATRICS.dimn16px,
  },
  innerContainer:{
    width:'100%',
    height: '100%',
    padding:MATRICS.dimn24px,
    borderRadius: MATRICS.dimn32px,
    backgroundColor:COLOR.color.COLOR_WHITE,
  },
  DescContainer:{
    width: MATRICS.screenWidth,
    height: MATRICS.dimn10pr,
    flexDirection:'row',
    justifyContent: 'center', 
  }
});

export default styles;
