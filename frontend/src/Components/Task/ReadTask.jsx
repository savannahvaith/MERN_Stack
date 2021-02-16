import axios from 'axios';
import { useEffect , useState} from 'react';
import { LIST_URL } from '../../CONSTS.json';
import ReadItem from './ReadItem';

const ReadTask = ({ data, listID, updateData, trigger}) => {

    useEffect(() => {
        axios.get(`${LIST_URL}/get/${listID}`).then(res => updateData(res.data.todo));
    }, []); 

    if (data.length == 0) {
        return (<p>De NADA</p>)
    } else {
        return (
            <>
                {data.map((item) => (
                   <ReadItem key={item} data={item} trigger={trigger}/>
                ))}
            </>
        )

    }
}
export default ReadTask; 