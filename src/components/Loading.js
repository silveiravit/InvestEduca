import react from 'react'
import { View, ActivityIndicator, Modal } from 'react-native';

export default function Loading({ visible }){
    return(
        <Modal transparent visible={visible}>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <ActivityIndicator 
                    size={100}
                    color={"#161F4E"}
                    animating={true}
                />
            </View>
        </Modal>
    )
}