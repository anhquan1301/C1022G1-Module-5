import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import * as facilities from '../service/facilityService'

export default function FacilityList() {
    let listFacility = ['Phòng', 'Biệt thự', 'Căn hộ', 'Tất cả dịch vụ']
    const [facility, setFacility] = useState('')
    const [facilitiesList, setFacilitiesList] = useState([])
    useEffect(()=>{
        const fecthApi = async()=>{
            const rs = await facilities.findAll()
            setFacilitiesList(rs)
            console.log(rs)
            console.log(facilitiesList)
        }
        fecthApi()
    },[])
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
                <h2 className="text-center fw-bold pt-4">Danh Sách Tất Cả Các Dịch Vụ</h2>
            </div>
            <div>
                <NavLink className="btn btn-dark" style={{ marginLeft: 120 }} to='/facility-create'>
                    Thêm Cơ Sở Dịch Vụ Mới
                </NavLink>
                <span className="dropdown text-center float-end" style={{ paddingRight: 115 }}>
                    <button
                        className="btn btn-secondary dropdown-toggle"
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                    >
                        Danh sách dịch vụ
                    </button>
                    <ul className="dropdown-menu">
                        {
                            listFacility.map((facilities, index) => (
                                <li>
                                    <a key={index} className="dropdown-item" onClick={() => {
                                        setFacility(facilities)
                                    }}>
                                        {facilities}
                                    </a>
                                </li>
                            )
                            )
                        }
                    </ul>
                </span>
            </div>
            <div className="row mx-0 mt-3 py-1" style={{ padding: "0 100px" }}>
                {
                    facilitiesList.map((facilities, index) => (
                            <div  className="col-4 d-flex justify-content-center" key={index}>
                            <div className= "card shadow mb-5 mt-2" style={facilities.name.includes(facility.toUpperCase()) ? {} : facility==='Tất cả dịch vụ' ? {} : {display:'none'}}>
                                <img
                                    src={facilities.img}
                                    className="card-img-top w-100 h-100"
                                    alt="..."
                                />
                                <div className="card-body">
                                    <h5 className="card-title">{facilities.name}</h5>
                                    <p className="card-text">Diện tích phòng: {facilities.area} </p>
                                    <button className="btn btn-primary"><i className="ti-pencil-alt"></i></button>
                                    <button className="btn btn-danger ms-2"><i className="ti-trash"></i></button>
                                    <button className="float-end btn"><i className="ti-info fs-3 fw-bold"></i></button>
                                    
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </>
    )
}
