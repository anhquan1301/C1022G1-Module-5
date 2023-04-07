import { NavLink } from "react-router-dom";
import customerTypeList from '../data/customerType';
import { Field, Form, Formik } from "formik";
import { toast } from "react-toastify";
import * as customerList from '../service/customerService'
import { useEffect, useState } from "react";
export default function CustomerList() {
  const [customers, setCustomers] = useState([])
  useEffect(()=>{
    const fetchApi = async()=>{
      const rs = await customerList.findByName("")
      setCustomers(rs)
    }
    fetchApi()
  },[])
  let stt = 1
  return (
    <>
      <div className="row mx-0" style={{ marginTop: 96 }}>
        <img
          className="img-fluid px-0"
          style={{ height: 400 }}
          src="https://blog.topcv.vn/wp-content/uploads/2017/11/ks.jpg"
          alt=""
        />
      </div>
      <div>
        <h2 className="text-center fw-bold pt-4">
          Danh Sách Tất Cả Các Khách Hàng
        </h2>
      </div>
      <div>
        <NavLink className="ms-5 btn btn-dark" to='/customer-create'>Thêm Khách Hàng Mới</NavLink>
      </div>
      <div>
        <Formik initialValues={{
          name:""
        }}
         onSubmit={(value)=>{
            const search = async()=>{
              const rs = await customerList.findByName(value.name)
              setCustomers(rs)
              console.log(customers)
            }
            search()
         }}
        >
          <Form>
            <div className="form-group">
              <Field type="text"
                className="form-control" name="name" aria-describedby="helpId" placeholder="Tìm kiếm" />
                <button type="submit" className="btn btn-primary">Submit</button>
            </div>
          </Form>
        </Formik>
      </div>
      <div className="row mx-0 mt-3 px-5 py-1">
        <table className="table table-striped">
          <thead>
            <tr>
              <th>STT</th>
              <th>Họ và tên</th>
              <th>Ngày sinh</th>
              <th>Giới tính</th>
              <th>Số CMND</th>
              <th>Số điện thoại</th>
              <th>Email</th>
              <th>Loại khách</th>
              <th>Địa chỉ</th>
              <th />
              <th />
            </tr>
          </thead>
          <tbody>
            {
              customers.map((customer, index) => (
                <tr key={index}>
                  <td scope="row">{stt++}</td>
                  <td>{customer.name}</td>
                  <td>{customer.dateOfBirth}</td>
                  <td>{customer.gender == 1 ? 'Nam' : customer.gender==0 ? 'Nữ' : 'LGBT'}</td>
                  <td>{customer.cmnd}</td>
                  <td>{customer.phone}</td>
                  <td>{customer.email}</td>
                  <td>{customerTypeList.filter(customerId=>(
                    customerId.id==customer.customerType
                    ))[0].name}</td>
                  <td>{customer.address}</td>
                  <td>
                    <button>Chỉnh sửa</button>
                  </td>
                  <td>
                    <button>Xóa</button>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </>
  )
}
