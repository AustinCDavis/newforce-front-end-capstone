import { Link, json } from "react-router-dom";
import { deleteJournal, editJournal} from "../APIManager/JournalsManager";
import "./Journal.css"
import { Button } from "react-bootstrap";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MyVerticallyCenteredJournalEditModal } from "./JournalEdit";

export const JournalCardLayout = ({ journalObject, id, currentUser, getAllJournals }) => {

    const navigate = useNavigate();
    const [modalShow, setModalShow] = React.useState(false);

    function captureCurrentJournal() {
        localStorage.setItem("current_journal", JSON.stringify({
          
            id: journalObject.id,
            userId: journalObject.userId,
            strategyId: journalObject.strategyId,
            ticker: journalObject.ticker,
            purchasePrice: +journalObject.purchasePrice,
            purchaseDate: journalObject.purchaseDate,
            targetPrice: +journalObject.targetPrice,
            notes: journalObject.notes
        }))
    }

    const editButtonClick = () => {
        setModalShow(true);
        captureCurrentJournal();
    }

    const deleteButtonClick = () => {
        deleteJournal(journalObject.id)
            .then(getAllJournals)
    }

    return (<>
        <MyVerticallyCenteredJournalEditModal
            getalljournals={getAllJournals}
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