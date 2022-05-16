import React from 'react';
import { BrowserRouter as Router,Routes,Route,Link } from 'react-router-dom';
import AddNewNote from "../pages/AddNewNote";
import AllNotes from "../pages/AllNotes";
import EditNote from "../pages/EditNote"
function Navbar() {
    return (
        <Router>
            <section className="navigation">
                <div className="nav-container">
                    <div className="brand">
                        <a href="#!">Note</a>
                    </div>
                    <nav>
                        <div className="nav-mobile"><a id="navbar-toggle" href="#!"><span></span></a></div>
                        <ul className="nav-list">
                            <li>
                                <Link to="/" className="navbar-link"> All Notes </Link>
                            </li>
                            <li>
                                <Link to="/add-new-note" className="navbar-link"> New Note </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </section>
            <Routes>
                <Route path="/" exact element={<AllNotes/>} />
                <Route path="/add-new-note" element={<AddNewNote/>} />
                <Route path="/edit-note" element={<EditNote/>} />

            </Routes>
        </Router>
    );

}

export default Navbar;
