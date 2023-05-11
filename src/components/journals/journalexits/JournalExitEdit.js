import { useEffect, useState } from "react"
import { editJournalExit, getJournalExitById } from "../../APIManager/JournalsManager";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import React from "react";
import { useNavigate } from "react-router-dom";

export const JournalExitEditForm = (props) => {
    const navigate = useNavigate()
    //utilizing local storage to retrieve selected journal
    const currentJournal = localStorage.getItem("current_journal")
    const currentJournalObject = JSON.parse(currentJournal)

    // TODO: Provide initial state for journal
    const [journal, update] = useState({
        id: currentJournalObject.id,
        userId: currentJournalObject.userId,
        strategyId: currentJournalObject.strategyId,
        ticker: currentJournalObject.ticker,
        purchasePrice: +currentJournalObject.purchasePrice,
        purchaseDate: currentJournalObject.purchaseDate,
        targetPrice: +currentJournalObject.targetPrice,
        notes: currentJournalObject.notes,
        initialQuantity: currentJournalObject.initialQuantity
    })


    // TODO: Get user journal info from API and update state
    useEffect(() => {
        getJournalExitById(currentJournalObject.id)
            .then((data) => {
                const journalObject = data
                update(journalObject)
            })
    }, [])


    const handleSaveButtonClick = (event) => {
        event.preventDefault()

        /*
            TODO: Perform the PUT fetch() call here to update the profile.
            Navigate user to home page when done.
            */
        editJournalExit(journal?.id, journal)
            .then(() => {
                props.onHide()
            })
            .then(() => {
                props.getAllJournalExits()
            })
        window.alert("Journal successfully updated!")
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
                    <Button variant="primary" onClick={handleSaveButtonClick}>
                        Save Exit Journal
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}
