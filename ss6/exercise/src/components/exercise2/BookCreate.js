import * as bookService from '../../service/exercise2/bookService'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Field, Form, Formik } from 'formik';
import { Oval } from 'react-loader-spinner'
import { useNavigate } from 'react-router-dom';

export default function BookCreate() {
    let navigate = useNavigate()
    return (
        <>  
            <h2>Create Books</h2>
            <Formik initialValues={
                {
                    title: '',
                    quantity: ''
                }
            }
                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                        const create = async () => {
                            await bookService.save(values)
                            setSubmitting(false)
                            toast('Successfuly')
                            navigate('/')
                        }
                        create()
                    }, 300)
                }}
            >
                {( { isSubmitting } ) => (
                    <Form>
                        <div className="form-group">
                            <label htmlFor="" >Title</label>
                            <Field
                                type="text"
                                className="form-control"
                                name="title"
                                id=""
                                aria-describedby="helpId"
                                placeholder=""
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="" >Quantity</label>
                            <Field
                                type="text"
                                className="form-control"
                                name="quantity"
                                id=""
                                aria-describedby="helpId"
                                placeholder=""
                            />
                        </div>
                        {isSubmitting ? 
                        <Oval
                            height={80}
                            width={80}
                            color="#4fa94d"
                            wrapperStyle={{}}
                            wrapperClass=""
                            visible={true}
                            ariaLabel='oval-loading'
                            secondaryColor="#4fa94d"
                            strokeWidth={2}
                            strokeWidthSecondary={2}
                            
                        /> : 
                        <button type="submit" class="btn btn-primary">Submit</button>
                        }
                    </Form>
    )}
            </Formik>
        </>
    )
}