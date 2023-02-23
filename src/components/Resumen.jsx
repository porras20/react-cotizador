import styled from "@emotion/styled";

const ContenedorResumen = styled.div`
    padding: 1rem;
    text-align: center;
    background-color: #00838f;
    color: #fff;
    margin-top: 1rem;
`
const Ul = styled.ul`
text-transform: capitalize;
`
export const Resumen = ({datos}) =>{
    const {marca, year, plan} = datos;
    if (marca === '' || year === '' || plan === '' )  return null
    return(
        <ContenedorResumen>
            <h2>Resumen de cotizacion</h2>
            <Ul>
                <li>Marca: {marca}</li>
                <li>Plan: {plan}</li>
                <li>Año del auto: {year}</li>
            </Ul>
        </ContenedorResumen>
    )
}