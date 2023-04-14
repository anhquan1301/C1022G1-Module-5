import { useEffect, useState } from 'react'
import * as productService from '../../service/product/productService'
import * as productTypeService from '../../service/product/productTypeService'
import 'bootstrap/dist/css/bootstrap.css'
import { NavLink } from 'react-router-dom'
import ModalDelete from './ModalDelete'
import { Field, Formik,Form } from 'formik'
import ReactPaginate from 'react-paginate'
export default function ProductsList() {
    const [showProductList, setShowProductList] = useState([])
    const [productTypeList, setProductTypeList] = useState([])
    const [deleteId, setDeleteId] = useState(0)
    const [deleteName, setDeleteName] = useState('')
    const [pageCount,setPageCount] = useState(0)
    const [getNameSearch,setGetNameSearch] = useState('')
    let [count, setCount] = useState(1)
    const findAll = async () => {
        const rs = await productService.findAll('')
        setShowProductList(rs.data.content)
        setPageCount(rs.data.totalPages)
        console.log(rs);
    }
    
    const getProductType = async () => {
        const rs = await productTypeService.findAll()
        setProductTypeList(rs.data.content)
        console.log(rs.data.content);
    }

    const getProps = (id, name) => {
        setDeleteId(id)
        setDeleteName(name)
    }
    useEffect(() => {
        findAll()
        getProductType()
    }, [])
    const handlePageClick = async(page)=>{
        let currentPage = page.selected
        const rs = await productService.findAll(getNameSearch,currentPage)
        setShowProductList(rs.data.content)
        setCount(currentPage*3+1)
    }
    
    return (
        <>
            <h2>Danh sách sản phẩm</h2>
            <NavLink to={'/create'} className="btn btn-dark">Thêm mới sản phẩm</NavLink>
            <Formik initialValues={{
                name: ''
            }}
            onSubmit={(value)=>{
                const findAll = async () => {
                    const rs = await productService.findAll(value.name)
                    setShowProductList(rs.data.content)
                    setGetNameSearch(value.name)
                }
                findAll()
            }}
            >
                <Form>
                    <div className="form-group">
                        <Field type="text"
                            className="form-control" name="name" aria-describedby="helpId" placeholder="tìm kiếm..." />
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                </Form>
            </Formik>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>STT</th>
                        <th>Tên</th>
                        <th>Giá</th>
                        <th>Loại</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        showProductList.map((product, index) => (
                            <tr key={index}>
                                <td scope="row">{count++}</td>
                                <td>{product.name}</td>
                                <td>{product.price}</td>
                                <td>
                                    {   
                                        product.productType.name
                                        // productTypeList.filter((productTypes) => (
                                        //     productTypes.id === product.productType
                                        // ))[0]?.name
                                    }
                                </td>
                                <td>
                                    <NavLink to={`/edit/${product.id}`} className={'btn btn-primary'}>Chỉnh sửa</NavLink>
                                </td>
                                <td>
                                    <button data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => getProps(product.id,product.name)} type="button" className="btn btn-danger" >
                                        Xóa
                                    </button>
                                </td>
                            </tr>
                        ))
                    }

                </tbody>
            </table>
            <ReactPaginate 
            previousLabel='Trước'
            nextLabel='Sau'
            pageCount={pageCount}
            onPageChange={handlePageClick}
            containerClassName='pagination'
            pageClassName='page-item'
            pageLinkClassName='page-link'
            nextClassName='page-item'
            nextLinkClassName='page-link'
            previousClassName='page-item'
            previousLinkClassName='page-link'
            activeClassName='active'
            renderOnZeroPageCount={null}
            />
            <ModalDelete
                id={deleteId}
                name={deleteName}
                getList={
                    () => {findAll()}
            }
            />
        </>
    )
}