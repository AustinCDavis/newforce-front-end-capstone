import { useEffect, useState } from "react"
import "./Strategy.css"
import { StrategyLayout } from "./Strategy"
import { fetchAllStrategies } from "../APIManager/StrategiesManager"

export const StrategyList = ({ }) => {
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

    useEffect(
        () => {
            getAllStrategies()
            const myStrategies = strategies.filter(strategy => strategy.userId === authorizedUserObject.id)
            setFiltered(myStrategies)
        }, [strategies]
    )





    return <>
        <section className="strategyContainer">

            <h2>List of Strategies</h2>
            <article className="Strategies">

                {
                    filteredStrategies.map(
                        (strategy) => <StrategyLayout
                            getAllStrategies={getAllStrategies}
                            currentUser={authorizedUserObject}
                            strategyObject={strategy}
                            id={strategy.id}
                            key={`strategy--${strategy.id}`} />
                    )
                }
            </article>
        </section>
    </>
}