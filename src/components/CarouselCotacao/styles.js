import { styled } from 'styled-components/native'

export const RenderCotacao = styled.View`
    justify-content: center;
    align-items: center;
    background-color: ${ props => props.theme === 'light' ? '#000' : '#0D1117' };
    height: 100%;
`