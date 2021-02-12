import { useState } from 'react';
import axios from 'axios';
import { LIST_URL ,TODO_URL} from '../../CONSTS.json';
import Modal from 'react-bootstrap/Modal';

const AddTask = ({ updateData, allTask, listID, trigger}) => {

    const [taskName, setTaskName] = useState("");
    const [description, setDescription] = useState("");
    const [completed, setCompleted] = useState(false);

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const update = async (e) => {
        e.preventDefault();
        const data = await axios.post(`${TODO_URL}/create`, { title: taskName, description: description, completed: completed });
        let arr = allTask; 
        arr.push(data.data);
        console.log(listID);
        axios.patch(`${LIST_URL}/update/${listID}`, { todo: arr }).then(res => console.log(res));
        trigger(`Task added!`);
    }

    return (
        <>
            <button type="button" className="btn btn-outline-success"
                onClick={handleShow}>
                Add Task
            </button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header>
                    <Modal.Title>Add Task: </Modal.Title>
                    <button type="button" onClick={handleClose} className="btn btn-outline-danger">
                        <span>X</span>
                    </button>
                </Modal.Header>
                <form onSubmit={update}>
                    <Modal.Body>
                        <div className="form-floating mb-3">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Task Name:"
                                id="name"
                                value={taskName}
                                onChange={e => setTaskName(e.target.value)}
                            />
                            <label htmlFor="update">Task Name:</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Description:"
                                id="description"
                                value={description}
                                onChange={e => setDescription(e.target.value)}
                            />
                            <label htmlFor="update">Task Description:</label>
                        </div>
                        <div className="form-check form-switch mb-3">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                id="completed"
                                value={completed}
                                onChange={(e) => setCompleted(!e.target.value)} />
                            <label className="form-check-label" htmlFor="completed">Completed</label>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <button type="button" onClick={handleClose} className="btn btn-outline-danger">Cancel</button>
                        <button type="submit" onClick={handleClose} className="btn btn-outline-success">Add</button>
                    </Modal.Footer>
                </form>
            </Modal>
        </>
    )

}

export default AddTask; 