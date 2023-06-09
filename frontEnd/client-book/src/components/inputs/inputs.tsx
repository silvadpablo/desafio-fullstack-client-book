import { iCustomInput } from "../../types/types";
import { StyledInput, StyledLabel } from "./styledInput";

export function CustomInput ( { label, type, placeholder, register }:iCustomInput ) {
    return (
        <>
            <StyledLabel htmlFor={label}>{label}</StyledLabel>
            <StyledInput type={type} id={label} placeholder={placeholder} {...register}/>
        </>
    )
}