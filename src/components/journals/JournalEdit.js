import { useEffect, useState } from "react"
import { editJournal, getJournalById } from "../APIManager/JournalsManager";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import React from "react";
import { useNavigate } from "react-router-dom";

export const JournalEditForm = (props) => {
const navigate = useNavigate()
    //utilizing local storage to retrieve selected journal
    const currentJournal = localStorage.getItem("current_journal")
    const currentJournalObject = JSON.parse(currentJournal)

    // TODO: Provide initial state for journal
    const [journal, updateJournal] = useState({
        id: currentJournalObject.id,
        title: currentJournalObject.title,
        description: currentJournalObject.description,
        rules: currentJournalObject.rules,
        risk: +currentJournalObject.risk
    })


    // TODO: Get user journal info from API and update state
    useEffect(() => {
        getJournalById(currentJournalObject.id)
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
        editJournal(journal?.id, journal)
            .then(() => {
                props.onHide()
            })
            .then(() => {
                console.log("hello")
                props.getalljournals()
            })
        window.alert("Journal successfully updated!")
    }

    return (<>

        <Modal.Header closeButton>
            <Modal.Title>Update Journal</Modal.Title>
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
                            value={journal?.title}
                            onChange={
                                (evt) => {
                                    // TODO: Update specialty property
                                    const copy = { ...journal }
                                    copy.title = evt.target.value
                                    updateJournal(copy)
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
                            value={journal?.description}
                            onChange={
                                (event) => {
                                    const copy = { ...journal }
                                    copy.description = event.target.value
                                    updateJournal(copy)
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
                            value={journal?.rules}
                            onChange={
                                (event) => {
                                    const copy = { ...journal }
                                    copy.rules = event.target.value
                                    updateJournal(copy)
                                }
                            }></textarea>
                    </div>
                </fieldset>
                <fieldset>
                    <div className="form-group">
                        <label htmlFor="risk">Risk Percentage:</label>
                        <input type="number"
                            value={journal?.risk}
                            onChange={
                                (event) => {
                                    const copy = { ...journal }
                                    copy.risk = event.target.value
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
    </>
    )
}

export const MyVerticallyCenteredJournalEditModal = (props) => {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <JournalEditForm getalljournals={props.getalljournals} onHide={props.onHide} show={props.show} />
        </Modal>
    );
}