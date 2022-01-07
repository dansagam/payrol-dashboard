/* eslint-disable jsx-a11y/anchor-is-valid */
// import * as React from 'react'
import * as yup from 'yup'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEyeSlash, faEye, faSpinner } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'
import { Form, FormikProvider, useFormik } from 'formik'
import TextField from '@mui/material/TextField'
import Stack from '@mui/material/Stack'
import InputAdornment from '@mui/material/InputAdornment'
import IconButton from '@mui/material/IconButton'
import Button from '@mui/material/Button'

const RegisterForm = () => {
   const navigate = useNavigate()
   const [showPassword, setShowPassword] = React.useState(false)
   const rgEx = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
   const emailTest = (value) => rgEx.test(value)
   const RegisterSchema = yup.object().shape({
      firstName: yup
         .string()
         .min(2, 'Too Short!')
         .max(50, 'Too Long!')
         .required('First name required'),
      lastName: yup
         .string()
         .min(2, 'Too Short!')
         .max(50, 'Too Long!')
         .required('Last name required'),
      email: yup
         .string()
         .email('Email must be a valid email address')
         .test({
            name: 'valid email',
            exclusive: true,
            params: { rgEx },
            message: `${path} must be valid`,
            test: emailTest,
         })
         .required('Email is required'),
      password: yup
         .string()
         .min(8, 'Password should be of minimum 8 characters length')
         .required('Password is required'),
   })
   const handleOnSubmit = () => {
      navigate('/dashboard')
   }
   const formik = useFormik({
      initialValues: {
         firstName: '',
         lastName: '',
         email: '',
         password: '',
      },
      validationSchema: RegisterSchema,
      onSubmit: handleOnSubmit,
   })

   const { errors, touched, isSubmitting, handleSubmit, getFieldProps } = formik

   const handleShowPassword = () => {
      setShowPassword((prev) => !prev)
   }
   return (
      <FormikProvider value={formik}>
         <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
            <Stack spacing={3}>
               <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                  <TextField
                     fullWidth
                     // id="firstName"
                     // name="firstName"
                     label="First Name"
                     {...getFieldProps('firstName')}
                     error={touched.firstName && Boolean(errors.firstName)}
                     helperText={touched.firstName && errors.firstName}
                  />
                  <TextField
                     fullWidth
                     // id="email"
                     // name="email"
                     label="Last Name"
                     {...getFieldProps('lastName')}
                     error={touched.lastName && Boolean(errors.lastName)}
                     helperText={touched.lastName && errors.lastName}
                  />
               </Stack>
               <TextField
                  fullWidth
                  id="email"
                  name="email"
                  label="Email address"
                  type="email"
                  {...getFieldProps('email')}
                  error={touched.email && Boolean(errors.email)}
                  helperText={touched.email && errors.email}
               />
               <TextField
                  fullWidth
                  id="password"
                  name="password"
                  label="Password"
                  type={showPassword ? 'text' : 'password'}
                  InputProps={{
                     endAdornment: (
                        <InputAdornment position="end">
                           <IconButton onClick={handleShowPassword}>
                              <FontAwesomeIcon
                                 icon={showPassword ? faEye : faEyeSlash}
                              />
                           </IconButton>
                        </InputAdornment>
                     ),
                  }}
                  {...getFieldProps('password')}
                  error={touched.password && Boolean(errors.password)}
                  helperText={touched.password && errors.password}
               />
            </Stack>
            <Button
               fullWidth
               type="submit"
               variant="type"
               endIcon={isSubmitting && <FontAwesomeIcon icon={faSpinner} />}
            >
               Login
            </Button>
         </Form>
      </FormikProvider>
   )
}

export default RegisterForm
