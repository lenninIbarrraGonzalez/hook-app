import { useEffect, useState } from "react"
import { Message } from "./Message";

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        username: 'strider',
        email: 'lennin@gmail.com'
    });

    const { username, email } = formState;

    const onInputChange = ({target}) => {
        const { name, value } = target;
        // console.log(name,value);

        setFormState({
            ...formState,
            [name] : value
        });
    }

    useEffect(() => {
        //  console.log('El useEfect se llamo');
    }, []);

    useEffect(() => {
        // console.log('El useEfect se llamo al cambiar el estado');
    }, [formState]);

    useEffect(() => {
        //  console.log('El useEfect se llamo al cambiar el email');
    }, [email]);

    return (
        <>
            <h1>Formulario simple</h1>
            <hr />
            <input 
                type="text" 
                className="form-control mb-3"
                placeholder="Username"
                name="username"
                value={username}
                onChange={onInputChange}
            />
            <input 
                type="email"
                className="form-control "
                placeholder="correo@dominio.com"
                name="email"
                value={email}
                onChange={onInputChange}
            />

            {
                username === 'strider2' && <Message/>
            }
        </>
    )
}
