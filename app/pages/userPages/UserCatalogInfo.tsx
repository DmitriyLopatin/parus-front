import React, { useState } from "react";
import IconsContent from "../../icons/IconsContent";
import Checkbox from "../../component/checkbox/Checkbox";
import DatePickerInput from "../../component/dataPicker/DataPicker";
import Select from "react-select";
import { useForm } from "react-hook-form";
import UploadDocumentModal from "./modals/UploadDocumentModal";

const UserCatalogInfo = () => {
	const [checkedAll, setCheckedAll] = useState<boolean>(false);
	const [showPerPage, setShowPerPage] = useState(false);
	const [isShow, setIsShow] = useState<boolean>(false);
	const handleClose = () => {
		setIsShow(false);
	};
	const {
		register,
		handleSubmit,
		control,
		formState: { errors }
	} = useForm({
		mode: "onBlur"
		// resolver: yupResolver(SendMessageSheme),
	});

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

	const areas = [
		{ value: "Область1", label: "Область1" },
		{ value: "Область2", label: "Область2" },
		{ value: "Область3", label: "Область3" }
	];

	const regions = [
		{ value: "Регион1", label: "Регион1" },
		{ value: "Регион2", label: "Регион2" },
		{ value: "Регион3", label: "Регион3" }
	];

	const status = [
		{ value: "Статус1", label: "Статус1" },
		{ value: "Статус2", label: "Статус2" },
		{ value: "Статус3", label: "Статус3" }
	];

	const tableData = [
		{
			id: 32,
			type: "План инд",
			sendDate: "27.10.2022 10:14:33",
			sender: "Иванов И. И. («Наименование учреждения», Бурабайский район)",
			bin: "9008778678667",
			status: 1
		},
		{
			id: 33,
			type: "План сводный",
			sendDate: "27.10.2022 10:14:33",
			sender: "Иванов И. И. («Наименование учреждения», Бурабайский район)",
			bin: "9008778678667",
			status: 2
		},
		{
			id: 12,
			type: "План сводный",
			sendDate: "27.10.2022 10:14:33",
			sender: "Иванов И. И. («Наименование учреждения», Бурабайский район)",
			bin: "9008778678667",
			status: 1
		}
	];

	const getStatus = (id: number) => {
		switch (id) {
			case 1:
				return <span className="status status__secondary">В работе</span>;
			case 2:
				return <span className="status status__green">Выполнено</span>;
			default:
				return "";
		}
	};

	return (
		<>
			<div className="control-panel">
				<h2>Реестр сведений</h2>
				<div className="filter">
					<h4>{IconsContent.Filter()} Фильтр</h4>
					<div className="filter__items">
						{/* @ts-ignore */}
						<DatePickerInput
							name={"date"}
							control={control}
							placeholder={"Дата получения данных"}
							active
						/>
						{/* @ts-ignore */}
						<DatePickerInput
							name={"date"}
							control={control}
							placeholder={"Дата передачи данных"}
							active
						/>
						<Select
							classNamePrefix={"custom-select"}
							placeholder={"Область"}
							options={areas}
							styles={customStyles}
						/>
						<Select
							classNamePrefix={"custom-select"}
							placeholder={"Регион"}
							options={regions}
							styles={customStyles}
						/>
						<Select
							classNamePrefix={"custom-select"}
							placeholder={"Статус"}
							options={status}
							styles={customStyles}
						/>
						<input
							type="text"
							placeholder="Наименование, код учреждения, БИН"
						/>
						<button className="filter__reset">Сбросить</button>
					</div>
				</div>
				<div className="data__actions">
					<button
						className="c-btn"
						style={{ maxWidth: "262px" }}
						onClick={() => setIsShow(true)}
					>
						Импорт данных (XML)
					</button>
					<button
						className="c-btn c-btn__secondary"
						style={{ maxWidth: "255px" }}
					>
						Экспорт данных {IconsContent.Export()}
					</button>
				</div>
				<table>
					<thead>
						<tr>
							<td>
								<p
									className={
										checkedAll ? "checkbox checkbox__checked" : "checkbox"
									}
									onClick={() => setCheckedAll(!checkedAll)}
								>
									{IconsContent.Checked()}
								</p>
							</td>
							<td>ID</td>
							<td>Тип документа</td>
							<td>Дата отправки</td>
							<td>Отправитель (учреждение, район)</td>
							<td>БИН организации</td>
							<td>Статус ответа</td>
							<td></td>
						</tr>
					</thead>
					<tbody>
						{tableData.map((item, index) => (
							<tr key={index}>
								<td>
									<Checkbox checkedAll={checkedAll} />
								</td>
								<td>{item.id}</td>
								<td>{item.type}</td>
								<td>{item.sendDate}</td>
								<td>{item.sender}</td>
								<td>{item.bin}</td>
								<td>{getStatus(item.status)}</td>
								<td className="icon">{IconsContent.Download()}</td>
							</tr>
						))}
					</tbody>
				</table>
				<div className="pagination">
					<p>
						ОТМЕЧЕНО: <span>0/4</span>
					</p>
					<p>
						ВСЕГО: <span>4</span>
					</p>
					<p>
						СТРАНИЦ: <span>1</span>
					</p>
					<div className="pagination__dropdown">
						<p onClick={() => setShowPerPage(!showPerPage)}>
							ПОКАЗАТЬ:
							<span>
								4
								<i
									className={`pagination__dropdown-arrow ${
										showPerPage ? "pagination__dropdown-arrow-active" : ""
									}`}
								>
									{IconsContent.ArrowPagination()}
								</i>
							</span>
						</p>
						{showPerPage && (
							<ul className="pagination__dropdown-show">
								<li>ПОКАЗАТЬ: 4</li>
								<li>ПОКАЗАТЬ: 8</li>
								<li>ПОКАЗАТЬ: 12</li>
							</ul>
						)}
					</div>
				</div>
			</div>
			<UploadDocumentModal handleClose={handleClose} isShow={isShow} />
		</>
	);
};

export default UserCatalogInfo;
