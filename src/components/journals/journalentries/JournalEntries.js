import { Link } from "react-router-dom";
import { deleteJournalEntry, fetchAllJournalExits } from "../../APIManager/JournalsManager";
import "../Journal.css"
import { Button } from "react-bootstrap";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { JournalEntryEditForm } from "./JournalEntryEdit";
import { JournalExitForm } from "../journalexits/JournalExitForm";

export const JournalEntryCardLayout = ({ journalObject, id, currentUser, ticker, getAllJournalEntries }) => {

    const navigate = useNavigate();
    const [modalShow, setModalShow] = React.useState(false);

    const currentStrategy = localStorage.getItem("current_strategy")
    const currentStrategyObject = JSON.parse(currentStrategy)

    function captureCurrentJournal() {
        localStorage.setItem("current_journal", JSON.stringify({
          
            id: journalObject.id,
            userId: journalObject.userId,
            strategyId: journalObject.strategyId,
            ticker: journalObject.ticker,
            purchasePrice: +journalObject.purchasePrice,
            purchaseDate: journalObject.purchaseDate,
            targetPrice: +journalObject.targetPrice,
            quantity: +journalObject.purchaseQuantity,
            remainingQuantity: (+journalObject.purchaseQuantity),
            notes: journalObject.notes
        }))
    }

    const editButtonClick = () => {
        setModalShow(true);
        captureCurrentJournal();
    }

    const deleteButtonClick = () => {
        deleteJournalEntry(journalObject.id)
            .then(getAllJournalEntries)
    }
    
    function NewJournalExitModal() {
        const [modalShow, setModalShow] = React.useState(false);
        
        
        const getAllJournalExits = () => {
            fetchAllJournalExits()
               
        }
        const soldButtonClick = () => {
            setModalShow(true);
            captureCurrentJournal();
        }
        
        return (
            <>
                <Button className="soldButton" variant="primary" onClick={soldButtonClick}>
                    Sold Stock
                </Button>

                <JournalExitForm
                    getAllJournalExits={getAllJournalExits}
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                />
            </>
        );
    }

    return (<>
        <JournalEntryEditForm
            getAllJournalEntries={getAllJournalEntries}
            show={modalShow}
            onHide={() => setModalShow(false)}
        />
        <section className="journal">
            <header className="header">
                <Link to={`/strategies/${currentStrategyObject.title}${currentStrategyObject.id}/${ticker}${id}`} onClick={captureCurrentJournal}>{journalObject.ticker}</Link>
                <Button id="editButton" variant="secondary" onClick={editButtonClick}>Edit</Button>
                <Button id="deleteButton" variant="secondary" onClick={deleteButtonClick}>Delete</Button>
            </header>
            <div className="notes">
                Notes: {journalObject.notes}
            </div>
            <div className="purchasePrice">
                Purchase Price: ${journalObject.purchasePrice}
            </div>
            <div className="targetPrice">
                Target Price: ${journalObject.targetPrice}
            </div>
            <div className="purchaseDate">
                Purchase Date: {journalObject.purchaseDate}
            </div>
            <div className="quantity">
                Shares Purchased: {journalObject.purchaseQuantity}
                <NewJournalExitModal />
            </div>
        </section>
    </>
    )
}