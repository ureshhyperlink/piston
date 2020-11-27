import React from 'react';
import { View, Image, ImageBackground, AsyncStorage, TouchableOpacity } from 'react-native';
import { Text, Button } from 'react-native-paper';
import translations from '../../../../../localize/translations'
import IMAGES from '../../../../../config/images'
import COMMON from '../../../../../config/common'
import MATRICS from '../../../../../config/metrics'
import Header from '../../../../../components/CommonForm/Header'
import PrimaryButton from '../../../../../components/CommonForm/PrimaryButton'
import styles from './styles';

class ForgotPass extends React.Component {
    constructor() {
        super();
        this.state = {
            txtEmailAddress: '',
        };
    }

    // On Press Events Handle...
    handlePress = (val) => {
        if (val == "back") {
            this.props.navigation.goBack(null)
        } else if (val == "send") {
            this.props.navigation.push('StartUp')
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.topContainer}>
                    <Header
                        title={translations.forgotPass}
                        onPress={() => this.handlePress('back')} />
                </View>
                <View style={styles.middleContainer}>
                    <View style={styles.imageContainer}>
                        <Image source={IMAGES.images.forgot_pass} />
                    </View>
                    <Text style={[COMMON.text16pxBlack]}>{translations.forgot_pass_msg}</Text>
                    <View style={{ marginTop: MATRICS.dimn20pr, marginBottom: MATRICS.dimn10pr }}>
                        <SimpleInput
                            value={this.state.txtEmailAddress}
                            maxLength={50}
                            placeholder={"Email Address"}
                            onChangeText={(value) => { this.setState({ txtEmailAddress: value }) }} />
                    </View>
                    <PrimaryButton
                        onPress={() => this.handlePress('send')}
                        name={translations.send} />
                </View>
                <View style={styles.bottomContainer}>

                </View>
            </View>
        );
    }
}
export default ForgotPass;
