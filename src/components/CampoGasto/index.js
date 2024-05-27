import React, { useState } from "react";
import { TouchableOpacity } from "react-native";

import {
    CampoRegistro,
    Container,
    Text,
    Valor
} from './styles'

export default function CampoGasto({ data, deleteItem, editItem, chave, editValor }){
    const [valor] = useState(Number(data.valorGasto).toFixed(2).replace('.',','))
    function acoesEditChave(){
        editItem(data.nomeGasto)
        chave(data.key)
    }
    function acaoEditValor(){
        editValor(data.valorGasto)
        chave(data.key)
    }
    return(
        <Container>
            <TouchableOpacity onLongPress={ () => deleteItem(data.key) }>
                <CampoRegistro>
                    <TouchableOpacity onPress={ acoesEditChave }>
                        <Text>{ data.nomeGasto }</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={ acaoEditValor }>
                        <Valor color={valor.replace(',','.')}>
                            { Number(data.valorGasto).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}) }
                        </Valor>
                    </TouchableOpacity>
                </CampoRegistro>
            </TouchableOpacity>
        </Container>
    )
}