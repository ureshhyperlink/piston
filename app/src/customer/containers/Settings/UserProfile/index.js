import React from 'react';
import { View, Image, ImageBackground, AsyncStorage, TouchableOpacity } from 'react-native';
import { Text, Button } from 'react-native-paper';
import translations from '../../../../../localize/translations'
import IMAGES from '../../../../../config/images'
import COMMON from '../../../../../config/common'
import MATRICS from '../../../../../config/metrics'
import Header from '../../../../../components/CommonForm/Header'
import ProfileOptionItemView from '../../../layouts/ProfileOptionItemView'
import styles from './styles';

class UserProfile extends React.Component {
    constructor() {
        super();
        this.state = {
        };
    }

    // On Press Events Handle...
    handlePress = (val) => {
        if (val == "back") {
            this.props.navigation.goBack(null)
        } else if (val == "edit") {
            this.props.navigation.push('EditProfile')
        } else if (val == "change_pass") {
            this.props.navigation.push('ChangePassword')
        } else if (val == "change_language") {
            this.props.navigation.push('ChangeLanguage')
        } else if (val == "settings") {
            this.props.navigation.push('Settings')
        } 
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.topContainer}>
                    <Header
                        title={translations.profile}
                        isRightIcon={true}
                        RightSource={IMAGES.icons.edit}
                        onPress={() => this.handlePress('back')}
                        onPressRight={() => this.handlePress('edit')} />
                </View>
                <View style={styles.middleContainer}>
                    <View style={styles.imageContainer}>
                        <Image style={COMMON.image140px} source={IMAGES.images.profile_img} />
                        <Text style={[COMMON.text18pxBlack, { marginTop: MATRICS.dimn16px }]}>{"John robert"}</Text>
                    </View>
                    <View style={styles.detailsContainer}>
                        <Text style={COMMON.text14pxBlackBold}>{translations.email}</Text>
                        <Text style={[COMMON.text12pxBlack, { marginTop: MATRICS.dimn4px }]}>{"John_robert_01@gmail.com"}</Text>
                        <View style={{ marginTop: MATRICS.dimn24px }}>
                            <Text style={COMMON.text14pxBlackBold}>{translations.mobile}</Text>
                            <Text style={[COMMON.text12pxBlack, { marginTop: MATRICS.dimn4px }]}>{"+504 8745122356"}</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.bottomContainer}>
                    <View style={styles.optionContainer}>
                        <ProfileOptionItemView
                            onPress={() => this.handlePress('change_pass')}
                            title={translations.change_pass} />
                    </View>
                    <View style={styles.optionContainer}>
                        <ProfileOptionItemView
                            onPress={() => this.handlePress('change_language')}
                            title={translations.change_language} />
                    </View>
                    <View style={styles.optionContainer}>
                        <ProfileOptionItemView
                            onPress={() => this.handlePress('settings')}
                            title={translations.settigs} />
                    </View>
                </View>
            </View>
        );
    }
}
export default UserProfile;
