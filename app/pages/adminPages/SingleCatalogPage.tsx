import React, { useState } from "react";
import BreadScrumbs from "../../component/Breadscrumbs";
import IconsContent from "../../icons/IconsContent";
import Checkbox from "../../component/checkbox/Checkbox";
import SingleCatalogDeleteModal from "./modals/SingleCatalogDeleteModal";
import SingleCatalogEditModal from "./modals/SingleCatalogEditModal";
import SingleCatalogAddModal from "./modals/SingleCatalogAddModal";
import SingleCatalogAddColumnModal from "./modals/SingleCatalogAddColumnModal";

const SingleCatalogPage = () => {
	const breadscrumbs = {
		breadscrumb1: {
			link: "/administrator/control-catalogs",
			title: "Управление справочниками"
		},

		breadscrumb2: {
			title: "Области",
			current: true
		}
	};
	const [checkedAll, setCheckedAll] = useState<boolean>(false);
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

	const [isAddColumnShow, setIsAddColumnShow] = useState(false);
	const handleAddColumnClose = () => {
		setIsAddColumnShow(false);
	};

	const tableData = [
		{ id: 32, name: "Акмолинская область" },
		{
			id: 12,
			name: "Карагандинская область",
			center: "Караганда"
		},
		{
			id: 2,
			name: "Северо-Казахстанская область"
		}
	];
	return (
		<div>
			<div className="control-panel">
				<BreadScrumbs breadscrumb={breadscrumbs} />
				<h2>Области</h2>
				<button
					className="c-btn c-btn__secondary c-btn__addCatalog"
					style={{ minWidth: "309px" }}
					onClick={() => setIsAddShow(true)}
				>
					Добавить в справочник {IconsContent.Add()}
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
							<td>
								<p>
									административный центр{" "}
									<span> {IconsContent.MinusCircle()}</span>
								</p>
							</td>
							<td>
								<p>
									Территориальный код{" "}
									<span onClick={() => setIsAddColumnShow(true)}>
										{IconsContent.PlusCircle()}
									</span>
								</p>
							</td>
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
								<td>{item.center}</td>
								<td></td>
								<td>
									<p className="control-item">
										<span onClick={() => setIsDeleteShow(true)}>
											{IconsContent.DeleteItem()}
										</span>
										<span onClick={() => setIsEditShow(true)}>
											{IconsContent.EditItem()}
										</span>
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
			</div>
			<SingleCatalogDeleteModal
				isShow={isDeleteShow}
				handleClose={handleDeleteClose}
			/>
			<SingleCatalogEditModal
				isShow={isEditShow}
				handleClose={handleEditClose}
			/>
			<SingleCatalogAddModal isShow={isAddShow} handleClose={handleAddClose} />
			<SingleCatalogAddColumnModal
				isShow={isAddColumnShow}
				handleClose={handleAddColumnClose}
			/>
		</div>
	);
};

export default SingleCatalogPage;
