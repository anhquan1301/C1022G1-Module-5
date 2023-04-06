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
    const[books,setBooks]=useState()
    useEffect(()=>{
        const fetchApi = async () => {
            const rs = await bookService.detail(param.id)
            setBooks(rs)
            console.log(books)
        }
        fetchApi()
    }, [])
    if(!books){
        return null
    }
    return(
        <>
            <h2>Edit Book</h2>
            <Formik initialValues={
                {   
                    idEdit:books?.id,
                    titleEdit: books?.title,
                    quantityEdit: books?.quantity
                }
            }
                onSubmit={(value, { setSubmitting }) => {
                    console.log(value)
                        const edit = async () => {
                            await bookService.edit(value)
                            setSubmitting(false)
                            toast('Successfuly')
                            navigate('/')
                        }
                        edit()
                }}
            >
                {( { isSubmitting } ) => (
                    <Form>
                         <Field
                                type="hidden"
                                className="form-control"
                                name="idEdit"
                                id=""
                                aria-describedby="helpId"
                            />
                        <div className="form-group">
                            <label htmlFor="" >Title</label>
                            <Field
                                type="text"
                                className="form-control"
                                name="titleEdit"
                                id=""
                                aria-describedby="helpId"
     
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="" >Quantity</label>
                            <Field
                                type="text"
                                className="form-control"
                                name="quantityEdit"
                                id=""
                                aria-describedby="helpId"
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