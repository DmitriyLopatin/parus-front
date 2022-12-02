import * as yup from 'yup'

// email: string;
// phoneNumber: string;
export const SendMessageSheme = yup.object().shape({
    full_name: yup
        .string()
        .required('Обязательное поле ввода'),
    email: yup
        .string()
        .email('Введите корректный email')
        .required('Обязательное поле ввода'),
    tin: yup
        .string()
        .required('Обязательное поле ввода')
        .max(12, 'Длина ИИН должна быть 12 цифр')
        .min(12, 'Длина ИИН должна быть 12 цифр'),
    password: yup
        .string()
        .required("Поле обязательно")
        .min(8, "Минимум 8 символов"),
    name_of_institution:yup
    .string()
    .required("Поле обязательно"),
    region:yup
    .string()
    .required("Поле обязательно"),
    repeat_password: yup
        .string()
        .required("Поле обязательно")
        .oneOf([yup.ref("password"), null], "Пароль должен совпадать"),
        phone: yup.string().test({
            test: (value) => {
              if (!value) {
                return false;
              } else if (value.replace(/_/g, "").length !== 18) {
                return false;
              }
              return true;
            },
            message: "Некорректный формат номера",
          }),
})
