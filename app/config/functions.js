import Snackbar from 'react-native-snackbar';
import COLOR from './styles';
import translations from '../localize/translations'
import { Alert } from 'react-native';

export const showAlert = (text, action) => {
    Alert.alert(
        translations.appName,
        text, [{
            text: 'Ok',
            onPress: action,
            // style: 'cancel'
        },
    ])
}

export const showSneckBar = (text, action) => {
    Snackbar.show({
        text: text,
        textColor: COLOR.color.COLOR_WHITE,
        duration: action == null ? Snackbar.LENGTH_LONG : Snackbar.LENGTH_INDEFINITE,
        backgroundColor: COLOR.color.COLOR_PRIMARY,
        action: {
            text: action == null ? "" : "OK",
            textColor: COLOR.color.COLOR_WHITE,
            onPress: action,
        },
    });
}

export const cancelAlert = (text, action) => {
    Alert.alert(
        translations.appName,
        text, [{
            text: 'No',
            style: 'cancel'
        }, {
            text: 'Yes',
            style: 'default',
            onPress: action,
            // style: 'cancel'
        },])
}