
import './navbar.css';

const Navbar = () => {

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