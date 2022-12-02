import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Modal from "../../../component/Modal";
import IconsContent from "../../../icons/IconsContent";
import DatePickerInput from "../../../component/dataPicker/DataPicker";
import { colors } from "react-select/dist/declarations/src/theme";
type Props = {
	isShow: boolean;
	handleClose: Function;
};
const SingleCatalogAddModal: React.FC<Props> = ({ isShow, handleClose }) => {
	const {
		register,
		handleSubmit,
		control,
		formState: { errors }
	} = useForm({ mode: "onBlur" });

	return (
		<Modal minWidth={866} isShow={isShow} handleClose={handleClose}>
			<h2 className="c-modal-title">Добавить в справочник</h2>
			<div className="modal__edit">
				<div className="input_wrapper">
					<label htmlFor="">Наименование</label>
					<input type="text" />
				</div>

				<div className="input_wrapper">
					<label htmlFor="">Другие сведения</label>
					<textarea />
				</div>
			</div>
			<div className="modal__buttons">
				<button
					className="c-btn c-btn__secondary"
					style={{ maxWidth: "172px" }}
				>
					Добавить
				</button>
				<button className="c-btn c-btn__green" style={{ maxWidth: "296px" }}>
					Добавить и добавить еще
				</button>
			</div>
		</Modal>
	);
};

export default SingleCatalogAddModal;
