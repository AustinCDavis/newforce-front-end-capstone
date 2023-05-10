//Entry Fetchs
export const getJournalEntryById = (id) => {
    return fetch(`http://localhost:8088/journalEntries/${id}`)
        .then(response => response.json())
}

export const createJournalEntry = (journalObject) => {
    return fetch('http://localhost:8088/journalEntries', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(journalObject)
    })
        .then(response => response.json())
}

export const deleteJournalEntry = (id) => {
    return fetch(`http://localhost:8088/journalEntries/${id}`, {
        method: "DELETE"
    })
}

export const editJournalEntry = (id, journalObject) => {
    return fetch(`http://localhost:8088/journalEntries/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(journalObject)

    })
        .then(response => response.json())
}

export const fetchAllJournalEntries = () => {
    return fetch('http://localhost:8088/journalEntries')
        .then(response => response.json())
}

//Exit Fetchs
export const getJournalExitById = (id) => {
    return fetch(`http://localhost:8088/journalExits/${id}`)
        .then(response => response.json())
}

export const createJournalExit = (journalObject) => {
    return fetch('http://localhost:8088/journalExits', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(journalObject)
    })
        .then(response => response.json())
}

export const deleteJournalExit = (id) => {
    return fetch(`http://localhost:8088/journalExits/${id}`, {
        method: "DELETE"
    })
}

export const editJournalExit = (id, journalObject) => {
    return fetch(`http://localhost:8088/journalExits/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(journalObject)

    })
        .then(response => response.json())
}

export const fetchAllJournalExits = () => {
    return fetch('http://localhost:8088/journalExits')
        .then(response => response.json())
}