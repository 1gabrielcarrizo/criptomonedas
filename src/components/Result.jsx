import React from 'react'
import styled from '@emotion/styled'

const Contenedor = styled.div`
color: #fff;
font-family: 'Lato', sans-serif;
display: flex;
align-items: center;
gap: 1rem;
margin-top: 0.5em;
justify-content: center;

@media (max-width: 520px) {
    flex-direction: column-reverse;
}
`

const Imagen = styled.img`
display: block;
width: 120px;
`

const Precio = styled.p`
font-size: 1.6rem;
span{
    font-weight: 700;
}
`

const Texto = styled.p`
font-size: 1rem;
span{
    font-weight: 700;
}
`


const Result = ({ resultado }) => {
    const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE } = resultado
    return (
        <Contenedor>
            <Imagen src={`https://cryptocompare.com/${IMAGEURL}`} alt="imagen cripto" />
            <div>
                <Precio>El precio es de: <span>{PRICE}</span></Precio>
                <Texto>Precio mas alto del dia: <span>{HIGHDAY}</span></Texto>
                <Texto>Precio mas bajo del dia: <span>{LOWDAY}</span></Texto>
                <Texto>Variacion en las ultimas 24hs: <span>{CHANGEPCT24HOUR}</span></Texto>
                <Texto>Ultima acutalizacion: <span>{LASTUPDATE}</span></Texto>
            </div>
        </Contenedor>
    )
}

export default Result