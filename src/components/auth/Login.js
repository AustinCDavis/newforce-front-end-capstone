import React, { useState } from "react"
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom"
import { LandingPageNavBar } from "../nav/LandingPageNavBar";
import "./Login.css"

export const Login = () => {
    const [email, setEmail] = useState("johndoe1@gmail.com")
    const [password, setPassword] = useState("password2")
    const navigate = useNavigate()

    const handleLogin = (e) => {
        e.preventDefault()

        return fetch(`http://localhost:8088/users?email=${email}`)
            .then(res => res.json())
            .then(foundUser => {
                if (foundUser.length === 1) {
                    if (foundUser[0].password === password) {

                        const user = foundUser[0]
                        localStorage.setItem("authorized_user", JSON.stringify({
                            id: user.id,
                            userName: user.userName,
                            fullName: user.fullName,
                            password: user.password
                        }))
                        navigate("/dashboard")
                    } else {
                        window.alert("Invalid login")
                        // console.log(foundUser[0].password)
                        // console.log(password)
                    }
                }
                else {
                    window.alert("Invalid login")
                }
            }
            )
    }

    return (
        <>
            <LandingPageNavBar />
            <main className="container--login">
                <section>
                    <form className="form--login" onSubmit={handleLogin}>
                        <h1>Next Trade</h1>
                        <h2>Please sign in</h2>
                        <fieldset>
                            <label htmlFor="inputEmail"> Email address </label>
                            <input type="email"
                                value={email}
                                onChange={evt => setEmail(evt.target.value)}
                                className="form-control"
                                placeholder="Email address"
                                required autoFocus />
                        </fieldset>
                        <fieldset>
                            <label htmlFor="inputPassword"> Password </label>
                            <input type="password"
                                value={password}
                                onChange={evt => setPassword(evt.target.value)}
                                className="form-control"
                                placeholder="Password"
                                required autoFocus />
                        </fieldset>
                        <fieldset>
                            <button type="submit">
                                Sign in
                            </button>
                            <button type="button">
                                <a href="#">Forgot password</a>
                            </button>
                        </fieldset>
                    </form>
                </section>
                <section className="link--register">
                    <Link to="/register">Not a member yet?</Link>
                </section>
            </main>
        </>
    )
}