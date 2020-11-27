import React from 'react';
import { View, StyleSheet , Text, TouchableOpacity} from 'react-native';
import COMMON from '../../config/common'
import COLOR from '../../config/styles'
import MATRICS from '../../config/metrics'

export default SecondaryButton = ({ onPress, name }) => {
	return (
		<TouchableOpacity style={styles.container} onPress={onPress} activeOpacity={0.7} >
				<View>
					<Text style={COMMON.text20pxWhite}>{name}</Text>
				</View>
		</TouchableOpacity>
	);
};
const styles = StyleSheet.create({
    container:{
        width:'100%',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:COLOR.color.COLOR_SECONDARY,
        padding:MATRICS.dimn12px,
        borderRadius:MATRICS.dimn160px,
        borderColor: COLOR.color.COLOR_WHITE,
        borderWidth:MATRICS.dimn2px,
        elevation: MATRICS.dimn2px,
        shadowColor: COLOR.color.COLOR_SHADOW,
        shadowOpacity: MATRICS.dimn2px,
        shadowOffset: { height: MATRICS.dimn4px, width: MATRICS.dimn2px },
    },
})