import React, { useState } from "react";
import Modal from "../../../component/Modal";
import IconsContent from "../../../icons/IconsContent";

type Props = {
	isShow: boolean;
	handleClose: Function;
};
const NotificationModal: React.FC<Props> = ({ isShow, handleClose }) => {
	return (
		<Modal minWidth={866} isShow={isShow} handleClose={handleClose}>
			<h2 className="c-modal-title">Уведомления</h2>
			<div className="modal-notification">
				<h5>Наименование уведомления</h5>
				<div className="modal-notification__info">
					<div className="modal-notification__info-item">
						{IconsContent.DatePickerCalendarActive()} 21.09.2022
					</div>
					<div className="modal-notification__info-item">
						{IconsContent.MenuDots()} №22
					</div>
				</div>
				<p>Новая заявка на регистрацию</p>
			</div>{" "}
			<button
				className="c-btn c-btn__secondary"
				style={{ maxWidth: "194px" }}
				onClick={() => handleClose()}
			>
				Ознакомлен
			</button>
		</Modal>
	);
};

export default NotificationModal;
