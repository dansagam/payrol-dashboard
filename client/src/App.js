// import logo from './logo.svg'
// import './App.css'
import ThemeConfig from './theme'
import ScrollToTop from './components/ScrollToTop'
import GlobalStyles from './theme/globalStyles'
import Routes from './routes'

const App = function () {
   return (
      <ThemeConfig>
         <ScrollToTop />
         <GlobalStyles />
         <Routes />
      </ThemeConfig>
   )
}

export default App
