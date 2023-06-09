import illustration from "../assets/illustration.png"
import { LoginForm } from "../components/forms/loginForm"

export function HomePage () {
    return (
        <>
            <div className="flex justify-around items-center">
                <div>
                    <LoginForm/>
                </div>
                <div>
                    <img src={illustration} alt="logo"/>
                </div>
            </div>
        </>
    )
}