import { useEffect, useState } from "react"
import { getUserById, editUser } from "../APIManager/UsersManager"
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import React from "react";

export const UserForm = (props) => {
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
    
    //Profile update alert function
    function ProfileUpdateAlert() {
            return (
                
                <Alert variant="secondary" dismissible>
                <Alert.Heading>Changes Made</Alert.Heading>
                    <p>You recently made changes to your profile!</p>
                        <hr />
                    <p>Nice job staying up to date!</p>
            </Alert>
        )
    }

    // TODO: Get user profile info from API and update state
    useEffect(() => {
        getUserById(authorizedUserObject.id)
        .then((data) => {
            const userObject = data[0]
            updateprofile(userObject)
        })
}, [])


const handleSaveButtonClick = (event) => {
    event.preventDefault()

    /*
        TODO: Perform the PUT fetch() call here to update the profile.
        Navigate user to home page when done.
    */
   editUser(profile)
   .then(() => {
       props.onHide()
       ProfileUpdateAlert()
    })
}

return (<>
    
<Modal.Header closeButton>
                <Modal.Title>Update Profile</Modal.Title>
              </Modal.Header>
              <Modal.Body>
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
        </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={props.onHide}>
                  Close
                </Button>
                <Button variant="primary" onClick={(clickEvent) => handleSaveButtonClick(clickEvent)}>
                  Update Profile
                </Button>
              </Modal.Footer>
</>
)
}

export const MyVerticallyCenteredProfileModal= (props) => {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <UserForm onHide={props.onHide} show={props.show} />
      </Modal>
    );
  }