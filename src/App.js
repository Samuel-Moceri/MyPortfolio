import { Route, Switch, useLocation } from "react-router";
import { AnimatePresence } from "framer-motion";
import { ThemeProvider } from "styled-components";
import { lazy,Suspense } from "react";
import { lightTheme } from "./components/Themes";
import GlobalStyle from "./globalStyles";
import Loading from "./SubComponents/Loading";

//Components
const Main = lazy(() => import("./components/Main"));
const AboutPage = lazy(() => import("./components/AboutPage"));
const MySkillsPage = lazy(() => import("./components/MySkillsPage"));
const ContactPage = lazy(() => import("./components/ContactPage"));
const WorkPage = lazy(() => import("./components/WorkPage"));
const SoundBar = lazy(() => import("./SubComponents/SoundBar"));

function App() {

  const location = useLocation();

  return <>

    <GlobalStyle />

    <ThemeProvider theme={lightTheme}>
      <Suspense fallback={<Loading />}>
        <SoundBar/>
        
        {/* for framer-motion animation on page change */}
          <AnimatePresence exitBeforeEnter>
          
            <Switch location={location} key={location.pathname}>

              <Route exact path="/" component={Main}/>
              <Route exact path="/about" component={AboutPage}/>
              <Route exact path="/contact" component={ContactPage}/>
              <Route exact path="/work" component={WorkPage}/>
              <Route exact path="/skills" component={MySkillsPage}/>
              
            </Switch>

          </AnimatePresence>
      </Suspense>
    </ThemeProvider>
  </>
    
}

export default App

