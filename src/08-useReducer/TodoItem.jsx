

export const TodoItem = ({id, description, done, onDeleteTodo, onToggleTodo}) => {

    return (
        <>
            <li className="list-group-item d-flex justify-content-between">
                <span 
                    className={`align-self-center cursor-pointer ${done ? "todo-complete" : ""}`}
                    onClick={() => onToggleTodo(id)}
                >
                    {description}
                </span>
                <button 
                    className="btn btn-danger"
                    onClick={ () => onDeleteTodo(id)}
                >Borrar</button>
            </li>
        </>
    )
}
