import React from 'react'
import { Formik } from 'formik'
import ModalSample from '../components/ModalSample'
import * as Yup from "yup"
import ig from "../assets/icons/ig-icon.png"
import twt from "../assets/icons/twt-icon.png"
import { useAuthContext } from '../context/AuthContext';

const LoginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email address').required('Email is required!'),
  password: Yup.string()
    .min(8, 'Password needs to have at least 8 letters')
    .max(64, 'Your password is too long! 64 letters maximum')
    .required('Password is required!')
})

export default function Login({ modalOpen, setModalOpen }) {
  const { login, isLogin, authErrors } = useAuthContext()
  console.log(authErrors)
  return (
    <ModalSample modalOpen={modalOpen} setModalOpen={setModalOpen} className={'flex flex-col justify-center bg-[#8C8ED2] text-white rounded-[40px] px-12 py-6 w-[25%] h-max'}>
      <div className='p-4'>
        <p className='text-center font-semibold italic'>Login to view Liza Chan&apos;s Project</p>
      </div>
      <Formik
        validationSchema={LoginSchema}
        initialValues={{
          email: "",
          password: "",
        }}
        onSubmit={(values, { resetForm }) => {
          login(values, resetForm, setModalOpen)
        }}
      >
        {({
          values,
          touched,
          errors,
          handleChange,
          handleBlur,
          handleSubmit,
        }) => (
          <form action="" className='flex flex-col gap-4' onSubmit={handleSubmit}>
            <div className='flex flex-col gap-4'>
              <div className="flex flex-col">
                <label htmlFor='email' className="italic font-semibold">Email</label>
                <input name='email' onChange={handleChange} onBlur={handleBlur} value={values.email} className="px-4 text-black font-bold rounded-[40px] p-2" type="email" />
                {errors.email && touched.email && <span className='px-2 mt-2 text-xs text-red-200'>{errors.email}</span>}
              </div>
              <div className="flex flex-col">
                <label htmlFor='password' className="italic font-semibold">Password</label>
                <input name='password' onChange={handleChange} onBlur={handleBlur} value={values.password} className="px-4 text-black font-bold rounded-[40px] p-2" type="password" />
                {errors.password && touched.password && <span className='px-2 mt-2 text-xs text-red-200'>{errors.password}</span>}
              </div>
            </div>
            <div>
              {authErrors?.map((err, key) => {
                return (
                  <div key={key} className='text-sm text-red-200 italic'>
                    {err.message || err}
                  </div>
                )
              })}
            </div>
            <div className='flex justify-between'>
              <p className='italic hover:underline hover:underline-offset-2'>Forget password?</p>
              <button disabled={isLogin} className={`${isLogin && "bg-[#FADF00]"} transition duration-200 hover:bg-[#FFDF00] bg-[#FFD600] text-black px-12 py-2 rounded-[40px] italic font-semibold`}>
                {isLogin ? 'Login...' : 'Login'}
              </button>
            </div>
          </form>
        )}
      </Formik>
    </ModalSample>
  )
}

Login.propTypes = {
  modalOpen: Boolean,
  setModalOpen: React.Dispatch
}