import react from "react";

import {
    RenderCarouselCentral,
    RenderCarouselText,
    RenderCarouselTitle,
    ButtonImagem,
    Imagem
} from './styles'

export default function CarouselAssuntos({data}){
    return(
        <RenderCarouselCentral> 
            <ButtonImagem onPress={ () => mudarTela(data.title) }>
                <Imagem
                    source={{ uri: `${data.image}` }}
                    
                />
            </ButtonImagem>
            <RenderCarouselTitle>{ data.title }</RenderCarouselTitle>
            <RenderCarouselText>{ data.text }</RenderCarouselText>
        </RenderCarouselCentral>
    )
}