import illustration from "../assets/illustration.png"
import { RegisterForm } from "../components/forms/registerForm"

export function RegisterPage () {
    return (
        <>
            <div className="flex justify-around items-center">
                <div>
                    <RegisterForm/>
                </div>
                <div>
                    <img src={illustration} alt="logo"/>
                </div>
            </div>
        </>
    )
}