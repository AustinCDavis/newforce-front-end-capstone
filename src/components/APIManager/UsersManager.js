export const getUserById = (id) => {
    return fetch(`http://localhost:8088/users?id=${id}`)
    .then(response => response.json())
}

export const editUser = (profile) => {
    return fetch(`http://localhost:8088/users/${profile.id}`, {
    method: "PUT",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(profile)

    })
    .then(response => response.json())
}