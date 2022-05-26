import { motion } from 'framer-motion'

const ScrollWhileInView = () => {
    //note:
    //viewport={{ once: false }} 
     // true :will happen only once 
    // false : will happen every time u scroll ....first two box are false
  return (
    <div className="container">
        <h2>ScrollWhileInView</h2>
        
        <motion.div className="box"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 1 }}
        viewport={{ once: false }}
        /><br/><br/>
        <motion.div className="box"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 1 }}
        viewport={{ once: false }}
        /><br/><br/>
        <motion.div className="box"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 1 }}
        viewport={{ once: true }}
        /><br/><br/>
        <motion.div className="box"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 1 }}
        viewport={{ once: true }}
        /><br/><br/>
        <motion.div className="box"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 1 }}
        viewport={{ once: true }}
        /><br/><br/>
        <motion.div className="box"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 1 }}
        viewport={{ once: true }}
        /><br/><br/>

<motion.div className="box"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 1 }}
        viewport={{ once: true }}
        /><br/><br/>
        <motion.div className="box"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 1 }}
        viewport={{ once: true }}
        /><br/><br/>
        <motion.div className="box"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 1 }}
        viewport={{ once: true }}
        /><br/><br/>
        <motion.div className="box"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 1 }}
        viewport={{ once: true }}
        /><br/><br/>

       <motion.div className="box"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 1 }}
        viewport={{ once: true }}
        /><br/><br/>
    </div>
  )
}

export default ScrollWhileInView