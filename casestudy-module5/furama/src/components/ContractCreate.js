export default function ContractCreate() {
    return (
        <>
            <div style="margin-top: 96px;">
                <div className="row mx-0">
                    <div className="text-center text-danger">
                        <h2>
                            Thêm Mới Hợp Đồng
                        </h2>
                    </div>
                    <div className="d-flex justify-content-center mt-3">
                        <form action="" >
                            <table className="" style="width: 500px;">
                                <tr style="height: 60px;">
                                    <th >
                                        <label className="fs-5" htmlFor="">Mã hợp đồng: </label>
                                    </th>
                                    <td>
                                        <input type="text" className="form-control " name="" placeholder="" />
                                    </td>
                                </tr>
                                <tr style="height: 60px;">
                                    <th>
                                        <label className="fs-5" htmlFor="">Ngày bắt đầu: </label>
                                    </th>
                                    <td>
                                        <input type="text" className="form-control" name="" placeholder="" />
                                    </td>
                                </tr>
                                <tr style="height: 60px;">
                                    <th>
                                        <label className="fs-5" htmlFor="">Ngày kết thúc: </label>
                                    </th>
                                    <td>
                                        <input type="text" className="form-control" name="" placeholder="" />
                                    </td>
                                </tr>
                                <tr style="height: 60px;">
                                    <th>
                                        <label className="fs-5" htmlFor="">Số tiền cọc trước: </label>
                                    </th>
                                    <td>
                                        <input type="text" className="form-control" name="" placeholder="" />
                                    </td>
                                </tr>
                                <tr style="height: 60px;">
                                    <th>
                                        <label className="fs-5" htmlFor="">Tổng số tiền thanh toán: </label>
                                    </th>
                                    <td>
                                        <input type="text" className="form-control " name="" placeholder="" />
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
            </div>
        </>
    )
}