import { motion } from "framer-motion";

const StaggerChildren = () => {
    const container = {
        hidden: { opacity: 0 },
        show: {
          opacity: 1,
          transition: {
            staggerChildren: 0.5
          }
        }
      }
      
      const item = {
        hidden: { opacity: 0 },
        show: { opacity: 1 }
      }
 
  return (
    <div className=" container">
        <h2>StaggerChildren</h2>
    <motion.ol  
    variants={container}
    initial="hidden"
    animate="show"
  >   List Of Things
    <motion.li variants={item} >item 1 </motion.li>
    <motion.li variants={item} >item 2 </motion.li>
    <motion.li variants={item} >item 3 </motion.li>
    <motion.li variants={item} >item 4 </motion.li>

  </motion.ol>

        
    </div>
  )
}

export default StaggerChildren