import { StyleSheet } from 'react-native';
import COLOR from '../../../../../config/styles'
import MATRICS from '../../../../../config/metrics'

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
        height: MATRICS.dimn75pr,
        marginTop: MATRICS.dimn4px
    },
    bottomContainer: {
        width: MATRICS.screenWidth,
        height: MATRICS.dimn15pr,
        alignItems: 'center',
        paddingHorizontal: MATRICS.dimn40px,
    },
    
});

export default styles;
