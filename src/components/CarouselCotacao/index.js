import react from "react";

import {
    RenderCotacao
} from './styles'

export default function CarouselCotacao({data, theme}){
    return(
        <RenderCotacao theme={theme}>
            {data.moeda}
        </RenderCotacao>
    )
}