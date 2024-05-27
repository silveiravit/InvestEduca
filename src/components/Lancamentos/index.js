import React, { useState } from "react";

import {
    CampoRegistro,
    Container,
    Text,
    TextData,
    Valor
} from './styles'

export default function Lancamentos({ data }){

    const [valor] = useState(Number(data.valorGasto).toFixed(2).replace('.',','))

    return(
        <Container>
            <CampoRegistro>
                <TextData>{ data.data }</TextData>
                <Text>{ data.nomeGasto }</Text>
                <Valor color={valor.replace(',','.')}>
                    { Number(data.valorGasto).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}) }
                </Valor>
            </CampoRegistro>
        </Container>
    )
}