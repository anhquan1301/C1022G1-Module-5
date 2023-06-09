import { ErrorMessage, Field, Form, Formik } from 'formik'
import * as bookService from '../service/bookService'
import * as bookTypeService from '../service/bookTypeService'
import * as Yup from 'yup'
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

export default function BookCreate() {
    const [showBookTypeList, setShowBookTypeList] = useState()
    const showBookType = async () => {
        const rs = await bookTypeService.findAll()
        setShowBookTypeList(rs.data)
    }
    const navigate = useNavigate()
    useEffect(() => {
        showBookType()
    }, [])

    if (!showBookTypeList) {
        return null
    }
    return (
        <>
            <div className='row mx-0 d-flex justify-content-center'>
                <div className='col-3'>
                    <h2 className='text-center fw-bold'>Thêm sách mới</h2>
                    <Formik
                        initialValues={{
                            code: '',
                            name: '',
                            bookTypeDTO: showBookTypeList[0]?.id,
                            date: '',
                            quantity: ''
                        }}
                        // validationSchema={Yup.object({
                        //     code:Yup.string().required('Không được bỏ trống').matches(/^[B][O][-][0-9]{4}$/,'Nhập đúng định dạng'),
                        //     name:Yup.string().required('Không được bỏ trống').max(100,'Không được quá 100 kí tự'),
                        //     date:Yup.string().required('Không được bỏ trống'),
                        //     quantity:Yup.number().required('Không được bỏ trống').min(1,'Số lượng phải lớn hơn 0')
                        // })}
                        onSubmit={(value) => {
                            const create = async () => {
                                await bookService.save({
                                    ...value,
                                    bookTypeDTO: {
                                        id: +value.bookTypeDTO
                                    }
                                }).then((res) => {
                                    console.log(res);
                                    alert("Thêm mới thành công")
                                    navigate('/')
                                }).catch((err) => {
                                    // console.log(err.response.data);
                                    const errors = err.response.data
                                        Object.keys(errors).filter((key) => {
                                            document.getElementById(`${key}Msg`).innerText = errors[key]
                                            if(!Object.keys(errors).includes('code')){
                                                document.getElementById(`codeMsg`).innerText = ''
                                            }
                                            if(!Object.keys(errors).includes('name')){
                                                document.getElementById(`nameMsg`).innerText = ''
                                            }
                                            if(!Object.keys(errors).includes('date')){
                                                document.getElementById(`dateMsg`).innerText = ''
                                            }
                                            if(!Object.keys(errors).includes('quantity')){
                                                document.getElementById(`quantityMsg`).innerText = ''
                                            }
                                        })
                                })
                            }
                            create()
                        }}
                    >
                        <Form>
                            <div className="form-group">
                                <label htmlFor="code">Mã sách</label>
                                <Field type="text"
                                    className="form-control" name="code" id="code" placeholder="" />
                            </div>
                            <span className='text-danger' id='codeMsg'></span>
                            {/* <ErrorMessage component='span' name="code" className='text-danger'/> */}

                            <div className="form-group">
                                <label htmlFor="name">Tên sách</label>
                                <Field type="text"
                                    className="form-control" name="name" id="name" placeholder="" />
                            </div>
                            <span className='text-danger' id='nameMsg'></span>
                            {/* <ErrorMessage component='span' name="name" className='text-danger'/> */}

                            <div className="form-group">
                                <label htmlFor="bookType">Thể loại</label>
                                <Field as='select' name="bookTypeDTO" id="bookType" className='form-select' >
                                    {
                                        showBookTypeList.map((bookType, index) => (
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
                            <span className='text-danger' id='dateMsg'></span>
                            {/* <ErrorMessage component='span' name="date" className='text-danger'/> */}
                            <div className="form-group">
                                <label htmlFor="quantity">Số lượng</label>
                                <Field type="text"
                                    className="form-control" name="quantity" id="quantity" placeholder="" />
                            </div>
                            <span className='text-danger' id='quantityMsg'></span>
                            {/* <ErrorMessage component='span' name="quantity" className='text-danger'/> */}
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