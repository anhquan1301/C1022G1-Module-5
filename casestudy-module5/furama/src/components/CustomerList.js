import { NavLink } from "react-router-dom";
import customerList from './data/customer';
import customerTypeList from './data/customerType';

export default function CustomerList() {
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
              customerList.map((customers, index) => (
                <tr key={index}>
                  <td scope="row">{stt++}</td>
                  <td>{customers.name}</td>
                  <td>{customers.dateOfBirth}</td>
                  <td>{customers.gender == 1 ? 'Nam' : customers.gender==0 ? 'Nữ' : 'LGBT'}</td>
                  <td>{customers.cmnd}</td>
                  <td>{customers.phone}</td>
                  <td>{customers.email}</td>
                  <td>{customerTypeList.filter(customerId=>(
                    customerId.id===customers.customerType
                    ))[0].name}</td>
                  <td>{customers.address}</td>
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
