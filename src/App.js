import './App.scss';
import * as Yup from 'yup';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { CustomInput } from './components/CustomInput';
import { useFormik } from 'formik';
import { addUser, deleteUser } from './store';
import { CustomDropdown } from './components/CustomDropdown';
import { fields } from './helper';

export const App = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      patronymic: '',
      gender: '',
      birthday: '',
      documentType: '',
      documentNumber: '',
      email: '',
      phone: '',
    },

    validationSchema: Yup.object({
      firstName: Yup.string().required('Обязательное поле'),
      lastName: Yup.string().required('Обязательное поле'),
      patronymic: Yup.string().required('Обязательное поле'),
      gender: Yup.string().required('Обязательное поле'),
      birthday: Yup.date().required('Обязательное поле').typeError('Неверная дата'),
      documentType: Yup.string().required('Обязательное поле'),
      documentNumber: Yup.string().required('Обязательное поле'),
      email: Yup.string().email('Неверный E-mail'),
      phone: Yup.string(),

    }),

    onSubmit: values => {
      if (users.length > 0) {
        axios.post('https://webhook.site/0fb04133-b14d-4288-b68e-7c52aaeae458', JSON.stringify([...users, values]));
      } else {
        axios.post('https://webhook.site/0fb04133-b14d-4288-b68e-7c52aaeae458', JSON.stringify(values));
      }
    },
  });

  const handleAddUser = () => {
    if (Object.keys(formik.errors).length === 0 && formik.values.email !== '') {
      dispatch(addUser(formik.values));
      formik.resetForm();
    }
  }

  const handleDeleteUser = () => {
    if (users.length > 0) {
      dispatch(deleteUser());
      Object.keys(formik.values).forEach(item => formik.setFieldValue(item, users[users.length - 1][item]));
    }
  }

  return (
    <div className='app'>
      <div className='header'>
        <span>{`Пассажир №${users.length + 1}`}</span>
        <div>
          <button onClick={handleDeleteUser} className='deleteUserBtn'>Удалить пассажира</button>
          <button onClick={handleAddUser} className='addUserBtn'>добавить пассажира</button>
        </div>
      </div>
      <form onSubmit={formik.handleSubmit}>
        <div className='inputsContainer'>
          {fields.map(item => {
            if (item.type !== 'dropDawn') {
              return (
                <CustomInput 
                  id={item.id}
                  labelTExt={item.labelTExt}
                  formik={formik}
                  type={item.type}
                  isObligatory={item.isObligatory}
                />
              )
            } else {
              return (
                <CustomDropdown 
                  list={item.list} 
                  id={item.id}
                  formik={formik}
                  labelTExt={item.labelTExt}
                  isObligatory={item.isObligatory}
                />
              )
            }
          })}
        </div>
        <button type='submit'>Купить</button>
      </form>
    </div>
  );
}
