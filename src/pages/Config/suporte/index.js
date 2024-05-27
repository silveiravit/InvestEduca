import React, { useState, useContext } from "react";
import { View, StyleSheet, TextInput } from "react-native"; // componentes

import {
    Container,
    ContainerFaleConosco,
    TextFaleConosco,
    ButtonEnviar,
    Text,
    ButtonText,
    CampoDuvida
} from './styles'

// pacote de envio de email
import email from "react-native-email"; 

// biblioteca de icones
import { Feather } from '@expo/vector-icons'; 

// Temas
import { AuthContext } from "../../../contexts/auth";

export default function Suporte(){

    const to = ['investeduca07@gmail.com']
    const [pergunta, setPergunta] = useState('')
    const {themeMode} = useContext(AuthContext)

    function enviar(){
        email(to, {
            subject: '',
            body: pergunta,
            checkCanOpen: false
        })
    }
    // Função que fará o redirecionamento para o usuário entrar em contato conosco

    return(
        <Container theme={themeMode}>
            <ContainerFaleConosco theme={themeMode}>
                <TextFaleConosco theme={themeMode}>Fale Conosco</TextFaleConosco>
                <Feather name="phone-call" size={30} color={themeMode === 'light' ? '#161F4E' : '#fff'} />
            </ContainerFaleConosco>
            
            <View>
                <Text theme={themeMode}>Mande sua mensagem no campo abaixo:</Text>
                <CampoDuvida
                    placeholder="Digite sua dúvida aqui!"
                    multiline={true}
                    numberOfLines={12}
                    textAlignVertical="top"
                    onChangeText={ (value) => setPergunta(value) }
                    theme={themeMode}
                />
                <ButtonEnviar onPress={ enviar } theme={themeMode}>
                    <ButtonText>ENVIAR</ButtonText>
                </ButtonEnviar>
            </View>
        </Container>
    )
}

const styles = StyleSheet.create({

})