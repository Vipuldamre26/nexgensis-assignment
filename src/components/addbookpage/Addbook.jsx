import React, { useContext, useState } from 'react';
import './addbook.css';
import { DataContext } from '../UserContext';
import { useNavigate } from 'react-router-dom';

const Addbook = () => {


    const [book, setBook] = useState({
        number: null,
        title: '',
        releaseDate: '',
        description: '',
        cover: null,
    });
    const { data, setData } = useContext(DataContext);
    const navigate = useNavigate();
    // console.log(data);

    // **********************************************************************

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setBook({
            ...book,
            [name]: value,
        });
        // console.log(name, value);

    }


    // **********************************************************************


    const handleSubmit = (e) => {
        e.preventDefault();

        const newBook = {
            ...book,
            number: data.length + 1,
        };

        setData([...data, newBook]);
        navigate('/');

    }


    // **********************************************************************



    return (
        <div className='addbook'>
            <h1 style={{textAlign: 'center', margin: '1rem'}}>Add Book</h1>
            <div className="addbook-main">
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="title">Title:</label>
                        <input
                            type="text"
                            id="title"
                            name="title"
                            value={book.title}
                            onChange={handleInputChange}
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="releaseDate">releaseDate:</label>
                        <input
                            type="text"
                            id="releaseDate"
                            name="releaseDate"
                            value={book.releaseDate}
                            onChange={handleInputChange}
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="description">Description:</label>
                        <textarea
                            id="description"
                            name="description"
                            value={book.description}
                            onChange={handleInputChange}
                            required
                        />
                    </div>

                    <button type="submit">Add Book</button>
                </form>
            </div>
        </div>
    )
}

export default Addbook;