import React, { useState } from "react";
import Modal from "../../../component/Modal";
import { useForm } from "react-hook-form";
import IconsContent from "../../../icons/IconsContent";
import { IAddUser } from "../../../constants/interfaces";
import Select from "react-select";
import DatePickerInput from "../../../component/dataPicker/DataPicker";
type Props = {
	isShow: boolean;
	handleClose: Function;
};
const AddUserModal: React.FC<Props> = ({ isShow, handleClose }) => {
	const {register,handleSubmit,control,formState: { errors }} = useForm<IAddUser>({ mode: "onBlur" });

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
	const regions = [
		{ value: "Astana", label: "Астана" },
		{ value: "Kostanay", label: "Костанай" },
		{ value: "Almaty", label: "Алматы" }
	];

	return (
		<Modal minWidth={866} isShow={isShow} handleClose={handleClose}>
			<h2 className="c-modal-title">Сформировать период действий</h2>
			<div className="modal-monitoring">
				<div className="input_wrapper">
					<label htmlFor="">ФИО</label>
					<input type="text" {...register("name")}/>
				</div>
				<div className="input_wrapper">
					<label htmlFor="">БИН организации</label>
					<input type="text" {...register("iin_bin")}/>
				</div>
                <div className="input_wrapper">
					<label htmlFor="">Регион</label>
					<Select
						classNamePrefix={"custom-select"}
						placeholder={"Выбрать"}
						options={regions}
						styles={customStyles}
					/>
				</div>
			</div>
			<button className="c-btn c-btn__secondary" style={{ maxWidth: "215px" }}>
				Сформировать
			</button>
		</Modal>
	);
};

export default AddUserModal;
