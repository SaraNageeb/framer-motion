import { useState } from "react";
import { motion, AnimatePresence } from 'framer-motion';

const backdrop = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  }
  
  const modal = {
    hidden: { y: "-100vh", opacity: 0 },
    visible: { 
      y: "200px", 
      opacity: 1,
      transition: { delay: 0.5 }
    },
  }

const CreatingModal = () => {
    const [showModal , setShowModal ] = useState(true);
  return (
    <AnimatePresence>
      <h1>CreatingModal</h1>
      <h2>Some Text </h2>
      <button onClick={ () => setShowModal(!showModal)}>Show Model</button>

      { showModal && (
        <motion.div className="backdrop"
          variants={backdrop}
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
          <motion.div className="modal"
            variants={modal}
          >
             
             <p>Show A notification message</p>
              <button onClick={ () => setShowModal(!showModal)}>Click me</button>
             
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default CreatingModal