import { useEffect, useState } from 'react'
import * as customerService from '../../service/customer/customerService'
import * as customerTypeService from '../../service/customer/customerTypeService'
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { useNavigate, useParams } from 'react-router';
import * as Yup from 'yup'
export default function CustomerEdit() {

    const [customerTypeList, setCustomerTypeList] = useState([])
    const showCustomerTypeList = async () => {
        const rs = await customerTypeService.findAll()
        setCustomerTypeList(rs.data)
    }
    const navigate = useNavigate()
    const params = useParams()
    const [detail,setDetail] = useState()

    useEffect(()=>{
        const showDetail = async () => {
            const rs = await customerService.findById(params.id)
            setDetail(rs.data)
        }
        showDetail()
    },[params.id])
    useEffect(() => {
        showCustomerTypeList()
    }, [])

    if(!detail){
        return null
    }
    console.log(detail);
    return (
        <>
            <Formik 
            initialValues={{
                id:detail?.id,
                name:detail?.name,
                age:detail?.age,
                email:detail?.email,
                customerType: detail?.customerType
            }}
            validationSchema={Yup.object({
                name:Yup.string().required('Không được bỏ trống'),
                age:Yup.string().required('Không được bỏ trống'),
                email:Yup.string().required('Không được bỏ trống').email('Nhập đúng định dạng Email VD: abc@gmail.com'),
            })}
            onSubmit={(value)=>{
                console.log();
                const edit = async()=>{
                    console.log(value);
                    await customerService.edit(
                        { ...value,
                    customerType: +value.customerType,
                    
                    }
                    )
                    alert('Thành công')
                    navigate('/')
                }
                edit()
            }}
            >
                <Form>
                    <div className='row d-flex justify-content-center'>
                    <div className=' col-3 '>
                        <h2>Thêm mới khách hàng</h2>
                        <div className="form-group">
                            <label htmlFor="name">Tên khách hàng</label>
                            <Field type="text"
                                className="form-control" name="name" placeholder="" />
                        </div>
                        <ErrorMessage component={'span'} className='text-danger' name='name'/>
                        <div className="form-group">
                            <label htmlFor="age">Tuổi</label>
                            <Field type="text"
                                className="form-control" name="age" placeholder="" />
                        </div>
                        <ErrorMessage component={'span'} className='text-danger' name='age'/>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <Field type="text"
                                className="form-control" name="email" placeholder="" />
                        </div>
                        <ErrorMessage component={'span'} className='text-danger' name='email'/>
                        <div className="form-group">
                            <label htmlFor="customerType">Loại khách</label>
                            <Field as='select' name="customerType" id='customerType' className="form-select" >
                                {
                                    customerTypeList.map((ct, index) => (
                                        <option key={index} value={ct.id}>
                                            {ct.name}
                                        </option>
                                    ))
                                }
                            </Field>
                        </div>
                        <div>
                        <button type="submit" className="btn btn-primary">Xác nhận</button>
                        </div>
                    </div>
                    </div>
                </Form>
            </Formik>
        </>
    )
}