import React from 'react';
import { View, Image, ImageBackground, AsyncStorage, TouchableOpacity } from 'react-native';
import translations from '../../../../../localize/translations'
import IMAGES from '../../../../../config/images'
import COMMON from '../../../../../config/common'
import MATRICS from '../../../../../config/metrics'
import Header from '../../../../../components/CommonForm/Header'
import SettingsOptionsView from '../../../genaric/SettingsOptionsView'
import styles from './styles';

class Settings extends React.Component {
    constructor() {
        super();
        this.state = {
        };
    }

    // On Press Events Handle...
    handlePress = (val) => {
        if (val == "back") {
            this.props.navigation.goBack(null)
        } else if (val == 'my_vehicals') {
            this.props.navigation.push('')
        } else if (val == 'notifications') {
            this.props.navigation.push('')
        } else if (val == 'rate_the_app') {
            this.props.navigation.push('')
        } else if (val == 'share_the_app') {
            this.props.navigation.push('')
        } else if (val == 'help_faq') {
            this.props.navigation.push('')
        } else if (val == 'terms_conditions') {
            this.props.navigation.push('')
        } else if (val == 'privacy_policy') {
            this.props.navigation.push('')
        } else if (val == 'contact_us') {
            this.props.navigation.push('')
        } else if (val == 'logout') {

        }

    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.topContainer}>
                    <Header
                        title={translations.settigs}
                        onPress={() => this.handlePress('back')} />
                </View>
                <View style={styles.middleContainer}>
                    <SettingsOptionsView
                        onPress={() => this.handlePress('my_vehicals')}
                        title={translations.my_vehicals} />
                    <SettingsOptionsView
                        onPress={() => this.handlePress('notifications')}
                        title={translations.notifications} />
                    <SettingsOptionsView
                        onPress={() => this.handlePress('rate_the_app')}
                        title={translations.rate_the_app} />
                    <SettingsOptionsView
                        onPress={() => this.handlePress('share_the_app')}
                        title={translations.share_the_app} />
                    <SettingsOptionsView
                        onPress={() => this.handlePress('help_faq')}
                        title={translations.help_faq} />
                    <SettingsOptionsView
                        onPress={() => this.handlePress('terms_conditions')}
                        title={translations.terms_conditions} />
                    <SettingsOptionsView
                        onPress={() => this.handlePress('privacy_policy')}
                        title={translations.privacy_policy} />
                    <SettingsOptionsView
                        onPress={() => this.handlePress('contact_us')}
                        title={translations.contact_us} />
                    <SettingsOptionsView
                        onPress={() => this.handlePress('logout')}
                        title={translations.logout} />
                </View>

            </View>
        );
    }
}
export default Settings;
