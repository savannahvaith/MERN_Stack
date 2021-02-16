import {useState, useEffect} from 'react';
import axios from 'axios';
import {TODO_URL} from '../../CONSTS.json';
import Modal from 'react-bootstrap/Modal';

const EditTask = ({taskID, trigger}) => {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [taskName, setTaskName] = useState('');
    const [taskDescription,setTaskDescription] = useState('');
    const [taskCompleted, setTaskcompleted] = useState(false);

    useEffect( async() => {
       await axios.get(`${TODO_URL}/get/${taskID}`).then((res) => {
            setTaskName(res.data.title);
            setTaskDescription(res.data.description);
            setTaskcompleted(res.data.completed);
        });
    },[])

    const update = async(e) => {
        e.preventDefault();
        await axios.patch(`${TODO_URL}/update/${taskID}`, {title: taskName, description: taskDescription, completed: taskCompleted}); 
        trigger(`${taskName} Task Updated!`);
    }

    const deleteTask = async(e) => {
        e.preventDefault(); 
        await axios.delete(`${TODO_URL}/delete/${taskID}`);
        handleClose();
        trigger(`${taskName} Deleted!`);
    }
    
    return (
        <>
            <button className="btn btn-outline-info" onClick={handleShow}>&#8942;</button>

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
                                value={taskDescription}
                                onChange={e => setTaskDescription(e.target.value)}
                            />
                            <label htmlFor="update">Task Description:</label>
                        </div>
                        <div className="form-check form-switch mb-3">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                id="completed"
                                checked={taskCompleted}
                                onClick={(e) => setTaskcompleted(!e.target.value)} />
                            <label className="form-check-label" htmlFor="completed">Completed</label> 
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <button type="button" onClick={handleClose} className="btn btn-outline-danger">Cancel</button>
                        <button type="button" onClick={deleteTask} className="btn btn-outline-danger">Delete</button>
                        <button type="submit" onClick={handleClose} className="btn btn-outline-success">Update</button>
                    </Modal.Footer>
                </form>
            </Modal>
        </>
    );
}

export default EditTask; 