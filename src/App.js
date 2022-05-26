import Home from "./components/Home";
import SvgAnimation from "./components/SvgAnimation";
import Keyframes from "./components/Keyframes"; 
import StaggerChildren from "./components/StaggerChildren";
import Drag from "./components/Drag"; 
import ScrollWhileInView from "./components/ScrollWhileInView";
import UseViewportScroll from "./components/UseViewportScroll";
import AnimatePresenceHook from "./components/AnimatePresenceHook";
import LayoutAnimations from "./components/LayoutAnimations";

import SharedLayoutHome from "./components/sharedLayoutProject/SharedLayoutHome";



import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
// import your route components too
function App() {
  return (
    <div>
      
       <BrowserRouter>
    <Routes>
         <Route index element={<Home />} /> 
        <Route path="svgAnimation" element={<SvgAnimation />} />  
        <Route path="keyframes" element={<Keyframes />} />  
        <Route path="staggerChildren" element={<StaggerChildren />} />
        <Route path="drag" element={<Drag />} />     
        <Route path="scrollWhileInView" element={<ScrollWhileInView />} />
        <Route path="useViewportScroll" element={<UseViewportScroll />} />
        <Route path="animatePresenceHook" element={<AnimatePresenceHook />} />
        <Route path="LayoutAnimations" element={<LayoutAnimations />} />
        <Route path="sharedLayoutProject/SharedLayoutHome" element={<SharedLayoutHome />} />

   
    </Routes>
  </BrowserRouter>
  
    </div>
  );
}

export default App;
