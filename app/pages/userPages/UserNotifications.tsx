import React, { useState } from "react";
import IconsContent from "../../icons/IconsContent";
import Checkbox from "../../component/checkbox/Checkbox";
import NotificationModal from "./modals/NotificationModal";

const UserNotifications = () => {
	const [checkedAll, setCheckedAll] = useState<boolean>(false);
	const [showPerPage, setShowPerPage] = useState(false);
	const [isShow, setIsShow] = useState<boolean>(false);
	const handleClose = () => {
		setIsShow(false);
	};
	const tableData = [
		{
			id: 22,
			title: "Наименование уведомления",
			text: "Новая заявка на регистрацию...",
			status: 1
		},
		{
			id: 12,
			title: "Наименование уведомления",
			text: "Новая заявка на регистрацию...",
			status: 2
		},
		{
			id: 44,
			title: "Наименование уведомления",
			text: "Новая заявка на регистрацию...",
			status: 1
		}
	];

	const getStatus = (id: number) => {
		switch (id) {
			case 1:
				return <span className="status status__secondary">Ознакомлен</span>;
			case 2:
				return <span className="status status__green">Новый</span>;
			default:
				return "";
		}
	};

	return (
		<div className="control-panel">
			<h2>Уведомления</h2>
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
						<td>№</td>
						<td>Наименование</td>
						<td>Текст</td>
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
							<td>{item.title}</td>
							<td>{item.text}</td>
							<td>{getStatus(item.status)}</td>
							<td className="icon" onClick={() => setIsShow(true)}>
								{IconsContent.Eye()}
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
			<NotificationModal handleClose={handleClose} isShow={isShow} />
		</div>
	);
};

export default UserNotifications;
