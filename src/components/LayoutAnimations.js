import { useState } from "react";
import { motion } from "framer-motion";

const LayoutAnimations = () => {
    const [isOn, setIsOn] = useState(false);
  const toggleSwitch = () => setIsOn(!isOn);
  const spring = {
    type: "spring",
    stiffness: 700,
    damping: 30
  };

  return (
    <div className="container">
       <h1>LayoutAnimations</h1> 
       <h3>with layout</h3>
    <div className="switch" data-isOn={isOn} onClick={toggleSwitch}>
      <motion.div className="handle" layout transition={spring} />
    </div>
    <h3>without layout</h3>
    <div className="switch" data-isOn={isOn} onClick={toggleSwitch}>
      <motion.div className="handle"  transition={spring} />
    </div>
    </div>
  )
}

export default LayoutAnimations