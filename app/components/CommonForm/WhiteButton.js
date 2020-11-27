import React from 'react';
import { View, StyleSheet , Text, Image, TouchableOpacity} from 'react-native';
import COMMON from '../../config/common'
import COLOR from '../../config/styles'
import IMAGES from '../../config/images'
import MATRICS from '../../config/metrics'

export default WhiteButton = ({ onPress, name, source }) => {
	return (
		<TouchableOpacity style={styles.container} onPress={onPress} activeOpacity={0.7} >
				<View style={{flexDirection:'row', justifyContent: 'center', alignItems: 'center'}}>
                    <Image style={{marginHorizontal: MATRICS.dimn8px}} source={source}/> 
					<Text style={COMMON.text20pxBlack}>{name}</Text>
				</View>
		</TouchableOpacity>
	);
};
const styles = StyleSheet.create({
    container:{
        width:'100%',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:COLOR.color.COLOR_WHITE,
        padding:MATRICS.dimn12px,
        borderRadius:MATRICS.dimn160px,
        borderColor: COLOR.color.COLOR_BLACK,
        borderWidth:MATRICS.dimn1px,
        elevation: MATRICS.dimn2px,
        shadowColor: COLOR.color.COLOR_SHADOW,
        shadowOpacity: MATRICS.dimn2px,
        shadowOffset: { height: MATRICS.dimn4px, width: MATRICS.dimn2px },
    },
})