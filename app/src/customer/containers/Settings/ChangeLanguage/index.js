import React from 'react';
import { View, Image, ImageBackground, AsyncStorage, TouchableOpacity } from 'react-native';
import { Text, Button } from 'react-native-paper';
import translations from '../../../../../localize/translations'
import IMAGES from '../../../../../config/images'
import COMMON from '../../../../../config/common'
import MATRICS from '../../../../../config/metrics'
import Header from '../../../../../components/CommonForm/Header'
import PrimaryButton from '../../../../../components/CommonForm/PrimaryButton'
import SelectLanguageView from '../../../genaric/SelectLanguageView'
import styles from './styles';

class ChangeLanguage extends React.Component {
    constructor() {
        super();
        this.state = {
            isEnglish: true,
            isSpanish: false,
        };
    }

    // On Press Events Handle...
    handlePress = (val) => {
        if (val == "back") {
            this.props.navigation.goBack(null)
        } else if (val == "update") {
            this.props.navigation.goBack(null)
        } else if (val == "english") {
            this.setState({ isEnglish: true, isSpanish: false })
        } else if (val == "spanish") {
            this.setState({ isEnglish: false, isSpanish: true })
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.topContainer}>
                    <Header
                        title={translations.change_language}
                        onPress={() => this.handlePress('back')} />
                </View>
                <View style={styles.middleContainer}>
                    <SelectLanguageView
                        onPress={() => this.handlePress('english')}
                        title="English"
                        isSelected={this.state.isEnglish} />

                    <SelectLanguageView
                        onPress={() => this.handlePress('spanish')}
                        title="Spanish"
                        isSelected={this.state.isSpanish} />
                </View>
                <View style={styles.bottomContainer}>
                    <PrimaryButton
                        onPress={() => this.handlePress('update')}
                        name={translations.change} />
                </View>
            </View>
        );
    }
}
export default ChangeLanguage;
