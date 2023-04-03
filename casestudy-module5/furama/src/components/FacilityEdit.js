export default function FacilityEdit() {
    return (
        <>
            <div className="row mx-0" style="margin-top: 96px; background-color: rgb(232, 235, 219);">
                <div className="col-5">
                    <div>
                        <h2 className="text-center fw-bold mt-3">
                            Chỉnh Sửa Các Phòng
                        </h2>
                    </div>
                    <div className="dropdown text-center mt-3" style="padding-right: 360px;">
                        <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Danh sách cơ sở
                        </button>
                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="#">Phòng</a></li>
                            <li><a className="dropdown-item" href="#">Biệt thự</a></li>
                            <li><a className="dropdown-item" href="#">Căn hộ</a></li>
                        </ul>
                    </div>
                    <div className="d-flex justify-content-center mt-3">
                        <form action="" >
                            <table className="" style="width: 500px;">
                                <input type="hidden" id="" />
                                <tr style="height: 60px;">
                                    <th >
                                        <label className="fs-5" htmlFor="">Tên dịch vụ: </label>
                                    </th>
                                    <td>
                                        <input type="text" className="form-control " name="" value="" />
                                    </td>
                                </tr>
                                <tr style="height: 60px;">
                                    <th>
                                        <label className="fs-5" htmlFor="">Diện tích sử dụng: </label>
                                    </th>
                                    <td>
                                        <input type="text" className="form-control" name="" value="" />
                                    </td>
                                </tr>
                                <tr style="height: 60px;">
                                    <th>
                                        <label className="fs-5" htmlFor="">Chi phí thuê: </label>
                                    </th>
                                    <td>
                                        <input type="text" className="form-control" name="" value="" />
                                    </td>
                                </tr>
                                <tr style="height: 60px;">
                                    <th>
                                        <label className="fs-5" htmlFor="">Số lượng người tối đa: </label>
                                    </th>
                                    <td>
                                        <input type="text" className="form-control" name="" value="" />
                                    </td>
                                </tr>
                                <tr style="height: 60px;">
                                    <th>
                                        <label className="fs-5" htmlFor="">Kiểu thuê: </label>
                                    </th>
                                    <td>
                                        <input type="text" className="form-control " name="" value="" />
                                    </td>
                                </tr>
                                <tr style="height: 60px;">
                                    <th>
                                        <label className="fs-5" htmlFor="">Dịch vụ miễn phí đi kèm: </label>
                                    </th>
                                    <td>
                                        <input type="text" className="form-control " name="" value="" />
                                    </td>
                                </tr>
                                <tr style="height: 120px;">
                                    <td>
                                        <button className="btn btn-primary float-end">Xác nhận</button>
                                    </td>
                                </tr>
                            </table>
                        </form>
                    </div>
                </div>
                <div className="col-7 p-0">
                    <img className="w-100 h-100" src="https://chefjob.vn/wp-content/uploads/2020/07/tieng-anh-loai-phong-khach-san.jpg" alt="" />
                </div>
            </div>
        </>
    )
}
