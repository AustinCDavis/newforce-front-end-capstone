import React, { useEffect, useState } from "react"
import "./Journal.css"
import { JournalCardLayout } from "./Journal"
import { fetchAllJournals } from "../APIManager/JournalsManager"
import Button from 'react-bootstrap/Button';
import { JournalForm } from "./JournalForm";

export const JournalList = () => {
    const [journals, setJournals] = useState([])
    const [filteredJournals, setFiltered] = useState([])

    const localAuthorizedUser = localStorage.getItem("authorized_user")
    const authorizedUserObject = JSON.parse(localAuthorizedUser)

    //may need to change fetch link
    const getAllJournals = () => {
        fetchAllJournals()
            .then((journalArray) => {
                setJournals(journalArray)
            })
    }

    //starting state
    useEffect(
        () => {
            getAllJournals()
        }, []
    )

    useEffect(
        () => {
            //filtering startegies by id
            const myJournals = journals.filter(journal => journal.userId === authorizedUserObject.id)
            setFiltered(myJournals)
        }, [journals]
    )


    function NewJournalModal() {
        const [modalShow, setModalShow] = React.useState(false);

        return (
            <>
                <Button variant="primary" onClick={() => setModalShow(true)}>
                    New Journal
                </Button>

                <JournalForm
                    getAllJournals={getAllJournals}
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                />
            </>
        );
    }

    return <>
        <section className="journalContainer">

            <h2>List of Journals</h2>
            <article className="Journals">

                {
                    filteredJournals.map(
                        (journal) => <JournalCardLayout
                            getAllJournals={getAllJournals}
                            currentUser={authorizedUserObject}
                            journalObject={journal}
                            id={journal.id}
                            key={`journal--${journal.id}`} />
                    )
                }
            </article>
            <NewJournalModal />
        </section>
    </>
}