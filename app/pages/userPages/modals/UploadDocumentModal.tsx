import React, { useState } from "react";
import Modal from "../../../component/Modal";
import { useForm } from "react-hook-form";
import IconsContent from "../../../icons/IconsContent";

type Props = {
	isShow: boolean;
	handleClose: Function;
};
const UploadDocumentModal: React.FC<Props> = ({ isShow, handleClose }) => {
	const [fileName, setFileName] = useState("Выберите файл");
	const {
		register,
		handleSubmit,
		control,
		formState: { errors }
	} = useForm({ mode: "onBlur" });

	return (
		<Modal minWidth={866} isShow={isShow} handleClose={handleClose}>
			<h2 className="c-modal-title">Загрузить документ</h2>
			<div className="input_wrapper-inner">
				<input
					type="file"
					id={"file"}
					style={{ maxWidth: "442px" }}
					{...register("upload", {
						onChange: (e) =>
							setFileName(e.target.value.replace(`C:\\fakepath\\`, ""))
					})}
				/>
				<button
					style={{ maxWidth: "442px" }}
					type="button"
					className="c-btn c-btn__secondary c-btn__upload"
				>
					{fileName}
					{IconsContent.Upload()}
				</button>
			</div>
			<button
				className="c-btn c-btn__green"
				style={{ maxWidth: "175px", marginTop: "30px" }}
				onClick={() => handleClose()}
			>
				Загрузить
			</button>
		</Modal>
	);
};

export default UploadDocumentModal;
