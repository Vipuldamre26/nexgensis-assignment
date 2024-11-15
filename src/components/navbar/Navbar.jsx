
import { useNavigate } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {

    const navigate = useNavigate();

    return (
        <div className="navbar">
            <div className="logo">
                FindMyBook
            </div>
            <div className="inputField">
                <input type="text" placeholder='enter book name' required />
                <button>Search</button>
                <button className='btn' onClick={() => navigate('/addbook')}>Add Book</button>
            </div>


        </div>
    )
}


export default Navbar;