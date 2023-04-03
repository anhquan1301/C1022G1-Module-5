export default function CustomerCreate() {
  return (
    <>
      <div style={{ marginTop: 96 }}>
        <div classname="row mx-0">
          <div classname="text-center text-danger">
            <h2>Thêm Mới Khách Hàng</h2>
          </div>
          <div classname="d-flex justify-content-center mt-3">
            <form action="">
              <table classname="" style={{ width: 500 }}>
                <tbody>
                  <tr style={{ height: 60 }}>
                    <th>
                      <label classname="fs-5" htmlfor="">
                        Họ và tên:
                      </label>
                    </th>
                    <td>
                      <input
                        type="text"
                        classname="form-control "
                        name=""
                        placeholder=""
                      />
                    </td>
                  </tr>
                  <tr style={{ height: 60 }}>
                    <th>
                      <label classname="fs-5" htmlfor="">
                        Ngày sinh:{" "}
                      </label>
                    </th>
                    <td>
                      <input
                        type="text"
                        classname="form-control"
                        name=""
                        placeholder=""
                      />
                    </td>
                  </tr>
                  <tr style={{ height: 60 }}>
                    <th>
                      <label classname="fs-5" htmlfor="">
                        Giới tính:
                      </label>
                    </th>
                    <td>
                      <input
                        type="text"
                        classname="form-control"
                        name=""
                        placeholder=""
                      />
                    </td>
                  </tr>
                  <tr style={{ height: 60 }}>
                    <th>
                      <label classname="fs-5" htmlfor="">
                        Số CMND:
                      </label>
                    </th>
                    <td>
                      <input
                        type="text"
                        classname="form-control"
                        name=""
                        placeholder=""
                      />
                    </td>
                  </tr>
                  <tr style={{ height: 60 }}>
                    <th>
                      <label classname="fs-5" htmlfor="">
                        Số điện thoại:
                      </label>
                    </th>
                    <td>
                      <input
                        type="text"
                        classname="form-control "
                        name=""
                        placeholder=""
                      />
                    </td>
                  </tr>
                  <tr style={{ height: 60 }}>
                    <th>
                      <label classname="fs-5" htmlfor="">
                        Email:
                      </label>
                    </th>
                    <td>
                      <input
                        type="text"
                        classname="form-control "
                        name=""
                        placeholder=""
                      />
                    </td>
                  </tr>
                  <tr style={{ height: 60 }}>
                    <th>
                      <label classname="fs-5" htmlfor="">
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
                      <label classname="fs-5" htmlfor="">
                        Địa chỉ:
                      </label>
                    </th>
                    <td>
                      <input
                        type="text"
                        classname="form-control "
                        name=""
                        placeholder=""
                      />
                    </td>
                  </tr>
                  <tr style={{ height: 120 }}>
                    <td />
                    <td>
                      <button classname="btn btn-primary float-start">
                        Xác nhận
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}
