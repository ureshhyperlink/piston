import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Image } from 'react-native';
import COMMON from '../../../config/common'
import COLOR from '../../../config/styles'
import MATRICS from '../../../config/metrics'
import IMAGES from '../../../config/images'

export default ViewMoreContainer = ({ onPress, title, isSelected }) => {
    return (
        <TouchableOpacity onPress={onPress} activeOpacity={0.6} >
            <View style={styles.container}>
                <View style={styles.leftContainer}>
                    {isSelected == false ? <Text style={COMMON.text14pxBlack}>{title}</Text>
                        : <Text style={COMMON.text18pxSteelBold}>{title}</Text>}
                </View>
                <View style={styles.rightContainer}>
                    <Image source={IMAGES.icons.arrow_right} />
                </View>
            </View>
        </TouchableOpacity>
    );
};
const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: MATRICS.dimn56px,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLOR.color.COLOR_SECONDARY_LIGHT,
        borderRadius: MATRICS.dimn12px
    },
    leftContainer: {
        width: '90%',
        height: '100%',
        justifyContent: 'center',
        paddingHorizontal: MATRICS.dimn24px
    },
    rightContainer: {
        width: '10%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },

})