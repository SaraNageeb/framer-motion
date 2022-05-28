import { motion, useCycle } from 'framer-motion';

const loaderVariants = {
  animationOne: {
    x: [-20, 20],
    y: [0, -30],
    transition: {
      x: {
        yoyo: Infinity,
        duration: 0.5,
      },
      y: {
        yoyo: Infinity,
        duration: 0.25,
        ease: 'easeOut'
      }
    }
  },
  animationTwo: {
    y: [0, -40],
    x: 0,
    transition: {
      y: {
        yoyo: Infinity,
        duration: 0.25,
        ease: 'easeOut'
      }
    }
  }
};

const UseCycleHook = () => {
  const [animation, cycleAnimation] = useCycle("animationOne", "animationTwo");

  return (
      
    <div className='container'>
       <h2>UseCycleHook</h2>
       <p>Toogle between two animation animationOne,animationTwo </p> 
       <motion.div className="loader"
        variants={loaderVariants}
        animate={animation}
      ></motion.div>
      <button onClick={() => cycleAnimation() }>Change Loader</button>
    </div>
  )
}

export default UseCycleHook