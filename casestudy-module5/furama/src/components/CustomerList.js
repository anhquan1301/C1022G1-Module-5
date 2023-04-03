
export default function CustomerList() {
  return (
    <>
      <div classname="row mx-0" style={{ marginTop: 96 }}>
        <img
          classname="img-fluid px-0"
          style={{ height: 400 }}
          src="https://blog.topcv.vn/wp-content/uploads/2017/11/ks.jpg"
          alt=""
        />
      </div>
      <div>
        <h2 classname="text-center fw-bold pt-4">
          Danh Sách Tất Cả Các Khách Hàng
        </h2>
      </div>
      <div>
        <button classname="ms-5 btn btn-dark">Thêm Khách Hàng Mới</button>
      </div>
      <div classname="row mx-0 mt-3 px-5 py-1">
        <table classname="table table-striped">
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
            <tr>
              <td scope="row">1</td>
              <td>Nguyễn Lê Anh Quân</td>
              <td>13-01-2000</td>
              <td>Nam</td>
              <td>123123123</td>
              <td>0909999999</td>
              <td>anhquan123@gmail.com</td>
              <td>Diamond</td>
              <td>123 Nguyễn Hoàng</td>
              <td>
                <button>Chỉnh sửa</button>
              </td>
              <td>
                <button>Xóa</button>
              </td>
            </tr>
            <tr>
              <td scope="row">2</td>
              <td>Nguyễn Lê Anh Quân</td>
              <td>13-01-2000</td>
              <td>Nam</td>
              <td>123123123</td>
              <td>0909999999</td>
              <td>anhquan123@gmail.com</td>
              <td>Diamond</td>
              <td>123 Nguyễn Hoàng</td>
              <td>
                <button>Chỉnh sửa</button>
              </td>
              <td>
                <button>Xóa</button>
              </td>
            </tr>
            <tr>
              <td scope="row">3</td>
              <td>Nguyễn Lê Anh Quân</td>
              <td>13-01-2000</td>
              <td>Nam</td>
              <td>123123123</td>
              <td>0909999999</td>
              <td>anhquan123@gmail.com</td>
              <td>Diamond</td>
              <td>123 Nguyễn Hoàng</td>
              <td>
                <button>Chỉnh sửa</button>
              </td>
              <td>
                <button>Xóa</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  )
}
