import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { createStrategy } from "../APIManager/StrategiesManager"
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';


export const StrategyForm = (props) => {
      
    /*
        TODO: Add the correct default properties to the
        initial state object
    */
    const [strategy, update] = useState({

        title: "",
        description: "",
        rules: "",
        risk: 0
    })

    const [feedback, setFeedback] = useState("")

    useEffect(() => {
        if (feedback !== "") {
            // Clear feedback to make entire element disappear after 3 seconds
            setTimeout(() => setFeedback(""), 3000);
        }
    }, [feedback])
    /*
        TODO: Use the useNavigation() hook so you can redirect
        the user to the ticket list
    */
    const navigate = useNavigate()
    
    const localAuthorizedUser = localStorage.getItem("authorized_user")
    const authorizedUserObject = JSON.parse(localAuthorizedUser)
    
    const handleSaveButtonClick = (event) => {
        event.preventDefault()
        // TODO: Create the object to be saved to the API
        const strategyToSendToAPI = {
            userId: authorizedUserObject.id,
            title: strategy.title,
            description: strategy.description,
            rules: strategy.rules,
            risk: +strategy.risk
        }

        // TODO: Perform the fetch() to POST the object to the API
        return createStrategy(strategyToSendToAPI)
        .then(() => {
            update({
                title: "",
                description: "",
                rules: "",
                risk: 0
            })
        })
        // .then(() => {
            //     setFeedback("Profile successfully saved")
            // })
            .then(() => {
                props.onHide()
            })
            }
            
            
            return (
                <>
            <Modal.Header closeButton>
                <Modal.Title>New Strategy</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <div className={`${feedback.includes("Error") ? "error" : "feedback"} ${feedback === "" ? "invisible" : "visible"}`}>
                    {feedback}
                </div>
                <form className="startegyForm">

                    <fieldset>
                        <div className="form-group">
                            <label htmlFor="title">Title:</label>
                            <input
                                required autoFocus
                                type="text"
                                className="form-control"
                                value={strategy.title}
                                onChange={
                                    (evt) => {
                                        // TODO: Update specialty property
                                        const copy = { ...strategy }
                                        copy.title = evt.target.value
                                        update(copy)
                                    }
                                } />
                        </div>
                    </fieldset>
                    <fieldset>
                        <div className="form-group">
                            <label htmlFor="description">Description:</label>
                            <textarea
                                required autoFocus
                                type="text"
                                style={{
                                    height: "10rem"
                                }}
                                className="form-control"
                                value={strategy.description}
                                onChange={
                                    (event) => {
                                        const copy = { ...strategy }
                                        copy.description = event.target.value
                                        update(copy)
                                    }
                                }></textarea>
                        </div>
                    </fieldset>
                    <fieldset>
                        <div className="form-group">
                            <label htmlFor="rules">Rules:</label>
                            <textarea
                                required autoFocus
                                type="text"
                                style={{
                                    height: "10rem"
                                }}
                                className="form-control"
                                value={strategy.rules}
                                onChange={
                                    (event) => {
                                        const copy = { ...strategy }
                                        copy.rules = event.target.value
                                        update(copy)
                                    }
                                }></textarea>
                        </div>
                    </fieldset>
                    <fieldset>
                        <div className="form-group">
                            <label htmlFor="risk">Risk Percentage:</label>
                            <input type="number"
                                value={strategy.risk}
                                onChange={
                                    (event) => {
                                        const copy = { ...strategy }
                                        copy.risk = event.target.value
                                        update(copy)
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
                  Save New Strategy
                </Button>
              </Modal.Footer>
        </>
    )
}


export const MyVerticallyCenteredModal= (props) => {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <StrategyForm onHide={props.onHide} show={props.show} />
      </Modal>
    );
  }