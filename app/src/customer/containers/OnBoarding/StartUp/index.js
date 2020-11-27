import React from 'react';
import { View, Image, ImageBackground, TouchableOpacity } from 'react-native';
import { Text, Button } from 'react-native-paper';
import translations from '../../../../../localize/translations'
import COMMON from '../../../../../config/common'
import IMAGES from '../../../../../config/images'
import MATRICS from '../../../../../config/metrics'
import PrimaryButton from '../../../../../components/CommonForm/PrimaryButton'
import SecondaryButton from '../../../../../components/CommonForm/SecondaryButton'
import WhiteButton from '../../../../../components/CommonForm/WhiteButton'
import styles from './styles';

class StartUp extends React.Component {
  constructor() {
    super();
    this.state = {
    };
  }

 // On Press Events Handle...
  handlePress = (val) => {
    if (val == "SignIn") {
      this.props.navigation.push('SignIn')
    } else if (val == "SignUp") {
      this.props.navigation.push('SignUp')
    } else if (val == "SignInApple") {
      alert("Under Development")
    } else {
      alert("Under Development")
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <ImageBackground style={styles.container} source={IMAGES.images.bg_transp_img}>
          <View style={styles.topContainer}>
            <Image source={IMAGES.images.app_logo_primary} />
          </View>
          <View style={styles.middleContainer}>
            <Text style={COMMON.text30pxBlackBold}>{translations.welcome}</Text>
            <Text style={[COMMON.text16pxBlack, { marginTop: MATRICS.dimn20px, marginBottom: MATRICS.dimn24px, textAlign: 'center' }]}>{translations.login_msg}</Text>
            <View style={styles.buttonContainer}>
              <PrimaryButton
                onPress={() => this.handlePress('SignIn')}
                name={translations.signIn} />
            </View>
            <View style={styles.buttonContainer}>
              <SecondaryButton
                onPress={() => this.handlePress('SignUp')}
                name={translations.createAccount} />
            </View>
            <View style={styles.buttonContainer}>
              <WhiteButton
                onPress={() => this.handlePress('SignInApple')}
                name={translations.signInWithApple}
                source={IMAGES.icons.apple_icon} />
            </View>
            <View style={[styles.buttonContainer, { marginTop: MATRICS.dimn40px }]}>
              <View style={styles.cardButtonContainer}>
                <View style={styles.halfContainer}>
                  <TouchableOpacity activeOpacity={0.6} onPress={() => this.handlePress('SignInFB')}>
                    <Image source={IMAGES.icons.fb_icon} />
                  </TouchableOpacity>
                </View>
                <View style={styles.vLine} />
                <View style={styles.halfContainer}>
                  <TouchableOpacity activeOpacity={0.6} onPress={() => this.handlePress('SignInGoogle')}>
                    <Image source={IMAGES.icons.google_icon} />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.bottomContainer}>
            <Text style={[COMMON.text16pxGrey, { textAlign: 'center' }]}>{translations.termsAndcondition}</Text>
          </View>
        </ImageBackground>
      </View >
    );
  }
}
export default StartUp;
