import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { createJournalExit } from "../../APIManager/JournalsManager"
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';


export const JournalExitForm = (props) => {

    /*
        TODO: Add the correct default properties to the
        initial state object
    */
    const [journal, update] = useState({

            userId: 0,
            strategyId: 0,
            ticker: "",
            soldDate: "",
            soldPrice: 0,
            targetPrice: 0,
            results: "",
            soldQuantity: 0,
            currentQuantity: 0,
            targetPriceHit: null

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

    const currentJournal = localStorage.getItem("current_journal")
    const currentJournalObject = JSON.parse(currentJournal)

    const handleSaveButtonClick = (event) => {
        event?.preventDefault()
        // TODO: Create the object to be saved to the API
        const journalToSendToAPI = {
            userId: authorizedUserObject.id,
            strategyId: currentStrategyObject.id,
            entryId: currentJournalObject.id,
            ticker: currentJournalObject.ticker,
            soldDate: journal.soldDate,
            soldPrice: +journal.soldPrice,
            results: journal.results,
            soldQuantity: +journal.soldQuantity,
            currentQuantity: +(currentJournalObject.initialQuantity - journal.currentQuantity),
            targetPriceHit: journal.targetPriceHit

        }

        // TODO: Perform the fetch() to POST the object to the API
        return createJournalExit(journalToSendToAPI)
            .then(() => {
                update({
                    userId: 0,
                    strategyId: 0,
                    entryId: 0,
                    ticker: "",
                    soldDate: "",
                    soldPrice: 0,
                    targetPrice: 0,
                    results: "",
                    soldQuantity: 0,
                    currentQuantity: 0,
                    targetPriceHit: null
                })
            })
            .then(() => {
                props.onHide();
            })
    }

    const saveButtonClick = () => {
        handleSaveButtonClick();
        props.getAllJournalExits();
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
                <Modal.Title>New Exit Journal</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className={`${feedback.includes("Error") ? "error" : "feedback"} ${feedback === "" ? "invisible" : "visible"}`}>
                    {feedback}
                </div>
                <form className="journalForm">

                    <header>
                        {<div className="form-group">
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
                        </div>}
                    </header>
                    <fieldset>
                    <div className="form-group">
                            <label htmlFor="soldPrice">Sold Price:</label>
                            <input
                                required autoFocus
                                type="number"
                                min="0" 
                                step="any"
                                className="form-control"
                                value={journal.soldPrice}
                                onChange={
                                    (evt) => {
                                        // TODO: Update specialty property
                                        const copy = { ...journal }
                                        copy.soldPrice = evt.target.value
                                        update(copy)
                                    }
                                } />
                        </div>
                    </fieldset>
                    <fieldset>
                    <div className="form-group">
                            <label htmlFor="soldDate">Sold Date:</label>
                            <input
                                required autoFocus
                                type="date"
                                className="form-control"
                                value={journal.soldDate}
                                onChange={
                                    (evt) => {
                                        // TODO: Update specialty property
                                        const copy = { ...journal }
                                        copy.soldDate = evt.target.value
                                        update(copy)
                                    }
                                } />
                        </div>
                    </fieldset>
                    <fieldset>
                        <div className="form-group">
                            <label htmlFor="resultss">Results:</label>
                            <textarea
                                required autoFocus
                                type="text"
                                style={{
                                    height: "10rem"
                                }}
                                className="form-control"
                                value={journal.results}
                                onChange={
                                    (event) => {
                                        const copy = { ...journal }
                                        copy.results = event.target.value
                                        update(copy)
                                    }
                                }></textarea>
                        </div>
                    </fieldset>
                    <fieldset>
                        <div className="form-group">
                            <label htmlFor="soldQuantity">Sold Quantity:</label>
                            <input type="number"
                                value={journal.soldQuantity}
                                onChange={
                                    (event) => {
                                        const copy = { ...journal }
                                        copy.soldQuantity = event.target.value
                                        update(copy)
                                    }
                                } />
                        </div>
                    </fieldset>
                    <fieldset>
                        <div className="form-group">
                            <label htmlFor="targetPriceHit">Was Target Price Hit?</label>
                            <input type="checkbox"
                                value={journal.targetPriceHit}
                                onChange={
                                    (event) => {
                                        const copy = { ...journal }
                                        copy.targetPriceHit = event.target.value
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
                    Save Exit Journal
                </Button>
            </Modal.Footer>
            </Modal>
        </>
    )
}
