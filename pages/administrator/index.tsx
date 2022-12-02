import WrapperAdmin from "../../app/component/wrapperAdmin/WrapperAdmin"
import AdminControlPanel from "../../app/pages/adminPages/AdminControlPanel"

const Administrator = () => {
  const catalogs = [
    {id:1, name: "Наименование справочника", region: "Акмолинская область"},
    {id:12, name: "Наименование справочника", region: "Акмолинская область"},
    {id:5, name: "Наименование справочника", region: "Акмолинская область"},
  ];
  const lastActions = [
    {id:3, full_name: "Иванов П.С", action: "Добавил новые данные в реестр"},
    {id:2, full_name: "Лебедев С.Ф", action: "изменил данные профиля"},
    {id:15, full_name: "Петров А.А.", action: "Удалил данные из реестра"},
  ];
  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
  ];
  return (
    <WrapperAdmin>
      <AdminControlPanel catalogs={catalogs} lastActions={lastActions} options={options}/>
    </WrapperAdmin>
  )
}

export default Administrator;