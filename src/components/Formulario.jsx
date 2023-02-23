import styled from "@emotion/styled"
import { useEffect, useState } from "react";
import { obtenerDiferenciaYear, calcularMarca } from "../helper";


const Campo = styled.div`
  display: flex;
  margin-bottom: 1rem;
  align-items: center;
`;
const Label = styled.label`
flex: 0 0 100px;
`
const Boton = styled.button`
background-color: #00838f;
font-size: 16px;
width: 100%;
padding: 1rem;
color: #fff;
text-transform: uppercase;
font-weight: bold;
border: none;
transition: 0.3s ease;
margin-top: 2rem;

&:hover{
    background-color: #26C6DA;
    cursor: pointer;
}
`
const Select = styled.select`
display: block;
width: 100%;
padding: 1rem;
border: 1px solid #1e1e1e;
-webkit-appearance: none;
`

const InputRadio = styled.input`
margin: 0 1rem;
`

const Error = styled.div`
background-color: red;
color: white;
padding: 1rem;
width: 100%;
text-align: center;
margin-bottom: 1rem;
`
export const Formulario = ({setResumen, setCargando}) =>{
    
    const [datos, setDatos] = useState({
        marca: '',
        year: '',
        plan: ''
    })

    const [error, setError] = useState(false)

    //Extraer los valores del state
    const { marca, year, plan  } = datos;

    // Leer los datos del formulario y colocarlos en el state
    const obtenerInformacion = e =>{
        setDatos({
            ...datos,[e.target.name] : e.target.value
        })
    }

    //  Cuando el usuario presiona submit
    const cotizarSeguro = e =>{
        e.preventDefault()

        if (marca.trim() === '' || year.trim === '' || plan.trim() === '') {
            setError(true);
            return;
        }
        setError(false);

        let resultado = 2000;
        //Obtener la diferencia de años
        const diferencia = obtenerDiferenciaYear(year);

        //Por cada año hay que restar el 3%
        resultado -= ((diferencia * 3) * resultado) / 100;

        
        setCargando(true);
        setTimeout(() => {
            //americano 15%
            //Asiatico 5%
            //Europeo 30%
            setCargando(false)
            resultado = calcularMarca(marca) * resultado
            setResumen({
                cotizacion: resultado,
                datos
            })
            
        }, 3000);
    }


    

    return(
        <form 
            onSubmit={cotizarSeguro}
        >
            {error ?<Error>Todos los campos son obligatorios</Error> : null}
            <Campo>
                <Label htmlFor="">Marca</Label>
                <Select 
                    name="marca" 
                    id=""
                    value={marca}
                    onChange={obtenerInformacion}
                    >
                    <option value="">-- Seleccione --</option>
                    <option value="americano">Americano</option>
                    <option value="europeo">Europeo</option>
                    <option value="asiatico">Asiatico</option>
                </Select>
            </Campo>
            <Campo>
                <Label htmlFor="">Año</Label>
                <Select 
                    name="year" 
                    id=""
                    value={year}
                    onChange={obtenerInformacion}
                    >
                    <option value="">-- Seleccione --</option>
                    <option value="2023">2023</option>
                    <option value="2022">2022</option>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                    <option value="2019">2019</option>
                    <option value="2018">2018</option>
                </Select>
            </Campo>
            <Campo>
                <Label htmlFor="">Plan</Label>
                <InputRadio 
                    type="radio" 
                    name="plan"
                    value="basico"
                    checked = {plan === "basico"}
                    onChange = {obtenerInformacion}
                />Básico
                <InputRadio 
                    type="radio" 
                    name="plan"
                    value="completo"
                    checked = {plan === "completo"}
                    onChange = {obtenerInformacion}
                />Completo
            </Campo>
            <Boton type="submit">Cotizar</Boton>
        </form>
    )
}