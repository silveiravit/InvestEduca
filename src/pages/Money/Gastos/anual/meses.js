import React from "react";
import { View, Text} from 'react-native'

export default function Meses({ data }){

    return(
        <View>
            <Text style={{ marginHorizontal: 10, marginVertical: 10, color: '#fff', fontSize: 25, fontWeight: '600'}}>
                { data.mes }
            </Text>
        </View>
    )
}