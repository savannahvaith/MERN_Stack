import axios from 'axios';
import {useState, useEffect} from 'react';
import EditTask from './EditTask';
import {TODO_URL} from '../../CONSTS.json';

const ReadItem = ({data, trigger}) => {
    const [info, setInfo] = useState({});

    useEffect(() => {
        axios.get(`${TODO_URL}/get/${data}`).then(res => setInfo(res.data));
    },[])
    return(
        <div key={data} className="row">
            <div className="col-md-10">
                <p style={info.completed ? { textDecoration: "line-through" } : {}}>{info.title}</p>
            </div>
            <div className="col-md-2">
                <EditTask taskID={info._id} trigger={trigger} />
            </div>
        </div>
    )
}
export default ReadItem;