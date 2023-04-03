export default function FacilityCreate() {
    return (
        <>
            <div
                classname="row mx-0"
                style={{ marginTop: 96, backgroundColor: "rgb(232, 235, 219)" }}
            >
                <div classname="col-5">
                    <div>
                        <h2 classname="text-center fw-bold mt-3">Thêm Phòng Mới</h2>
                    </div>
                    <div classname="dropdown text-center mt-3" style={{ paddingRight: 360 }}>
                        <button
                            classname="btn btn-secondary dropdown-toggle"
                            type="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                        >
                            Danh sách cơ sở
                        </button>
                        <ul classname="dropdown-menu">
                            <li>
                                <a classname="dropdown-item" href="#">
                                    Phòng
                                </a>
                            </li>
                            <li>
                                <a classname="dropdown-item" href="#">
                                    Biệt thự
                                </a>
                            </li>
                            <li>
                                <a classname="dropdown-item" href="#">
                                    Căn hộ
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div classname="d-flex justify-content-center mt-3">
                        <form action="">
                            <table classname="" style={{ width: 500 }}>
                                <tbody>
                                    <tr style={{ height: 60 }}>
                                        <th>
                                            <label classname="fs-5" htmlfor="">
                                                Tên dịch vụ:
                                            </label>
                                        </th>
                                        <td>
                                            <input
                                                type="text"
                                                classname="form-control "
                                                name=""
                                                placeholder="Nhập tên dịch vụ"
                                            />
                                        </td>
                                    </tr>
                                    <tr style={{ height: 60 }}>
                                        <th>
                                            <label classname="fs-5" htmlfor="">
                                                Diện tích sử dụng:
                                            </label>
                                        </th>
                                        <td>
                                            <input
                                                type="text"
                                                classname="form-control"
                                                name=""
                                                placeholder="Nhập diện tích sử dụng"
                                            />
                                        </td>
                                    </tr>
                                    <tr style={{ height: 60 }}>
                                        <th>
                                            <label classname="fs-5" htmlfor="">
                                                Chi phí thuê:
                                            </label>
                                        </th>
                                        <td>
                                            <input
                                                type="text"
                                                classname="form-control"
                                                name=""
                                                placeholder="Nhập chi phí thuê"
                                            />
                                        </td>
                                    </tr>
                                    <tr style={{ height: 60 }}>
                                        <th>
                                            <label classname="fs-5" htmlfor="">
                                                Số lượng người tối đa:
                                            </label>
                                        </th>
                                        <td>
                                            <input
                                                type="text"
                                                classname="form-control"
                                                name=""
                                                placeholder="Nhập số lượng người tối đa"
                                            />
                                        </td>
                                    </tr>
                                    <tr style={{ height: 60 }}>
                                        <th>
                                            <label classname="fs-5" htmlfor="">
                                                Kiểu thuê:
                                            </label>
                                        </th>
                                        <td>
                                            <input
                                                type="text"
                                                classname="form-control "
                                                name=""
                                                placeholder="Nhập kiểu thuê"
                                            />
                                        </td>
                                    </tr>
                                    <tr style={{ height: 60 }}>
                                        <th>
                                            <label classname="fs-5" htmlfor="">
                                                Dịch vụ miễn phí đi kèm:
                                            </label>
                                        </th>
                                        <td>
                                            <input
                                                type="text"
                                                classname="form-control "
                                                name=""
                                                placeholder="Nhập dịch vụ miễn phí đi kèm"
                                            />
                                        </td>
                                    </tr>
                                    <tr style={{ height: 120 }}>
                                        <td>
                                            <button classname="btn btn-primary float-end">Xác nhận</button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </form>
                    </div>
                </div>
                <div classname="col-7 p-0">
                    <img
                        classname="w-100 h-100"
                        src="https://khunghiduong.vn/wp-content/uploads/2017/07/can-ho-1-phong-ngu-ariyana_2.jpg"
                        alt=""
                    />
                </div>
            </div>

        </>
    )
}
