export default function CustomerCreate() {
  return (
    <>
      <div style="margin-top: 96px;">
        <div className="row mx-0">
          <div className="text-center text-danger">
            <h2>
              Thêm Mới Khách Hàng
            </h2>
          </div>
          <div className="d-flex justify-content-center mt-3">
            <form action="" >
              <table className="" style="width: 500px;">
                <tr style="height: 60px;">
                  <th >
                    <label className="fs-5" htmlFor="">Họ và tên: </label>
                  </th>
                  <td>
                    <input type="text" className="form-control " name="" placeholder="" />
                  </td>
                </tr>
                <tr style="height: 60px;">
                  <th>
                    <label className="fs-5" htmlFor="">Ngày sinh: </label>
                  </th>
                  <td>
                    <input type="text" className="form-control" name="" placeholder="" />
                  </td>
                </tr>
                <tr style="height: 60px;">
                  <th>
                    <label className="fs-5" htmlFor="">Giới tính: </label>
                  </th>
                  <td>
                    <input type="text" className="form-control" name="" placeholder="" />
                  </td>
                </tr>
                <tr style="height: 60px;">
                  <th>
                    <label className="fs-5" htmlFor="">Số CMND: </label>
                  </th>
                  <td>
                    <input type="text" className="form-control" name="" placeholder="" />
                  </td>
                </tr>
                <tr style="height: 60px;">
                  <th>
                    <label className="fs-5" htmlFor="">Số điện thoại: </label>
                  </th>
                  <td>
                    <input type="text" className="form-control " name="" placeholder="" />
                  </td>
                </tr>
                <tr style="height: 60px;">
                  <th>
                    <label className="fs-5" htmlFor="">Email: </label>
                  </th>
                  <td>
                    <input type="text" className="form-control " name="" placeholder="" />
                  </td>
                </tr>
                <tr style="height: 60px;">
                  <th>
                    <label className="fs-5" htmlFor="">Loại khách: </label>
                  </th>
                  <td>
                    <select name="" id="" >
                      <option value="">Diamond</option>
                      <option value="">Platinium</option>
                      <option value="">Gold</option>
                      <option value="">Silver</option>
                      <option value="">Member</option>
                    </select>
                  </td>
                </tr>
                <tr style="height: 60px;">
                  <th>
                    <label className="fs-5" htmlFor="">Địa chỉ: </label>
                  </th>
                  <td>
                    <input type="text" className="form-control " name="" placeholder="" />
                  </td>
                </tr>
                <tr style="height: 120px;">
                  <td></td>
                  <td>
                    <button className="btn btn-primary float-start">Xác nhận</button>
                  </td>
                </tr>
              </table>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}
