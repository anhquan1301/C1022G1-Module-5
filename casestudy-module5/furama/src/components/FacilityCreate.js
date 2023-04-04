import { useState } from "react";

export default function FacilityCreate() {
    let listFacility = ['Phòng', 'Biệt thự', 'Căn hộ']
    const [facility,setFacility] = useState('Phòng')
    console.log(facility)
    return (
        <>
            <div
                className="row mx-0"
                style={{ marginTop: 96, backgroundColor: "rgb(232, 235, 219)" }}
            >
                <div className="col-5">
                    <div>
                        <h2 className="text-center fw-bold mt-3" style={facility==='Phòng'  ? {} : {display:'none'}}>Thêm Phòng Mới</h2>
                    </div>
                    <div>
                        <h2 className="text-center fw-bold mt-3" style={facility==='Biệt thự'  ? {} : {display:'none'}}>Thêm Biệt Thự Mới</h2>
                    </div>
                    <div>
                        <h2 className="text-center fw-bold mt-3" style={facility==='Căn hộ'  ? {} : {display:'none'}}>Thêm Căn Hộ Mới</h2>
                    </div>
                    <div className="dropdown text-center mt-3" style={{ paddingRight: 360 }}>
                        <button
                            className="btn btn-secondary dropdown-toggle"
                            type="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                        >
                            Danh sách cơ sở
                        </button>
                        <ul className="dropdown-menu">
                            {
                                listFacility.map((facilities,index) => (
                                    <li>
                                        <a key={index} className="dropdown-item" href="#" onClick={()=>{
                                            setFacility(facilities)
                                        }}>
                                            {facilities}
                                        </a>
                                    </li>
                                )
                                )
                            }
                        </ul>
                    </div>
                    <div className="d-flex justify-content-center mt-3">
                        <form action="">
                            <table className="" style={{ width: 500 }}>
                                <tbody>
                                    <tr style={{ height: 60 }}>
                                        <th>
                                            <label className="fs-5" htmlFor="">
                                                Tên dịch vụ:
                                            </label>
                                        </th>
                                        <td>
                                            <input
                                                type="text"
                                                className="form-control "
                                                name=""
                                                placeholder="Nhập tên dịch vụ"
                                            />
                                        </td>
                                    </tr>
                                    <tr style={{ height: 60 }}>
                                        <th>
                                            <label className="fs-5" htmlFor="">
                                                Diện tích sử dụng:
                                            </label>
                                        </th>
                                        <td>
                                            <input
                                                type="text"
                                                className="form-control"
                                                name=""
                                                placeholder="Nhập diện tích sử dụng"
                                            />
                                        </td>
                                    </tr>
                                    <tr style={{ height: 60 }}>
                                        <th>
                                            <label className="fs-5" htmlFor="">
                                                Chi phí thuê:
                                            </label>
                                        </th>
                                        <td>
                                            <input
                                                type="text"
                                                className="form-control"
                                                name=""
                                                placeholder="Nhập chi phí thuê"
                                            />
                                        </td>
                                    </tr>
                                    <tr style={{ height: 60 }}>
                                        <th>
                                            <label className="fs-5" htmlFor="">
                                                Số lượng người tối đa:
                                            </label>
                                        </th>
                                        <td>
                                            <input
                                                type="text"
                                                className="form-control"
                                                name=""
                                                placeholder="Nhập số lượng người tối đa"
                                            />
                                        </td>
                                    </tr>
                                    <tr style={{ height: 60 }}>
                                        <th>
                                            <label className="fs-5" htmlFor="">
                                                Kiểu thuê:
                                            </label>
                                        </th>
                                        <td>
                                            <input
                                                type="text"
                                                className="form-control "
                                                name=""
                                                placeholder="Nhập kiểu thuê"
                                            />
                                        </td>
                                    </tr>
                                    <tr style={{ height: 60 }}>
                                        <th>
                                            <label className="fs-5" htmlFor="">
                                                Hình ảnh:
                                            </label>
                                        </th>
                                        <td>
                                            <input
                                                type="text"
                                                className="form-control "
                                                name=""
                                                placeholder="Nhập đường link hình ảnh"
                                            />
                                        </td>
                                    </tr>
                                    <tr  style={ facility === 'Biệt thự' || facility === 'Căn hộ' ?
                                        { height: 60}:{display:'none'}}>
                                        <th>
                                            <label className="fs-5" htmlFor="">
                                                Tiêu chuẩn phòng:
                                            </label>
                                        </th>
                                        <td>
                                            <input
                                                type="text"
                                                className="form-control "
                                                name=""
                                                placeholder="Nhập tiêu chuẩn phòng"
                                            />
                                        </td>
                                    </tr>
                                    <tr  style={ facility === 'Biệt thự' || facility === 'Căn hộ' ?
                                        { height: 60}:{display:'none'}}>
                                        <th>
                                            <label className="fs-5" htmlFor="">
                                                Mô tả tiện nghi khác:
                                            </label>
                                        </th>
                                        <td>
                                            <input
                                                type="text"
                                                className="form-control "
                                                name=""
                                                placeholder="Nhập mô tả tiện nghi khác"
                                            />
                                        </td>
                                    </tr>
                                    <tr style={ facility === 'Biệt thự' ?
                                        { height: 60}:{display:'none'}}>
                                        <th>
                                            <label className="fs-5" htmlFor="">
                                                Diện tích hồ bơi:
                                            </label>
                                        </th>
                                        <td>
                                            <input
                                                type="text"
                                                className="form-control "
                                                name=""
                                                placeholder="Nhập diện tích hồ bơi"
                                            />
                                        </td>
                                    </tr>
                                    <tr  style={ facility === 'Biệt thự' || facility === 'Căn hộ' ?
                                        { height: 60}:{display:'none'}}>
                                        <th>
                                            <label className="fs-5" htmlFor="">
                                                Số tầng:
                                            </label>
                                        </th>
                                        <td>
                                            <input
                                                type="text"
                                                className="form-control "
                                                name=""
                                                placeholder="Nhập số tầng"
                                            />
                                        </td>
                                    </tr>
                                    <tr  style={ facility === 'Phòng' ?
                                        { height: 60}:{display:'none'}}>
                                        <th>
                                            <label className="fs-5" htmlFor="">
                                                Dịch vụ miễn phí đi kèm:
                                            </label>
                                        </th>
                                        <td>
                                            <input
                                                type="text"
                                                className="form-control "
                                                name=""
                                                placeholder="Nhập dịch vụ miễn phí đi kèm"
                                            />
                                        </td>
                                    </tr>
                                    <tr style={{ height: 120 }}>
                                        <td>
                                            <button className="btn btn-primary float-end">Xác nhận</button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </form>
                    </div>
                </div>
                <div className="col-7 p-0">
                    <img
                        className="w-100 h-100"
                        src="https://khunghiduong.vn/wp-content/uploads/2017/07/can-ho-1-phong-ngu-ariyana_2.jpg"
                        alt=""
                    />
                </div>
            </div>
        </>
    )
}
