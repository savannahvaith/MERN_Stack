import axios from 'axios';
import { LIST_URL } from '../../CONSTS.json';
const DeleteList = ({ listID, trigger, listTitle }) => {

    const remove = () => {
        axios.delete(`${LIST_URL}/delete/${listID}`)
        .then(() => {
            trigger(`${listTitle} List Removed!`);
            }
        );
    }

    return (
        <button className="btn btn-outline-danger" onClick={remove}> Delete List</button>
    );
}

export default DeleteList; 