import { useEffect, useState } from 'react'
import * as customerService from '../../service/customer/customerService'
import * as customerTypeService from '../../service/customer/customerTypeService'
import { Field, Form, Formik } from 'formik';
import ReactPaginate from 'react-paginate';
import { NavLink } from 'react-router-dom';

export default function CustomerList() {
    const [customerList, setCustomerList] = useState([])

    const [customerTypeList, setCustomerTypeList] = useState([])

    const [pageCount, setPageCount] = useState()
    const [deleteId,setDeleteId] = useState(0)
    const [deleteName,setDeleteName] = useState('')
    const [getName, setGetName] = useState('')
    let [count, setCount] = useState(1)
    const showCustomerList = async () => {
        const rs = await customerService.findAll('')
        setCustomerList(rs.data)
        let total = rs.headers['x-total-count']
        setPageCount(Math.ceil(total / 3))
    }
    const showCustomerTypeList = async () => {
        const rs = await customerTypeService.findAll()
        setCustomerTypeList(rs.data)
    }
    useEffect(() => {
        showCustomerList()
        showCustomerTypeList()
    }, [])

    const handlePageClick = async (page) => {
        let currentPage = page.selected + 1
        const rs = await customerService.findAll(getName, currentPage)
        setCustomerList(rs.data)
        setCount(currentPage * 3 - 2)

    }
    const getId = (id,name)=>{
        setDeleteId(id)
        setDeleteName(name)
    }
    const handleDelete = async(id)=>{
        await customerService.remove(id)
        alert('Xóa thành công')
        showCustomerList()
    }
    return (
        <>
            <h2 className='text-center'>Danh sách khách hàng</h2>
            <div className='row mx-0'>
            <div className='col-6'>
            
            <NavLink className={'btn btn-dark'} to={'/create'}>Thêm mới khách hàng</NavLink>
            </div>
            <div className='col-6'>
            <Formik
                initialValues={{
                    name: ''

                }}
                onSubmit={(value) => {
                    const showCustomerList = async () => {
                        const rs = await customerService.findAll(value.name)
                        setCustomerList(rs.data)
                        setGetName(value.name)
                    }
                    showCustomerList()
                }}
            >
                <Form>
                <div><button type="submit" className="btn btn-primary float-end">Tìm kiếm</button></div>
                    <div className="form-group float-end w-50">
                        <Field type="text"
                            className="form-control" name="name" placeholder="tìm kiếm..." />
                        
                    </div>
                    
                </Form>
            </Formik>
            </div>
            </div>
            <table className="table">
                <thead>
                    <tr>
                        <th>STT</th>
                        <th>Tên khách hàng</th>
                        <th>Tuổi</th>
                        <th>Email</th>
                        <th>Loại khách</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        customerList.map((customer, index) => (
                            <tr key={index}>
                                <td scope="row">{count++}</td>
                                <td>{customer.name}</td>
                                <td>{customer.age}</td>
                                <td>{customer.email}</td>
                                <td>
                                    {
                                        customerTypeList.filter((ct) => (
                                            ct.id === customer.customerType
                                        ))[0]?.name
                                    }
                                </td>
                                <td>
                                    <NavLink className={'btn btn-primary'} to={`/edit/${customer.id}`}>Chỉnh sửa    </NavLink>
                                </td>
                                <td>
                                    <button type="button" onClick={()=>getId(customer.id,customer.name)} className="btn btn-danger" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                        Xóa
                                    </button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
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
            />
            <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            Bạn có chắc chắn muốn xóa <span className='text-danger'>{deleteName}</span> không?
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Hủy</button>
                            <button type="button" onClick={()=>handleDelete(deleteId)} className="btn btn-primary" data-bs-dismiss="modal">Xác nhận</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}