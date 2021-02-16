import axios from 'axios';
import { useEffect } from 'react';
import { LIST_URL } from '../../CONSTS.json';
import EditTask from './EditTask';

const ReadTask = ({ data, listID, updateData }) => {

    useEffect(() => {
        axios.get(`${LIST_URL}/get/${listID}`).then(res => updateData(res.data.todo));
    }, [])

    if (data.length == 0) {
        return (<p>De NADA</p>)
    } else {
        return (
            <>
                {data.map((item) => (
                    <div className="row">
                        <>
                            <div className="col-md-10">
                                <p style={ item.completed ? {textDecoration: "line-through"} : {}}>{item.title}</p>
                            </div>
                            <div className="col-md-2">
                                <EditTask taskID={item._id}/>
                            </div>
                        </>

                    </div>
                ))}
            </>
        )

    }
}
export default ReadTask; 