import {useState, useEffect} from 'react'; 
import axios from 'axios';

import AddTask from "../Task/AddTask";
import ReadTask from "../Task/ReadTask";
import DeleteList from "./DeleteList";
import EditList from "./EditList";

const ListCard = ({ listID, listTitle,trigger}) => {

    const [allTask, setAllTask] = useState([]);
    const updateData = (res) => {
        setAllTask(...allTask,res);
    }

    return(
        <div className="col-xl-4">
            <div className="card">
                <div className="card-header teal">
                    <h6 className="col-md-10 text-white title">{listTitle}</h6>
                    <EditList listTitle={listTitle} listID={listID} trigger={trigger}/>
                </div>
                <div className="card-body">
                    <ReadTask data={allTask} updateData={updateData} listID={listID} trigger={trigger}/>
                </div>
                <div className="card-footer">
                    <div className="float-right">
                        <DeleteList listTitle={listTitle} listID={listID} trigger={trigger} />
                        {' '}
                        <AddTask allTask={allTask} listID={listID} trigger={trigger}/>
                    </div>
                </div>
            </div>
            <br/>
        </div>
    )
}

export default ListCard; 