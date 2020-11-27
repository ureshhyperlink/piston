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
        height: MATRICS.dimn45pr,
        paddingHorizontal: MATRICS.dimn16px,
        justifyContent: 'center',
    },
    bottomContainer: {
        width: MATRICS.screenWidth,
        height: MATRICS.dimn45pr,
        alignItems: 'center',
        paddingHorizontal: MATRICS.dimn16px
    },
    imageContainer: {
        justifyContent: 'center',
        alignItems: 'center', 
    },
    detailsContainer:{
        marginTop: MATRICS.dimn24px,  
        justifyContent: 'center',
        paddingHorizontal: MATRICS.dimn8px
    },
    optionContainer:{
        marginTop: MATRICS.dimn12px,  
        height: MATRICS.dimn20pr,
        paddingHorizontal: MATRICS.dimn4px
    }
});

export default styles;
