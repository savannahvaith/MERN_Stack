const Navigation = () => {

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark justify-content-between">
            <a className="navbar-brand" href="#">Todo List</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navigationBar">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navigationBar">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="#">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="https://github.com/savannahvaith/">Github</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
export default Navigation;