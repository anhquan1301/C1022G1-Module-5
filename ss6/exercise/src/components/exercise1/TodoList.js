import * as todoListService from '../../service/exercise1/todoListService'
import { useEffect, useState } from 'react'
import { Form, Field, Formik } from 'formik'

export default function TodoList() {
    const [todoList, setTodoList] = useState([])
    useEffect(() => {
        const fetchApi = async () => {
            const rs = await todoListService.findAll()
            setTodoList(rs)
        }
        fetchApi()
    }, []
    )
    return (
        <>
            <h2>TODO LIST</h2>
            <Formik
                initialValues={
                    { name: '' }
                }
                onSubmit={(values ) => {
                    const inputTodoTask = async () => {
                        await todoListService.save(values)
                        alert("Thành công")
                    }
                    inputTodoTask()
                }}
            >
                {
                    <Form>
                        <div className="form-group">
                            <label htmlFor=""></label>
                            <Field type="text"
                                className="form-control" name="name" id="" placeholder="" />
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </div>

                    </Form>
                }
            </Formik>

            <ul>
                {
                    todoList.map((todo) => (
                        <>
                            <li key={todo.id}>{todo.title}</li>
                        </>
                    ))
                }
            </ul>
        </>
    )
}