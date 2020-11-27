import React from 'react';
import { View, Image, ImageBackground, AsyncStorage, TouchableOpacity } from 'react-native';
import { Text, Button } from 'react-native-paper';
import translations from '../../../../../localize/translations'
import IMAGES from '../../../../../config/images'
import COMMON from '../../../../../config/common'
import MATRICS from '../../../../../config/metrics'
import Header from '../../../../../components/CommonForm/Header'
import PrimaryButton from '../../../../../components/CommonForm/PrimaryButton'
import OTPTextView from "react-native-otp-textinput";
import styles from './styles';

class Verification extends React.Component {
    constructor() {
        super();
        this.state = {
            textOTP:''
        };
    }

    handlePress = (val) => {
        if (val == "back") {
            this.props.navigation.goBack(null)
        } else if (val == "verify") {
            alert("under Development")
        } else if (val == "resend") {
            alert("under Development")
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.topContainer}>
                    <Header
                        title={translations.verification}
                        onPress={() => this.handlePress('back')} />
                </View>
                <View style={styles.middleContainer}>
                    <View style={styles.imageContainer}>
                        <Image source={IMAGES.images.otp_verify} />
                    </View>
                    <Text style={[COMMON.text16pxBlack]}>{translations.verification_msg}</Text>
                    <Text style={[COMMON.text16pxBlack, { marginTop: MATRICS.dimn8px }]}>{translations.tempNumber}</Text>
                    <Text style={[COMMON.text16pxGrey, { marginTop: MATRICS.dimn32px }]}>{translations.enterOTP}</Text>
                    <View style={{ marginTop: MATRICS.dimn24px, marginBottom: MATRICS.dimn24px }}>
                        <OTPTextView
                            handleTextChange={(value) => this.setState({ textOTP: value })}
                            placeholder={"0"}
                            placeholderTextColor={"#9AA0B2"}
                            selectionColor={"#000000"}
                            textInputStyle={{ borderBottomWidth: 1 }}
                            inputCount={4}
                            keyboardType="numeric"/>
                    </View>
                    <PrimaryButton
                        onPress={() => this.handlePress('verify')}
                        name={translations.verify} />

                </View>
                <View style={styles.bottomContainer}>
                    <Text style={[COMMON.text16pxBlack]}>{translations.notRecivingOTP}</Text>
                    <TouchableOpacity activeOpacity={0.6} onPress={() => this.handlePress('resend')}>
                        <Text style={[COMMON.text16pxSteelBold, { marginTop: MATRICS.dimn8px }]}>{translations.resend}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}
export default Verification;
