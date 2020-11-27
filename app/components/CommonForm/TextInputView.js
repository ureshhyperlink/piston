import React from 'react';
import { View, StyleSheet, Text, TextInput, Image, TouchableOpacity } from 'react-native';
import FloatLabelTextInput from 'react-native-floating-label-text-input';
import COLOR from '../../config/styles'
import COMMON from '../../config/common'
import IMAGES from '../../config/images'
import MATRICS from '../../config/metrics'

export default TextInputView = ({style, placeholder,secureTextEntry, keyboardType, maxLength, onChangeText, value, source, onPressIcon, editable, numberOfLines }) => {
    return (
        <View style={styles.container}>
            <FloatLabelTextInput
                style={style}
                secureTextEntry={secureTextEntry}
                placeholderTextColor={'#9AA0B2'}
                placeholder={placeholder}
                keyboardType={keyboardType}
                maxLength={maxLength}
                value={value}
                source={source}
                onPress={onPressIcon}
                editable={editable}
                numberOfLines={numberOfLines}
                onChangeTextValue={onChangeText}>  
            </FloatLabelTextInput>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        width: '100%',
        height : MATRICS.dimn52px,
        justifyContent: 'center',
    },
})