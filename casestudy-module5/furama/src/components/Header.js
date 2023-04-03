export default function Header() {
  return (
    <header>
      <nav classname="header-fixed">
        <div
          style={{ backgroundColor: "#fffafa" }}
          classname="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 border-bottom"
        >
          <a
            href="#"
            classname="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none"
            style={{ marginRight: "-220px" }}
          >
            <img
              width="40px"
              style={{ marginLeft: 100 }}
              src="https://furamavietnam.com/wp-content/uploads/2018/08/logo.png"
              alt=""
            />
          </a>
          <ul classname="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
            <li>
              <a
                href="#"
                classname="nav-link fs-5 px-4 fw-bold text-dark text-hover"
              >
                Trang chủ
              </a>
            </li>
            <li>
              <a
                href="#"
                classname="nav-link fs-5 px-4 fw-bold text-dark text-hover"
              >
                Giới thiệu
              </a>
            </li>
            <li>
              <a
                href="#"
                classname="nav-link fs-5 px-4 fw-bold text-dark text-hover"
              >
                Khách sạn
              </a>
            </li>
            <li>
              <a
                href="#"
                classname="nav-link fs-5 px-4 fw-bold text-dark text-hover"
              >
                Khuyến mãi
              </a>
            </li>
            <li>
              <a
                href="#"
                classname="nav-link fs-5 px-4 fw-bold text-dark text-hover"
              >
                Hỗ trợ
              </a>
            </li>
            <li classname="nav-item dropdown">
              <a
                classname="nav-link dropdown-toggle fs-5 px-4 fw-bold text-dark text-hover"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Quản lí
              </a>
              <ul classname="dropdown-menu" style={{ backgroundColor: "#fffafa" }}>
                <li>
                  <a classname="dropdown-item" href="#">
                    Dịch vụ
                  </a>
                </li>
                <li>
                  <a classname="dropdown-item" href="#">
                    Khách hàng
                  </a>
                </li>
                <li>
                  <a classname="dropdown-item" href="#">
                    Hợp đồng
                  </a>
                </li>
              </ul>
            </li>
          </ul>
          <div classname="col-md-3 ps-5">
            <button type="button" classname="btn btn-outline-dark me-2 shadow">
              Đăng nhập
            </button>
            <button
              type="button"
              classname=" btn btn-dark shadow rigister-hover ms-2"
            >
              Đăng ký
            </button>
          </div>
        </div>
      </nav>
      <div style={{ marginTop: 96 }}>
        <div id="demo" classname="carousel slide" data-bs-ride="carousel">
          <div classname="carousel-indicators">
            <button
              type="button"
              data-bs-target="#demo"
              data-bs-slide-to={0}
              classname="active"
            />
            <button type="button" data-bs-target="#demo" data-bs-slide-to={1} />
            <button type="button" data-bs-target="#demo" data-bs-slide-to={2} />
          </div>
          <div classname="carousel-inner">
            <div classname="carousel-item active">
              <img
                src="https://phulong.com/UploadFiles/Images/LLN_PV_14_BeachPool.jpg"
                alt=""
                classname="d-block"
                style={{ width: "100%", height: 600 }}
              />
              <div classname="carousel-caption">
                <h2 classname="text-slide text-start">KHU NGHỈ DƯỠNG ẨM THỰC </h2>
                <h2 classname="text-slide text-start">
                  TỌA LẠC TẠI BÃI BIỂN ĐÀ NẴNG
                </h2>
                <h2 classname="text-slide text-start">
                  MỘT TRONG 6 BÃI BIỂN ĐẸP NHẤT THẾ GIỚI
                </h2>
              </div>
            </div>
            <div classname="carousel-item">
              <img
                src="https://cdn.azvd.asia/images/furama/draf2-m2.jpg"
                alt=""
                classname="d-block"
                style={{ width: "100%", height: 600 }}
              />
              <div classname="carousel-caption">
                <h2 classname="text-slide text-start">KHU NGHỈ DƯỠNG ẨM THỰC </h2>
                <h2 classname="text-slide text-start">
                  TỌA LẠC TẠI BÃI BIỂN ĐÀ NẴNG
                </h2>
                <h2 classname="text-slide text-start">
                  MỘT TRONG 6 BÃI BIỂN ĐẸP NHẤT THẾ GIỚI
                </h2>
              </div>
            </div>
            <div classname="carousel-item">
              <img
                src="https://seaproperty.vn/upload/images/PhuQuoc-Furama-Resort-Spa/Furama-Resort-Spa-Phu-Quoc-4.jpg"
                alt="New York"
                classname="d-block"
                style={{ width: "100%", height: 600 }}
              />
              <div classname="carousel-caption">
                <h2 classname="text-slide text-start">KHU NGHỈ DƯỠNG ẨM THỰC </h2>
                <h2 classname="text-slide text-start">
                  TỌA LẠC TẠI BÃI BIỂN ĐÀ NẴNG
                </h2>
                <h2 classname="text-slide text-start">
                  MỘT TRONG 6 BÃI BIỂN ĐẸP NHẤT THẾ GIỚI
                </h2>
              </div>
            </div>
          </div>
          <button
            classname="carousel-control-prev"
            type="button"
            data-bs-target="#demo"
            data-bs-slide="prev"
          >
            <span classname="carousel-control-prev-icon" />
          </button>
          <button
            classname="carousel-control-next"
            type="button"
            data-bs-target="#demo"
            data-bs-slide="next"
          >
            <span classname="carousel-control-next-icon" />
          </button>
        </div>
      </div>
    </header>

  )
}
