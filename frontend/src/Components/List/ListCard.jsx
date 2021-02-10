const ListCard = ({id,title}) => {
    return(
        <div className="col-xl-4">
            <div className="card">
                <div className="card-header teal">
                    <h6 className="col-md-10 text-white title">{title}</h6>
                    <span>&#8942;</span>
                </div>
                <div className="card-body">
                </div>
                <div className="card-footer">
                </div>
            </div>
            <br/>
        </div>
    )
}

export default ListCard; 