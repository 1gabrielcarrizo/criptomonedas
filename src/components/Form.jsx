import React, { useEffect, useState } from 'react'
import styled from '@emotion/styled' // permite crear style components
import useSelectMonedas from '../hooks/useSelectMonedas'
import { monedas } from '../data/coin'
import axios from 'axios'
import Error from './Error'

const InputSubmit = styled.input`
background-color: #9497FF;
border: none;
width: 100%;
padding: 0.7em;
color: #fff;
font-weight: 700;
text-transform: uppercase;
font-size: 1.2rem;
border-radius: 8px;
transition: background-color .3s ease;
margin-top: 1.5em;
&:hover{
    background-color: #7A7DFE;
    cursor: pointer;
}
`

const Form = ({setMonedasYCriptomonedas}) => {
    // se usa el useState cuando se trabaja con una API
    const [criptos, setCriptos] = useState([])
    const [error, setError] = useState(false)

    // extraemos la funcion del hook
    const [moneda, SelectMonedas] = useSelectMonedas('Elige tu moneda', monedas)
    const [criptomoneda, SelectCriptomonedas] = useSelectMonedas('Elige tu criptomoneda', criptos)

    // usando FETCH
    /*
    useEffect(() => {
        const consultarAPI = async () => {
            try {
                const resp = await fetch('https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD')
                const { Data } = await resp.json()
                console.log('usando fetch con async/await')
                console.log(Data)
            } catch (error) {
                console.error(error)
            }
        }
        consultarAPI()
    }, [])
    */

    // usando AXIOS
    useEffect(() => {
        const consultarAPI = async () => {
            try {
                const limite = 20
                const resp = await axios.get(`https://min-api.cryptocompare.com/data/top/mktcapfull?limit=${limite}&tsym=USD`)
                const { Data } = await resp.data
                // console.log('usando axios con async/await')
                // console.log(Data)

                const arrayCriptos = Data.map((cripto) => {
                    const { FullName } = cripto.CoinInfo
                    const { Name } = cripto.CoinInfo

                    const objeto = {
                        id: Name,
                        nombre: FullName
                    }

                    return objeto
                })

                // console.log(arrayCriptos)
                setCriptos(arrayCriptos)
            } catch (error) {
                console.error(error)
            }
        }
        consultarAPI()
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault()
        if ([moneda, criptomoneda].includes('')) {
            setError(true)
            // setTimeout(() => {
            //     setError(false)
            // }, 3000);
            return
        }
        setError(false)
        setMonedasYCriptomonedas({
            moneda,
            criptomoneda
        })
    }

    return (
        <>
            {error && <Error>Todos los campos son requeridos</Error>}
            <form onSubmit={handleSubmit}>
                <SelectMonedas />
                <SelectCriptomonedas />
                <InputSubmit type="submit" value="Cotizar" />
            </form>

        </>
    )
}

export default Form