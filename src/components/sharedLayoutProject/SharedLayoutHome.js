
import { motion, AnimateSharedLayout} from "framer-motion";
import "./styleslayout.css";
import Item from "./Item";

const SharedLayoutHome = () => {
    const items = [0, 1, 2];
  return (
    <div className="  layoutContainer">
        <h1>SharedLayoutHome</h1>
        <p>try deleting AnimateSharedLayout ,then see he result then do it to layout</p>

<AnimateSharedLayout>
      <motion.ul layout initial={{ borderRadius: 25 }}>
        {items.map(item => (
          <Item key={item} />
        ))}
      </motion.ul>
    </AnimateSharedLayout>

    </div>
  )
}

export default SharedLayoutHome