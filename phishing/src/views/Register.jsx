import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useAuthContext } from '../context/AuthContext';
import ModalSample from '../components/ModalSample';

const RegisterSchema = Yup.object().shape({
  firstname: Yup.string()
    .min(2, 'Too short! 2 letters minimum')
    .max(64, 'Too Long! 64 letters maximum')
    .required('Firstname is required!'),
  lastname: Yup.string()
    .min(2, 'Too short! 2 letters minimum')
    .max(64, 'Too Long! 64 letters maximum')
    .required('Lastname is required!'),
  email: Yup.string().email('Invalid email address').required('Email is required!'),
  password: Yup.string()
    .min(8, 'Password needs to have at least 8 letters')
    .max(64, 'Your password is too long! 64 letters maximum')
    .required('Password is required!')
});

export default function Register({ modalOpen, setModalOpen }) {
  const { register } = useAuthContext()
  const { setLoginModalOpen } = useAuthContext()
  return (
    <ModalSample modalOpen={modalOpen} setModalOpen={setModalOpen} className="flex flex-col justify-center gap-12 bg-[#000465] rounded-[40px] py-12 px-12">
      <div className='font-bold italic w-full'>
        <p className="text-center text-white">Sign up to view Liza Chan&apos;s CV</p>
      </div>
      <Formik
        initialValues={{
          firstname: '',
          lastname: '',
          email: '',
          password: ''
        }}
        validationSchema={RegisterSchema}
        onSubmit={(value, { resetForm }) => {
          register(value, resetForm)
        }}
      >
        {({
          handleBlur,
          handleChange,
          values,
          errors,
          touched,
          handleSubmit,
          isSubmitting
        }) => (
          <form onSubmit={handleSubmit} className="text-white flex flex-col gap-4 px-12">
            <div className="flex flex-col">
              <label htmlFor='firstname' className="italic">Firstname</label>
              <input name='firstname' onChange={handleChange} onBlur={handleBlur} value={values.firstname} className="px-4 text-black font-bold rounded-[40px] p-2" type="text" />
              {errors.firstname && touched.firstname && <span className='px-2 mt-2 text-xs text-red-300'>{errors.firstname}</span>}
            </div>
            <div className="flex flex-col">
              <label htmlFor='lastname' className="italic">Lastname</label>
              <input name='lastname' onChange={handleChange} onBlur={handleBlur} value={values.lastname} className="px-4 text-black font-bold rounded-[40px] p-2" type="text" />
              {errors.lastname && touched.lastname && <span className='px-2 mt-2 text-xs text-red-300'>{errors.lastname}</span>}
            </div>
            <div className="flex flex-col">
              <label htmlFor='email' className="italic">Email</label>
              <input type="email" name='email' onChange={handleChange} onBlur={handleBlur} value={values.email} className="px-4 text-black font-bold rounded-[40px] p-2" />
              {errors.email && touched.email && <span className='px-2 mt-2 text-xs text-red-300'>{errors.email}</span>}
            </div>
            <div className="flex flex-col">
              <label htmlFor='password' className="italic">Password</label>
              <input type="password" name='password' onChange={handleChange} onBlur={handleBlur} value={values.password} className="px-4 text-black font-bold rounded-[40px] p-2" />
              {errors.password && touched.password && <span className='px-2 mt-2 text-xs text-red-300'>{errors.password}</span>}
            </div>
            <div className='italic flex gap-8'>
              <p>Already have an account?</p>
              <button onClick={(event) => {
                event.stopPropagation()
                setModalOpen(false)
                setLoginModalOpen(true)
              }} className='font-bold'>Log in</button>
            </div>
            <div className='flex justify-center'>
              <button className='w-max bg-[#FFD600] rounded-[40px] px-16 text-black font-semibold italic py-2' disabled={isSubmitting}>
                Sign up
              </button>
            </div>
          </form>
        )}
      </Formik>
    </ModalSample>
  )
}

Register.propTypes = {
  modalOpen: Boolean,
  setModalOpen: React.Dispatch
}