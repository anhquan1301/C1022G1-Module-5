import { useEffect, useState } from "react"
import * as bookService from '../../service/exercise2/bookService'
import { useParams } from "react-router-dom"
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Field, Form, Formik } from 'formik';
import { Oval } from 'react-loader-spinner'
import { useNavigate } from 'react-router-dom';

export default function BookDetail(){
    let navigate = useNavigate()
    let param = useParams();
    const[books,setBooks]=useState({})
    useEffect(()=>{
        const fetchApi = async () => {
            const rs = await bookService.detail(param)
            setBooks(rs)
            console.log(books)
        }
        fetchApi()
    }, [])
    return(
        <>
            <h2>Edit Book</h2>
            <Formik initialValues={
                {   
                    id:'',
                    title: '',
                    quantity: ''
                }
            }
                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                        const edit = async () => {
                            await bookService.edit(values)
                            setSubmitting(false)
                            toast('Successfuly')
                            navigate('/')
                        }
                        edit()
                    }, 300)
                }}
            >
                {( { isSubmitting } ) => (
                    <Form>
                         <Field
                                type="hidden"
                                className="form-control"
                                name="id"
                                id=""
                                aria-describedby="helpId"
                                value={books.id}
                                
                            />
                        <div className="form-group">
                            <label htmlFor="" >Title</label>
                            <Field
                                type="text"
                                className="form-control"
                                name="title"
                                id=""
                                aria-describedby="helpId"
                                value={books.title}
                                
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
                                value={books.quantity}
                                
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