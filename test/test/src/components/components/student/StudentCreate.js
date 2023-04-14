

import { ErrorMessage, Field, Form, Formik } from 'formik'
import * as studentService from '../../../service/studentService'
import * as classService from '../../../service/classService'
import {  useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import * as Yup from 'yup'
export default function StudentCreate() {
    const [showClassList, setShowClassList] = useState([])
    let navigate = useNavigate()
    useEffect(() => {
        const getClassList = async () => {
            const rs = await classService.findAllClassList()
            setShowClassList(rs)
        }
        getClassList()
    }, [])

    return (
        <>
            <h2>Thêm mới học sinh</h2>
            <Formik
                initialValues={{
                    name: '',
                    score: '',
                    className: 1
                }}
                validationSchema={Yup.object(
                    {
                        name:Yup.string().required('Không được bỏ trống'),
                        score:Yup.string().required('Không được bỏ trống'),
                    }
                )}
                onSubmit={(value) => {
                    const create = async () => {
                        await studentService.save(value)
                        alert('Thêm mới thành công')
                        navigate('/')
                    }
                    create()
                }}
            >
                <Form>
                    <div className='col-3'>
                    <div className="form-group">
                        <label htmlFor="name">Tên học sinh</label>
                        <Field type="text"
                            className="form-control" name="name" id="name" aria-describedby="helpId" placeholder="" />
                           
                    </div>
                    <div>
                        <ErrorMessage component='span' className='text-danger' name='name' />
                    </div>
                    <div className="form-group">
                        <label htmlFor="score">Điểm</label>
                        <Field type="text"
                            className="form-control" name="score" id="score" aria-describedby="helpId" placeholder="" />
                          
                    </div>
                    <div>
                        <ErrorMessage component='span' className='text-danger' name='score' />
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Lớp</label>
                        <Field component='select' name='className'>
                        {
                            showClassList.map((classies)=>(
                                <option key={classies.id} value={classies.id}>
                                    {classies.name}
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