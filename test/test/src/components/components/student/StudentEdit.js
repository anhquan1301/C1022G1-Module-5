import { ErrorMessage, Field, Form, Formik } from "formik";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import * as studentService from '../../../service/studentService'
import * as Yup from 'yup'
import * as classService from '../../../service/classService'
export default function StudentEdit() {

    const [showClassList, setShowClassList] = useState([])
    const[findById,setFindById] = useState()
    let param = useParams()
    let navigate = useNavigate()

    useEffect(()=>{
        const getId = async()=>{
            const rs = await studentService.findById(param.id)
            setFindById(rs)
        }
        getId()
    },[param.id])

    useEffect(() => {
        const getClassList = async () => {
            const rs = await classService.findAllClassList()
            setShowClassList(rs)
        }
        getClassList()
    }, [])

    if(!findById){
        return null
    }
    return (
        <>
            <h2>Chỉnh sửa thông tin học sinh</h2>
            <Formik
            initialValues={{
                id: findById?.id,
                name: findById?.name,
                score: findById?.score,
                className: findById?.className
            }}
            validationSchema={Yup.object({
                name: Yup.string().required('Không được bỏ trống'),
                score: Yup.string().required('Không được bỏ trống')
            })}
            onSubmit={(value)=>{
                const edit = async()=>{
                    await studentService.edit(value)
                    alert('Chỉnh sửa thành công')
                    navigate('/')
                }
                edit()
            }}
            >
                <Form>
                    <div className='col-3'>
                        <div className="form-group">
                            <label htmlFor="name">Tên học sinh</label>
                            <Field type="text"
                                className="form-control" name="name" id="name" aria-describedby="helpId"  />

                        </div>
                        <div>
                            <ErrorMessage component='span' className='text-danger' name='name' />
                        </div>
                        <div className="form-group">
                            <label htmlFor="score">Điểm</label>
                            <Field type="text"
                                className="form-control" name="score" id="score" aria-describedby="helpId"  />

                        </div>
                        <div>
                            <ErrorMessage component='span' className='text-danger' name='score' />
                        </div>
                        <div className="form-group">
                            <label htmlFor="">Lớp</label>
                            <Field as='select' name='className' className="form-select">
                                {
                                    showClassList.map((classies) => (
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