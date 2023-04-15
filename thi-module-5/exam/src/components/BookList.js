import { useEffect, useState } from 'react'
import * as bookService from '../service/bookService'
import * as bookTypeService from '../service/bookTypeService'
import { NavLink } from 'react-router-dom'
import { Field, Form, Formik } from 'formik'
import ReactPaginate from 'react-paginate'
export default function BookList() {
    const [showBookList, setShowBookList] = useState([])
    const [showBookTypeList, setShowBookTypeList] = useState([])
    const [pageCount, setPageCount] = useState(0)
    let [count, setCount] = useState(1)
    const [currentPage, setCurrentPage] = useState(0)
    const [name, setName] = useState('');
    const [bookTypeName, setBookTypeName] = useState('');
    const [deleteId, setDeleteId] = useState(0)
    const [deleteName, setDeleteName] = useState('')
    const showList = async () => {
        const rs = await bookService.findByName(name, bookTypeName)
        setShowBookList(rs.data.content)
        setPageCount(rs.data.totalPages)
    }
    const showBookType = async () => {
        const rs = await bookTypeService.findAll()
        setShowBookTypeList(rs.data)
    }
    useEffect(() => {
        showList()
        showBookType()
    }, [])
    const handlePageClick = async (page) => {
        setCurrentPage(page.selected)
        const rs = await bookService.findByName(name, bookTypeName, page.selected)
        setShowBookList(rs.data.content)
        setCount(Math.ceil(rs.data.size * page.selected + 1))
    }
    const getId = (id, name) => {
        setDeleteId(id)
        setDeleteName(name)
    }

    const handleDelete = async (id) => {
        await bookService.remove(id)
        alert("Xóa thành công")
        showList()
    }
    return (
        <>
            <h2 className='text-center'>Danh sách tất cả các sách</h2>
            <div className='row mx-0'>
                <div className='col-6'>
                    <NavLink to='/create' className='btn btn-dark'>Thêm sách mới</NavLink>
                </div>
                <Formik initialValues={{
                    name: '',
                    bookType: ''
                }}
                    onSubmit={(value) => {
                        const showList = async () => {
                            console.log(value.page);
                            const rs = await bookService.findByName(value.name, value.bookType)
                            if (rs.data.content == '') {
                                document.getElementById('nameSearch').innerHTML = 'Không tìm thấy tên ' + value.name
                            } else {
                                document.getElementById('nameSearch').innerHTML = ''
                            }
                            setCurrentPage(rs.data.number)
                            setBookTypeName(value.bookType)
                            setName(value.name)
                            setPageCount(rs.data.totalPages)
                            setShowBookList(rs.data.content)
                            setCount(Math.ceil(rs.data.size * rs.data.number + 1))
                        }
                        showList()
                    }}
                >
                    <Form className='col-6'>
                        <div className="form-group">
                            <Field type="text"
                                className="form-control float-start w-50" name="name" placeholder="Tìm kiếm..." />
                        </div>
                        <Field as='select' name="bookType" id="bookType" className='' >
                            <option value='' >--Thể loại--</option>
                            {
                                showBookTypeList.map((bookType, index) => (
                                        <option key={index} value={bookType.id} >
                                            {bookType.name}
                                        </option>
                                ))

                            }

                        </Field>
                        <div>
                            <button type="submit float-end" className="btn btn-primary">Tìm kiếm</button>
                        </div>
                    </Form>
                </Formik>
                {   
                    showBookList != '' &&
                    <>
                    <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>STT</th>
                            <th>Mã sách</th>
                            <th>Tên sách</th>
                            <th>Thể loại</th>
                            <th>Ngày nhập sách</th>
                            <th>Số lượng</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            showBookList.map((book, index) => (
                                <tr key={index}>
                                    <td scope="row">{count++}</td>
                                    <td>{book.code}</td>
                                    <td>{book.name}</td>
                                    <td>{book.bookType.name}</td>
                                    <td>{book.date}</td>
                                    <td>{book.quantity}</td>
                                    <td>
                                        <NavLink className={'btn btn-primary'} to={`/edit/${book.id}`}>Chỉnh sửa</NavLink>
                                    </td>
                                    <td>
                                        <button type="button" className="btn btn-danger" onClick={() => getId(book.id, book.name)} data-bs-toggle="modal" data-bs-target="#exampleModal">
                                            Xóa
                                        </button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
                <div className=' d-flex justify-content-center'>
                <ReactPaginate 
                    previousLabel="Trước"
                    nextLabel="Sau"
                    pageCount={pageCount}
                    onPageChange={handlePageClick}
                    containerClassName='pagination'
                    previousClassName='page-item'
                    previousLinkClassName='page-link'
                    nextClassName= 'page-item'
                    nextLinkClassName='page-link'
                    pageClassName='page-item'
                    pageLinkClassName='page-link'
                    activeClassName='active'
                    activeLinkClassName='page-link'
                    forcePage={currentPage}
                />
                </div>
                
                </>
                }
                <h2 id='nameSearch' className='text-danger text-center'></h2>
            </div>
            <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            Bạn có chắc chắn muốn xóa <span className='text-danger'>{deleteName}</span>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Hủy</button>
                            <button type="button" data-bs-dismiss="modal" onClick={() => handleDelete(deleteId)} className="btn btn-primary">Xác nhận</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}