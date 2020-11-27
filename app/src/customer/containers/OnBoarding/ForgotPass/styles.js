import { StyleSheet } from 'react-native';
import COLOR from '../../../../../config/styles'
import MATRICS from '../../../../../config/metrics'
import { Marker } from 'react-native-svg';

const styles = StyleSheet.create({
    container: {
        width: MATRICS.screenWidth,
        height: MATRICS.screenHeight,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLOR.color.COLOR_WHITE,
    },
    topContainer: {
        width: MATRICS.screenWidth,
        height: MATRICS.navBarHeight,
    },
    middleContainer: {
        width: MATRICS.screenWidth,
        height: MATRICS.dimn70pr,
        alignItems:'center',
        justifyContent:'center',
        paddingHorizontal: MATRICS.dimn32px
    },
    bottomContainer: {
        width: MATRICS.screenWidth,
        height: MATRICS.dimn20pr,
        alignItems: 'center',
    },
    imageContainer: {
        width: MATRICS.screenWidth,
        height: MATRICS.dimn40pr,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: MATRICS.dimn24px,  
    }
});

export default styles;
