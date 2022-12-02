import React, { useState } from "react";
import IconsContent from "../../icons/IconsContent";
import Checkbox from "../../component/checkbox/Checkbox";
import MonitoringPeriodModal from "./modals/MonitoringPeriodModal";
import MonitoringUsersPeriodModal from "./modals/MonitoringUsersPeriodModal";

const AdminActionsMonitoring = () => {
	const [checkedAll, setCheckedAll] = useState<boolean>(false);
	const [isPeriodShow, setIsPeriodShow] = useState(false);
	const handlePeriodCLose = () => {
		setIsPeriodShow(false);
	};

	const [isUserPeriodShow, setIsUserPeriodShow] = useState(false);
	const handleUserPeriodCLose = () => {
		setIsUserPeriodShow(false);
	};

	const [showPerPage, setShowPerPage] = useState(false);
	const tableData = [
		{
			id: 32,
			name: "Попова Мирослава Александровна",
			bin: "9008778678667",
			lastAction: "Добавил новые данные в реестр",
			date: "27.10.2022",
			formed: "27.109.2022-27.10.2022"
		},
		{
			id: 33,
			name: "Борисов Евгений Григорьевич",
			bin: "9008778678667",
			lastAction: "Добавил новые данные в реестр",
			date: "27.10.2022",
			formed: "27.109.2022-27.10.2022"
		},
		{
			id: 12,
			name: "Нефедова Мирослава Михайловна",
			bin: "9008778678667",
			lastAction: "Изменил данные профиля",
			date: "27.10.2022",
			formed: "27.109.2022-27.10.2022"
		}
	];
	return (
		<div className="control-panel">
			<h2>Мониторинг действий</h2>
			<div className="control-panel__search">
				<div className="control-panel__search-input">
					<input type="text" placeholder="Поиск по таблице..." />
					<i>{IconsContent.Search()}</i>
				</div>
			</div>
			<button
				className="c-btn c-btn__secondary"
				style={{ maxWidth: "245px" }}
				onClick={() => setIsPeriodShow(true)}
			>
				Сформировать {IconsContent.Circle()}
			</button>
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
						<td>ФИО</td>
						<td>БИН организации</td>
						<td>Последние Действие</td>
						<td>Дата</td>
						<td>Сформирован</td>
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
							<td>{item.name}</td>
							<td>{item.bin}</td>
							<td>{item.lastAction}</td>
							<td>{item.date}</td>
							<td className="adminMonitoring__formed">
								{item.formed}
								<div className="adminMonitoring__formed-documents">
									<span>Скачать PDF</span>
									<span>Скачать Xls</span>
								</div>
							</td>
							<td className="icon" onClick={() => setIsUserPeriodShow(true)}>
								{IconsContent.AddColumn()}
							</td>
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
			<MonitoringPeriodModal
				isShow={isPeriodShow}
				handleClose={handlePeriodCLose}
			/>
			<MonitoringUsersPeriodModal
				isShow={isUserPeriodShow}
				handleClose={handleUserPeriodCLose}
			/>
		</div>
	);
};

export default AdminActionsMonitoring;
