import PropTypes from 'prop-types'
// eslint-disable-next-line no-unused-vars
import { experimentalStyled as styled, makeStyles } from '@mui/material/styles'
import MuiFormControl from '@mui/material/FormControl'
import MuiInputLabel from '@mui/material/InputLabel'
import MuiInput from '@mui/material/Input'
import ClearIcon from '@mui/icons-material/Clear'
import CheckIcon from '@mui/icons-material/Check'
import styles from './customInputStyles'

// eslint-disable-next-line no-unused-vars
const FormControlRoot = styled(MuiFormControl)(({ theme }) => ({
   ...styles.formControl,
}))

const InputLabelRoot = styled(MuiInputLabel)(
   ({ error, success, rtlActive }) => ({
      ...(error && styles.labelRootError),
      ...styles.labelRoot,
      ...(success && !error && styles.labelRootSuccess),
      ...(rtlActive && styles.underline),
   })
)
const InputRoot = styled(MuiInput)(
   ({ error, success, labelText, disabled }) => ({
      ...styles.underline,
      ...(labelText === undefined && styles.marginTop),
      ...(error && styles.underlineError),
      ...(success && !error && styles.underlineSuccess),
      ...(disabled && styles.disabled),
   })
)
const ClearIconRoot = styled(ClearIcon)(() => ({
   ...styles.feedback,
   ...styles.labelRootError,
}))
const CheckIconRoot = styled(CheckIcon)(() => ({
   ...styles.feedback,
   ...styles.labelRootSuccess,
}))
const CustomInput = (props) => {
   const {
      formControlProps,
      labelText,
      id,
      labelProps,
      inputProps,
      error,
      success,
      // eslint-disable-next-line no-unused-vars
      rtlActive,
   } = props

   const newInputProps = {
      maxLength:
         inputProps && inputProps.maxLength ? inputProps.maxLength : undefined,
      minLength:
         inputProps && inputProps.minLength ? inputProps.minLength : undefined,
      step: inputProps && inputProps.step ? inputProps.step : undefined,
   }
   return (
      <FormControlRoot
         {...formControlProps}
         className={formControlProps.className}
      >
         {labelText !== undefined ? (
            <InputLabelRoot htmlFor={id} {...labelProps}>
               {labelText}
            </InputLabelRoot>
         ) : null}
         <InputRoot
            classes={{
               root: marginTop,
               disabled: styles.disabled,
               underline: underlineClasses,
            }}
            id={id}
            {...inputProps}
            inputProps={newInputProps}
         />
         {error ? <ClearIconRoot /> : success ? <CheckIconRoot /> : null}
      </FormControlRoot>
   )
}

CustomInput.propTypes = {
   labelText: PropTypes.node,
   labelProps: PropTypes.object,
   id: PropTypes.string,
   inputProps: PropTypes.object,
   formControlProps: PropTypes.object,
   error: PropTypes.bool,
   success: PropTypes.bool,
   rtlActive: PropTypes.bool,
}

export default CustomInput
