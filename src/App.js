import React from 'react';
import Dashboard from './Components/dashboard/Dashboard';
import './App.css';
import Footer from './Components/footer/Footer';
import Header from './Components/header/Header';
import { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';



class App extends React.Component {
  render() {
    return (
      <div>

        <BrowserRouter>
          <Suspense fallback={<div><h2>Loading...</h2></div>}>
            <Header />
            <Routes>
              
             
              <Route path='/dashboard' element={<Dashboard />} />
        
            </Routes>
            <Footer />
          </Suspense>
        </BrowserRouter>

      </div>

    )

  }
}
export default App;
