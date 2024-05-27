import react, { useState } from "react";

import {
    ButtonArea,
    ButtonText,
    Buttons
} from './styles'

import { AntDesign } from '@expo/vector-icons';

export default function RegisterTypes({ type, sendTypeChanged }){
    const [typeChecked, setTypeChecked] = useState(type)
    function changeType(name){
        if(name === 'Receita'){
            setTypeChecked('Receita')
            sendTypeChanged('Receita')
        }else{
            setTypeChecked('Despesa')
            sendTypeChanged('Despesa')
        }
    }
    return(
        <ButtonArea>
            <Buttons checked={typeChecked === 'Receita' ? true : false} onPress={() => changeType('Receita')}>
                <ButtonText>Receita</ButtonText>
                <AntDesign name="arrowup" size={30} color="black" />
            </Buttons>
            <Buttons checked={typeChecked === 'Despesa' ? true : false} onPress={() => changeType('Despesa')}>
                <ButtonText>Despesa</ButtonText>
                <AntDesign name="arrowdown" size={30} color="black" />
            </Buttons>
        </ButtonArea>
    )
}