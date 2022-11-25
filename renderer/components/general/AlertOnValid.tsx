import {AiFillCloseCircle} from "react-icons/ai"
import {Row} from "@nextui-org/react"
import { FieldError, FieldErrorsImpl, Merge } from "react-hook-form"

interface alertOnValidProps {
    message: string | FieldError | Merge<FieldError, FieldErrorsImpl<any>>
}

export default function AlertOnValid({ message }: alertOnValidProps) {

    return (
        <Row align="center" className="alert_on_valid_container">
            <AiFillCloseCircle size={20} color={"#FF6163"} />
            <p>{message.toString()}</p>
        </Row>
    )

}