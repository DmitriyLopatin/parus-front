import Link from "next/link";
import React, { useState } from "react";
import Checkbox from "../../component/checkbox/Checkbox";
import Form from "../../component/form/Form";
import IconsContent from "../../icons/IconsContent";
import CatalogsAddModal from "./modals/CatalogsAddModal";
import CatalogsDeleteModal from "./modals/CatalogsDeleteModal";
import CatalogsEditModal from "./modals/CatalogsEditModal";

const AdminControlCatalogs = () => {
	const [checkedAll, setCheckedAll] = useState<boolean>(false);
	const [addCatalogModal, setAddCatalogModal] = useState<boolean>(false);
	const [showPerPage, setShowPerPage] = useState(false);

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
		{ id: 32, name: "Области", crted_at: "22.10.2022", status: 1 },
		{ id: 12, name: "Районы", crted_at: "13.02.2022", status: 2 },
		{ id: 2, name: "Учреждения", crted_at: "21.10.2022", status: 1 }
	];

	const getStatus = (id: number) => {
		switch (id) {
			case 1:
				return <span className="status status__secondary">Активный</span>;
			case 2:
				return <span className="status status__gray">Неактивный</span>;
			default:
				return "";
		}
	};
	return (
		<div className="control-panel">
			<h2>Управление справочниками</h2>
			<button
				className="c-btn c-btn__secondary c-btn__addCatalog"
				onClick={() => setIsAddShow(true)}
				style={{ minWidth: "287px" }}
			>
				Создать справочник {IconsContent.Add()}
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
						<td>НАИМЕНОВАНИЕ</td>
						<td>ДАТА СОЗДАНИЯ</td>
						<td>СТАТУС</td>
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
							<td>{item.crted_at}</td>
							<td>{getStatus(item.status)}</td>
							<td>
								<p className="control-item">
									<span onClick={() => setIsDeleteShow(true)}>
										{IconsContent.DeleteItem()}
									</span>
									<span onClick={() => setIsEditShow(true)}>
										{IconsContent.EditItem()}
									</span>
									<Link href={`/administrator/${item.id}`}>
										<span>{IconsContent.AddColumn()}</span>
									</Link>
								</p>
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

			<CatalogsDeleteModal
				isShow={isDeleteShow}
				handleClose={handleDeleteClose}
			/>
			<CatalogsEditModal isShow={isEditShow} handleClose={handleEditClose} />
			<CatalogsAddModal isShow={isAddShow} handleClose={handleAddClose} />
		</div>
	);
};

export default AdminControlCatalogs;
