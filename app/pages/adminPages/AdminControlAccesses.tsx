import React, { useState } from "react";
import Checkbox from "../../component/checkbox/Checkbox";
import Form from "../../component/form/Form";
import IconsContent from "../../icons/IconsContent";
import AccessAddModal from "./modals/AccessAddModal";
import AccessDeleteModal from "./modals/AccessDeleteModal";
import AccessEditModal from "./modals/AccessEditModal";

const AdminControlCatalogs = () => {
	const [checkedAll, setCheckedAll] = useState<boolean>(false);
	const [addCatalogModal, setAddCatalogModal] = useState<boolean>(false);
	const [isDeleteShow, setIsDeleteShow] = useState(false);
	const handleDeleteClose = () => {
		setIsDeleteShow(false);
	};

	const [isEditShow, setIsEditShow] = useState(false);
	const handleEditClose = () => {
		setIsEditShow(false);
	};

	const [isAddShow, setIsAddShow] = useState(false);
	const handleAddClose = () => {
		setIsAddShow(false);
	};
	const tableData = [
		{
			id: 32,
			name: "Попова Мирослава Александровна",
			bin: "9008778678667",
			date: "27.10.2022",
			access: 1,
			status: 2
		},
		{
			id: 33,
			name: "Борисов Евгений Григорьевич",
			bin: "9008778678667",
			date: "27.10.2022",
			formed: "27.109.2022-27.10.2022",
			access: 1,
			status: 1
		},
		{
			id: 12,
			name: "Нефедова Мирослава Михайловна",
			bin: "9008778678667",
			date: "27.10.2022",
			formed: "27.109.2022-27.10.2022",
			access: 2,
			status: 2
		}
	];

	const getAccess = (id: number) => {
		switch (id) {
			case 1:
				return <span className="access access__secondary">Администратор</span>;
			case 2:
				return <span className="access access__green">Пользователь</span>;
			default:
				return "";
		}
	};
	const getStatus = (id: number) => {
		switch (id) {
			case 1:
				return <span className="status status__secondary">Активный</span>;
			case 2:
				return <span className="status status__warn">Заблокирован</span>;
			default:
				return "";
		}
	};
	return (
		<div className="control-panel">
			<h2>Управление доступами</h2>
			<div className="control-panel__search">
				<div className="control-panel__search-input">
					<input type="text" placeholder="Поиск по таблице..." />
					<i>{IconsContent.Search()}</i>
				</div>
			</div>
			<button
				className="c-btn c-btn__secondary c-btn__addCatalog"
				onClick={() => setIsAddShow(true)}
				style={{ minWidth: "202px" }}
			>
				Добавить {IconsContent.Add()}
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
						<td>Дата регистрации</td>
						<td>Доступ</td>
						<td>Статус</td>
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
							<td>{item.date}</td>
							<td>{getAccess(item.access)}</td>
							<td>{getStatus(item.status)}</td>
							<td>
								<p className="control-item">
									<span onClick={() => setIsDeleteShow(true)}>
										{IconsContent.DeleteItem()}
									</span>
									<span onClick={() => setIsEditShow(true)}>
										{IconsContent.EditItem()}
									</span>
									<span>{IconsContent.AddColumn()}</span>
								</p>
							</td>
						</tr>
					))}
				</tbody>
			</table>

			<AccessDeleteModal
				isShow={isDeleteShow}
				handleClose={handleDeleteClose}
			/>
			<AccessEditModal isShow={isEditShow} handleClose={handleEditClose} />
			<AccessAddModal isShow={isAddShow} handleClose={handleAddClose} />
		</div>
	);
};

export default AdminControlCatalogs;
