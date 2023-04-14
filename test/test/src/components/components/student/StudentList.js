import { useEffect, useState } from "react"

import * as studentService from '../../../service/studentService'
import * as classService from '../../../service/classService'
import { NavLink } from "react-router-dom"
export default function StudentList() {

    const [showList, setShowList] = useState([])
    const [showClassList, setShowClassList] = useState([])
    useEffect(() => {
        const getClassList = async () => {
            const rs = await classService.findAllClassList()
            setShowClassList(rs)
        }
        getClassList()
    }, [])
    useEffect(() => {
        const getStudentList = async () => {
            const rs = await studentService.findAll('')
            setShowList(rs)
        }
        getStudentList()
    }, [])
    let count = 1;
    return (
        <>
            <h2 className="text-danger text-center">Danh sách học sinh</h2>
            <div>
                <NavLink className={'btn btn-dark'} to='/create'>Thêm học sinh mới</NavLink>
            </div>
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th>STT</th>
                        <th>Tên học sinh</th>
                        <th>Điểm</th>
                        <th>Lớp</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        showList.map((students) => (
                            <tr key={students.id}>
                                <td scope="row">{count++}</td>
                                <td>{students.name}</td>
                                <td>{students.score}</td>
                                <td>{
                                    showClassList.filter((classies) => (
                                        classies.id == students.className
                                    ))[0]?.name}
                                </td>
                                <td>
                                    <NavLink to={`/edit/${students.id}`}>Chỉnh sửa</NavLink>
                                </td>
                                <td></td>
                            </tr>
                        ))
                    }

                </tbody>
            </table>
        </>
    )
}