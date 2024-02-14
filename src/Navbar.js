import Logo1 from "./Logo1.jpg"
export default function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-black text-white">
                    <div className="container-fluid">
                    <div>
                            <img src= {Logo1} width="100" height="100" id="homepageImg" className="rounded-circle" />
                        </div>
                        <a className="navbar-brand mx-md-3" href="#" >Fair Win Games</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="#">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link active" href="#">Services</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link active" href="#">ContactUs</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
        </>
    )
}