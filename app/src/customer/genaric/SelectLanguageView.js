import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Image } from 'react-native';
import COMMON from '../../../config/common'
import COLOR from '../../../config/styles'
import MATRICS from '../../../config/metrics'
import IMAGES from '../../../config/images'

export default SelectLanguageView = ({ onPress, title, isSelected }) => {
    return (
        <TouchableOpacity onPress={onPress} activeOpacity={0.6} >
            <View style={styles.container}>
                <View style={styles.leftContainer}>
                    <Text style={COMMON.text14pxGrey}>{title}</Text>
                </View>
                <View style={styles.rightContainer}>
                    {isSelected == true ? <Image source={IMAGES.icons.tick_active} /> : <Image source={IMAGES.icons.tick_inactive} />}
                </View>
            </View>
            <View style={styles.line} />
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
        backgroundColor: COLOR.color.COLOR_GREY_WHITE,
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
    line: {
        width: '100%',
        height: MATRICS.dimn2px,
        backgroundColor: COLOR.color.COLOR_GREY
    }
})