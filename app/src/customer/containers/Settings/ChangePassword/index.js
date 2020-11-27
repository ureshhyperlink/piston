import React from 'react';
import { View, Image, ImageBackground, AsyncStorage, TouchableOpacity } from 'react-native';
import { Text, Button } from 'react-native-paper';
import translations from '../../../../../localize/translations'
import IMAGES from '../../../../../config/images'
import COMMON from '../../../../../config/common'
import MATRICS from '../../../../../config/metrics'
import Header from '../../../../../components/CommonForm/Header'
import PrimaryButton from '../../../../../components/CommonForm/PrimaryButton'
import SimpleInput from '../../../../../components/CommonForm/SimpleInput'
import styles from './styles';

class ChangePassword extends React.Component {
    constructor() {
        super();
        this.state = {
            txtOldPassword: '',
            txtNewPassword: '',
            txtConfirmPassword: '',
        };
    }

    // On Press Events Handle...
    handlePress = (val) => {
        if (val == "back") {
            this.props.navigation.goBack(null)
        } else if (val == "update") {
            this.props.navigation.goBack(null)
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.topContainer}>
                    <Header
                        title={translations.change_pass}
                        onPress={() => this.handlePress('back')} />
                </View>
                <View style={styles.middleContainer}>
                    <View style={{ marginTop: MATRICS.dimn4px }}>
                        <SimpleInput
                            value={this.state.txtOldPassword}
                            secureTextEntry={true}
                            maxLength={16}
                            placeholder={"Old Password"}
                            onChangeText={(value) => { this.setState({ txtOldPassword: value }) }} />
                    </View>
                    <View style={{ marginTop: MATRICS.dimn24px }}>
                        <SimpleInput
                            value={this.state.txtNewPassword}
                            secureTextEntry={true}
                            maxLength={16}
                            placeholder={"New Password"}
                            onChangeText={(value) => { this.setState({ txtNewPassword: value }) }} />
                    </View>
                    <View style={{ marginTop: MATRICS.dimn24px }}>
                        <SimpleInput
                            value={this.state.txtConfirmPassword}
                            secureTextEntry={true}
                            maxLength={16}
                            placeholder={"Confirm Password"}
                            onChangeText={(value) => { this.setState({ txtConfirmPassword: value }) }} />
                    </View>
                </View>
                <View style={styles.bottomContainer}>
                    <PrimaryButton
                        onPress={() => this.handlePress('update')}
                        name={translations.update} />
                </View>
            </View>
        );
    }
}
export default ChangePassword;
