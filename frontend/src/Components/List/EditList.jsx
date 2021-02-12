import { useState } from 'react';
import axios from 'axios';
import { LIST_URL } from '../../CONSTS.json';
import  Modal  from 'react-bootstrap/Modal';

const EditList = ({ listID, trigger, listTitle }) => {

    const [titleUpdate, setTitleUpdate] = useState(listTitle);
    console.log(`From editlist - ${listID}`);

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const update = (e) => {
        e.preventDefault();
        axios.patch(`${LIST_URL}/update/${listID}`, { title: titleUpdate }).then((res) => {
            console.log(res);
            trigger(`Updated ${res.data.title}`);
            setTitleUpdate('');
            document.querySelector('#inputtitle').value = "";
        });
    }

    return (
        <>
            <button type="button" className="btn btn-outline-dark"
                onClick={handleShow}>
                &#8942;
            </button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header>
                    <Modal.Title>{listTitle}</Modal.Title>
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
                                placeholder="Updated Title:"
                                id="inputtitle"
                                value={titleUpdate}
                                onChange={e => setTitleUpdate(e.target.value)}
                            />
                            <label htmlFor="inputtitle">Updated Title:</label>
                        </div>

                    </Modal.Body>
                    <Modal.Footer>
                        <button type="button" onClick={handleClose} className="btn btn-outline-danger">Cancel</button>
                        <button type="submit" onClick={handleClose} className="btn btn-outline-success">Update</button>
                    </Modal.Footer>
                </form>
            </Modal>
        </>
    )

}

export default EditList; 