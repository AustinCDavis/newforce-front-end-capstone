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
                <Button variant="primary" onClick={() => setModalShow(true)}>
                    New Strategy
                </Button>

                <StrategyForm
                    getAllStrategies={getAllStrategies}
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                />
            </>
        );
    }

    return <>
        <section className="strategyContainer">

            <h2>List of Strategies</h2>
            <article className="Strategies">

                {
                    filteredStrategies.map(
                        (strategy) => <StrategyCardLayout
                            getAllStrategies={getAllStrategies}
                            currentUser={authorizedUserObject}
                            strategyObject={strategy}
                            id={strategy.id}
                            key={`strategy--${strategy.id}`} />
                    )
                }
            </article>
            <NewStrategyModal />
        </section>
    </>
}