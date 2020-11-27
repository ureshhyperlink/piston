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
    alignItems: 'center',
    padding: MATRICS.dimn16px,
  },
  middleContainer: {
    width: MATRICS.screenWidth,
    height: MATRICS.dimn65pr,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: MATRICS.dimn32px
  },
  bottomContainer: {
    width: MATRICS.screenWidth,
    height: MATRICS.dimn20pr,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: MATRICS.dimn24px,
  },
  buttonContainer: {
    width: '100%',
    marginTop: MATRICS.dimn20px,
  },
  cardButtonContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: COLOR.color.COLOR_WHITE,
    padding: MATRICS.dimn12px,
    borderRadius: MATRICS.dimn160px,
    elevation: MATRICS.dimn2px,
    shadowColor: COLOR.color.COLOR_SHADOW,
    shadowOpacity: MATRICS.dimn2px,
    shadowOffset: { height: MATRICS.dimn4px, width: MATRICS.dimn2px },
  },
  vLine:{
    width:MATRICS.dimn2px,
    height:MATRICS.dimn24px,
    backgroundColor: COLOR.color.COLOR_GREY_TEXT
  },
  halfContainer:{
    width: '49%',
    height:10,
    justifyContent: 'center',
    alignItems: 'center', 
    flexDirection: 'row',
  }
});

export default styles;
