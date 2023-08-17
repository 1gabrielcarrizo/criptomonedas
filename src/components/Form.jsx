import React, { useEffect } from 'react'
import styled from '@emotion/styled' // permite crear style components
import useSelectMonedas from '../hooks/useSelectMonedas'
import { monedas } from '../data/coin'
import axios from 'axios'

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

const Form = () => {
    // extraemos la funcion del hook
    const [moneda, SelectMonedas] = useSelectMonedas('Elige tu moneda', monedas)
    // const [selectCriptomonedas] = useSelectMonedas('Selecciona tu criptomoneda')

    /*
    useEffect(() => {
        const consultarAPI = async () => {
            const urlAPI = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD'
            const respuesta = await fetch(urlAPI)
            console.log(respuesta)
        }
        consultarAPI()
    }, []) // cuando "Form.jsx" este listo, llamara a la API de criptomonedas
    */

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
                const resp = await axios.get('https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD')
                const {Data} = await resp.data
                console.log('usando axios con async/await')
                console.log(Data)
            } catch (error) {
                console.error(error)
            }
        }
        consultarAPI()
    }, [])


    return (
        <form>
            <SelectMonedas />
            {moneda}
            {/* <selectCriptomonedas/> */}
            <InputSubmit type="submit" value="Cotizar" />
        </form>
    )
}

export default Form