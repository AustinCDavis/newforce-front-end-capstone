export const getStrategyById = (id) => {
    return fetch(`http://localhost:8088/strategies/${id}`)
        .then(response => response.json())
}

export const createStrategy = (strategyObject) => {
    return fetch('http://localhost:8088/strategies', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(strategyObject)
    })
        .then(response => response.json())
}

export const deleteStrategy = (id) => {
    return fetch(`http://localhost:8088/strategies/${id}`, {
        method: "DELETE"
    })
}

export const editStrategy = (id, strategyObject) => {
    return fetch(`http://localhost:8088/strategies/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(strategyObject)

    })
        .then(response => response.json())
}

export const fetchAllStrategies = () => {
    return fetch('http://localhost:8088/strategies')
        .then(response => response.json())
}