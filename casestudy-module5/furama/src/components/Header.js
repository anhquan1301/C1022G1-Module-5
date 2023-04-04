export default function Header() {
  return (
    <header>
  <nav className="header-fixed">
    <div
      style={{ backgroundColor: "#fffafa" }}
      className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 border-bottom"
    >
      <a
        href="#"
        className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none"
        style={{ marginRight: "-220px" }}
      >
        <img
          width="40px"
          style={{ marginLeft: 100 }}
          src="https://furamavietnam.com/wp-content/uploads/2018/08/logo.png"
          alt=""
        />
      </a>
      <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
        <li>
          <a
            href="#"
            className="nav-link fs-5 px-4 fw-bold text-dark text-hover"
          >
            Trang chủ
          </a>
        </li>
        <li>
          <a
            href="#"
            className="nav-link fs-5 px-4 fw-bold text-dark text-hover"
          >
            Giới thiệu
          </a>
        </li>
        <li>
          <a
            href="#"
            className="nav-link fs-5 px-4 fw-bold text-dark text-hover"
          >
            Khách sạn
          </a>
        </li>
        <li>
          <a
            href="#"
            className="nav-link fs-5 px-4 fw-bold text-dark text-hover"
          >
            Khuyến mãi
          </a>
        </li>
        <li>
          <a
            href="#"
            className="nav-link fs-5 px-4 fw-bold text-dark text-hover"
          >
            Hỗ trợ
          </a>
        </li>
        <li className="nav-item dropdown">
          <a
            className="nav-link dropdown-toggle fs-5 px-4 fw-bold text-dark text-hover"
            href="#"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Quản lí
          </a>
          <ul className="dropdown-menu" style={{ backgroundColor: "#fffafa" }}>
            <li>
              <a className="dropdown-item" href="#">
                Dịch vụ
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Khách hàng
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Hợp đồng
              </a>
            </li>
          </ul>
        </li>
      </ul>
      <div className="col-md-3 ps-5">
        <button type="button" className="btn btn-outline-dark me-2 shadow">
          Đăng nhập
        </button>
        <button
          type="button"
          className=" btn btn-dark shadow rigister-hover ms-2"
        >
          Đăng ký
        </button>
      </div>
    </div>
  </nav>
  {/* <div style={{ marginTop: 96 }}>
    
    <div id="demo" className="carousel slide" data-bs-ride="carousel">
     
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#demo"
          data-bs-slide-to={0}
          className="active"></button>
        <button type="button" data-bs-target="#demo" data-bs-slide-to={1}></button >
        <button type="button" data-bs-target="#demo" data-bs-slide-to={2}></button>
      </div>

      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src="https://phulong.com/UploadFiles/Images/LLN_PV_14_BeachPool.jpg"
            alt=""
            className="d-block"
            style={{ width: "100%", height: 600 }}
          />
          <div className="carousel-caption">
            <h2 className="text-slide text-start">KHU NGHỈ DƯỠNG ẨM THỰC </h2>
            <h2 className="text-slide text-start">
              TỌA LẠC TẠI BÃI BIỂN ĐÀ NẴNG{" "}
            </h2>
            <h2 className="text-slide text-start">
              MỘT TRONG 6 BÃI BIỂN ĐẸP NHẤT THẾ GIỚI{" "}
            </h2>
          </div>
        </div>
        <div className="carousel-item">
          <img
            src="https://cdn.azvd.asia/images/furama/draf2-m2.jpg"
            alt=""
            className="d-block"
            style={{ width: "100%", height: 600 }}
          />
          <div className="carousel-caption">
            <h2 className="text-slide text-start">KHU NGHỈ DƯỠNG ẨM THỰC </h2>
            <h2 className="text-slide text-start">
              TỌA LẠC TẠI BÃI BIỂN ĐÀ NẴNG{" "}
            </h2>
            <h2 className="text-slide text-start">
              MỘT TRONG 6 BÃI BIỂN ĐẸP NHẤT THẾ GIỚI{" "}
            </h2>
          </div>
        </div>
        <div className="carousel-item">
          <img
            src="https://seaproperty.vn/upload/images/PhuQuoc-Furama-Resort-Spa/Furama-Resort-Spa-Phu-Quoc-4.jpg"
            alt="New York"
            className="d-block"
            style={{ width: "100%", height: 600 }}
          />
          <div className="carousel-caption">
            <h2 className="text-slide text-start">KHU NGHỈ DƯỠNG ẨM THỰC </h2>
            <h2 className="text-slide text-start">
              TỌA LẠC TẠI BÃI BIỂN ĐÀ NẴNG{" "}
            </h2>
            <h2 className="text-slide text-start">
              MỘT TRONG 6 BÃI BIỂN ĐẸP NHẤT THẾ GIỚI{" "}
            </h2>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#demo"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" />
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#demo"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" />
      </button>
    </div>
  </div> */}
</header>


  )
}
