import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Modal from "../../../component/Modal";
import IconsContent from "../../../icons/IconsContent";
import DatePickerInput from "../../../component/dataPicker/DataPicker";
type Props = {
	isShow: boolean;
	handleClose: Function;
};
const CatalogsEditModal: React.FC<Props> = ({ isShow, handleClose }) => {
	const {
		register,
		handleSubmit,
		control,
		formState: { errors }
	} = useForm({ mode: "onBlur" });

	return (
		<Modal minWidth={866} isShow={isShow} handleClose={handleClose}>
			<h2 className="c-modal-title">Редактирование справочника</h2>
			<div className="modal__edit">
				<div className="input_wrapper">
					<label htmlFor="">Наименование</label>
					<input type="text" placeholder="Области" />
				</div>
				<div className="input_wrapper">
					<label htmlFor="">Дата создания</label>
					<DatePickerInput
						name={"date"}
						control={control}
						placeholder={"Выбрать"}
						active date={""} nameFrom={""} nameTill={""}					/>
				</div>
				<div className="input_wrapper">
					<label htmlFor="">Другие сведения</label>
					<textarea placeholder="Области" />
				</div>
			</div>
			<button className="c-btn c-btn__secondary" style={{ maxWidth: "183px" }}>
				Сохранить
			</button>
		</Modal>
	);
};

export default CatalogsEditModal;
