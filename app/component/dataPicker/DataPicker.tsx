import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { registerLocale } from "react-datepicker";
import ru from "date-fns/locale/ru";
import { Controller } from "react-hook-form";
import moment from "moment";
import IconsContent from "../../icons/IconsContent";

type Props = {
	name: string
	control:any
	placeholder:string
	active: boolean
	date: string
	nameFrom: string
	nameTill: string
}

const DatePickerInput:React.FC<Props> = ({ name, control, placeholder, active }) => {
	let [startDate, setStartDate] = useState();
	registerLocale("ru", ru);

	return (
		<div className="calendar ">
			<Controller
				control={control}
				name={name}
				rules={{ required: "Заполните обязательное поле" }}
				render={({ field }) => (
					<DatePicker
						locale={ru}
						onChange={(date:any) => {
							setStartDate(date);
							field.onChange(moment(date).format("YYYY-MM-DD"));
						}}
						placeholderText={placeholder ? placeholder : "Выберите дату"}
						dateFormat="yyyy-MM-dd"
						selected={startDate}
					/>
				)}
			/>

			{active ? (
				<span> {IconsContent.DatePickerCalendarActive()}</span>
			) : (
				<span>{IconsContent.DatePickerCalendar()}</span>
			)}
		</div>
	);
};
export default DatePickerInput;



export const DatePickerInputRange:React.FC<Props> = ({ nameFrom, nameTill, control }) =>{
	registerLocale("ru", ru);
	const [startDate, setStartDate] = useState();
	const [endDate, setEndDate] = useState();
	return (
		<div className="date-input__range">
			<p>с</p>
			<div className="calendar">
				<Controller
					control={control}
					name={nameFrom}
					rules={{ required: "Заполните обязательное поле" }}
					render={({ field }) => (
						<DatePicker
							onChange={(date:any) => {
								setStartDate(date);
								field.onChange(moment(date).format("YYYY-MM-DD"));
							}}
							selectsStart
							startDate={startDate}
							endDate={endDate}
							dateFormat="yyyy-MM-dd"
							selected={startDate}
							placeholderText="Выберите дату"
						/>
					)}
				/>
				<span>{IconsContent.DatePickerCalendar()}</span>
			</div>
			<p>до</p>
			<div className="calendar">
				<Controller
					control={control}
					name={nameTill}
					rules={{ required: "Заполните обязательное поле" }}
					render={({ field }) => (
						<DatePicker
							placeholderText="Выберите дату"
							onChange={(date:any) => {
								setEndDate(date);
								field.onChange(moment(date).format("YYYY-MM-DD"));
							}}
							selectsEnd
							startDate={startDate}
							endDate={endDate}
							minDate={startDate}
							dateFormat="yyyy-MM-dd"
							selected={endDate}
						/>
					)}
				/>
				<span>{IconsContent.DatePickerCalendar()}</span>
			</div>
		</div>
	);
}

