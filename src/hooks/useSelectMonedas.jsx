import React, { useState } from 'react'
import styled from '@emotion/styled' // permite crear style components

const Label = styled.label`
color: #fff;
display: block;
font-family: 'Lato', sans-serif;
font-size: 1.5rem;
font-weight: 700;
margin: 1em 0;
`

const Select = styled.select`
width: 100%;
font-size: 1.1rem;
padding: 0.7em;
border-radius: 8px;
`

// un hook retorno un array o un objeto
const useSelectMonedas = (label, opciones) => {
  // tiene un nombre general para que sea reutilizable
  const [state, setState] = useState('')

  const SelectMonedas = () => (
    <>
    <Label>{label}</Label>
    <Select value={state} onChange={(e) => setState(e.target.value)}>
      <option value="">Seleccione</option>
      {opciones.map((moneda) => (
        <option key={moneda.id} value={moneda.id}>{moneda.nombre}</option>
      ))}
    </Select>
    </>
  )

  return [state ,SelectMonedas] // podriamos devolverle un state al "form" de esta forma
}

export default useSelectMonedas