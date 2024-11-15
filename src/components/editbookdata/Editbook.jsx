import { useContext, useState, useEffect } from 'react';
import './editbook.css';
import { DataContext } from '../UserContext';
import { useNavigate, useParams } from 'react-router-dom';

const Editbook = () => {


    const { data, setData } = useContext(DataContext);
    const { id } = useParams();
    const [book, setBook] = useState({
        number: null,
        title: '',
        releaseDate: '',
        description: '',
        cover: null,
    });
    const navigate = useNavigate();
    // console.log(data);


    // **********************************************************************


    useEffect(() => {
        const getBookData = () => {

            const bookData = data.find((item) => item.number === Number(id));

            if (bookData) {
                setBook({
                    number: bookData.number,
                    title: bookData.title,
                    releaseDate: bookData.releaseDate,
                    description: bookData.description,
                    cover: bookData.cover
                });
            }
        };
        getBookData();
    }, []);

    // **********************************************************************



    const handleInput = (e) => {
        const { name, value } = e.target;
        setBook({
            ...book,
            [name]: value,
        });
        // console.log(name, value);

    }

    // **********************************************************************


    const handleEdit = (e) => {
        e.preventDefault();
        const newBookData = data.filter((item) => item.number !== Number(id));
        // console.log(newBookData);
        const allData = [...newBookData, book];
        allData.sort((item1, item2) => item1.number - item2.number);
        // console.log(allData);



        setData(allData);

        navigate('/');

    }

    // **********************************************************************



    return (
        <div className='addbook'>
            <h1 style={{ textAlign: 'center', margin: '1rem' }}>Edit Book</h1>
            <div className="addbook-main">
                <form onSubmit={handleEdit}>
                    <div>
                        <label htmlFor="title">Title:</label>
                        <input
                            type="text"
                            id="title"
                            name="title"
                            value={book.title}
                            onChange={handleInput}
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
                            onChange={handleInput}
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="description">Description:</label>
                        <textarea
                            id="description"
                            name="description"
                            value={book.description}
                            onChange={handleInput}
                            required
                        />
                    </div>

                    <button type="submit">Add Book</button>
                </form>
            </div>
        </div>
    )
}

export default Editbook;