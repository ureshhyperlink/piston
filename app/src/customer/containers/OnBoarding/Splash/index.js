import React from 'react';
import { View, Image, ImageBackground, AsyncStorage } from 'react-native';
import { Text, Button } from 'react-native-paper';
import translations from '../../../../../localize/translations'
import IMAGES from '../../../../../config/images'
import COMMON from '../../../../../config/common'
import MATRICS from '../../../../../config/metrics'
import styles from './styles';

class Splash extends React.Component {
    constructor() {
        super();
        this.state = {

        };
    }

    componentDidMount() {
        setTimeout(() => {
            this.load()
        }, 2000);
    }

    load = () => {
        this.props.navigation.replace('Tutorial1');
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.icon_container}>
                    <Image source={IMAGES.images.app_logo}/>
                </View>
            </View>
        );
    }
}
export default Splash;
