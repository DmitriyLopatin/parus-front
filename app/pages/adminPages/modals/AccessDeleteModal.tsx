import React, { useState } from "react";
import Modal from "../../../component/Modal";
import IconsContent from "../../../icons/IconsContent";

type Props = {
	isShow: boolean;
	handleClose: Function;
};
const AccessDeleteModal: React.FC<Props> = ({ isShow, handleClose }) => {
	return (
		<Modal minWidth={866} isShow={isShow} handleClose={handleClose}>
			<h2 className="c-modal-title">Удаление доступа</h2>
			<p className="modal__delete-text">
				Вы хотите удалить доступ администратора для «Попова Мирослава
				Александровна», вы уверены в удаление?
			</p>
			<div className="modal__buttons">
				<button className="c-btn c-btn__warn" style={{ maxWidth: "161px" }}>
					Удалить
				</button>
				<button className="c-btn c-btn__dark" style={{ maxWidth: "127px" }}>
					Нет
				</button>
			</div>
		</Modal>
	);
};

export default AccessDeleteModal;
