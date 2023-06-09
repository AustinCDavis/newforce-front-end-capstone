import React, { useEffect, useState } from "react"
import "./Strategy.css"
import { StrategyCardLayout } from "./Strategy"
import { fetchAllStrategies } from "../APIManager/StrategiesManager"
import Button from 'react-bootstrap/Button';
import { StrategyForm } from "../strategies/StrategyForm";

export const StrategyList = () => {
    const [strategies, setStrategies] = useState([])
    const [filteredStrategies, setFiltered] = useState([])

    const localAuthorizedUser = localStorage.getItem("authorized_user")
    const authorizedUserObject = JSON.parse(localAuthorizedUser)

    //may need to change fetch link
    const getAllStrategies = () => {
        fetchAllStrategies()
            .then((strategyArray) => {
                setStrategies(strategyArray)
            })
    }

    //starting state
    useEffect(
        () => {
            getAllStrategies()
        }, []
    )

    useEffect(
        () => {
            //filtering startegies by id
            const myStrategies = strategies.filter(strategy => strategy.userId === authorizedUserObject.id)
            setFiltered(myStrategies)
        }, [strategies]
    )


    function NewStrategyModal() {
        const [modalShow, setModalShow] = React.useState(false);

        return (
            <>
                <Button className="newstrategybutton" variant="secondary" onClick={() => setModalShow(true)}>
                    New Strategy
                </Button>

                <StrategyForm
                    getallstrategies={getAllStrategies}
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                />
            </>
        );
    }

    return <>
        <section className="strategyContainer">
            <header className="stratagiesheader">
                <h6>List of Strategies</h6>
                <NewStrategyModal />
            </header>
            <article className="Strategies">

                {
                    filteredStrategies.map(
                        (strategy) => <StrategyCardLayout
                            getAllStrategies={getAllStrategies}
                            currentUser={authorizedUserObject}
                            strategyObject={strategy}
                            id={strategy.id}
                            title={strategy.title}
                            key={`strategy--${strategy.id}`} />
                    )
                }
            </article>
        </section>
    </>
}