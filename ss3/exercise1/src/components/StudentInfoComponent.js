import { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
class StudentInfoComponent extends Component{
    constructor(props) {
        super(props);
        this.state = {
          studentList: [
            {
              id: 1,
              studentName: "Nguyễn Lê Anh Quân",
              age: 18,
              address: "Đà Nẵng"
            },
            {
              id: 2,
              studentName: "Hà Nguyễn Thanh Phong",
              age: 20,
              address: "Đà Nẵng"
            },
            {
              id: 3,
              studentName: "Nguyễn Thị Loan",
              age: 18,
              address: "Quảng Nam"
            },
            {
              id: 4,
              studentName: "Lê Văn Phát Đạt",
              age: 20,
              address: "Huế"
            },
            {
                id: 5,
                studentName: "Lê Văn C",
                age: 20,
                address: "Đà Nẵng"
              }
          ]
        }
      }
    render(){
        return(
            <div>
                <h2 class="text-center text-danger">Danh sách sinh viên</h2>
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Name</th>
                  <th>Age</th>
                  <th>Address</th>
                </tr>
              </thead>
              <tbody>
               {
                this.state.studentList.map((student,index)=>(
                    <tr key={index}>
                        <td>{student.id}</td>
                        <td>{student.studentName}</td>
                        <td>{student.age}</td>
                        <td>{student.address}</td>
                    </tr>
                ))
               }
              </tbody>
            </table>
          </div>
        )
    }
}
export default StudentInfoComponent