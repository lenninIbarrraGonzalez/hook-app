import { useForm } from "../hooks/useForm"

export const FormWhithCustomHook = () => {

    const { username, email, password, address, onInputChange, onResetForm} = useForm({
            username: '',
            email: '',
            password: '',
            address: ''
    });

    // const  {username, email, password } = formState;

    return (
        <>
            <h1>Formulario con custom hook</h1>
            <hr />
            <input 
                type="text" 
                className="form-control mb-3"
                placeholder="Nombre de usuario"
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
            <input 
                type="text"
                className="form-control mt-2"
                placeholder="Dirección"
                name="address"
                value={address}
                onChange={onInputChange}
            />
            <input 
                type="password"
                className="form-control mt-2"
                placeholder="Contraseña"
                name="password"
                value={password}
                onChange={onInputChange}
            />

            <button className="btn btn-primary mt-2" onClick={onResetForm}>Borrar</button>
        </>
    )
}
