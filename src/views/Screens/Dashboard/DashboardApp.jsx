import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Page from '../../../components/Page'
import {
   AppNewUsers,
   AppSales,
   AppTasks,
} from '../../../components/_dashboard/app'
import { EmployeeOverviewBasicInfo } from '../../../components/_accounts/employees/overviews'

const TOTAL = 1230000
const TOTAL1 = 1230000
const TASKS = [
   'Create FireStone Logo',
   'Add SCSS and JS files if required',
   'Stakeholder Meeting',
   'Scoping & Estimations',
   'Sprint Showcase',
]
const DashboardApp = () => (
   <Page tiltle="Dashboard">
      <Container maxWidth="xl">
         <Box sx={{ pb: 5 }}>
            <Typography variant="h4">Hey, Welcome</Typography>
         </Box>
         <Grid container spacing={3}>
            <Grid item xs={12} sm={6} md={3}>
               <AppNewUsers TOTAL={TOTAL} />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
               <AppSales TOTAL={TOTAL1} />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
               <AppTasks TASKS={TASKS} />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
               <EmployeeOverviewBasicInfo />
            </Grid>
         </Grid>
      </Container>
   </Page>
)

export default DashboardApp
