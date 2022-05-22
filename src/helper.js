export const fields = [
  {
    id: 'lastName',
    labelTExt: 'Фамилия',
    type: 'text',
    isObligatory: true
  },
  {
    id: 'firstName',
    labelTExt: 'Имя',
    type: 'text',
    isObligatory: true
  },
  {
    id: 'patronymic',
    labelTExt: 'Отчество',
    type: 'text',
    isObligatory: true
  },
  {
    id: 'gender',
    labelTExt: 'Пол',
    type: 'dropDawn',
    isObligatory: true,
    list: [
      {
        value: 'male',
        label: 'мужской'
      }, 
      {
        value: 'female',
        label: 'женский'
      },
    ]
  },
  {
    id: 'birthday',
    labelTExt: 'Дата рождения',
    type: 'text',
    isObligatory: true
  },
  {
    id: 'documentType',
    labelTExt: 'Тип документа',
    type: 'dropDawn',
    isObligatory: true,
    list: [
      {
        value: 'pasport',
        label: 'Паспорт'
      }, 
      {
        value: 'birthСertificate',
        label: 'свидетельство о рождении'
      },
    ]  },
  {
    id: 'documentNumber',
    labelTExt: 'Номер документа',
    type: 'number',
    isObligatory: true
  },
  {
    id: 'phone',
    labelTExt: 'Телефон пассажира',
    type: 'text',
    isObligatory: false
  },
  {
    id: 'email',
    labelTExt: 'E-mail пассажира',
    type: 'text',
    isObligatory: false
  },
]