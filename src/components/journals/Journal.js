import { Link, json } from "react-router-dom";
import { deleteJournal, editJournal } from "../APIManager/JournalsManager";
import "./Journal.css"
import { Button } from "react-bootstrap";
import React, { useState } from "react";
import { MyVerticallyCenteredJournalEditModal } from "./JournalEdit";

export const JournalLayout = ({ journalObject, id, currentUser, getAllJournals }) => {

    const [modalShow, setModalShow] = React.useState(false);

    function captureCurrentJournal() {
        localStorage.setItem("current_journal", JSON.stringify({
            id: journalObject.id,
            userId: journalObject.userId,
            title: journalObject.title,
            description: journalObject.description,
            rules: journalObject.rules,
            risk: +journalObject.risk
        }))
    }

    const editButtonClick = () => {
        setModalShow(true);
        captureCurrentJournal();
        getAllJournals();
    }

    const deleteButtonClick = () => {
        deleteJournal(journalObject.id);
        getAllJournals();
    }

    return (<>
        <MyVerticallyCenteredJournalEditModal
            show={modalShow}
            onHide={() => setModalShow(false)}
        />
        <section className="journal">
            <header className="header">
                <Link to={`/journals/${id}`}>{journalObject.title}</Link>
                <Button id="editButton" variant="secondary" onClick={editButtonClick}>Edit</Button>
                <Button id="deleteButton" variant="secondary" onClick={deleteButtonClick}>Delete</Button>
            </header>
            <div className="description">
                Description: {journalObject.description}
            </div>
            <div className="rules">
                Rules: {journalObject.rules}
            </div>
            <div className="risk">
                Risk: {journalObject.risk}%
            </div>
        </section>
    </>
    )
}