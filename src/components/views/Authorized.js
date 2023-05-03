import { Navigate, useLocation } from "react-router-dom"

export const Authorized = ({ children }) => {
    const location = useLocation()

    if (localStorage.getItem("authorized_user")) {
        return children
    }
    else {
        return <Navigate
            to={`/`}
            replace
            state={{ location }} />
    }
}
