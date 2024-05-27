import react from "react";

import {
    RenderCardList,
    Text
} from './styles'

export default function CarouselMovimentacao({data, theme}){
    return(
        <RenderCardList theme={theme}> 
            <Text>{data.text}</Text>
        </RenderCardList> 
    )
}