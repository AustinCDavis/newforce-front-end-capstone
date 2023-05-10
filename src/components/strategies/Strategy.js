import { Link, json } from "react-router-dom";
import { deleteStrategy, editStrategy } from "../APIManager/StrategiesManager";
import "./Strategy.css"
import { Button } from "react-bootstrap";
import React, { useState } from "react";
import { MyVerticallyCenteredStrategyEditModal } from "./StrategyEdit";
import { useNavigate } from "react-router-dom";

export const StrategyCardLayout = ({ strategyObject, id, title, currentUser, getAllStrategies }) => {

    const navigate = useNavigate();
    const [modalShow, setModalShow] = React.useState(false);

    function captureCurrentStrategy() {
        localStorage.setItem("current_strategy", JSON.stringify({
            id: strategyObject.id,
            userId: strategyObject.userId,
            title: strategyObject.title,
            description: strategyObject.description,
            rules: strategyObject.rules,
            risk: +strategyObject.risk
        }))
    }

    const editButtonClick = () => {
        setModalShow(true);
        captureCurrentStrategy();
    }

    const deleteButtonClick = () => {
        deleteStrategy(strategyObject.id)
            .then(getAllStrategies)
    }

    return (<>
        <MyVerticallyCenteredStrategyEditModal
            getallstrategies={getAllStrategies}
            show={modalShow}
            onHide={() => setModalShow(false)}
        />
        <section className="strategy">
            <header className="header">
                <Link to={`/strategies/${id}`} onClick={captureCurrentStrategy}>{strategyObject.title}</Link>
                <Button id="editButton" variant="secondary" onClick={editButtonClick}>Edit</Button>
                <Button id="deleteButton" variant="secondary" onClick={deleteButtonClick}>Delete</Button>
            </header>
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