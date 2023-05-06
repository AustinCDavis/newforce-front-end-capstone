import { Link, json } from "react-router-dom";
import { deleteStrategy, editStrategy } from "../APIManager/StrategiesManager";
import "./Strategy.css"
import { Button } from "react-bootstrap";
import React, { useState } from "react";
import { MyVerticallyCenteredStrategyEditModal } from "./StrategyEdit";

export const StrategyLayout = ({strategyObject, currentUser, getAllStrategies}) => {

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

    return (<>
        <MyVerticallyCenteredStrategyEditModal
                  show={modalShow}
                  onHide={() => setModalShow(false)}
                />
        <section className="strategy">
            <header className="header">{strategyObject.title}<Button id="editButton" variant="secondary" onClick={editButtonClick}>Edit</Button></header>
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