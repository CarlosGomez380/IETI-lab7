
export const Task = (props) => {
    let tasks= props.tasksList;
    let taskItem=tasks.map(task=>( 
        <div>
            Id: {task.id}
            Email: {task.email}
            Contenido: {task.content}
            Fecha: {task.date}
        </div>
    ))
    
    return(
        <div>
            {taskItem}
        </div>
    )
}