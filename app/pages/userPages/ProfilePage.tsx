import React from "react";
import IconsContent from "../../icons/IconsContent";

const ProfilePage = () => {
	return (
		<div className="control-panel">
			<h2>Личный кабинет пользователя</h2>
			<div className="profile">
				<img
					className="profile__photo"
					src="/assets/images/Russel.svg"
					alt="foto"
				/>

				<div className="profile__name">
					<p>Иванов А.А</p>
					<p>Пользователь</p>
				</div>
				<div className="profile__edit">{IconsContent.EditProfile()}</div>
			</div>
			<div className="profile__info">
				<div className="input_wrapper">
					<label htmlFor="">Фамилия</label>
					<input type="text" value="Иванов" />
				</div>
				<div className="input_wrapper">
					<label htmlFor="">Имя</label>
					<input type="text" value="Иван" />
				</div>
				<div className="input_wrapper">
					<label htmlFor="">Отчество</label>
					<input type="text" value="Иванович" />
				</div>
				<div className="input_wrapper">
					<label htmlFor="">ИИН</label>
					<input type="text" value="900678578567867867" />
				</div>
				<div className="input_wrapper">
					<label htmlFor="">Должность</label>
					<input type="text" value="Директор" />
				</div>
				<div className="input_wrapper">
					<label htmlFor="">Государственное учреждение</label>
					<input type="text" value="Государственное учреждение" />
				</div>
				<div className="input_wrapper">
					<label htmlFor="">Адрес электронной почты</label>
					<input type="text" value="maIl@mail.ru" />
				</div>
				<div className="input_wrapper input__password">
					<label htmlFor="">Пароль</label>
					<input type="text" value="*************************************" />
					<p>Изменить пароль</p>
				</div>
			</div>
		</div>
	);
};

export default ProfilePage;
