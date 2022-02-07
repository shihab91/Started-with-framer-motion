import React from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

const backdrop = {
  visible: {
    opacity: 1,
  },
  hidden: {
    opacity: 0,
  },
};
const modal = {
  visible: {
    // y: "200px",
    scale: [1.1, 1],
    opacity: 1,
    transition: {
      delay: 0.5,
    },
  },
  hidden: {
    // y: "-100vh",
    y: "200px",
    scale: 0.8,
    opacity: 0,
  },
};
const Modal = ({ showModal, setShowModal }) => {
  return (
    <AnimatePresence exitBeforeEnter>
      {showModal && (
        <motion.div
          className="backdrop"
          variants={backdrop}
          animate="visible"
          initial="hidden"
          exit="exit"
        >
          <motion.div className="modal" variants={modal}>
            <p>want to make another pizza?</p>
            <Link
              to="/"
              onClick={() => {
                setShowModal(false);
              }}
            >
              <button>Start again</button>
            </Link>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
