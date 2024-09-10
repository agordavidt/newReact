import logo from '../assets/images/logo.png';


function Navbar(){
    return (
        <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-secondary border-bottom border-white">
            <div className="container-fluid">
                <a className="navbar-brand d-flex align-items-center" href="/index.html">
                <img src={ logo } alt="React Jobs" className="d-inline-block align-top"  />
                <span className="ms-2 d-none d-md-inline fs-3">Tom Hunt</span>
                </a>
                <div className="collapse navbar-collapse justify-content-end">
                <ul className="navbar-nav">
                    <li className="nav-item">
                    <a className="nav-link text-white bg-black rounded px-3 py-2" href="/index.html">Home</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link text-white rounded px-3 py-2" href="/jobs.html">Jobs</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link text-white rounded px-3 py-2" href="/add-job.html">Add Job</a>
                    </li>
                </ul>
                </div>
            </div>
            </nav>

        </>
    );
}

export default Navbar;