import "./DisplayTask.css"


function DisplayTasks(props){
    const markTaskDone = (index) => {
        props.markTaskDone(index);
    }

    return(
        <div className="task-container">
            <div className="task">
                <p id="task-data">Description</p>
                <p id="task-data">Status</p>
                <p id="task-data">Mark</p>
            </div>
            {props.tasks.map((
                item => {
                    return(
                        <div className = "task" id={item.done ? "completed-task" : "pending-task"}>
                                <p id="task-data">{item.description}</p>
                                {item.done ? <p id="task-data">Done</p> :
                                    <p id="task-data">Pending</p> 
                                }
                                {item.done ?  <p id="task-data">Marked</p>:
                                <button type="button" id="task-data" className = "btn btn-secondary" onClick={() => markTaskDone(props.tasks.indexOf(item))}>Mark</button>
                                }
                        </div>
                    )
                }
            ))}
            
        </div>
    )
}

export default DisplayTasks;