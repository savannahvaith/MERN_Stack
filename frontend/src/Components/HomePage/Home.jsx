import { useState } from 'react';
import SideBar from "./SideBar";
import List from "./List";

const Home = () => {

    return (
        <>
            <div className="row">
                <div className="col-md-2">
                    <SideBar/>
                </div>
                <div className="col-md-10">
                    <List/>
                </div>
            </div>
        </>
    );
}

export default Home;