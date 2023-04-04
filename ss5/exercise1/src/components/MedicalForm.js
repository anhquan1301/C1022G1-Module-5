import { ErrorMessage, Form, Field, Formik } from 'formik'
import * as Yup from 'yup'
import { RotatingLines } from 'react-loader-spinner'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
export default function MedicalForm() {
    return (
        <>
            <Formik initialValues={{
                name: '',
                cmnd: '',
                yearOfBirth: '',
                gender: '',
                national:'',
                company:'',
                working:'',
                isHaveHealthInsuranceCard: false,
                province:'',
                district:'',
                wards:'',
                address:'',
                phone:'',
                email:'',
                textarea:'',
                signOfIllness:[],
                contactWith: []
            }}
                validationSchema={Yup.object({
                    name: Yup.string().required('Không được bỏ trống'),
                    cmnd: Yup.string().required('Không được bỏ trống'),
                    yearOfBirth: Yup.string().required('Không được bỏ trống'),
                    gender: Yup.string().required('Không được bỏ trống'),
                    gender: Yup.string().required('Không được bỏ trống'),
                    national:Yup.string().required('Không được bỏ trống'),
                    company:Yup.string().required('Không được bỏ trống'),
                    working:Yup.string().required('Không được bỏ trống'),
                    isHaveHealthInsuranceCard: Yup.string().required('Không được bỏ trống'),
                    province:Yup.string().required('Không được bỏ trống'),
                    district:Yup.string().required('Không được bỏ trống'),
                    wards:Yup.string().required('Không được bỏ trống'),
                    address:Yup.string().required('Không được bỏ trống'),
                    email: Yup.string().required('Không được bỏ trống').email('Enter the correct email format'),
                    phone: Yup.string().required('Không được bỏ trống').matches('^(0?)(3[2-9]|5[6|8|9]|7[0|6-9]|8[0-6|8|9]|9[0-4|6-9])[0-9]{7}$', 'Enter the correct phone number format'),
                    textarea:Yup.string().required('Không được bỏ trống')
                })}
                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                        setSubmitting(false);
                        toast("Successfully");
                    }, 500)
                }}
            >
                {
                    ({ isSubmitting }) => (
                        <Form>
                            <div className="row px-0">
                                <div className='col-4'></div>

                                <div className='col-4'>
                                    <h2 className='fw-bold'>Khai báo y tế</h2>
                                    <div className="form-group">
                                        <label htmlFor="name" >Họ tên</label>
                                        <Field type="text" className="form-control" name="name" id="name" placeholder="" />
                                        <ErrorMessage name='name' component={'div'} className='text-danger' />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="cmnd" >Số hộ chiếu/CMND</label>
                                        <Field type="text" className="form-control" name="cmnd" id="cmnd" placeholder="" />
                                        <ErrorMessage name='cmnd' component={'div'} className='text-danger' />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="yearOfBirth" >Năm sinh</label>
                                        <Field type="text" className="form-control" name="yearOfBirth" id="yearOfBirth" placeholder="" />
                                        <ErrorMessage name='yearOfBirth' component={'div'} className='text-danger' />
                                    </div>
                                    <div className="form-group">
                                        <span className='me-3' htmlFor="" >Giới tính</span>
                                        <div className="form-check form-check-inline">
                                            <Field
                                                className="form-check-input"
                                                type="radio"
                                                name="gender"
                                                id="rd-1"
                                                value="1"
                                            />
                                            <label className="form-check-label" htmlFor="rd-1">
                                                Nam
                                            </label>
                                        </div>
                                        <div className="form-check form-check-inline">
                                            <Field
                                                className="form-check-input"
                                                type="radio"
                                                name="gender"
                                                id="rd-2"
                                                value="2"
                                            />
                                            <label className="form-check-label" htmlFor="rd-2">
                                                Nữ
                                            </label>
                                        </div>
                                        <ErrorMessage name='yearOfBirth' component={'div'} className='text-danger' />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="national" >Quốc tịch</label>
                                        <Field type="text" className="form-control" name="national" id="national" placeholder="" />
                                        <ErrorMessage name='national' component={'div'} className='text-danger' />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="company" >Công ty làm việc</label>
                                        <Field type="text" className="form-control" name="company" id="company" placeholder="" />
                                        <ErrorMessage name='company' component={'div'} className='text-danger' />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="working" >Bộ phận làm việc</label>
                                        <Field type="text" className="form-control" name="working" id="working" placeholder="" />
                                        <ErrorMessage name='working' component={'div'} className='text-danger' />
                                    </div>
                                    <div className="form-group">
                                        <span className='me-3' htmlFor="isHaveHealthInsuranceCard" >Có thẻ bảo hiểm y tế</span>
                                        <Field
                                            className="form-check-input pt-1"
                                            type="checkbox"
                                            name="isHaveHealthInsuranceCard"
                                            id="isHaveHealthInsuranceCard"

                                        />
                                        <ErrorMessage name='isHaveHealthInsuranceCard' component={'div'} className='text-danger' />
                                    </div>
                                    <h4 className='fw-bold'>Địa chỉ liên lạc tại Việt Nam</h4>
                                    <div className="form-group">
                                        <label htmlFor="province" >Tỉnh thành</label>
                                        <Field type="text" className="form-control" name="province" id="province" placeholder="" />
                                        <ErrorMessage name='province' component={'div'} className='text-danger' />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="district" >Quận/ huyện</label>
                                        <Field type="text" className="form-control" name="district" id="district" placeholder="" />
                                        <ErrorMessage name='district' component={'div'} className='text-danger' />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="wards" >Phường/ xã</label>
                                        <Field type="text" className="form-control" name="wards" id="wards" placeholder="" />
                                        <ErrorMessage name='wards' component={'div'} className='text-danger' />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="address" >Số nhà, phố, tổ dân phố /thôn /đội</label>
                                        <Field type="text" className="form-control" name="address" id="address" placeholder="" />
                                        <ErrorMessage name='address' component={'div'} className='text-danger' />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="phone" >Điện thoại</label>
                                        <Field type="text" className="form-control" name="phone" id="phone" placeholder="" />
                                        <ErrorMessage name='phone' component={'div'} className='text-danger' />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="email" >Email</label>
                                        <Field type="text" className="form-control" name="email" id="email" placeholder="" />
                                        <ErrorMessage name='email' component={'div'} className='text-danger' />
                                    </div>
                                    <div className="form-group">
                                        <h4>Trong vòng 14 ngày anh/chị có đến quốc gia/ vùng lãnh thổ nào (có thể đi qua nhiều quốc gia)</h4>
                                        <Field component='textarea' className="form-control" name="textarea" id="textarea" placeholder="" />
                                        <ErrorMessage name='textarea' component={'div'} className='text-danger' />
                                    </div>
                                    <div className="form-group">
                                        <h4>Trong vòng 14 ngày anh/chị có thấy xuất hiện dấu hiệu nào không?</h4>
                                        <div className="form-check">
                                            <Field
                                                className="form-check-input"
                                                type="checkbox"
                                                id="cb-1"
                                                value="cb-1"
                                                name="signOfIllness"
                                            />
                                            <label className="form-check-label" htmlFor="cb-1">
                                                Sốt
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <Field
                                                className="form-check-input"
                                                type="checkbox"
                                                id="cb-2"
                                                value="cb-2"
                                                name="signOfIllness"
                                            />
                                            <label className="form-check-label" htmlFor="cb-2">
                                                Ho
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <Field
                                                className="form-check-input"
                                                type="checkbox"
                                                id="cb-3"
                                                value="cb-3"
                                                name="signOfIllness"
                                            />
                                            <label className="form-check-label" htmlFor="cb-3">
                                                Khó thở
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <Field
                                                className="form-check-input"
                                                type="checkbox"
                                                id="cb-4"
                                                value="cb-4"
                                                name="signOfIllness"
                                            />
                                            <label className="form-check-label" htmlFor="cb-4">
                                                Viêm phổi
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <Field
                                                className="form-check-input"
                                                type="checkbox"
                                                id="cb-5"
                                                value="cb-5"
                                                name="signOfIllness"
                                            />
                                            <label className="form-check-label" htmlFor="cb-5">
                                                Đau họng
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <Field
                                                className="form-check-input"
                                                type="checkbox"
                                                id="cb-6"
                                                value="cb-6"
                                                name="signOfIllness"
                                            />
                                            <label className="form-check-label" htmlFor="cb-6">
                                                Mệt mỏi
                                            </label>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <h4>Trong vòng 14 ngày anh/chị có tiếp xúc với?</h4>
                                        <div className="form-check">
                                            <Field
                                                className="form-check-input"
                                                type="checkbox"
                                                id="cb-01"
                                                value="cb-01"
                                                name="contactWith"
                                            />
                                            <label className="form-check-label" htmlFor="cb-01">
                                                Người bệnh hoặc nghi ngờ, mắc bệnh COVID-19
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <Field
                                                className="form-check-input"
                                                type="checkbox"
                                                id="cb-02"
                                                value="cb-02"
                                                name="contactWith"
                                            />
                                            <label className="form-check-label" htmlFor="cb-02">
                                                Người từ nước có bệnh COVID-19
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <Field
                                                className="form-check-input"
                                                type="checkbox"
                                                id="cb-03"
                                                value="cb-03"
                                                name="contactWith"
                                            />
                                            <label className="form-check-label" htmlFor="cb-03">
                                                Người có biểu hiện (Sốt, ho, khó thở, viêm phổi)
                                            </label>
                                        </div>
                                        </div>
                                    {
                                        isSubmitting ?
                                            <RotatingLines
                                                strokeColor="grey"
                                                strokeWidth="5"
                                                animationDuration="0.75"
                                                width="30"
                                                visible={true}
                                            /> : <button type="submit" className="btn btn-primary">Xác nhận</button>
                                    }
                                    <div className='col-4'></div>
                                </div>
                            </div>
                            <ToastContainer />
                        </Form>
                    )
                }
            </Formik>
        </>
    )
}