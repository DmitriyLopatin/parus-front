import React, { useState } from "react";
import Modal from "../../../component/Modal";
import { useForm } from "react-hook-form";
import IconsContent from "../../../icons/IconsContent";
import { IAdminMonitoringFormedPeriod } from "../../../constants/interfaces";
import Select from "react-select";
import DatePickerInput from "../../../component/dataPicker/DataPicker";
type Props = {
	isShow: boolean;
	handleClose: Function;
};
const MonitoringPeriodModal: React.FC<Props> = ({ isShow, handleClose }) => {
	const {
		register,
		handleSubmit,
		control,
		formState: { errors }
	} = useForm<IAdminMonitoringFormedPeriod>({ mode: "onBlur" });
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
		{ value: "ФИО1", label: "ФИО1" },
		{ value: "ФИО2", label: "ФИО2" },
		{ value: "ФИО3", label: "ФИО3" }
	];

	return (
		<Modal minWidth={866} isShow={isShow} handleClose={handleClose}>
			<h2 className="c-modal-title">Сформировать период действий</h2>
			<div className="modal-monitoring">
				<div className="input_wrapper">
					<label htmlFor="">ФИО</label>
					<Select
						classNamePrefix={"custom-select"}
						placeholder={"Выбрать"}
						options={fio}
						styles={customStyles}
					/>
				</div>
				<div className="input_wrapper">
					<label htmlFor="">БИН организации</label>
					<input type="text" />
				</div>
				<div className="input_wrapper">
					<label htmlFor="">Период времени</label>
					<div className="input_wrapper-date-period">
						<span>
							c
							<DatePickerInput
								name={"date"}
								control={control}
								placeholder={"Выбрать"}
								active date={""} nameFrom={""} nameTill={""}							/>
						</span>
						<span>
							{" "}
							по
							<DatePickerInput
								name={"date"}
								control={control}
								placeholder={"Выбрать"}
								active date={""} nameFrom={""} nameTill={""}							/>
						</span>
					</div>
				</div>
			</div>
			<button className="c-btn c-btn__secondary" style={{ maxWidth: "215px" }}>
				Сформировать
			</button>
		</Modal>
	);
};

export default MonitoringPeriodModal;
