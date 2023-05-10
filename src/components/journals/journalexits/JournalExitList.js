import React, { useEffect, useState } from "react"
import "../Journal.css"
import { JournalExitCardLayout } from "./JournalExits"
import { fetchAllJournalExits } from "../../APIManager/JournalsManager"
import Button from 'react-bootstrap/Button';
import { JournalExitForm } from "./JournalExitForm";

export const JournalExitList = () => {
    const [journals, setJournals] = useState([])
    const [filteredJournals, setFiltered] = useState([])

    const localAuthorizedUser = localStorage.getItem("authorized_user")
    const authorizedUserObject = JSON.parse(localAuthorizedUser)

    const currentJournal = localStorage.getItem("current_journal")
    const currentJournalObject = JSON.parse(currentJournal)

    //may need to change fetch link
    const getAllJournalExits = () => {
        fetchAllJournalExits()
            .then((journalArray) => {
                setJournals(journalArray)
            })
    }

    //starting state
    useEffect(
        () => {
            getAllJournalExits()
        }, []
    )

    useEffect(
        () => {
            //filtering startegies by id
            const myJournals = journals.filter(journal => journal.userId === authorizedUserObject.id && journal.entryId === currentJournalObject.id)
            setFiltered(myJournals)
        }, [journals]
    )


    function NewJournalExitModal() {
        const [modalShow, setModalShow] = React.useState(false);

        return (
            <>
                {/* <Button variant="primary" onClick={() => setModalShow(true)}>
                    Purchased Stock
                </Button> */}

                <JournalExitForm
                    getAllJournalExits={getAllJournalExits}
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                />
            </>
        );
    }

    return <>
        <section className="journalContainer">

            <h2>List of Sold Stock Journals</h2>
            <article className="Journals">

                {
                    filteredJournals.map(
                        (journal) => <JournalExitCardLayout
                            getAllJournalExits={getAllJournalExits}
                            currentUser={authorizedUserObject}
                            journalObject={journal}
                            id={journal.id}
                            key={`journal--${journal.id}`} />
                    )
                }
            </article>
            <NewJournalExitModal />
        </section>
    </>
}