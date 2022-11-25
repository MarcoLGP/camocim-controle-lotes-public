import { Input, Modal, Row } from "@nextui-org/react";
import { GiCoffeeBeans } from "react-icons/gi";
import { IoMdArrowBack } from "react-icons/io";
import InputFormNewLot from "../components/general/InputForm";
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { TbClipboardPlus } from "react-icons/tb";
import AlertOnValid from "../components/general/AlertOnValid";
import { HiOutlineClipboardDocumentList } from "react-icons/hi2";
import styles from "../styles/Modals.module.css"
import { Dispatch, SetStateAction } from "react";

interface newLotModal {
    visibleModal: boolean,
    setVisibleModal: Dispatch<SetStateAction<boolean>>
}

export default function NewLotModal({ visibleModal, setVisibleModal }: newLotModal) {

    const validation = yup.object().shape({
        lot_green: yup.string().trim().matches(/^(\w{2})-(\d{4})+?$/, { message: "Lote cru inválido, Ex: PG-0000" }),
        lot: yup.string().trim().matches(/^(\w{2})-(\d{4})+?$/, { message: "Lote torrado inválido, Ex: PB-0000" }),
        lot_weight_green: yup.string().trim().matches(/^(\d{1}),(\d{3})+?$/, { message: "Peso lote cru inválido, Ex: 1,000" }),
        lot_weight: yup.string().trim().matches(/^(\d{1}),(\d{3})+?$/, { message: "Peso lote torrado inválido, Ex: 1,000" }),
        lot_date: yup.date().required("Data em branco").max(new Date(), "Não é possível colocar uma data futura para o lote").typeError("Data inválida")
    })

    function onValid(datas) {
        console.log("foi")
    }

    const { handleSubmit, register, formState: { errors } } = useForm({
        resolver: yupResolver(validation)
    })

    return (
        <Modal
            open={visibleModal}
            onClose={() => setVisibleModal(false)}
            width={"600px"}
        >

            <Modal.Body>
                <div style={{ paddingBottom: 15 }}>
                    <Row align="center" style={{width: "100%"}}>
                        <div onClick={() => setVisibleModal(false)} className={styles.back_modal_icon_container}>
                            <IoMdArrowBack size={28} />
                        </div>
                        <h1 className={styles.title_modal_report}>Novo lote</h1>
                    </Row>
                    <div className={styles.title_divisor_modal_report} />

                    <form className="column" onSubmit={handleSubmit(onValid)}>
                        <Row className={styles.form_new_lot_container} justify={"space-between"}>
                            <div>
                                <InputFormNewLot placeholder="Ex: PB-0000" name="lot_green" register={register} label="Lote café cru" icon={<HiOutlineClipboardDocumentList size={18} color={"#fff"} />} />
                                <InputFormNewLot placeholder="Ex: PG-0000" name="lot" register={register} label="Lote café torrado" icon={<HiOutlineClipboardDocumentList size={18} color={"#fff"} />} />
                            </div>
                            <div>
                                <InputFormNewLot placeholder="Ex: 1,000" name="lot_weight_green" register={register} label="Peso café cru" icon={<GiCoffeeBeans size={18} color={"#fff"} />} />
                                <InputFormNewLot placeholder="Ex: 1,000" name="lot_weight" register={register} label="Peso café torrado" icon={<GiCoffeeBeans size={18} color={"#fff"} />} />
                            </div>
                        </Row>
                        <label className={styles.form_new_lot_date_label}>Data da torra</label>
                        <Input {...register("lot_date")} type={"date"} width={"150px"} />
                        {(errors?.lot_date?.message || errors?.lot_green?.message || errors?.lot?.message || errors?.lot_weight_green?.message || errors?.lot_weight?.message) &&
                            <AlertOnValid message={errors?.lot_date?.message || errors?.lot_green?.message || errors?.lot?.message || errors?.lot_weight_green?.message || errors?.lot_weight?.message} />}
                        <button className={styles.form_new_lot_btn}>
                            <Row align="center">
                                <TbClipboardPlus  style={{marginRight: 5}} size={22} />
                                Gerar novo lote
                            </Row>
                        </button>
                    </form>
                </div>
            </Modal.Body>

        </Modal >
    )

}