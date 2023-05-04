import { useEffect, useState } from "react"
import { getUserById, editUser } from "../APIManager/UsersManager"

export const UserForm = () => {
  // TODO: Provide initial state for profile
  const [profile, updateprofile] = useState({
    id: 0,
    fullName: "",
    userName: "",
    email: "",
    password: "",
})

const localAuthorizedUser = localStorage.getItem("authorized_user")
const authorizedUserObject = JSON.parse(localAuthorizedUser)

// TODO: Get user profile info from API and update state
useEffect(() => {
    getUserById(authorizedUserObject.id)
    .then((data) => {
        const userObject = data[0]
        updateprofile(userObject)
    })
}, [])

const [feedback, setFeedback] = useState("")

useEffect(() => {
    if (feedback !== "") {
        // Clear feedback to make entire element disappear after 3 seconds
        setTimeout(() => setFeedback(""), 3000);
    }
}, [feedback])

const handleSaveButtonClick = (event) => {
    event.preventDefault()

    /*
        TODO: Perform the PUT fetch() call here to update the profile.
        Navigate user to home page when done.
    */
   editUser(profile)
   .then(() => {
    setFeedback("Profile successfully saved")
    })
}



return (<>

<div class="modal-body">
<div className={`${feedback.includes("Error") ? "error" : "feedback"} ${feedback === "" ? "invisible" : "visible"}`}>
{feedback}
</div>
    <form className="profile">
        <fieldset>
            <div className="form-group">
                <label htmlFor="specialty">Name:</label>
                <input
                    required autoFocus
                    type="text"
                    className="form-control"
                    value={profile.fullName}
                    onChange={
                        (evt) => {
                            // TODO: Update specialty property
                            const copy = {...profile}
                            copy.fullName = evt.target.value
                            updateprofile(copy)
                        }
                    } />
            </div>
        </fieldset>
        
        <fieldset>
            <div className="form-group">
                <label htmlFor="name">Email:</label>
                <input type="text"
                    className="form-control"
                    value={profile.email}
                    onChange={
                        (evt) => {
                            // TODO: Update rate property
                            const copy = {...profile}
                            copy.email = evt.target.value
                            updateprofile(copy)
                        }
                    } />
            </div>
        </fieldset>
        <fieldset>
            <div className="form-group">
                <label htmlFor="specialty">Username:</label>
                <input
                    required autoFocus
                    type="text"
                    className="form-control"
                    value={profile.userName}
                    onChange={
                        (evt) => {
                            // TODO: Update specialty property
                            const copy = {...profile}
                            copy.userName = evt.target.value
                            updateprofile(copy)
                        }
                    } />
            </div>
        </fieldset>
        <fieldset>
            <div className="form-group">
                <label htmlFor="specialty">Password:</label>
                <input
                    required autoFocus
                    type="password"
                    className="form-control"
                    value={profile.password}
                    onChange={
                        (evt) => {
                            // TODO: Update specialty property
                            const copy = {...profile}
                            copy.password = evt.target.value
                            updateprofile(copy)
                        }
                    } />
            </div>
        </fieldset>
            </form>
</div>
        <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button
                type="button" 
                class="btn btn-primary"
                onClick={(clickEvent) => handleSaveButtonClick(clickEvent)}
                className="btn btn-primary">
                Save Profile
            </button>                            
        </div>
</>
)
}