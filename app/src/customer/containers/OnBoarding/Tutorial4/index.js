import React from 'react';
import { View, Image, ImageBackground, AsyncStorage, TouchableOpacity } from 'react-native';
import { Text, Button } from 'react-native-paper';
import translations from '../../../../../localize/translations'
import IMAGES from '../../../../../config/images'
import COMMON from '../../../../../config/common'
import MATRICS from '../../../../../config/metrics'
import styles from './styles';

class Tutorial4 extends React.Component {
    constructor() {
        super();
        this.state = {
        };
    }

    handlePress = () => {
        this.props.navigation.push('StartUp')
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.topContainer}>
                    <Text style={COMMON.text24pxSteelBold}>{translations.tutorial_title_4}</Text>
                </View>
                <View style={styles.middleContainer}>
                    <View style={styles.imageContainer}>
                        <Image source={IMAGES.images.tutorial_4} />
                    </View>
                    <Text style={[COMMON.text16pxBlack, { padding: MATRICS.dimn12px, textAlign: 'center' }]}>{translations.tutorial_msg_4}</Text>
                </View>
                <View style={styles.bottomContainer}>
                    <View style={styles.horizontalContainer}>
                        <Image style={{ marginHorizontal: MATRICS.dimn8px }} source={IMAGES.icons.white_dot} />
                        <Image style={{ marginHorizontal: MATRICS.dimn8px }} source={IMAGES.icons.white_dot} />
                        <Image style={{ marginHorizontal: MATRICS.dimn8px }} source={IMAGES.icons.white_dot} />
                        <Image style={{ marginHorizontal: MATRICS.dimn8px }} source={IMAGES.images.small_car} />
                    </View>
                    <TouchableOpacity activeOpacity={0.6} onPress={() => this.handlePress('next')}>
                        <View style={styles.buttonContainer}>
                            <Text style={COMMON.text20pxWhite}>{translations.letsStart}</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}
export default Tutorial4;
