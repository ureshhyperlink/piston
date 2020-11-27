import { StyleSheet } from 'react-native';
import COLOR from '../../../../../config/styles'
import MATRICS from '../../../../../config/metrics'

const styles = StyleSheet.create({
  container: {
    flex:1,
    width: MATRICS.screenWidth,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLOR.color.COLOR_PRIMARY,
  },
  icon_container:{
    justifyContent:'center',
    alignItems:'center'
  }
});

export default styles;
