import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Modal from "../../../component/Modal";
import DatePickerInput from "../../../component/dataPicker/DataPicker";
type Props = {
	isShow: boolean;
	handleClose: Function;
};
const MonitoringUsersPeriodModal: React.FC<Props> = ({
	isShow,
	handleClose
}) => {
	const {
		register,
		handleSubmit,
		control,
		formState: { errors }
	} = useForm({ mode: "onBlur" });

	return (
		<Modal minWidth={866} isShow={isShow} handleClose={handleClose}>
			<h2 className="c-modal-title">Сформировать период действий</h2>
			<div className="modal-monitoring">
				<h3 className="modal-monitoring__fio">
					Попова Мирослава Александровна
				</h3>
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

export default MonitoringUsersPeriodModal;
