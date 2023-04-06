import { useEffect, useState } from 'react'
import * as bookService from '../../service/exercise2/bookService'
import 'bootstrap/dist/css/bootstrap.css';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { NavLink, useNavigate } from 'react-router-dom'
export default function BookList() {
    const navigate = useNavigate()
    const [bookList, setBookList] = useState([])
    useEffect(() => {
        const fetchApi = async () => {
            const rs = await bookService.findAll()
            setBookList(rs)
        }
        fetchApi()
    }, [])
    let count = 1;
    const handleDelete = async(id)=>{
        await bookService.remove(id)
        toast('Successfuly')
    }
    const handleUpdate = (id) => {
        navigate(`/update/${id}`)
    }
    return (
        <>
            <h2 className='fw-bold'>Library</h2>
            <NavLink to='/book-create'>Create</NavLink>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>STT</th>
                        <th>Title</th>
                        <th>Quantity</th>
                        <th>Actions</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        bookList.map((books) => (
                            <tr key={books.id}>
                                <td scope="row">{count++}</td>
                                <td>{books.title}</td>
                                <td>{books.quantity}</td>
                                <button type='button' 
                                className='btn btn-primary' 
                                onClick={() => handleUpdate(books.id)} >Edit</button>
                                <button
                                    type="button"
                                    className="btn btn-danger"
                                    data-bs-toggle="modal"
                                    data-bs-target="#exampleModal"
                                    onClick={() => handleDelete(books.id)}
                                >Delete</button>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </>
    )
}