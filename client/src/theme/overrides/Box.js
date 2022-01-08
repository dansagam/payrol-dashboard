export default function Box() {
   return {
      MuiBox: {
         defaultProps: {
            elevation: 0,
         },

         styleOverrides: {
            root: {
               backgroundImage: 'none',
            },
         },
      },
   }
}
