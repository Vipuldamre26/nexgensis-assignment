import './homepage.css';
import { useState, useContext } from 'react';
import { MdDelete } from "react-icons/md";
import { DataContext } from '../UserContext';
import { useNavigate } from 'react-router-dom';


import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';

const Homepage = () => {

    const [open, setOpen] = useState(false);
    const [selectedBook, setSelectedBook] = useState(null);
    const { data, setData } = useContext(DataContext);
    const navigate = useNavigate();
    // console.log(data);

    // *********************************************************************


    // deleting the book
    const deleteBook = (number) => {
        setSelectedBook(number);
        handleClickOpen();
    }

    // *********************************************************************

    // open a dialog for deleting book
    const handleClickOpen = () => {
        setOpen(true);
    };

    // *********************************************************************


    // close a dialog 
    const handleClose = () => {
        setSelectedBook(null);
        setOpen(false);
    };

    // *********************************************************************


    // deleting a book 
    const handleDelete = (number) => {
        const newBooksData = data.filter((item) => item.number !== selectedBook);
        // console.log(newBooksData);
        setData(newBooksData);
        setOpen(false);
    }


    // *********************************************************************


    return (
        <div className='homepage'>
            <div className="cards">
                {
                    data.length > 0 ? (
                        data.map((item) => {
                            return (
                                <div className="card" key={item.number}  >
                                    <img src={item.cover} alt="book Img" />
                                    <h4>Book Title: {item.title}</h4>
                                    <p>Release Data: {item.releaseDate}</p>
                                    <div className="btn">
                                        <button onClick={() => navigate(`/book/${item.number}`)}>Read...</button>
                                        <MdDelete onClick={() => deleteBook(item.number)} className='delete' />
                                    </div>
                                </div>
                            )
                        })
                    ) : (
                        <div className="loading"></div>
                    )
                }
            </div>



            <Dialog
                open={open}
                keepMounted
                onClose={handleClose}
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle>{"Are you sure you want to delete this Book"}</DialogTitle>

                <DialogActions>
                    <Button onClick={handleClose}>No</Button>
                    <Button onClick={handleDelete}>Yes</Button>
                </DialogActions>
            </Dialog>

        </div>
    )
}

export default Homepage;