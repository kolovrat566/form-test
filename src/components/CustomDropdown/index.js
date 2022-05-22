import React from 'react'
import './customDropdown.scss'
import * as cs from 'classnames'

export const CustomDropdown = ({id, list, formik, labelTExt, isObligatory}) => {
  return (
    <div className='selectContainer'>
      <div className='label'>
      {labelTExt}
      {
        isObligatory && formik.values[id] === '' &&
        <div className='redStar'>*</div>
      }
    </div>
      <select 
        id={id} 
        options={list} 
        className={cs('select', {'errorSelect' : formik.touched[id] && formik.errors[id]})}
        onChange={formik.handleChange}
      >
        <option value='not choose' disabled selected>Не выбранно</option>
        {list.map((item, index) => {
          return (
            <option value={item.value} key={index}>{item.label}</option>
          )
        })}
      </select>
      {formik.touched[id] && formik.errors[id] ? (
         <div className='error'>{formik.errors[id]}</div>
         ) : null}
    </div>
  )
}
