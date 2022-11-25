import { UseFormRegister, FieldValues } from "react-hook-form/dist/types"
import { Row } from "@nextui-org/react"
import { FocusEventHandler, MouseEventHandler } from "react"

interface inputFormProps {
    label?: string,
    name?: string,
    className?: string,
    placeholder?: string,
    width?: number,
    onBlur?: FocusEventHandler<HTMLInputElement>,
    onClickIcon?: MouseEventHandler<unknown>,
    autoFocus?: boolean,
    readOnly?: boolean,
    icon: JSX.Element,
    defaultValue?: number | string,
    register?: UseFormRegister<FieldValues>
}

export default function InputForm({ label, icon, register, name, placeholder, readOnly, autoFocus, onBlur, onClickIcon, width, defaultValue, className }: inputFormProps) {

    return (
        <div className={`input_login_container ${className}`} style={{ width: width }} >
            {label && <label>{label}</label>}
            <Row align='center'>
                {register ? <input defaultValue={defaultValue} onBlur={onBlur} autoFocus={autoFocus} readOnly={readOnly} type={name === "Password" && "password"} placeholder={placeholder} style={{ paddingLeft: 8 }} {...register(name)} /> :
                    <input defaultValue={defaultValue} onBlur={onBlur} autoFocus={autoFocus} readOnly={readOnly} type={name === "Password" && "password"} placeholder={placeholder} style={{ paddingLeft: 8 }} />}
                <Row css={{ cursor: onClickIcon && "pointer" }} onClick={onClickIcon} justify='center' className={'icon_container'}>
                    {icon}
                </Row>
            </Row>
        </div>

    )

}