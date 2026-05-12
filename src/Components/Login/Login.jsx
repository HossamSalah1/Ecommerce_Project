import React, { useContext, useState } from 'react'
// import Style from './Register.module.css'
import { useFormik } from 'formik'
import * as yup from 'yup'
// import * as yup from 'yup'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { UserContext } from '../../Context/userContext'




function Login() {

    let navigate = useNavigate();

    let [error, setError] = useState(null)
    let {setUserToken}=useContext(UserContext)

    async function handelSubmit(value) {
        let response = await axios.post(`https://ecommerce.routemisr.com/api/v1/auth/signin`, value).catch((err) => setError(err.response.data.message)
        )
        if (response?.data?.message === "success") {
            localStorage.setItem('userToken', response.data.token)
            setUserToken(response.data.token)
            navigate('/')

        }

    }
    // function handelSubmit(value) {
    //     console.log("Submitted ");
    //     console.log(value);
    // }

    // let phoneRejex = /^(\+201|01|00201)[0-2,5]{1}[0-9]{8}$/
    // let validationSchema = yup.object({
    //     name: yup.string().min(3, "min name is 3").max(10, "max name is 10").required("name is required"),
    //     email: yup.string().email('email is invaild').required('email is required'),
    //     phone: yup.string().matches(phoneRejex, "phone is invaild").required('phone is required'),
    //     password: yup.string()
    //         .matches(/^[A-Z][a-z0-9]{5,10}$/, 'Password must start with capital letter and be 6-11 chars')
    //         .required('password is required'),
    //     // password: yup.string().matches(/^[A-Z][a-z0-9]{5,10}$/, 'pass is required').required(),
    //     rePassword: yup.string().oneOf([yup.ref("password")], "password not match ").required()
    // })

    let validationSchema = yup.object({

        email: yup
            .string()
            .email("email is invalid")
            .required("email is required"),
        password: yup
            .string()
            .matches(/^[A-Z][a-z0-9]{5,10}$/, "'Password must start with uppercase letter and contain only lowercase letters or numbers (6-11 chars)'")
            .required("password is required"),

    })



    let formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: validationSchema,
        onSubmit: handelSubmit



    })
    return <>
        <div className="w-75 py-5 mx-auto ">
            <h3>Login Now</h3>
            <form onSubmit={formik.handleSubmit}>
                {error !== null ? <div className="alert alert-info p-z mt-2">{error}</div> : ""}
                <label htmlFor="email">email</label>
                <input className='form-control ' type='email' name='email' value={formik.values.email} onChange={formik.handleChange} id='email' onBlur={formik.handleBlur} />
                {formik.errors.email && formik.touched.email ? <div className="alert alert-info p-2 mt-2 ">{formik.errors.email}</div> : null}
                <label htmlFor="password">password</label>
                <input type='password' autoComplete='true' className='form-control ' name='password' value={formik.values.password} onChange={formik.handleChange} id='password' onBlur={formik.handleBlur} />
                {formik.errors.password && formik.touched.password ? <div className="alert alert-info p-2 mt-2 ">{formik.errors.password}</div> : null}
                
                <div className="d-flex align-items-center ">
                    <button
                        type="submit"
                        disabled={!(formik.isValid && formik.dirty)}
                        className="btn bg-main mt-3 text-white"
                    >
                        login
                    </button>
                    <Link className="btn pt-3" to="/register" > register now</Link>
                </div>

            </form>
        </div>
    </>
}

export default Login
