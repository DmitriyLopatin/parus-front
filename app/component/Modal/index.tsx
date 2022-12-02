import React, { useEffect, useState, useRef } from "react";
import classNames from "classnames";
import { createPortal } from "react-dom";
import styles from "./styles.module.scss";
import Backdrop from "../Backdrop";

type Props = {
	isShow: boolean;
	handleClose: Function;
	children: React.ReactNode;
	minWidth?: number;
};

const Modal: React.FC<Props> = ({
	isShow,
	handleClose,
	minWidth,
	children
}) => {
	if (!isShow) {
		return null;
	}
	return createPortal(
		<>
			<div className={classNames(styles.modal, { "d-none": !isShow })}>
				<div
					style={minWidth ? { minWidth: minWidth } : {}}
					className={styles.modalContainer}
				>
					<div className={styles.modalTop}>
						<div
							className={styles.modalControls}
							onClick={() => {
								handleClose();
							}}
						/>
					</div>
					<div className={styles.modalMain}>{children}</div>
				</div>
				<Backdrop onClick={handleClose} transparent={false} />
			</div>
		</>,
		document.getElementById("modal-root")!!
	);
};

export default Modal;
