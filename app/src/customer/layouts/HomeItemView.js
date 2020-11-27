import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Image } from 'react-native';
import COMMON from '../../../config/common'
import COLOR from '../../../config/styles'
import MATRICS from '../../../config/metrics'

export default HomeItemView = ({ isInverse, onPress, source, title }) => {
    return (
        <TouchableOpacity onPress={onPress} activeOpacity={0.6} >
            {isInverse == false ? <View style={styles.container}>
                <View style={styles.leftContainer}>
                    <Text style={COMMON.text18pxPrimaryBold}>{title}</Text>
                </View>
                <View style={styles.rightContainer}>
                    <Image source={source} />
                </View>
            </View> : <View style={styles.container2}>
                    <View style={styles.leftContainer2}>
                        <Image source={source} />
                    </View>
                    <View style={styles.rightContainer2}>
                        <Text style={COMMON.text18pxSteelBold}>{title}</Text>
                    </View>
                </View>
            }
        </TouchableOpacity>
    );
};
const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLOR.color.COLOR_PRIMARY_LIGHT,
        borderRadius: MATRICS.dimn16px,
    },
    leftContainer: {
        width: '65%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    rightContainer: {
        width: '35%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLOR.color.COLOR_PRIMARY,
        borderTopEndRadius: MATRICS.dimn16px,
        borderBottomEndRadius: MATRICS.dimn16px,
        borderTopStartRadius: MATRICS.dimn160px,
        borderBottomStartRadius: MATRICS.dimn160px
    },
    container2: {
        width: '100%',
        height: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLOR.color.COLOR_SECONDARY_LIGHT,
        borderRadius: MATRICS.dimn16px,
    },
    leftContainer2: {
        width: '35%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLOR.color.COLOR_SECONDARY,
        borderTopEndRadius: MATRICS.dimn160px,
        borderBottomEndRadius: MATRICS.dimn160px,
        borderTopStartRadius: MATRICS.dimn16px,
        borderBottomStartRadius: MATRICS.dimn16px
    },
    rightContainer2: {
        width: '65%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    }
})