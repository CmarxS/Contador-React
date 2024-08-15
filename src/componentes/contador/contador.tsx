import { PropsWithChildren } from "react"

interface Props extends PropsWithChildren{
    numero: number
    setCount: (count: number) => void
}
const Contador = ({numero, setCount, children}: Props) =>{
    console.log(numero);
    return(
        <>
        <p>
        {children}
        </p>
        <button onClick={() =>setCount((numero + 1000000000000000000000000000000000000))}>Aumenta</button>
        <p>{numero}</p>
        <button onClick={() =>setCount((numero - 1))}>Diminui</button>
        </>
    )
    
}

export default Contador