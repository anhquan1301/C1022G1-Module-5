import * as bookList from '../service/bookService'
export default function ModalDelete(props) {
    const handleDelete=(id)=>{
        bookList.remove(id).then(()=> {
            props.getList()
        })
       
    }
    return (
        <>
            <div
                className="modal fade"
                id="exampleModal"
                tabIndex={-1}
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">
                                Xóa
                            </h1>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            />
                        </div>
                        <div className="modal-body">Bạn có chắc chắn muốn <span>{props.name}</span> xóa</div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-secondary"
                                data-bs-dismiss="modal"
                            >
                                Hủy
                            </button>
                            <button type="button"   data-bs-dismiss="modal" className="btn btn-primary" onClick={()=>{handleDelete(props.id)}}>
                                Xác nhận
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}