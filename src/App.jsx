import React, { useEffect, useState } from 'react'
import styled from '@emotion/styled' // permite crear style components
import ImagenCripto from './assets/img/imagen-criptos.png'
import Form from './components/Form'
import axios from 'axios'
import Result from './components/Result'
import Spinner from './components/Spinner'
import Footer from './components/Footer'

// usaremos la pagina https://min-api.cryptocompare.com/documentation para la API
// useremos la pagina https://tobiasahlin.com/spinkit/ para el loading

const Heading = styled.h1`
font-family: 'Lato', sans-serif;
color: #fff;
text-align: center;
font-weight: 700;
margin-top: 80px;
margin-bottom: 50px;
font-size: 34px;
&::after{
  content: '';
  width: 100px;
  height: 6px;
  background-color: #66A2FE;
  display: block;
  margin: 10px auto 0 auto;
}
`

const Imagen = styled.img`
max-width: 400px;
display: block;
width: 80%;
margin: 100px auto 0 auto;
`

const Contenedor = styled.div`
max-width: 900px;
margin: 0 auto;
width: 90%;
margin-bottom: 2em;
display: flex;
  flex-direction: column;
  min-height: 100vh;
@media (min-width: 992px) {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 2rem;
  margin-left: auto;
  margin-right: auto;
}
`

const App = () => {
  const [monedasYCriptomonedas, setMonedasYCriptomonedas] = useState({}) // una vez lleno creamos un useEffect
  const [resultado, setResultado] = useState({})
  const [loading, setLoading] = useState(false)

  // usando AXIOS
  useEffect(() => {
    if (Object.keys(monedasYCriptomonedas).length > 0) {
      setLoading(true)
      setResultado({})
      const cotizarCriptos = async () => {
        try {
          const { moneda, criptomoneda } = monedasYCriptomonedas
          const urlAPI = await axios.get(`https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`)
          const { DISPLAY } = await urlAPI.data
          setResultado(DISPLAY[criptomoneda][moneda]) // forma valida para acceder a los datos de las monedas
          setLoading(false)

        } catch (error) {
          console.error(error)
        }
      }
      cotizarCriptos()
    }
  }, [monedasYCriptomonedas])

  return (
    <>
      <Contenedor>
          <Imagen src={ImagenCripto} alt='Imagen de criptomonedas' />
          <div>
            <Heading>Cotiza Criptomonedas al Instante</Heading>
            <Form setMonedasYCriptomonedas={setMonedasYCriptomonedas} />
            {loading && <Spinner />}
            {/* el ".PRICE" se lo obtiene del state, ademas resultado es un objeto {} */}
            {resultado.PRICE && <Result resultado={resultado} />}
          </div>
      </Contenedor>
      <Footer />
    </>
  )
}

export default App