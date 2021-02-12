import { useState } from 'react'; 
import axios from 'axios';
import { LIST_URL } from '../../CONSTS.json';

const SideBar = ({trigger}) => {

    const [title, setTitle] = useState("");

    const addToDB= (event) => {
        event.preventDefault();
        console.log(`Form submitted`);
        console.log(`Title: ${title}`);
        axios.post(`${LIST_URL}/create`, {title})
        .then(res => {
            setTitle("");
            alert("Successfully added!");
            trigger(`${title} added`);
        }).catch(err => {
            console.error(err);
            alert("Oops...");
        });
        
    }

    return (
        <div className="bg-light border-right" id="sidebar">
            <div className="card">
                <div className="card-body">
                    <h6 className="title">Create New List</h6>
                    <form onSubmit={addToDB}>
                        <div className="form-floating mb-3">
                            <input type="text" className="form-control" id="title" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
                            <label htmlFor="title">Title</label>
                        </div>
                        <button type="submit" className="btn btn-outline-dark">Add List</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default SideBar;