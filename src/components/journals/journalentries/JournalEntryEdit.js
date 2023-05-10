import { useEffect, useState } from "react"
import { editJournalEntry, getJournalEntryById } from "../../APIManager/JournalsManager";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import React from "react";
import { useNavigate } from "react-router-dom";

export const JournalEntryEditForm = (props) => {
    const navigate = useNavigate()
    //utilizing local storage to retrieve selected journal
    const currentJournal = localStorage.getItem("current_journal")
    const currentJournalObject = JSON.parse(currentJournal)

    // TODO: Provide initial state for journal
    const [journal, updateJournal] = useState({
        id: currentJournalObject.id,
        userId: currentJournalObject.userId,
        strategyId: currentJournalObject.strategyId,
        ticker: currentJournalObject.ticker,
        purchasePrice: +currentJournalObject.purchasePrice,
        purchaseDate: currentJournalObject.purchaseDate,
        targetPrice: +currentJournalObject.targetPrice,
        notes: currentJournalObject.notes,
        purchaseQuantity: currentJournalObject.purchaseQuantity
    })


    // TODO: Get user journal info from API and update state
    useEffect(() => {
        getJournalEntryById(currentJournalObject.id)
            .then((data) => {
                const journalObject = data
                updateJournal(journalObject)
            })
    }, [])


    const handleSaveButtonClick = (event) => {
        event.preventDefault()

        /*
            TODO: Perform the PUT fetch() call here to update the profile.
            Navigate user to home page when done.
            */
        editJournalEntry(journal?.id, journal)
            .then(() => {
                props.onHide()
            })
            .then(() => {
                props.getalljournals()
            })
        window.alert("Journal successfully updated!")
    }

    return (<>
    <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered>
        <Modal.Header closeButton>
            <Modal.Title>Update Journal</Modal.Title>
        </Modal.Header>
        <Modal.Body>
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
                                    updateJournal(copy)
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
                                    updateJournal(copy)
                                }
                            } />
                    </div>
                </fieldset>
                <fieldset>
                    <div className="form-group">
                        <label htmlFor="purchaseDate">Purchase Date:</label>
                        <input
                            required autoFocus
                            type="date"
                            className="form-control"
                            value={journal.purchaseDate}
                            onChange={
                                (evt) => {
                                    // TODO: Update specialty property
                                    const copy = { ...journal }
                                    copy.purchaseDate = evt.target.value
                                    updateJournal(copy)
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
                                    updateJournal(copy)
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
                                    updateJournal(copy)
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
                Update Journal
            </Button>
        </Modal.Footer>
        </Modal>
    </>
    )
}
