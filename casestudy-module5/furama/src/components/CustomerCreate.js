export default function CustomerCreate() {
  return (
    <>
      <div style={{ marginTop: 96, backgroundColor: "rgb(232, 235, 219)" }}>
        <div className="row mx-0">
          <div className="col-6">
            <div className="text-center fw-bold">
              <h2>Thêm Mới Khách Hàng</h2>
            </div>
            <div className="d-flex justify-content-center mt-3">
              <form action="">
                <table className="" style={{ width: 500 }}>
                  <tbody>
                    <tr style={{ height: 60 }}>
                      <th>
                        <label className="fs-5" htmlFor="">
                          Họ và tên:
                        </label>
                      </th>
                      <td>
                        <input
                          type="text"
                          className="form-control "
                          name=""
                          placeholder="Nhập họ và tên"
                        />
                      </td>
                    </tr>
                    <tr style={{ height: 60 }}>
                      <th>
                        <label className="fs-5" htmlFor="">
                          Ngày sinh:
                        </label>
                      </th>
                      <td>
                        <input
                          type="text"
                          className="form-control"
                          name=""
                          placeholder="Nhập ngày sinh"
                        />
                      </td>
                    </tr>
                    <tr style={{ height: 60 }}>
                      <th>
                        <label className="fs-5" htmlFor="">
                          Giới tính:
                        </label>
                      </th>
                      <td>
                        <input
                          type="text"
                          className="form-control"
                          name=""
                          placeholder="Nhập giới tính"
                        />
                      </td>
                    </tr>
                    <tr style={{ height: 60 }}>
                      <th>
                        <label className="fs-5" htmlFor="">
                          Số CMND:
                        </label>
                      </th>
                      <td>
                        <input
                          type="text"
                          className="form-control"
                          name=""
                          placeholder="Nhập số CMND"
                        />
                      </td>
                    </tr>
                    <tr style={{ height: 60 }}>
                      <th>
                        <label className="fs-5" htmlFor="">
                          Số điện thoại:
                        </label>
                      </th>
                      <td>
                        <input
                          type="text"
                          className="form-control "
                          name=""
                          placeholder="Nhập số điện thoại"
                        />
                      </td>
                    </tr>
                    <tr style={{ height: 60 }}>
                      <th>
                        <label className="fs-5" htmlFor="">
                          Email:
                        </label>
                      </th>
                      <td>
                        <input
                          type="text"
                          className="form-control "
                          name=""
                          placeholder="Nhập email"
                        />
                      </td>
                    </tr>
                    <tr style={{ height: 60 }}>
                      <th>
                        <label className="fs-5" htmlFor="">
                          Loại khách:
                        </label>
                      </th>
                      <td>
                        <select name="" id="">
                          <option value="">Diamond</option>
                          <option value="">Platinium</option>
                          <option value="">Gold</option>
                          <option value="">Silver</option>
                          <option value="">Member</option>
                        </select>
                      </td>
                    </tr>
                    <tr style={{ height: 60 }}>
                      <th>
                        <label className="fs-5" htmlFor="">
                          Địa chỉ:
                        </label>
                      </th>
                      <td>
                        <input
                          type="text"
                          className="form-control "
                          name=""
                          placeholder="Nhập địa chỉ"
                        />
                      </td>
                    </tr>
                    <tr style={{ height: 120 }}>
                      <td />
                      <td>
                        <button className="btn btn-primary float-start">
                          Xác nhận
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </form>
            </div>
          </div>
          <div className="col-6 px-0">
            <img
              className="w-100 h-100 "
              src="https://dsa.org.vn/wp-content/uploads/2020/07/Du-kh%C3%A1ch-ngh%E1%BB%89-ch%C3%A2n-t%E1%BA%A1i-Furama-resort-Danang-ch%E1%BB%9D-nh%E1%BA%ADn-ph%C3%B2ng.-1024x699.jpg"
              alt=""
            />
          </div>
        </div>
      </div>

    </>
  )
}
