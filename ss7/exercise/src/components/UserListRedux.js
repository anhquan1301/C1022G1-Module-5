import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { deleteUser, getAllUsers, showUser } from "../action/users";

export default function UserListRedux() {
    const users = useSelector(state => state.users)
    const showUsers = useSelector(state => state.show)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllUsers())
    }, [])
    let count=1
    return (
        <>
            <h2>Users List</h2>
            <button onClick={()=>dispatch(showUser())}>Get User</button>
            { showUsers &&
                <table className="table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Website</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user) => (
                                <tr key={user.id}>
                                    <td scope="row">{count++}</td>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.website}</td>
                                    <td>
                                        <button type="button" onClick={()=>dispatch(deleteUser(user.id))}>Delete</button>
                                    </td>
                                </tr>
                            ))
                        }

                    </tbody>
                </table>
            }

        </>
    )
}