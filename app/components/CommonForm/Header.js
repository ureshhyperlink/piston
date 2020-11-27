import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Image, Platform } from 'react-native';
import COMMON from '../../config/common'
import COLOR from '../../config/styles'
import MATRICS from '../../config/metrics'
import IMAGES from '../../config/images'

export default Header = ({ onPress, title, isRightIcon, RightSource, onPressRight }) => {
    return (

        <View style={styles.container}>
            <View style={styles.imgContainer}>
                <TouchableOpacity onPress={onPress} activeOpacity={0.6}>
                    <Image source={IMAGES.icons.back_black} />
                </TouchableOpacity>
            </View>
            <View style={styles.textContainer}>
                <Text style={COMMON.text18pxBlackBold}>{title}</Text>
            </View>
            <View style={styles.imgContainer}>
              {isRightIcon == true ?  <TouchableOpacity onPress={onPressRight} activeOpacity={0.6}>
                    <Image source={RightSource} />
                </TouchableOpacity> : null}
            </View>
        </View>

    );
};
const styles = StyleSheet.create({
    container: {
        width: '100%',
        height:  Platform.OS == 'ios' ? '100%' : '100%',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        paddingTop: Platform.OS == 'ios' ? MATRICS.dimn24px : 0,
        backgroundColor: COLOR.color.COLOR_WHITE,
        elevation: MATRICS.dimn12px,
        shadowColor: COLOR.color.COLOR_SHADOW,
        shadowOpacity: MATRICS.dimn2px,
        shadowOffset: { height: MATRICS.dimn4px },
    },
    imgContainer: {
        width: MATRICS.dimn10pr,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textContainer: {
        width: MATRICS.dimn80pr,
        justifyContent: 'center',
        alignItems: 'center'
    }
})