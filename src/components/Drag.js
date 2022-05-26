import { motion,useTransform,useMotionValue } from 'framer-motion'


const Drag = () => {
    const x = useMotionValue(0)
    const input = [-200, 0, 200]
    const output = [0, 1, 0]
    const opacity  = useTransform(x, input, output)
  return (
    <div className="container">
       <motion.h2 drag="x" style={{ x, opacity  }} 
        > 
        Drag
        </motion.h2>
         
        
        <motion.div className="box"
          drag
          dragConstraints={{
          top: -50,
          left: -50,
          right: 50,
          bottom: 50
        }}
       />

    </div>
  )
}

export default Drag