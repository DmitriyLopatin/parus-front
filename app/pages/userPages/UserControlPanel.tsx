import React, { useState } from "react";
import IconsContent from "../../icons/IconsContent";
import Checkbox from "../../component/checkbox/Checkbox";

const UserControlPanel = () => {
	const [checkedAll, setCheckedAll] = useState<boolean>(false);
	const [deleteModal, setDeleteModal] = useState<boolean>(false);
	const [addCatalogModal, setAddCatalogModal] = useState<boolean>(false);

	const tableData = [
		{
			id: 32,
			type: "План инд",
			sendDate: "27.10.2022 10:14:33",
			sender: "Иванов И. И. («Наименование учреждения», Бурабайский район)",
			bin: "9008778678667",
			status: 1,
		},
		{
			id: 33,
			type: "План сводный",
			sendDate: "27.10.2022 10:14:33",
			sender: "Иванов И. И. («Наименование учреждения», Бурабайский район)",
			bin: "9008778678667",
			status: 2,
		},
		{
			id: 12,
			type: "План сводный",
			sendDate: "27.10.2022 10:14:33",
			sender: "Иванов И. И. («Наименование учреждения», Бурабайский район)",
			bin: "9008778678667",
			status: 1,
		},
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
		<div className="control-panel">
			<h2>Панель управления</h2>
			<div className="control-panel__welcome">
				<p>ДОБРО ПОЖАЛОВАТЬ</p>
				<p>
					Данный дэшборд содержит все необходимые показатели для полноценной
					работы.
				</p>
			</div>
			<div className="control-panel__statistics">
				<h2>Данных отправлено</h2>
				<div>
					<p>
						<span>445</span>
						<span>Всего</span>
					</p>
					<p>
						<span>140</span>
						<span>за год</span>
					</p>
					<p>
						<span>10</span>
						<span>за месяц</span>
					</p>
					<p>
						<span>3</span>
						<span>за сегодня</span>
					</p>
				</div>
			</div>
			<div className="control-panel__table">
				<div className="control-panel__table-title">
					<h2>Реестр сведений</h2>
					<span>Все {IconsContent.ArrowRight()}</span>
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
			</div>
		</div>
	);
};

export default UserControlPanel;
