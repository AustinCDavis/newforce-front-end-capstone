import { useEffect, useState } from "react"
import { editStrategy, getStrategyById } from "../APIManager/StrategiesManager";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import React from "react";

export const StrategyEditForm = (props) => {

    //utilizing local storage to retrieve selected strategy
    const currentStrategy = localStorage.getItem("current_strategy")
    const currentStrategyObject = JSON.parse(currentStrategy)

    // TODO: Provide initial state for strategy
    const [strategy, updateStrategy] = useState({
        id: currentStrategyObject.id,
        title: currentStrategyObject.title,
        description: currentStrategyObject.description,
        rules: currentStrategyObject.rules,
        risk: +currentStrategyObject.risk
    })
    

    // TODO: Get user strategy info from API and update state
    useEffect(() => {
        getStrategyById(currentStrategyObject.id)
        .then((data) => {
            const strategyObject = data
            updateStrategy(strategyObject)
        })
}, [])


const handleSaveButtonClick = (event) => {
    event.preventDefault()

    /*
        TODO: Perform the PUT fetch() call here to update the profile.
        Navigate user to home page when done.
        */
       editStrategy(strategy?.id, strategy)
       .then(() => {
           props.onHide()
        })
        window.alert("Startegy successfully updated!")
}

return (<>
    
<Modal.Header closeButton>
                <Modal.Title>Update Strategy</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <form className="startegyForm">

                    <fieldset>
                        <div className="form-group">
                            <label htmlFor="title">Title:</label>
                            <input
                                required autoFocus
                                type="text"
                                className="form-control"
                                value={strategy?.title}
                                onChange={
                                    (evt) => {
                                        // TODO: Update specialty property
                                        const copy = { ...strategy }
                                        copy.title = evt.target.value
                                        updateStrategy(copy)
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
                                value={strategy?.description}
                                onChange={
                                    (event) => {
                                        const copy = { ...strategy }
                                        copy.description = event.target.value
                                        updateStrategy(copy)
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
                                value={strategy?.rules}
                                onChange={
                                    (event) => {
                                        const copy = { ...strategy }
                                        copy.rules = event.target.value
                                        updateStrategy(copy)
                                    }
                                }></textarea>
                        </div>
                    </fieldset>
                    <fieldset>
                        <div className="form-group">
                            <label htmlFor="risk">Risk Percentage:</label>
                            <input type="number"
                                value={strategy?.risk}
                                onChange={
                                    (event) => {
                                        const copy = { ...strategy }
                                        copy.risk = event.target.value
                                        updateStrategy(copy)
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
                <Button variant="primary" onClick={((clickEvent) => handleSaveButtonClick(clickEvent))}>
                  Update Strategy
                </Button>
              </Modal.Footer>
</>
)
}

export const MyVerticallyCenteredStrategyEditModal= (props) => {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <StrategyEditForm onHide={props.onHide} show={props.show} />
      </Modal>
    );
  }