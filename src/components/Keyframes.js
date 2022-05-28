import { motion} from 'framer-motion'

const Keyframes = () => {
  return (
    <div className=" container">
      <h2>Keyframes</h2>
      <p> more than one animation at once array of animation</p>
      
      <motion.div
      className="box"
        animate={{
          scale: [1, 2, 2, 1, 1],
          rotate: [0, 0, 270, 270, 0],
          borderRadius: ["20%", "20%", "50%", "50%", "20%"],
        }}
       />
    </div>
  )
}

export default Keyframes