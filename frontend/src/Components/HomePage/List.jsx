import axios from 'axios';
import { useState, useEffect } from 'react';
import { LIST_URL } from '../../CONSTS.json';
import ListCard from '../List/ListCard';

const List = () => {
    const [todoList, setTodoList] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);


    useEffect(async () => {
        const data = axios.get(`${LIST_URL}/getAll`);
        await data.then(res => {
            setLoading(false);
            setTodoList(res.data);
        }).catch(err => {
            setLoading(false);
            setError(err);
        });
    }, []);

    if (loading) {
        return <p>Loading</p>
    } else if (error) {
        return <p>{error}</p>
    }
    return (
        <div className="row">
            <br/>
            {todoList.map((list) => (
                <ListCard key={list._id} id={list._id} title={list.title} />
            ))}
        </div>
    )

}
export default List; 