import Banner from './components/Banner';
import Category from './components/Category';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';


function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>

      </Route>
    )
  );

  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Category/>
      <Footer/>
    </div>
  );
}

export default App;
