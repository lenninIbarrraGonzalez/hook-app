import { useState } from "react";
import { useCounter } from "../hooks"
import { Small } from "./Small";


export const Memorize = () => {

    const {counter, increment} = useCounter();
    const [show, setShow] = useState(true)

    return (
        <>
            <h1>Memorize</h1>
            <div>counter: <Small value={counter}/></div>
            <hr />

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
