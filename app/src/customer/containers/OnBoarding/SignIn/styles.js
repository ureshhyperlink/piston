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
    height: MATRICS.dimn75pr,
    alignItems: 'center',
    justifyContent: 'center',
    padding: MATRICS.dimn16px,
  },
  outerContainer:{
    width:'100%',
    height:'100%',
    borderRadius: MATRICS.dimn32px,
    backgroundColor:COLOR.color.COLOR_SECONDARY
  },
  innerContainer:{
    width:'100%',
    height: MATRICS.dimn80pr,
    padding:MATRICS.dimn24px,
    borderRadius: MATRICS.dimn32px,
    backgroundColor:COLOR.color.COLOR_WHITE,
    justifyContent:'center'
  },
  inner2Container:{
    width:'100%',
    flexDirection:'row',
    height: MATRICS.dimn20pr,
    padding:MATRICS.dimn24px,
    justifyContent:'center',
  },
  leftContainer:{
    width:'80%',
    justifyContent:'center',
  },
  rightContainer:{
    width:'20%',
    justifyContent:'center',
    alignItems:'center'
  },
  DescContainer:{
    width: MATRICS.screenWidth,
    height: MATRICS.dimn25pr,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal:MATRICS.dimn32px
  }
});

export default styles;
