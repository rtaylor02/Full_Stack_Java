import React, {useState} from "react";

function NewTodoForm() {
    const [assigned, setAssigned] = useState('');
    const [desc, setDesc] = useState('');

    // const assignedChange = event => {
    //     console.log('assigned: ', event.target.value);
    // }

    // const descChange = event => {
    //     console.log('desc: ', event.target.value);
    // }


    return (
        <div className="mt-5">
            <form>
                <div className="mb-3">
                    <label className="form-label">Assigned</label>
                    <input type="text" className="form-control" required onChange={event => {console.log('assigned: ', event.target.value); console.log("assigned = " + assigned);}} value={assigned}></input>
                </div>
                <div className="mb-3">
                    <label className="form-label">Description</label>
                    <textarea className="form-control" rows={3} required onChange={event => console.log('desc: ', event.target.value)} value={desc}></textarea>
                </div>
                <button type="button" className="btn btn-primary mt-3">Add Todo</button>
            </form>
        </div>
    )
}

export default NewTodoForm;