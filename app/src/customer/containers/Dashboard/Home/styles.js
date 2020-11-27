import { StyleSheet } from 'react-native';
import COLOR from '../../../../../config/styles'
import MATRICS from '../../../../../config/metrics'

const styles = StyleSheet.create({
    container: {
        width: MATRICS.screenWidth,
        height: MATRICS.screenHeight,
        alignItems: 'center',
        backgroundColor: COLOR.color.COLOR_WHITE,
    },
    topContainer: {
        width: MATRICS.screenWidth,
        height: MATRICS.navBarHeight,
       
    },
    adsContainer:{
        width: MATRICS.screenWidth,
        height: MATRICS.dimn25pr,
        alignItems:'center',
        justifyContent:'center',
        padding: MATRICS.dimn16px, 
    },
    mainContainer:{
        width: MATRICS.screenWidth,
        height: MATRICS.dimn60pr,
        alignItems:'center',
        padding:MATRICS.dimn16px,
    },
    singleViewContainer:{
        width: MATRICS.screenWidth,
        height: MATRICS.dimn30pr,
        paddingHorizontal:MATRICS.dimn20px,
        paddingVertical: MATRICS.dimn8px
       
    }
});

export default styles;
