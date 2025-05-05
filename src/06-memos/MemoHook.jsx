import { useMemo, useState } from "react";
import { useCounter } from "../hooks"

const heaveStuff = (iterationNumber = 100) => {

    for(let i = 0; i < iterationNumber; i ++) {
        console.log(`Ejecutando el for ${i}`);
    }

    return `${iterationNumber} numero de iteraciones realizadas`;

}

export const MemoHook = () => {

    const {counter, increment} = useCounter(4000);
    const [show, setShow] = useState(true);
    const memorizeValue =  useMemo(() => heaveStuff(counter), [counter]);

    return (
        <>
            <h1>Memorize</h1>
            <div>counter: <small>{counter}</small></div>
            <hr />

            <h4>{memorizeValue}</h4>

            <button
                className="btn btn-primary"
                onClick={() => increment()}
            >
                +1
            </button>

            <button
                className="btn btn-outline-primary"
                onClick={() => setShow(!show)}
            >
                show/hide {JSON.stringify(show)}
            </button>
        </>
    )
}
