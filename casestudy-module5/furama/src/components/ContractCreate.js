export default function ContractCreate() {
    return (
        <>
            <div style={{ marginTop: 96 }}>
                <div classname="row mx-0">
                    <div classname="text-center text-danger">
                        <h2>Thêm Mới Hợp Đồng</h2>
                    </div>
                    <div classname="d-flex justify-content-center mt-3">
                        <form action="">
                            <table classname="" style={{ width: 500 }}>
                                <tbody>
                                    <tr style={{ height: 60 }}>
                                        <th>
                                            <label classname="fs-5" htmlfor="">
                                                Mã hợp đồng:{" "}
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
                                                Ngày bắt đầu:{" "}
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
                                                Ngày kết thúc:{" "}
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
                                                Số tiền cọc trước:{" "}
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
                                                Tổng số tiền thanh toán:{" "}
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
                                        <td>
                                            <button classname="btn btn-primary float-end">Xác nhận</button>
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