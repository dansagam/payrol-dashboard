/* eslint-disable jsx-a11y/anchor-is-valid */
// import * as React from 'react'
import * as yup from 'yup'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEyeSlash, faEye, faSpinner } from '@fortawesome/free-solid-svg-icons'
import { Link as RouterLink, useNavigate } from 'react-router-dom'
import Link from '@mui/material/Link'
import { Form, FormikProvider, useFormik } from 'formik'
import TextField from '@mui/material/TextField'
import Stack from '@mui/material/Stack'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import InputAdornment from '@mui/material/InputAdornment'
import IconButton from '@mui/material/IconButton'
import Button from '@mui/material/Button'

const LoginForm = () => {
   const navigate = useNavigate()
   const [showPassword, setShowPassword] = React.useState(false)
   const LoginSchema = yup.object().shape({
      email: yup
         .string()
         .email('Email must be a valid email address')
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
         email: '',
         password: '',
         remember: true,
      },
      validationSchema: LoginSchema,
      onSubmit: handleOnSubmit,
   })

   const {
      errors,
      touched,
      values,
      isSubmitting,
      handleSubmit,
      getFieldProps,
   } = formik

   const handleShowPassword = () => {
      setShowPassword((prev) => !prev)
   }
   return (
      <FormikProvider value={formik}>
         <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
            <Stack spacing={3}>
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
            <Stack
               direction="row"
               alignItems="center"
               justifyContent="space-between"
               sx={{ my: 2 }}
            >
               <FormControlLabel
                  control={
                     <Checkbox
                        {...getFieldProps('remember')}
                        checked={values.remember}
                     />
                  }
                  label="Remember me"
               />
               <Link component={RouterLink} to="#" variant="subtitles">
                  Forgot Password
               </Link>
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

export default LoginForm
