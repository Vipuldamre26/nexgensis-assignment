import { NavLink } from 'react-router-dom';
import './navbar.css';
import { useState } from 'react';

const Navbar = () => {

    const [mobile, setMobile] = useState(false);

    const mobileMode = () => {
        setMobile(true);
    }


    return (
        <div className="navbar">
            <div className="logo">
                FindMyBook
            </div>
            <div className="inputField">
                <input type="text" placeholder='enter book name' required />
                <button>Search</button>
            </div>


        </div>
    )
}


export default Navbar;