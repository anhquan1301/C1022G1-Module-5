import { Component } from 'react'
class CustomerEdit extends Component{
    render(){
        return(
            <>
                <div style="margin-top: 96px;">
    <div class="row mx-0">
      <div class="text-center text-danger">
        <h2>
          Chỉnh Sửa Khách Hàng
        </h2>
      </div>
        <div class="d-flex justify-content-center mt-3">
            <form action="" >
              <table class="" style="width: 500px;">
                <input type="hidden" id=""/>
                <tr style="height: 60px;">
                  <th >
                    <label class="fs-5" for="">Họ và tên: </label>
                  </th>
                  <td>
                    <input type="text" class="form-control " name=""  value=""/>
                  </td>
                </tr>
                <tr style="height: 60px;">
                  <th>
                    <label class="fs-5" for="">Ngày sinh: </label>
                  </th>
                  <td>
                    <input type="text" class="form-control" name="" value=""/>
                  </td>
                </tr>
                <tr style="height: 60px;">
                  <th>
                    <label class="fs-5" for="">Giới tính: </label>
                  </th>
                  <td>
                    <input type="text" class="form-control" name="" value=""/>
                  </td>
                </tr>
                <tr style="height: 60px;">
                  <th>
                    <label class="fs-5" for="">Số CMND: </label>
                  </th>
                  <td>
                    <input type="text" class="form-control" name="" value=""/>
                  </td>
                </tr>
                <tr style="height: 60px;">
                  <th>
                    <label class="fs-5" for="">Số điện thoại: </label>
                  </th>
                  <td>
                    <input type="text" class="form-control " name="" value=""/>
                  </td>
                </tr>
                <tr style="height: 60px;">
                  <th>
                    <label class="fs-5" for="">Email: </label>
                  </th>
                  <td>
                    <input type="text" class="form-control " name=""value=""/>
                  </td>
                </tr>
                <tr style="height: 60px;">
                    <th>
                      <label class="fs-5" for="">Loại khách: </label>
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
                      <label class="fs-5" for="">Địa chỉ: </label>
                    </th>
                    <td>
                      <input type="text" class="form-control " name="" value=""/>
                    </td>
                  </tr>
                <tr style="height: 120px;">
                <td></td>
                  <td>
                    <button class="btn btn-primary float-start">Xác nhận</button>
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
}
export default CustomerEdit