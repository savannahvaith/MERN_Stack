import { useState } from 'react'
import SideBar from "./SideBar";
import List from "../List/List";

const Home = () => {
    const [msg,setMsg] = useState('');

    const trigger = (m) => {
        setMsg(m);
    }

    return (
        <>
            <div className="row">
                <div className="col-md-2">
                    <SideBar trigger={trigger}/>
                </div>
                <div className="col-md-10">
                    <List msg={msg}/>
                </div>
            </div>
        </>
    );
}

export default Home;