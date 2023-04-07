import { useEffect, useState } from 'react'
import * as bookList from '../service/bookService'
import { NavLink, useNavigate } from 'react-router-dom'
import { Field, Form, Formik } from 'formik'
import ModalDelete from './ModalDelete'

export default function BookList() {
    let navigate = useNavigate()
    const [bookLists, setBookList] = useState([])
    const [deleteId, setDeleteId] = useState(0)
    const [deleteName, setDeleteName] = useState("")
    useEffect(() => {
        fetchApi()
    }, [])
    let fetchApi = async () => {
        const rs = await bookList.findAll('')
        setBookList(rs) 
    }
    const handleEdit = (id) => {
        navigate(`/update/${id}`)
    }
    const getIdAndTitle = (id, name) => {
        setDeleteId(id)
        setDeleteName(name)
    }
    let count = 1
    return (
        <>

            <h2>Book List</h2>
            <NavLink to='/create'>
                Create
            </NavLink>
            <Formik initialValues={{
                name: ''
            }}
                onSubmit={(values) => {
                    const fetchApi = async () => {
                        const rs = await bookList.findAll(values.name)
                        console.log(rs)
                        setBookList(rs)
                    }
                    fetchApi()
                }}
            >
                <Form>
                    <div className="form-group">
                        <Field type="text"
                            className="form-control" name="name" id="" aria-describedby="helpId" placeholder="Tìm kiếm" />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </Form>
            </Formik>
            <table className="table">
                <thead>
                    <tr>
                        <th>STT</th>
                        <th>Tilte</th>
                        <th>Quantity</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        bookLists.map((books) => (
                            <tr key={books.id}>
                                <td scope="row">{count++}</td>
                                <td>{books.title}</td>
                                <td>{books.quantity}</td>
                                <td>
                                    <button type='button' onClick={() => handleEdit(books.id)} className='btn btn-primary'>Edit</button>
                                </td>
                                <td>
                                    <button
                                        type="button"
                                        className="btn btn-danger"
                                        data-bs-toggle="modal"
                                        data-bs-target="#exampleModal"
                                        onClick={() => getIdAndTitle(books.id, books.title)}
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>

            <ModalDelete
                id={deleteId}
                name={deleteName}
                getList={
                    () => {
                        console.log('getList')
                        const abc = async () => {
                            const rs = await bookList.findAll('')
                            console.log(rs);
                            setBookList(rs)
                        }
                        abc()
                    }
                }
            />
        </>
    )
}