import { ErrorMessage, Form, Field, Formik } from 'formik'
import * as Yup from 'yup'
import { RotatingLines } from 'react-loader-spinner'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
export default function ContactForm() {
    return (
        <>
            <Formik initialValues={{
                name: '',
                email: '',
                phone: '',
                message: ''
            }}
                validationSchema={Yup.object({
                    name: Yup.string().required('Required'),
                    email: Yup.string().required('Required').email('Enter the correct email format'),
                    phone: Yup.string().required('Required').matches('^(0?)(3[2-9]|5[6|8|9]|7[0|6-9]|8[0-6|8|9]|9[0-4|6-9])[0-9]{7}$', 'Enter the correct phone number format'),
                    message: Yup.string().required('Required')
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
                            <h2>Contact Form</h2>
                            <div className="form-group">
                                <label htmlFor="name" >Name</label>
                                <Field type="text" className="form-control" name="name" id="name" placeholder="" />
                                <ErrorMessage name='name' component={'div'} className='text-danger' />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email" >Email</label>
                                <Field type="text" className="form-control" name="email" id="email" placeholder="" />
                                <ErrorMessage name='email' component={'div'} className='text-danger' />
                            </div>
                            <div className="form-group">
                                <label htmlFor="phone" >Phone</label>
                                <Field type="text" className="form-control" name="phone" id="phone" placeholder="" />
                                <ErrorMessage name='phone' component={'div'} className='text-danger' />
                            </div>
                            <div className="form-group">
                                <label htmlFor="message" >Message</label>
                                <Field component='textarea' className="form-control" name="message" id="message" placeholder="" />
                                <ErrorMessage name='message' component={'div'} className='text-danger' />
                            </div>
                            {
                                isSubmitting ?
                                    <RotatingLines
                                        strokeColor="grey"
                                        strokeWidth="5"
                                        animationDuration="0.75"
                                        width="30"
                                        visible={true}
                                    /> : <button type="submit" className="btn btn-primary">Submit</button>
                            }
                            <ToastContainer />
                        </Form>
                    )
                }
            </Formik>
        </>
    )
}