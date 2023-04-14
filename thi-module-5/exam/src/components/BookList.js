import { useEffect, useState } from 'react'
import * as bookService from '../service/bookService'
import * as bookTypeService from '../service/bookTypeService'
import { NavLink } from 'react-router-dom'
import { Field, Form, Formik } from 'formik'
import ReactPaginate from 'react-paginate'
export default function BookList() {
    const [showBookList, setShowBookList] = useState([])
    const [showBookTypeList, setShowBookTypeList] = useState([])
    const [pageCount, setPageCount] = useState()
    let [count, setCount] = useState(1)
    const [deleteId, setDeleteId] = useState()
    const [deleteName, setDeleteName] = useState()
    const showList = async () => {
        const rs = await bookService.findByName('', '')
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
        const rs = await bookService.findByName('', '', page.selected)
        setShowBookList(rs.data.content)
        setCount(Math.ceil(rs.data.size * page.selected + 1))
        console.log(rs.data);
    }
    const getId = (id, name) => {
        setDeleteId(id)
        setDeleteName(name)
    }

    const handleDelete = async(id)=>{
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
                        console.log(value);
                        const showList = async () => {
                            const rs = await bookService.findByName(value.name, value.bookType)
                            console.log(rs.data.content);
                            if (rs.data.content == '') {
                                document.getElementById('nameSearch').innerHTML = 'Không tìm thấy tên ' + value.name
                            } else {
                                document.getElementById('nameSearch').innerHTML = ''
                            }
                            setShowBookList(rs.data.content)
                        }
                        showList()
                    }}
                >
                    <Form className='col-6'>
                        <div class="form-group">
                            <Field type="text"
                                class="form-control float-start w-50" name="name" placeholder="Tìm kiếm..." />
                        </div>
                        <Field as='select' name="bookType" id="bookType" className='' >
                            <option value='' >--Thể loại--</option>
                            {
                                showBookTypeList.map((bookType, index) => (
                                    <>
                                        <option key={index} value={bookType.id} >
                                            {bookType.name}
                                        </option>
                                    </>
                                ))

                            }

                        </Field>
                        <div>
                            <button type="submit float-end" class="btn btn-primary">Tìm kiếm</button>
                        </div>
                    </Form>
                </Formik>
                <table class="table table-striped">
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
                                        <button type="button" class="btn btn-danger" onClick={() => getId(book.id, book.name)} data-bs-toggle="modal" data-bs-target="#exampleModal">
                                            Xóa
                                        </button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
                <h2 id='nameSearch' className='text-danger text-center'></h2>
                <ReactPaginate
                    previousLabel="Trước"
                    nextLabel="Sau"
                    pageCount={pageCount}
                    onPageChange={handlePageClick}
                    containerClassName='pagination'
                    previousClassName='page-item'
                    previousLinkClassName='page-link'
                    nextClassName='page-item'
                    nextLinkClassName='page-link'
                    pageClassName='page-item'
                    pageLinkClassName='page-link'
                    activeClassName='active'
                    activeLinkClassName='page-link'
                />
            </div>
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            Bạn có chắc chắn muốn xóa <span className='text-danger'>{deleteName}</span>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Hủy</button>
                            <button type="button" data-bs-dismiss="modal" onClick={()=>handleDelete(deleteId)} class="btn btn-primary">Xác nhận</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}