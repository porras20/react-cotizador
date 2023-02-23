import styled from "@emotion/styled"
import { TransitionGroup, CSSTransition } from "react-transition-group"
const Mensaje = styled.p`
background-color:  rgb(127, 224, 237);
margin-top: 2rem;
padding: 1rem;
text-align: center;
`
const TextoCotizacion = styled.p`
color: #00838f;
padding: 1rem;
text-transform: uppercase;
font-weight: bold;
margin: 0;
`
const ResultadoCotizacion = styled.div`
text-align: center;
padding: 0.5rem;
border: 1px solid #26C6DA;
background-color: rgb(127, 224, 237);
margin-top: 1rem;
position: relative;
`
export const Resultado = ({cotizacion}) =>{
    return(
        cotizacion === 0 ? <Mensaje>Elige una marca. año y tipo de seguro</Mensaje>
        :
            <ResultadoCotizacion>
                <TransitionGroup
                    component="p"
                    className="resultado"
                >
                    <CSSTransition
                        classNames="resultado"
                        key={cotizacion}
                        timeout={{enter: 500, exit: 500}}>
                        <TextoCotizacion>El total es de ${cotizacion} </TextoCotizacion>
                    </CSSTransition>
                </TransitionGroup>
            </ResultadoCotizacion>
    )
}