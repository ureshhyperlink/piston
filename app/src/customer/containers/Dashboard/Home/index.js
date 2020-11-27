import React from 'react';
import { View, Image, ImageBackground, AsyncStorage, TouchableOpacity } from 'react-native';
import { Text, Button } from 'react-native-paper';
import translations from '../../../../../localize/translations'
import IMAGES from '../../../../../config/images'
import COMMON from '../../../../../config/common'
import MATRICS from '../../../../../config/metrics'
import Home_Header from '../../../../../components/CommonForm/Home_Header'
import HomeItemView from '../../../layouts/HomeItemView'

import styles from './styles';

class Home extends React.Component {
    constructor() {
        super();
        this.state = {
        };
    }

    // On Press Events Handle...
    handlePress = (val) => {
        if (val == "citylist") {
            alert("Under Development")
        } else if (val == "settings") {
            this.props.navigation.push('UserProfile')
        } else if (val == "adslist") {
            this.props.navigation.push('AllAdsListing')
        } else if (val == 'buySell') {
            this.props.navigation.push('ChooseOption')
        } else if (val == 'BuySparePartList') {
            this.props.navigation.push('BuySparePartList')
        } else if (val == 'GenralServiceList') {
            this.props.navigation.push('GenralServiceList')
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.topContainer}>
                    <Home_Header
                        onPressLeft={() => this.handlePress('citylist')}
                        onPressRight={() => this.handlePress('settings')} />
                </View>
                <View style={styles.adsContainer}>
                    <Image source={IMAGES.images.banner_img} />
                    <TouchableOpacity activeOpacity={0.6} onPress={() => this.handlePress('adslist')} >
                        <Text style={[COMMON.text12pxPrimaryBold, { marginTop: MATRICS.dimn8px }]}>{translations.viewAllAds}</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.mainContainer}>
                    <View style={styles.singleViewContainer}>
                        <HomeItemView
                            onPress={() => this.handlePress('buySell')}
                            isInverse={false}
                            title={translations.view_buy_sell}
                            source={IMAGES.icons.buy_sell} />
                    </View>
                    <View style={styles.singleViewContainer}>
                        <HomeItemView
                            onPress={() => this.handlePress('BuySparePartList')}
                            isInverse={true}
                            title={translations.buy_spareparts}
                            source={IMAGES.icons.spare_part} />
                    </View>
                    <View style={styles.singleViewContainer}>
                        <HomeItemView
                            onPress={() => this.handlePress('GenralServiceList')}
                            isInverse={false}
                            title={translations.genral_services}
                            source={IMAGES.icons.general_service} />
                    </View>
                </View>
            </View>
        );
    }
}
export default Home;
