import { useState } from 'react';
import axios from 'axios';
import { LIST_URL } from '../../CONSTS.json';

const EditList = ({ id, title }) => {

    const [titleUpdate, setTitleUpdate] = useState(title);

    const update = (e) => {
        console.log("am i called?");
        e.preventDefault();
        axios.patch(`${LIST_URL}/update/${id}`, { title:titleUpdate }).then(res => console.log(res));
    }

    return (
        <>
            <button type="button" className="btn btn-outline-dark"
                data-bs-toggle="modal" data-bs-target="#editList">
                &#8942;
            </button>

            <div className="modal" id="editList">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h2 className="modal-title">Edit</h2>
                            <button type="button" data-bs-dismiss="modal" className="btn btn-outline-danger">
                                <span>X</span>
                            </button>
                        </div>
                        <form onSubmit={update}>
                            <div className="modal-body">
                                <div className="form-floating mb-3">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Updated Title:"
                                        id="update"
                                        value={titleUpdate}
                                        onChange={e => setTitleUpdate(e.target.value)}
                                    />
                                    <label htmlFor="update">Updated Title:</label>
                                </div>

                            </div>
                            <div className="modal-footer">
                                <button type="button" data-bs-dismiss="modal" className="btn btn-outline-danger">Cancel</button>
                                <button type="submit" onClick={update} data-bs-dismiss="modal" className="btn btn-outline-success">Update</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )

}

export default EditList; 