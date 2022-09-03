import './Top-menu.css';

function App() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light h-128 bg-[#839278] bg-99">
            <a className="navbar-brand indent-255 text-white " >SWO TAX</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse ml-465    " id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item ">
                        <a className="nav-link text-white " href="#">Contact</a>
                    </li>
                    <li className="nav-item indent-60 ">
                        <a className="nav-link text-white" href="#">Application</a>
                    </li>
                    <li className="nav-item indent-60 ">
                        <a className="nav-link text-white" href="#">License</a>
                    </li>
                    <li className="nav-item indent-60 ">
                        <a className="nav-link text-white" href="#">Administrative</a>
                    </li>
                    <li className="nav-item indent-60 ">
                        <a className="nav-link text-white" href="#">Reports</a>
                    </li>
                </ul>
            </div>

        </nav>

    );
}

export default App;
