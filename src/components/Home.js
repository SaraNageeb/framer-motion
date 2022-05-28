import { Link } from "react-router-dom";

const Home = () => {
  return (
   
      <div className="containerButton">
        
        <button><nav><Link to="svgAnimation">SvgAnimation</Link> </nav></button>
        <button><nav><Link to="staggerChildren">StaggerChildren</Link> </nav></button>
        <button><nav><Link to="keyframes">Keyframes</Link> </nav></button>
        <button><nav><Link to="drag">Drag</Link> </nav></button>
        <button><nav><Link to="scrollWhileInView">ScrollWhileInView</Link> </nav></button> 
        <button><nav><Link to="useViewportScroll">useViewportScroll Hook</Link> </nav></button>
        <button><nav><Link to="animatePresenceHook">AnimatePresence Hook</Link> </nav></button>
        <button><nav><Link to="LayoutAnimations">LayoutAnimations</Link> </nav></button>
        <button><nav><Link to="sharedLayoutProject/SharedLayoutHome">SharedLayout Project </Link> </nav></button>
        <button><nav><Link to="UseCycleHook">UseCycle Hook</Link> </nav></button>
        <button><nav><Link to="CreatingModal">creating aModal</Link> </nav></button><br/>
        <p>Matt Perry is known for Framer motion follow him</p>


        </div>
         
    
  )
}

export default Home