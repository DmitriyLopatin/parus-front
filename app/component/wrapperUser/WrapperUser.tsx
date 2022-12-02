import Link from "next/link";
import React, { useEffect, useState } from "react";
import IconsContent from "../../icons/IconsContent";
import Burger from "../burger/Burger";
import { useRouter } from "next/router";
import { useAsideShortContext } from "../../utils/context";
import { UserService } from "../../services/UserService";

interface Props {
	children: React.ReactNode;
}

const NavLinks = [
	{
		title: "Панель управления",
		path: "/user",
		icon: IconsContent.PanelControl()
	},
	{
		title: "Реестр сведений",
		path: "/user/catalog-info",
		icon: IconsContent.CatalogInfo()
	},
	{
		title: "Уведомления",
		path: "/user/notifications",
		icon: IconsContent.Notifications()
	},
	{ title: "Выход", path: "/authorization", icon: IconsContent.Exit() }
];

const WrapperUser: React.FC<Props> = ({ children }) => {
	const router = useRouter().route;
	const pathname = useRouter();
	// console.log(router);
	// console.log(NavLinks[0].path);

	const { asideShort } = useAsideShortContext();

	return (
		<div className="wrapperAdmin">
			<div className="container">
				<aside className={asideShort[0] ? "aside aside__short" : "aside"}>
					<div className="aside__header">
						<Burger />
						{IconsContent.SailAdmin()}
					</div>
					<ul>
						{NavLinks.map((item, index) =>
							<Link key={index} href={item.path} onClick={() => index == NavLinks.length - 1 ? UserService.signOut().then(() => localStorage.removeItem('.AuthToken')) : null}>
								<li className={router === item.path ? "activeLink" : ""}>
									{item.icon} <span>{item.title}</span>
									{item.title === "Уведомления" ? <span className="notifications__amount">3</span> : null}
								</li>
							</Link>
						)}
					</ul>
				</aside>
				<main>
					<section>
						<header>
							<div className="input">
								<input type="text" placeholder="Поиск" />
								{IconsContent.Search()}
							</div>
							<Link href="/user/profile">
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
								</div>
							</Link>
						</header>
						{children}
					</section>
					<footer>
						<p>© 2022 «Парус-КАЗ.Бюджет(Онлайн)»</p>
					</footer>
				</main>
			</div>
		</div>
	);
};

export default WrapperUser;
