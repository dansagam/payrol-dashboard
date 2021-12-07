import PropTypes from 'prop-types'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import Input from '@mui/material/Input'
import Clear from '@mui/icons-material/Clear'
import Check from '@mui/icons-material/Check'

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
      <FormControl {...formControlProps} className="#">
         {labelText !== undefined ? (
            <InputLabel className="ddh" htmlFor={id} {...labelProps}>
               {labelText}
            </InputLabel>
         ) : null}
         <Input
            className="hjdkd"
            id={id}
            {...inputProps}
            inputProps={newInputProps}
         />
         {error ? <Clear /> : success ? <Check /> : null}
      </FormControl>
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
