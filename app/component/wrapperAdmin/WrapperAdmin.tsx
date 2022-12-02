import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import IconsContent from '../../icons/IconsContent';
import Burger from '../burger/Burger';
import { useRouter } from 'next/router';
import { useAsideShortContext, useUserDataContext } from '../../utils/context';
import { UserService } from '../../services/UserService';


interface Props {
  children: React.ReactNode;
}

const NavLinks = [
  { title: "Панель управления", path: "/administrator", icon: IconsContent.PanelControl() },
  { title: "Управление справочниками", path: "/administrator/control-catalogs", icon: IconsContent.CatalogsControl() },
  { title: "Управление доступами", path: "/administrator/control-accesses", icon: IconsContent.AccessesControl() },
  { title: "Добавление пользователей", path: "/administrator/add-user", icon: IconsContent.AddUser() },
  { title: "Мониторинг действий", path: "/administrator/actions-monitoring", icon: IconsContent.ActionsMonitoring() },
  { title: "Уведомления", path: "/administrator/notifications", icon: IconsContent.Notifications() },
  { title: "Выход", path: "/authorization", icon: IconsContent.Exit() },
]



const WrapperAdmin: React.FC<Props> = ({ children }) => {
  const router = useRouter().route
  console.log(router)
  console.log(NavLinks[0].path)

  const { asideShort } = useAsideShortContext()
  const { userData } = useUserDataContext()

  return (
    <div className='wrapperAdmin'>
      <div className='container'>
        <aside className={asideShort[0] ? 'aside aside__short' : "aside"}>
          <div className='aside__header'>
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
              <div className='input'>
                <input type="text" placeholder='Поиск' />
                {IconsContent.Search()}
              </div>
              <div className='profile'>
                <img className='profile__photo' src="/assets/images/Russel.svg" alt='foto' />
                <div className='profile__name'>
                  <p>{userData[0].userName} {userData[0].userSurname}</p>
                  <p>{userData[0].userRole=="admin"?"Администратор":"Пользователь"}</p>
                </div>
              </div>
            </header>
            {children}
          </section>
          <footer>
            <p>© 2022 «Парус-КАЗ.Бюджет(Онлайн)»</p>
          </footer>
        </main>
      </div>

    </div>
  )
}

export default WrapperAdmin