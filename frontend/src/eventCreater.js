import { useState } from "react";

function EventCreater(props){
    const [task, setTask] = useState({description : "", done : false});


    const saveTask = ()=>{
        if(task.description != ""){
            props.addTask(task);
            setTask({description : "", done : false});
        }
    }

    return(
        <div className="container">
             <div class="form-row align-items-center">
                <form className="form-group row">
                    <div className="col-4"></div>
                    <div className="col-auto">
                        <input placeholder="Add Event" type="text" id="event-input" onSubmit={saveTask} className = "form-control" value={task.description} onChange={(e)=> setTask({description : e.target.value, done : false})}/>  
                    </div>
                    <button  type = "button" className="col-1 btn btn-primary" onClick={saveTask} >+</button>
                
                </form>
            </div>        
            
        </div>
    )
}

export default EventCreater;