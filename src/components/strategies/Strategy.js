import { Link, json } from "react-router-dom";
import { deleteStrategy, editStrategy } from "../APIManager/StrategiesManager";
import "./Strategy.css"

export const Strategy = ({strategyObject, currentUser, getAllStrategies}) => {

    return (<>
        <section className="strategy">
            <header className="header"><Link to={`/strategies/${strategyObject.id}/edit`}>{strategyObject.title}</Link></header>
            <div className="description">
                Description: {strategyObject.description}
            </div>
            <div className="rules">      
            Rules: {strategyObject.rules}
            </div>
            <div className="risk">
                Risk: {strategyObject.risk}%
            </div>
        </section>
    </>    
    )
}