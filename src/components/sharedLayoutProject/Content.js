import { motion} from "framer-motion";
 

const Content = () => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="row" />
      <div className="row" />
      <div className="row" />
    </motion.div>
  )
}

export default Content