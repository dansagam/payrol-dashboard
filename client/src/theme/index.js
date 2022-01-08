import PropTypes from 'prop-types'
import * as React from 'react'

// material
import { CssBaseline } from '@mui/material'
import {
   ThemeProvider,
   createTheme,
   StyledEngineProvider,
} from '@mui/material/styles'
import shape from './shape'
import palette from './palette'
import typography from './typography'
import shadows, { customShadows } from './shadows'

import componentsOverrides from './overrides'

// ----------------------------------------------------------------------

const ThemeConfig = ({ children }) => {
   const themeOptions = React.useMemo(
      () => ({
         shadows,
         shape,
         palette,
         typography,
         customShadows,
      }),
      []
   )
   const theme = createTheme(themeOptions)
   theme.components = componentsOverrides(theme)
   return (
      <StyledEngineProvider injectFirst>
         <ThemeProvider theme={theme}>
            <CssBaseline />
            {children}
         </ThemeProvider>
      </StyledEngineProvider>
   )
}

ThemeConfig.propTypes = {
   children: PropTypes.node,
}

export default ThemeConfig
