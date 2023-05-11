import React, { useEffect, useState } from "react"
import "../Journal.css"
import { JournalEntryCardLayout } from "./JournalEntries"
import { fetchAllJournalEntries } from "../../APIManager/JournalsManager"
import Button from 'react-bootstrap/Button';
import { JournalEntryForm } from "./JournalEntryForm";
import { JournalExitForm } from "../journalexits/JournalExitForm";

export const JournalEntryList = () => {
    const [journals, setJournals] = useState([])
    const [filteredJournals, setFiltered] = useState([])

    const localAuthorizedUser = localStorage.getItem("authorized_user")
    const authorizedUserObject = JSON.parse(localAuthorizedUser)

    const currentStrategy = localStorage.getItem("current_strategy")
    const currentStrategyObject = JSON.parse(currentStrategy)

    //may need to change fetch link
    const getAllJournalEntries = () => {
        fetchAllJournalEntries()
            .then((journalArray) => {
                setJournals(journalArray)
            })
    }

    //starting state
    useEffect(
        () => {
            getAllJournalEntries()
        }, []
    )

    useEffect(
        () => {
            //filtering startegies by id
            const myJournals = journals.filter(journal => journal.userId === authorizedUserObject.id && journal.strategyId === currentStrategyObject.id)
            setFiltered(myJournals)
        }, [journals]
    )


    function NewJournalEntryModal() {
        const [modalShow, setModalShow] = React.useState(false);

        return (
            <>
                <Button variant="primary" onClick={() => setModalShow(true)}>
                    Purchased Stock
                </Button>

                <JournalEntryForm
                    getAllJournalEntries={getAllJournalEntries}
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                />
            </>
        );
    }

    return <>
        <section className="journalContainer">

            <h2>List of Bought Stock Journals</h2>
            <article className="Journals">

                {
                    filteredJournals.map(
                        (journal) => <JournalEntryCardLayout
                            getAllJournalEntries={getAllJournalEntries}
                            currentUser={authorizedUserObject}
                            journalObject={journal}
                            ticker={journal.ticker}
                            id={journal.id}
                            key={`journal--${journal.id}`} />
                    )
                }
            </article>
            <NewJournalEntryModal />
        </section>
    </>
}