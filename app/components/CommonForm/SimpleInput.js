import React from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
import COLOR from '../../config/styles'
import COMMON from '../../config/common'
import IMAGES from '../../config/images'
import MATRICS from '../../config/metrics'
import CardView from 'react-native-cardview';
import { TextInput } from 'react-native-paper';

export default SimpleInput = ({ placeholder, keyboardType, secureTextEntry, onChangeText, maxLength, value, isRight, rightText, onPressRight }) => {
    return (
        <View style={styles.container}>
            <View style={{ flexDirection: 'row' }}>
                <TextInput
                    style={styles.inputtext}
                    placeholder={placeholder}
                    onChangeText={onChangeText}
                    keyboardType={keyboardType}
                    secureTextEntry={secureTextEntry}
                    value={value}
                    maxLength={maxLength}
                    selectionColor={COLOR.color.COLOR_SECONDARY}
                    underlineColor={COLOR.color.COLOR_SECONDARY}
                    autoCapitalize='none' />
                {isRight == true ? <TouchableOpacity activeOpacity={0.6} onPress={onPressRight} hitSlop={{ top: 30, bottom: 30, left: 30, right: 30 }}>
                    <Text style={[COMMON.text14pxPrimaryBold, { marginLeft: -58, marginTop: MATRICS.dimn12px }]}>{rightText}</Text>
                </TouchableOpacity> : null}
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        width: '100%',
        justifyContent: 'center',
    },
    inputtext: {
        width: '100%',
        fontSize: MATRICS.dimn16px,
        height: MATRICS.dimn48px,
        backgroundColor: COLOR.color.COLOR_WHITE
    },
})