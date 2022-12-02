import React, { useState } from "react";
import Modal from "../../../component/Modal";
import IconsContent from "../../../icons/IconsContent";
import Select from "react-select";
import { colors } from "react-select/dist/declarations/src/theme";
type Props = {
	isShow: boolean;
	handleClose: Function;
};
const SingleCatalogAddColumnModal: React.FC<Props> = ({
	isShow,
	handleClose
}) => {
	const customStyles = {
		option: (provided: any) => ({
			...provided,
			fontSize: "14px",
			padding: "13px 20px"
		}),
		control: (provided: any) => ({
			...provided,
			minHeight: 0,
			fontSize: "14px",
			lineHeight: "14px",
			padding: 0,
			margin: 0
		}),
		container: (provided: any) => ({
			...provided,
			fontSize: "14px",
			lineHeight: "14px",
			padding: 0,
			margin: 0,
			maxWidth: "100%"
		}),
		valueContainer: (provided: any) => ({
			...provided,
			padding: "13px 20px",
			fontSize: "14px"
		}),
		input: (provided: any) => ({
			...provided,
			fontSize: "14px",
			lineHeight: "14px",
			padding: 0,
			margin: 0
		}),
		placeholder: (provided: any) => ({
			...provided,
			fontSize: "14px",
			fontWeight: "400",
			lineHeight: "14px"
		})
	};

	const column = [
		{
			value: "Текстовый",
			label: "Текстовый"
		},
		{ value: "Текстовый2", label: "Текстовый2" },
		{ value: "Текстовый3", label: "Текстовый3" }
	];
	return (
		<Modal minWidth={866} isShow={isShow} handleClose={handleClose}>
			<h2 className="c-modal-title">Добавление столбца в таблицу</h2>
			<div className="modal__edit">
				<div className="input_wrapper">
					<label htmlFor="">Наимановение столбца</label>
					<input type="text" />
				</div>
				<div className="input_wrapper">
					<label htmlFor="">Тип столбца</label>
					<Select
						classNamePrefix={"custom-select"}
						placeholder={"Текстовый"}
						options={column}
						styles={customStyles}
					/>
				</div>
			</div>
			<button className="c-btn c-btn__secondary" style={{ maxWidth: "183px" }}>
				Сохранить
			</button>
		</Modal>
	);
};

export default SingleCatalogAddColumnModal;
