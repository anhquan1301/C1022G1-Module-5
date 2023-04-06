import { NavLink } from 'react-router-dom';
import { contractList } from '../data/contract';
import customerList from '../data/customer';
import facilitiesList from '../data/facility';

export default function ContractList() {
    let count = 1;
    return (
        <>
            <div className="row mx-0" style={{ marginTop: 96 }}>
                <img
                    className="img-fluid px-0"
                    style={{ height: 400 }}
                    src="https://cdn.azvd.asia/images/furama/draf1-2.jpg"
                    alt=""
                />
            </div>
            <div>
                <h2 className="text-center fw-bold pt-4">Danh Sách Tất Cả Các Hợp Đồng</h2>
            </div>
            <div>
                <NavLink className="ms-5 btn btn-dark" to='/contract-create'>Thêm Hợp Đồng Mới</NavLink>
            </div>
            <div className="row mx-0 mt-3 px-5 py-1">
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>STT</th>
                            <th>Mã hợp đồng</th>
                            <th>Tên khách hàng</th>
                            <th>Tên dịch vụ</th>
                            <th>Ngày bắt đầu</th>
                            <th>Ngày kết thúc</th>
                            
                            <th>Số tiền cọc trước</th>
                            <th>Tổng số tiền thanh toán</th>
                            <th />
                            <th />
                        </tr>
                    </thead>
                    <tbody>
                        {contractList.map((contracts) => (
                            <tr key={contracts.contractCode}>
                                <td scope="row">{count++}</td>
                                <td>{contracts.contractCode}</td>
                                <td>{customerList.filter((customer)=>(
                                    customer.id==contracts.customerInfo
                                ))[0].name}</td>
                                <td>{facilitiesList.filter((facilities)=>(
                                    facilities.id==contracts.facilityInfo
                                ))[0].name}</td>
                                <td>{contracts.dateStart}</td>
                                <td>{contracts.dateEnd}</td>
                                <td>{contracts.price}</td>
                                <td>{contracts.totalPrice}</td>
                                <td>
                                    <button>Chỉnh sửa</button>
                                </td>
                                <td>
                                    <button>Xóa</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}