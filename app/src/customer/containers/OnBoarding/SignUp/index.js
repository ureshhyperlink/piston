import React from 'react';
import { View, Image, ImageBackground } from 'react-native';
import { Text, Button } from 'react-native-paper';
import translations from '../../../../../localize/translations'
import COMMON from '../../../../../config/common'
import IMAGES from '../../../../../config/images'
import COLOR from '../../../../../config/styles'
import MATRICS from '../../../../../config/metrics'
import PrimaryButton from '../../../../../components/CommonForm/PrimaryButton'
import SimpleInput from '../../../../../components/CommonForm/SimpleInput'
import styles from './styles';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';

class SignUp extends React.Component {
    constructor() {
        super();
        this.state = {
            txtFullName: '',
            txtEmailAddress: '',
            txtCode: '',
            txtMobileNumber: '',
            txtPassword: '',
            txtConfirmPassword: '',
            isAgree: false,
        };
    }

    handlePress = (val) => {
        if (val == "close") {
            this.props.navigation.goBack(null)
        } else if (val == "SignUp") {
            this.props.navigation.push('Verification')
        } else if (val == "agree") {
            this.setState({ isAgree: !this.state.isAgree })
        } else if (val == "login") {
            this.props.navigation.goBack(null)
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.topContainer}>
                    <TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.6} onPress={() => this.handlePress('close')}>
                            <Image source={IMAGES.icons.close} />
                        </TouchableOpacity>
                    </TouchableOpacity>
                    <View style={styles.logoContainer}>
                        <Image source={IMAGES.images.app_logo_primary} />
                    </View>
                </View>

                <View style={styles.middleContainer}>
                    <Text style={COMMON.text30pxBlackBold}>{translations.createAccount}</Text>
                    <Text style={[COMMON.text16pxGrey, { marginTop: MATRICS.dimn8px, marginBottom: MATRICS.dimn24px }]}>{translations.signup_msg}</Text>
                </View>
                <View style={styles.bottomContainer}>
                    <ImageBackground style={{ width: '100%', height: '100%', }} imageStyle={{ borderRadius: MATRICS.dimn32px }} source={IMAGES.images.bg_tarns_login}>
                        <View style={styles.LayoutContainer}>
                            <View style={styles.innerContainer}>
                                <ScrollView showsVerticalScrollIndicator={false}>
                                    <View>
                                        <View style={{ marginTop: MATRICS.dimn24px }}>
                                            <SimpleInput
                                                value={this.state.txtFullName}
                                                maxLength={30}
                                                placeholder={"Full Name"}
                                                onChangeText={(value) => { this.setState({ txtFullName: value }) }} />
                                        </View>

                                        <View style={{ marginTop: MATRICS.dimn24px, flexDirection: 'row' }}>
                                            <View style={{ width: '20%' }}>
                                                <SimpleInput
                                                    value={this.state.txtCode}
                                                    maxLength={3}
                                                    keyboardType={'numeric'}
                                                    placeholder={"Code"}
                                                    onChangeText={(value) => { this.setState({ txtCode: value }) }} />
                                            </View>
                                            <View style={{ width: '76%', marginStart: MATRICS.dimn12px }}>
                                                <SimpleInput
                                                    value={this.state.txtMobileNumber}
                                                    maxLength={10}
                                                    placeholder={"Mobile Number"}
                                                    keyboardType={'numeric'}
                                                    onChangeText={(value) => { this.setState({ txtMobileNumber000: value }) }} />
                                            </View>
                                        </View>

                                        <View style={{ marginTop: MATRICS.dimn24px }}>
                                            <SimpleInput
                                                value={this.state.txtEmailAddress}
                                                maxLength={50}
                                                placeholder={"Email Address"}
                                                onChangeText={(value) => { this.setState({ txtEmailAddress: value }) }} />
                                        </View>
                                        <View style={{ marginTop: MATRICS.dimn24px }}>
                                            <SimpleInput
                                                value={this.state.txtPassword}
                                                secureTextEntry={true}
                                                maxLength={16}
                                                placeholder={"Password"}
                                                onChangeText={(value) => { this.setState({ txtPassword: value }) }} />
                                        </View>
                                        <View style={{ marginTop: MATRICS.dimn24px }}>
                                            <SimpleInput
                                                value={this.state.txtConfirmPassword}
                                                secureTextEntry={true}
                                                maxLength={16}
                                                placeholder={"Confirm Password"}
                                                onChangeText={(value) => { this.setState({ txtConfirmPassword: value }) }} />
                                        </View>
                                        <View style={{ marginTop: MATRICS.dimn24px, flexDirection: 'row' }}>
                                            <TouchableOpacity activeOpacity={0.6} onPress={() => this.handlePress('agree')}>
                                                {this.state.isAgree == false ? <Image source={IMAGES.icons.tick_inactive} />
                                                    : <Image source={IMAGES.icons.tick_active} />}
                                            </TouchableOpacity>
                                            <Text style={[COMMON.text14pxBlack, { marginStart: MATRICS.dimn12px }]}>{translations.agreeText}</Text>
                                        </View>
                                        <View style={{ marginTop: MATRICS.dimn24px }}>
                                            <PrimaryButton
                                                onPress={() => this.handlePress('SignUp')}
                                                name={translations.signUp} />
                                        </View>
                                    </View>
                                </ScrollView>
                            </View>
                        </View>
                        <View style={styles.DescContainer}>
                            <Text style={[COMMON.text14pxWhite]}>{translations.alreadyRegister}</Text>
                            <TouchableOpacity activeOpacity={0.6} onPress={() => this.handlePress('login')}>
                                <Text style={[COMMON.text14pxWhiteBold, { marginStart: MATRICS.dimn8px }]}>{translations.login}</Text>
                            </TouchableOpacity>
                        </View>
                    </ImageBackground>
                </View>
            </View>
        );
    }
}
export default SignUp;
