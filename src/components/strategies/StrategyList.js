import { useEffect, useState } from "react"
import "./Strategy.css"
import { StrategyLayout } from "./Strategy"
import { fetchAllStrategies } from "../APIManager/StrategiesManager"

export const StrategyList = ({}) => {
    const [strategies, setStrategies] = useState([])

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
            fetchAllStrategies()
            .then((strategyArray) => {
                setStrategies(strategyArray)
            })
        }, []
    )
    return <>
    <section className="strategyContainer">

    <h2>List of Strategies</h2>
    <article className="Strategies">
        
        {
            strategies.map(
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