import { ErrorMessage, Field, Form, Formik } from 'formik'
import * as bookService from '../service/bookService'
import * as bookTypeService from '../service/bookTypeService'
import * as Yup from 'yup'
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { useNavigate, useParams } from 'react-router-dom'

export default function BookEdit(){
    const [showBookTypeList, setShowBookTypeList] = useState()
    const [detail,setDetail] = useState()
    const params = useParams()
    const navigate = useNavigate()
    const showBookType = async () => {
        const rs = await bookTypeService.findAll()
        setShowBookTypeList(rs.data)
    }

    const getBooks = async () => {
        const rs = await bookService.findById(params.id)
        setDetail(rs.data)
    }
    
    useEffect(() => {
        getBooks()
    }, [params.id])

    useEffect(() => {
        showBookType()
    }, [])

    if(!showBookTypeList){
        return null
    }
    if(!detail){
        return null
    }
    console.log(detail);
    return(
        <>
            <div className='row mx-0 d-flex justify-content-center'>
                <div className='col-3'>
                    <h2 className='text-center fw-bold'>Chỉnh sửa sách</h2>
                    <Formik 
                    initialValues={{
                        id:detail?.id,
                        code:detail?.code,
                        name:detail?.name,
                        bookTypeDTO:detail?.bookType.id,
                        date:detail?.date,
                        quantity:detail?.quantity
                    }}
                    validationSchema={Yup.object({
                        code:Yup.string().required('Không được bỏ trống').matches(/^[B][O][-][0-9]{4}$/,'Nhập đúng định dạng'),
                        name:Yup.string().required('Không được bỏ trống').max(100,'Không được quá 100 kí tự'),
                        date:Yup.string().required('Không được bỏ trống'),
                        quantity:Yup.number().required('Không được bỏ trống').min(1,'Số lượng phải lớn hơn 0')
                    })}
                    onSubmit={(value)=>{
                        const edit = async()=>{
                            await bookService.edit({
                                ...value,
                                bookTypeDTO: {
                                    id : +value.bookTypeDTO
                                } 
                            })
                            alert("Chỉnh sửa thành công")
                            navigate('/')
                        }
                        edit()
                    }}
                    >
                    <Form>
                    <div className="form-group">
                      <label htmlFor="code">Mã sách</label>
                      <Field type="text"
                        className="form-control" name="code" id="code" placeholder="" />
                    </div>
                    <ErrorMessage component='span' name="code" className='text-danger'/>

                    <div className="form-group">
                      <label htmlFor="name">Tên sách</label>
                      <Field type="text"
                        className="form-control" name="name" id="name" placeholder="" />
                    </div>
                    <ErrorMessage component='span' name="name" className='text-danger'/>

                    <div className="form-group">
                      <label htmlFor="bookType">Thể loại</label>
                      <Field as='select' name="bookTypeDTO" id="bookType" className='form-select' >
                        {
                            showBookTypeList.map((bookType,index)=>(
                                <option key={index} value={bookType.id}>
                                    {bookType.name}
                                </option>
                            ))
                        }
                       
                      </Field>
                    </div>
                    <div className="form-group">
                      <label htmlFor="">Ngày nhập sách</label>
                      <Field type="date"
                        className="form-control" name="date" id="date" placeholder="" />

                    </div>
                    <ErrorMessage component='span' name="date" className='text-danger'/>
                    <div className="form-group">
                      <label htmlFor="quantity">Số lượng</label>
                      <Field type="text"
                        className="form-control" name="quantity" id="quantity" placeholder="" />
                    </div>
                    <ErrorMessage component='span' name="quantity" className='text-danger'/>
                    <div>
                    <button type="submit" className="btn btn-primary">Xác nhận</button>
                    </div>
                        </Form>
                    </Formik>
                </div>
            </div>
        </>
    )
}