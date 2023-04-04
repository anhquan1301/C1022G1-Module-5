import facilitiesList from "./facility";

export default function FacilityList() {
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
                <h2 className="text-center fw-bold pt-4">Danh Sách Tất Cả Các Phòng</h2>
            </div>
            <div>
                <button className="btn btn-dark" style={{ marginLeft: 130 }}>
                    Thêm Cơ Sở Mới
                </button>
            </div>
            <div className="row mx-0 mt-3 py-1" style={{ padding: "0 100px" }}>
                {
                    facilitiesList.map((facilities, index) => (
                        <div className="col-4 d-flex justify-content-center pt-5 pb-5">
                            <div className="card shadow" style={{ width: 380 }}>
                                <img
                                    src={facilities.img}
                                    className="card-img-top"
                                    alt="..."
                                />
                                <div className="card-body">
                                    <h5 className="card-title">{facilities.name}</h5>
                                    <p className="card-text">Diện tích phòng: {facilities.area} </p>
                                    <button>Chỉnh sửa</button>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </>
    )
}
