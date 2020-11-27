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
import { style } from 'd3';
import { TouchableOpacity } from 'react-native-gesture-handler';

class SignIn extends React.Component {
    constructor() {
        super();
        this.state = {
            txtEmailAddress: '',
            txtPassword: ''
        };
    }

    // On Press Events Handle...
    handlePress = (val) => {
        if (val == "close") {
            this.props.navigation.goBack(null)
        } else if (val == "SignIn") {
            this.props.navigation.push('NavigationScreen')
        } else if (val == "createUser") {
            this.props.navigation.push('SignUp')
        } else if (val == "Forgot") {
            this.props.navigation.push('ForgotPass')
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
                    <Text style={COMMON.text30pxBlackBold}>{translations.signIn}</Text>
                    <Text style={[COMMON.text16pxGrey, { marginTop: MATRICS.dimn8px, marginBottom: MATRICS.dimn24px }]}>{translations.signin_msg}</Text>
                </View>
                <View style={styles.bottomContainer}>
                    <ImageBackground style={{ width: '100%', height: '100%', }} imageStyle={{ borderRadius: MATRICS.dimn32px }} source={IMAGES.images.bg_tarns_login}>
                        <View style={styles.LayoutContainer}>
                            <View style={styles.outerContainer}>
                                <View style={styles.innerContainer}>
                                    <SimpleInput
                                        value={this.state.txtEmailAddress}
                                        maxLength={50}
                                        placeholder={"Email Address"}
                                        onChangeText={(value) => { this.setState({ txtEmailAddress: value }) }} />
                                    <View style={{ marginTop: MATRICS.dimn24px }}>
                                        <SimpleInput
                                            value={this.state.txtPassword}
                                            secureTextEntry={true}
                                            maxLength={16}
                                            placeholder={"Password"}
                                            isRight={true}
                                            rightText={"Forgot?"}
                                            onPressRight={() => this.handlePress('Forgot')}
                                            onChangeText={(value) => { this.setState({ txtPassword: value }) }} />
                                    </View>
                                    <View style={{ marginTop: MATRICS.dimn48px }}>
                                        <PrimaryButton
                                            onPress={() => this.handlePress('SignIn')}
                                            name={translations.signIn} />
                                    </View>
                                </View>
                                <View style={styles.inner2Container}>
                                    <View style={styles.leftContainer}>
                                        <Text style={COMMON.text18pxWhiteBold}>{translations.newUser}</Text>
                                        <Text style={COMMON.text16pxWhite}>{translations.newcrateAccount}</Text>
                                    </View>
                                    <View style={styles.rightContainer}>
                                        <TouchableOpacity activeOpacity={0.6} onPress={() => this.handlePress('createUser')}>
                                            <Image source={IMAGES.icons.white_add_button} />
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                        </View>
                        <View style={styles.DescContainer}>
                            <Text style={[COMMON.text14pxWhite, { textAlign: 'center' }]}>{translations.termsAndcondition}</Text>
                        </View>
                    </ImageBackground>
                </View>
            </View>
        );
    }
}
export default SignIn;
