export const getJournalById = (id) => {
    return fetch(`http://localhost:8088/journals/${id}`)
        .then(response => response.json())
}

export const createJournal = (journalObject) => {
    return fetch('http://localhost:8088/journals', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(journalObject)
    })
        .then(response => response.json())
}

export const deleteJournal = (id) => {
    return fetch(`http://localhost:8088/journals/${id}`, {
        method: "DELETE"
    })
}

export const editJournal = (id, journalObject) => {
    return fetch(`http://localhost:8088/journals/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(journalObject)

    })
        .then(response => response.json())
}

export const fetchAllJournals = () => {
    return fetch('http://localhost:8088/journals')
        .then(response => response.json())
}