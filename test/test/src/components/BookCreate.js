
import { Field, Form, Formik } from 'formik'
import * as bookList from '../service/bookService'
import { useNavigate } from 'react-router-dom'
export default function BookCreate() {
    let navigate = useNavigate()
    return (
        <>
            <h2>Create Book</h2>
            <Formik initialValues={{
                title:'',
                quantity:''
            }}
            onSubmit={ (values) =>{
                 bookList.save(values)
                 alert("Thành công")
                    navigate("/")
            }}
            >
                <Form>
                    <div className="form-group">
                        <label htmlFor="title">Title</label>
                        <Field type="text"
                            className="form-control" name="title" id="title" aria-describedby="helpId" placeholder="Nhập title" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="quantity">Quantity</label>
                        <Field type="text"
                            className="form-control" name="quantity" id="quantity" aria-describedby="helpId" placeholder="Nhập quantity" />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </Form>
            </Formik>

        </>
    )
}