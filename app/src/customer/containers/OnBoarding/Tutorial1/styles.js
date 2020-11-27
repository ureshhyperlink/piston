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
        height: MATRICS.dimn10pr,
        justifyContent: 'flex-end',
        alignItems: 'center',
        padding: MATRICS.dimn16px,
    },
    middleContainer: {
        width: MATRICS.screenWidth,
        height: MATRICS.dimn70pr,
        alignItems: 'center',
    },
    bottomContainer: {
        width: MATRICS.screenWidth,
        height: MATRICS.dimn20pr,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: MATRICS.dimn24px,
        backgroundColor: COLOR.color.COLOR_PRIMARY,
        borderTopStartRadius: MATRICS.dimn24px,
        borderTopEndRadius: MATRICS.dimn24px
    },
    horizontalContainer: {
        width: MATRICS.dimn80pr,
        flexDirection: 'row',
        alignItems: 'center',
    },
    imageContainer: {
        width: MATRICS.screenWidth,
        height: MATRICS.dimn75pr,
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export default styles;
