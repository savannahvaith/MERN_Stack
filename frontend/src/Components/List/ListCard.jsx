import DeleteList from "./DeleteList";
import EditList from "./EditList";

const ListCard = ({id,title, trigger}) => {
    return(
        <div className="col-xl-4">
            <div className="card">
                <div className="card-header teal">
                    <h6 className="col-md-10 text-white title">{title}</h6>
                    <EditList title={title} id={id}/>
                </div>
                <div className="card-body" style={{height: "400px"}}>
                </div>
                <div className="card-footer">
                    <div className="float-right">
                        <DeleteList id={id} trigger={trigger} title={title}/>
                    {' '}
                    <button className="btn btn-outline-success">Add Task</button>
                    </div>
                </div>
            </div>
            <br/>
        </div>
    )
}

export default ListCard; 