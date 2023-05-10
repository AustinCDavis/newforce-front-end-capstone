import { Link } from "react-router-dom";
import { deleteJournalExit} from "../../APIManager/JournalsManager";
import "../Journal.css"
import { Button } from "react-bootstrap";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { JournalExitEditForm } from "./JournalExitEdit";
import { JournalExitForm } from "./JournalExitForm";

export const JournalExitCardLayout = ({ journalObject, id, currentUser, getAllJournalExits }) => {

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
            quantity: +journalObject.quantity,
            notes: journalObject.notes
        }))
    }

    const editButtonClick = () => {
        setModalShow(true);
        captureCurrentJournal();
    }

    const deleteButtonClick = () => {
        deleteJournalExit(journalObject.id)
            .then(getAllJournalExits)
    }

    function NewJournalExitModal() {
        const [modalShow, setModalShow] = React.useState(false);

        return (
            <>
               { 
               journalObject.currentQuantity >= 0 ?
               <>
               <Button className="soldButton" variant="primary" onClick={() => setModalShow(true)}>
                    Sold Stock
                </Button>
               </>: ""
                }

                <JournalExitForm
                    getAllJournalExits={getAllJournalExits}
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                />
            </>
        );
    }

    return (<>
        <JournalExitEditForm
            getalljournalexits={getAllJournalExits}
            show={modalShow}
            onHide={() => setModalShow(false)}
        />
        <section className="journal">
            <header className="header">
                {journalObject.ticker}
                <Button id="editButton" variant="secondary" onClick={editButtonClick}>Edit</Button>
                <Button id="deleteButton" variant="secondary" onClick={deleteButtonClick}>Delete</Button>
            </header>
            <div className="notes">
                Exit Price: ${journalObject.soldPrice}
            </div>
            <div className="purchasePrice">
                Quantity Sold: {journalObject.soldQuantity} shares
            </div>
            <div className="purchaseDate">
                Date Sold: {journalObject.soldDate}
            </div>
            <div className="quantity">
                Remaining Shares: {journalObject.currentQuantity} shares
                <NewJournalExitModal />
            </div>
        </section>
    </>
    )
}