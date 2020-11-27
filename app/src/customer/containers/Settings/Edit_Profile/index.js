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

class EditProfile extends React.Component {
    constructor() {
        super();
        this.state = {
            txtFullName: '',
            txtEmailAddress: '',
            txtCode: '',
            txtMobileNumber: '',
        };
    }

    // On Press Events Handle...
    handlePress = (val) => {
        if (val == "back") {
            this.props.navigation.goBack(null)
        } else if (val == "edit_img") {
            //this.props.navigation.push('')
            alert('Under Development')
        } else if (val == "update") {
            this.props.navigation.goBack(null)
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.topContainer}>
                    <Header
                        title={translations.edit_profile}
                        onPress={() => this.handlePress('back')} />
                </View>
                <View style={styles.middleContainer}>
                    <View style={styles.imageContainer}>
                        <Image style={COMMON.image140px} source={IMAGES.images.profile_img} />
                        <TouchableOpacity style={styles.absoluteImgContainer} activeOpacity={0.6} onPress={() => this.handlePress('edit_img')} >
                            <Image  source={IMAGES.icons.edit_img} />
                        </TouchableOpacity>
                    </View>

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
export default EditProfile;
