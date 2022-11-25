import InputSignUp from "../general/InputForm";
import { BsFillPersonFill, BsKey } from "react-icons/bs"
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { HiOutlineMail } from "react-icons/hi"
import { BiLock } from "react-icons/bi";
import Link from "next/link";
import AlertOnValid from "../general/AlertOnValid";
import { useState } from "react";
import { Loading } from "@nextui-org/react";

export default function FormSignUp({ styles }) {

    const [loading, setLoading] = useState(false)

    interface inputForm {
        Name: string,
        Email: string,
        Password: string,
        Token: string
    }

    const validation = yup.object().shape({
        Name: yup.string().required('Digite o seu nome').min(5, "Digite um nome válido'").max(40, "Digite um nome abaixo de 40 caracteres"),
        Email: yup.string().required('Digite um e-mail').email('Digite um e-mail válido'),
        Password: yup.string().required('Digite uma senha'),
        Token: yup.string().required("Token obrigatorio")
    })

    const { handleSubmit, register, formState: { errors } } = useForm({
        resolver: yupResolver(validation)
    })

    function onValidForm(datas: inputForm) {



    }

    return (
        <form onSubmit={handleSubmit(onValidForm)} className={styles.form_sign_up}>
            <InputSignUp register={register} icon={<BsFillPersonFill size={20} color={"#fff"} />} name="Name" label="Nome" />
            <InputSignUp register={register} label={"E-mail"} name={"Email"} icon={<HiOutlineMail size={20} color={"#fff"} />} />
            <InputSignUp register={register} icon={<BiLock size={20} color={"#fff"} />} name="Password" label="Senha" />
            <InputSignUp register={register} icon={<BsKey size={20} color={"#fff"} />} name={"Token"} label={"Token"} />
            {loading && <Loading type="points" css={{ margin: 10 }} color={"warning"} /> ||
                (errors?.Name?.message || errors?.Email?.message || errors?.Password?.message || errors?.Token?.message) && 
                <AlertOnValid message={errors?.Name?.message || errors?.Email?.message || errors?.Password?.message || errors?.Token?.message} />}
            <Link href={"/"}>
                <span className={"info_label"}>Já possuo uma conta</span>
            </Link>
            <button className={"regular_btn"} type={"submit"}>Registrar</button>
        </form>
    )

}