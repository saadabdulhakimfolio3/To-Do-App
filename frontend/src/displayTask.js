import "./DisplayTask.css"


function DisplayTasks(props){
    const markTaskDone = (index) => {
        props.markTaskDone(index);
    }

    return(
        <div className="container">
            <div className="row">
            {props.tasks.map((
                item => {
                    return(
                        <div className="row" id={item.done ? "completed-task" : "pending-task"}>
                            <div className="col">
                            <p>{item.description}</p>
                            </div>
                            <div className="col">
                            {item.done ? <p>Done</p> :
                                <p>Pending</p> 
                            }
                            </div>
                            <div className="col">
                            {item.done ?  <></>:
                            <button type="button" className = "col-4 btn btn-secondary" onClick={() => markTaskDone(props.tasks.indexOf(item))}>Mark Done</button>
                            }
                            </div>
                        </div>
                    )
                }
            ))}
            </div>
        </div>
    )
}

export default DisplayTasks;