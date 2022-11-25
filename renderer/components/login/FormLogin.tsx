import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import InputLogin from '../general/InputForm';
import { HiOutlineMail } from "react-icons/hi"
import { BiLock } from "react-icons/bi"
import { useState } from 'react';
import AlertOnValid from '../general/AlertOnValid';
import { Loading } from '@nextui-org/react';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { setIsLogged } from '../../redux/slices/LoginSlice';

interface inputForm {
    Email: string,
    Password: string
}

export default function FormLogin({ styles }) {

    const [loading, setLoading] = useState(false)
    const router = useRouter()
    const dispatch = useDispatch()

    const validation = yup.object().shape({
        Email: yup.string().required('Digite um e-mail').email('Digite um e-mail válido'),
        Password: yup.string().required('Digite uma senha')
    })

    const { handleSubmit, register, formState: { errors } } = useForm({
        resolver: yupResolver(validation)
    })

    function onValidForm(datas: inputForm) {

        dispatch(setIsLogged(true))
        router.push("/dashboard/")

    }

    return (
        <form className={styles.form_login_container} onSubmit={handleSubmit(onValidForm)}>
            <InputLogin register={register} name={"Email"} label='Endereço de e-mail' icon={<HiOutlineMail size={20} color={"#fff"} />} />
            <InputLogin register={register} label='Senha' name={"Password"} icon={<BiLock size={20} color={"#fff"} />} />
            {loading && <Loading css={{ margin: 10 }} color="warning" type='points' /> || (errors?.Email?.message || errors?.Password?.message) &&
                <AlertOnValid message={errors?.Email?.message || errors?.Password?.message} />}
            <span className={"info_label"}>Esqueceu a senha ?</span>
            <button className={"regular_btn"} type='submit'>Fazer login</button>
        </form>
    )

}