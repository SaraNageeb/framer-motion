import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import Content from "./Content";

const Item = () => {
const [isOpen, setIsOpen] = useState(false);
const toggleOpen = () => setIsOpen(!isOpen);
  return (
   
        <motion.li layout onClick={toggleOpen} initial={{ borderRadius: 10 }}>
      <motion.div className="avatar" layout />
      <AnimatePresence>{isOpen && <Content />}</AnimatePresence>
    </motion.li>
    
  )
}

export default Item