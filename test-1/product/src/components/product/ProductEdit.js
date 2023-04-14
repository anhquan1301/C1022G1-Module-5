
import { useEffect, useState } from 'react'
import * as productService from '../../service/product/productService'
import * as productTypeService from '../../service/product/productTypeService'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import { useNavigate, useParams } from 'react-router'
import * as Yup from 'yup'
export default function ProductEdit(){
    let params = useParams()
    let navigate = useNavigate()
    const [productTypeList,setProductTypeList] = useState()
    const [product,setProduct] = useState()
    const getProductType = async()=>{
        const rs = await productTypeService.findAll()
        setProductTypeList(rs.data)
    }
    useEffect(()=>{
        getProductType()
    },[])
    useEffect(()=>{
        const detail = async()=>{
            const rs = await productService.findById(params.id)
            setProduct(rs.data)
        }
        detail()
    },[params.id])
   if(!productTypeList){
    return null
   }
   if(!product){
    return null
   }
    return(
        <>
            <h2>Thêm mới sản phẩm</h2>
            <Formik
            initialValues={{
                id:product?.id,
                name:product?.name,
                price:product?.price,
                productType:  product?.productType.id
            }}
            validationSchema={Yup.object({
                name:Yup.string().required('Không được bỏ trống'),
                price:Yup.string().required('Không được bỏ trống')
            })}
            onSubmit={(value)=>{
                console.log(value);
                const edit = async()=>{
                   await productService.edit(
                    {
                    ...value,
                    productType: +value.productType
                    }
                    )
                   alert('Chỉnh sửa thành công')
                    navigate('/')
                }
                edit()
            }}
            >
                <Form>
                    <div className='col-3'>
                    <Field type="hidden"
                        className="form-control" name="id" id="id" placeholder="" />
                    <div className="form-group">
                      <label htmlFor="name">Tên</label>
                      <Field type="text"
                        className="form-control" name="name" id="name" placeholder="" />
                        
                    </div>
                    <ErrorMessage component='span' className='text-danger' name="name" />

                    <div className="form-group">
                      <label htmlFor="price">Giá</label>
                      <Field type="text"
                        className="form-control" name="price" id="price" placeholder="" />
                    </div>
                    <ErrorMessage component='span' className='text-danger' name="price" />
                    <div className="form-group">
                      <label htmlFor="productType">Loại</label>
                      <Field as="select" name="productType" id="productType" className="form-select">
                        {
                            productTypeList.map((productType)=>(
                                <option value={productType.id} key={productType.id}>
                                    {productType.name}
                                </option>
                            ))
                        }
                      </Field>
                      
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                </Form>

            </Formik>
        </>
    )
}