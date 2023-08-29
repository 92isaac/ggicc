import LoadingRedirect from "../utils/LoadingRedirect"
import { auth } from "../config/firebase"
import { ReactNode } from "react"

const ProtectedRoute = ({children}: {children:ReactNode}) => {

    return (
        auth.currentUser
            ? children
            : <LoadingRedirect />
    )
}
export default ProtectedRoute