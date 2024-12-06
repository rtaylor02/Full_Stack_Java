import React, {useState} from "react";

function NewTodoForm(props) {
    const [assigned, setAssigned] = useState('');
    const [desc, setDesc] = useState('');

    const submitTodo = () => {
        if (assigned !== '' && desc !== '') {
            props.addTodo(desc, assigned);
            setAssigned('')
            setDesc('')
        }
    }

    return (
        <div className="mt-5">
            <form>
                <div className="mb-3">
                    <label className="form-label">Assigned</label>
                    <input type="text" className="form-control" required onChange={event => { setAssigned(event.target.value) }} value={assigned}></input>
                </div>
                <div className="mb-3">
                    <label className="form-label">Description</label>
                    <textarea className="form-control" rows={3} required onChange={event => setDesc(event.target.value)} value={desc}></textarea>
                </div>
                <button type="button" className="btn btn-primary mt-3" onClick={submitTodo}>Add Todo</button>
            </form>
        </div>
    )
}

export default NewTodoForm;