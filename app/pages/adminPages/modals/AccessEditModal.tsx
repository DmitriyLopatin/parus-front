import React, { useState } from "react";
import Modal from "../../../component/Modal";
import IconsContent from "../../../icons/IconsContent";
import Select from "react-select";
import { colors } from "react-select/dist/declarations/src/theme";
type Props = {
	isShow: boolean;
	handleClose: Function;
};
const AccessEditModal: React.FC<Props> = ({ isShow, handleClose }) => {
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
	const fio = [
		{
			value: "Попова Мирослава Александровна",
			label: "Попова Мирослава Александровна"
		},
		{ value: "ФИО2", label: "ФИО2" },
		{ value: "ФИО3", label: "ФИО3" }
	];
	const access = [
		{
			value: "Администратор",
			label: "Администратор"
		},
		{ value: "Доступ2", label: "Доступ2" },
		{ value: "Доступ3", label: "Доступ3" }
	];
	return (
		<Modal minWidth={866} isShow={isShow} handleClose={handleClose}>
			<h2 className="c-modal-title">Редактирование доступа</h2>
			<div className="modal__edit">
				<div className="input_wrapper">
					<label htmlFor="">ФИО</label>
					<Select
						classNamePrefix={"custom-select"}
						placeholder={"Выбрать"}
						options={fio}
						styles={customStyles}
						value={fio[0]}
					/>
				</div>
				<div className="input_wrapper">
					<label htmlFor="">Доступ</label>
					<Select
						classNamePrefix={"custom-select"}
						placeholder={"Выбрать"}
						options={access}
						styles={customStyles}
						value={access[0]}
					/>
				</div>
			</div>
			<button className="c-btn c-btn__secondary" style={{ maxWidth: "183px" }}>
				Сохранить
			</button>
		</Modal>
	);
};

export default AccessEditModal;
