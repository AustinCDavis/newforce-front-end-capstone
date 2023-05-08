import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { createJournal } from "../APIManager/JournalsManager"
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';


export const JournalForm = (props) => {

    /*
        TODO: Add the correct default properties to the
        initial state object
    */
    const [journal, update] = useState({

            ticker: "",
            purchasePrice: 0,
            purchaseDate: "",
            targetPrice: 0,
            notes: ""
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

    const currentStrategy = localStorage.getItem("current_strategy")
    const currentStrategyObject = JSON.parse(currentStrategy)

    const handleSaveButtonClick = (event) => {
        event?.preventDefault()
        // TODO: Create the object to be saved to the API
        const journalToSendToAPI = {
            userId: authorizedUserObject.id,
            strategyId: currentStrategyObject.id,
            ticker: journal.ticker,
            purchasePrice: +journal.purchasePrice,
            purchaseDate: journal.purchaseDate,
            targetPrice: +journal.targetPrice,
            notes: journal.notes
        }

        // TODO: Perform the fetch() to POST the object to the API
        return createJournal(journalToSendToAPI)
            .then(() => {
                update({
                ticker: "",
                purchasePrice: 0,
                purchaseDate: "",
                targetPrice: 0,
                notes: ""
                })
            })
            .then(() => {
                props.onHide();
            })
    }

    const saveButtonClick = () => {
        handleSaveButtonClick();
        props.getAllJournals();
    }

    return (
        <>
            <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title>New Journal</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className={`${feedback.includes("Error") ? "error" : "feedback"} ${feedback === "" ? "invisible" : "visible"}`}>
                    {feedback}
                </div>
                <form className="journalForm">

                    <fieldset>
                        <div className="form-group">
                            <label htmlFor="tickier">Ticker:</label>
                            <input
                                required autoFocus
                                type="text"
                                className="form-control"
                                value={journal.ticker}
                                onChange={
                                    (evt) => {
                                        // TODO: Update specialty property
                                        const copy = { ...journal }
                                        copy.ticker = evt.target.value
                                        update(copy)
                                    }
                                } />
                        </div>
                    </fieldset>
                    <fieldset>
                    <div className="form-group">
                            <label htmlFor="purchasePrice">Purchase Price:</label>
                            <input
                                required autoFocus
                                type="number"
                                min="0" 
                                step="any"
                                className="form-control"
                                value={journal.purchasePrice}
                                onChange={
                                    (evt) => {
                                        // TODO: Update specialty property
                                        const copy = { ...journal }
                                        copy.purchasePrice = evt.target.value
                                        update(copy)
                                    }
                                } />
                        </div>
                    </fieldset>
                    <fieldset>
                    <div className="form-group">
                            <label htmlFor="purchaseDate">Purchase Date:</label>
                            <input
                                required autoFocus
                                type="text"
                                className="form-control"
                                value={journal.purchaseDate}
                                onChange={
                                    (evt) => {
                                        // TODO: Update specialty property
                                        const copy = { ...journal }
                                        copy.purchaseDate = evt.target.value
                                        update(copy)
                                    }
                                } />
                        </div>
                    </fieldset>
                    <fieldset>
                        <div className="form-group">
                            <label htmlFor="notes">Notes:</label>
                            <textarea
                                required autoFocus
                                type="text"
                                style={{
                                    height: "10rem"
                                }}
                                className="form-control"
                                value={journal.notes}
                                onChange={
                                    (event) => {
                                        const copy = { ...journal }
                                        copy.notes = event.target.value
                                        update(copy)
                                    }
                                }></textarea>
                        </div>
                    </fieldset>
                    <fieldset>
                        <div className="form-group">
                            <label htmlFor="targetPrice">Target Price:</label>
                            <input type="number"
                                value={journal.targetPrice}
                                onChange={
                                    (event) => {
                                        const copy = { ...journal }
                                        copy.targetPrice = event.target.value
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
                <Button variant="primary" onClick={saveButtonClick}>
                    Save New Journal
                </Button>
            </Modal.Footer>
            </Modal>
        </>
    )
}
