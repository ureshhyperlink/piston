import React from 'react';
import { View, Image, ImageBackground, AsyncStorage, TouchableOpacity } from 'react-native';
import { Text, Button } from 'react-native-paper';
import translations from '../../../../../localize/translations'
import IMAGES from '../../../../../config/images'
import COMMON from '../../../../../config/common'
import MATRICS from '../../../../../config/metrics'
import styles from './styles';

class Tutorial2 extends React.Component {
    constructor() {
        super();
        this.state = {
        };
    }

    handlePress = (val) => {
        if (val == "skip") {
            this.props.navigation.replace('StartUp')
        } else {
            this.props.navigation.push('Tutorial3')
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.topContainer}>
                    <Text style={COMMON.text24pxSteelBold}>{translations.tutorial_title_2}</Text>
                </View>
                <View style={styles.middleContainer}>
                    <View style={styles.imageContainer}>
                        <Image source={IMAGES.images.tutorial_2} />
                    </View>
                    <Text style={[COMMON.text16pxBlack, { padding: MATRICS.dimn12px, textAlign: 'center' }]}>{translations.tutorial_msg_2}</Text>
                    <TouchableOpacity activeOpacity={0.6} onPress={() => this.handlePress('skip')}>
                        <Text style={[COMMON.text16pxAssent, { marginTop: MATRICS.dimn16px, textAlign: 'center' }]}>{translations.skip}</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.bottomContainer}>
                    <View style={styles.horizontalContainer}>
                        <Image style={{ marginHorizontal: MATRICS.dimn8px }} source={IMAGES.icons.white_dot} />
                        <Image style={{ marginHorizontal: MATRICS.dimn8px }} source={IMAGES.images.small_car} />
                        <Image style={{ marginHorizontal: MATRICS.dimn8px }} source={IMAGES.icons.white_dot} />
                        <Image style={{ marginHorizontal: MATRICS.dimn8px }} source={IMAGES.icons.white_dot} />
                    </View>
                    <TouchableOpacity activeOpacity={0.6} onPress={() => this.handlePress('next')}>
                        <Image source={IMAGES.icons.button_next} />
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}
export default Tutorial2;
