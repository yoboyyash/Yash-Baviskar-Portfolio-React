import Homepage from "./pages/Homepage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Portfolio from "./pages/Portfolio";

import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  

  return (
    <BrowserRouter>
        
        <div className="bg-primary-color dark:bg-secondary-color text-stone-900 dark:text-stone-300">

        
       
        <Header />
        
        <main>
        <Routes>
          <Route index element={<Homepage />} />
     
            <Route path="/Portfolio" element={<Portfolio />} />
    
        </Routes>
        </main>

     
        <Footer/>

        </div>
      
    </BrowserRouter>

  );
}

export default App