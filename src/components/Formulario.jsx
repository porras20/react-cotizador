import styled from "@emotion/styled"

const Campo = styled.div`
  display: flex;
  margin-bottom: 1rem;
  align-items: center;
`;
const Label = styled.label`
flex: 0 0 100px;
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
export const Formulario = () =>{
    return(
        <form action="">
            <Campo>
                <Label htmlFor="">Marca</Label>
                <Select name="" id="">
                    <option value="">-- Seleccione --</option>
                    <option value="americano">Americano</option>
                    <option value="europeo">Europeo</option>
                    <option value="asiatico">Asiatico</option>
                </Select>
            </Campo>
            <Campo>
                <Label htmlFor="">Año</Label>
                <Select name="" id="">
                    <option value="">-- Seleccione --</option>
                    <option value="americano">2023</option>
                    <option value="europeo">2022</option>
                    <option value="asiatico">2021</option>
                    <option value="americano">2020</option>
                    <option value="europeo">2019</option>
                    <option value="asiatico">2018</option>
                </Select>
            </Campo>
            <Campo>
                <Label htmlFor="">Plan</Label>
                <InputRadio 
                    type="radio" 
                    name="plan"
                    value="basico"
                />Básico
                <InputRadio 
                    type="radio" 
                    name="plan"
                    value="Completo"
                />Completo
            </Campo>
            <button type="button">Cotizar</button>
        </form>
    )
}