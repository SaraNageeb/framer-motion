import {useState} from 'react'
import { motion, AnimatePresence } from "framer-motion"

const AnimatePresenceHook = () => {
  const [isToggled,setToggled]=useState(1)
  const [isToggled2,setToggled2]=useState(1)

  return (
    <div className=''>
      <h2>AnimatePresence</h2>
      <p>inspect page to see how both elements disaapere from DOM Tree</p>
  
   {isToggled &&(
    <motion.div
      className="box"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{duration:2}}
    />)
   }
   <button onClick={()=>setToggled(prevalue=>!prevalue)}> click me without</button>
   <AnimatePresence>
   {isToggled2 &&(
    <motion.div
      className="box"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{duration:2}}

    />)
   }
   </AnimatePresence>
   <button onClick={()=>setToggled2(prevalue2=>!prevalue2)}> click me with AnimatePresence </button>



    </div>
  )
}

export default AnimatePresenceHook