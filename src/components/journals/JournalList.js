import { useEffect, useState } from "react"
import "./Journal.css"
import { JournalLayout } from "./Journal"
import { fetchAllJournals } from "../APIManager/JournalsManager"

export const JournalList = ({ }) => {
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

    useEffect(
        () => {
            //needed to allow filtered journals to show on page load
            getAllJournals()
            //filtering startegies by id
            const myJournals = journals.filter(journal => journal.userId === authorizedUserObject.id)
            setFiltered(myJournals)
        }, []
    )

    return <>
        <section className="journalContainer">

            <h2>List of Journals</h2>
            <article className="Journals">

                {
                    filteredJournals.map(
                        (journal) => <JournalLayout
                            getAllJournals={getAllJournals}
                            currentUser={authorizedUserObject}
                            journalObject={journal}
                            id={journal.id}
                            key={`journal--${journal.id}`} />
                    )
                }
            </article>
        </section>
    </>
}