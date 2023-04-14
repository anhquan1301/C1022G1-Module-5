
import { Field, Form, Formik } from "formik"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import * as bookList from '../../../service/bookService'

export default function BookEdit() {
    let navigate = useNavigate()
    let param = useParams()
    const [bookDetail, setBookDetail] = useState()
    useEffect(() => {
        const fetchApi = async () => {
            const detail = await bookList.findById(param.id)
            setBookDetail(detail)
        }
        fetchApi()
    }, [])
    console.log(bookDetail)
    if(!bookDetail){
        return null
    }
    return (
        <>
            <h2>Edit Book</h2>
            <Formik initialValues={{
                id: bookDetail?.id,
                title: bookDetail?.title,
                quantity: bookDetail?.quantity
            }}
                onSubmit={(values) => {
                    bookList.update(values)
                    alert("Thành công")
                    navigate("/")
                }}
            >
                <Form>
                    <Field type='hidden' name='id' />
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