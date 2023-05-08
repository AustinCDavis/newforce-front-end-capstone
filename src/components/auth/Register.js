import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { LandingPageNavBar } from "../nav/LandingPageNavBar"
import "./Login.css"


export const Register = (props) => {
    const [customer, setCustomer] = useState({
        email: "",
        fullName: ""
    })
    let navigate = useNavigate()

    const registerNewUser = () => {
        return fetch("http://localhost:8088/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(customer)
        })
            .then(res => res.json())
            .then(createdUser => {
                if (createdUser.hasOwnProperty("id")) {
                    localStorage.setItem("nutshell_user", JSON.stringify({
                        id: createdUser.id
                    }))

                    navigate("/")
                }
            })
    }

    const handleRegister = (e) => {
        e.preventDefault()
        return fetch(`http://localhost:8088/users?email=${customer.email}`)
            .then(res => res.json())
            .then(response => {
                if (response.length > 0) {
                    // Duplicate email. No good.
                    window.alert("Account with that email address already exists")
                }
                else {
                    // Good email, create user.
                    registerNewUser()
                }
            })
    }

    const updateCustomer = (evt) => {
        const copy = { ...customer }
        copy[evt.target.id] = evt.target.value
        setCustomer(copy)
    }

    return (
        <>
            <LandingPageNavBar />
            <main style={{ textAlign: "center" }}>
                <form className="form--login" onSubmit={handleRegister}>
                    <h1 className="h3 mb-3 font-weight-normal">Please Register for Nutshell</h1>
                    <fieldset>
                        <label htmlFor="fullName"> Full Name </label>
                        <input onChange={updateCustomer}
                            type="text" id="fullName" className="form-control"
                            placeholder="Enter your name" required autoFocus />
                    </fieldset>
                    <fieldset>
                        <label htmlFor="email"> Email address </label>
                        <input onChange={updateCustomer}
                            type="email" id="email" className="form-control"
                            placeholder="Email address" required />
                    </fieldset>
                    <fieldset>
                        <label htmlFor="userName"> Username </label>
                        <input onChange={updateCustomer}
                            type="text" id="userName" className="form-control"
                            placeholder="Enter your username" required autoFocus />
                    </fieldset>
                    <fieldset>
                        <label htmlFor="password"> Password </label>
                        <input onChange={updateCustomer}
                            type="password" id="password" className="form-control"
                            placeholder="Enter your password" required autoFocus />
                    </fieldset>
                    <fieldset>
                        <button type="submit"> Register </button>
                    </fieldset>
                    <fieldset>
                        <button type="button"> <a href="/login">Already registered?</a> </button>
                    </fieldset>
                </form>
            </main>
        </>
    )
}
