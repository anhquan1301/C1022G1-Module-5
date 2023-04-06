// import { useEffect, useState } from "react"
// import * as listService from '../service/listService'


// export default function UserList() {
//     const [userList, setUserList] = useState([])
//     const[showUser,setShowUser] = useState(false)
//     const handleShowUser =()=>{
//         setShowUser(!showUser)
//     }
  
//     useEffect(() => {
//         const fetchApi = async () => {
//             const rs = await listService.findAll()
//             setUserList(rs)
//         }
//         fetchApi()
//     }, [])
//     const handleDelete =(id)=>{
//         const fetchApi = async () => {
//             await listService.remove(id)
//             alert("Successfully")
//             const rs = await listService.findAll()
//             setUserList(rs)
//         }
//         fetchApi()
//     }
//     let count = 1;
//     return (
//         <>
//             <h2>Users List</h2>
//             <button onClick={()=>handleShowUser()}>Get User</button>
//             { showUser &&
//                 <table className="table">
//                 <thead>
//                     <tr>
//                         <th>ID</th>
//                         <th>Name</th>
//                         <th>Email</th>
//                         <th>Website</th>
//                         <th>Action</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     { 
//                         userList.map((users) => (
//                             <tr key={users.id}>
//                                 <td scope="row">{count++}</td>
//                                 <td>{users.name}</td>
//                                 <td>{users.email}</td>
//                                 <td>{users.website}</td>
//                                 <td>
//                                     <button type="button" onClick={()=>handleDelete(users.id)}>Delete</button>
//                                 </td>
//                             </tr>
//                         ))
//                     }

//                 </tbody>
//             </table>
//             }
            
//         </>
//     )
// }