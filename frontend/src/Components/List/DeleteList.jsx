import axios from 'axios';
import {LIST_URL} from '../../CONSTS.json';
const DeleteList = ({id}) => {

    const remove = () => {
        axios.delete(`${LIST_URL}/delete/${id}`).then(
            alert("successfully removed")
        );
    }

    return(
        <button className="btn btn-outline-danger" onClick={remove}> Delete List</button>
    );
}

export default DeleteList; 