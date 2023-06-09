import { LogoutButton } from "../buttons/buttons";
import { StyledHeader } from "./styledHeader";

export function Header () {
    return (
        <StyledHeader className="flex justify-between items-center">
            <h1>Client-book</h1>
            <div className="div">
                <LogoutButton/>
            </div>
        </StyledHeader>
    )
}