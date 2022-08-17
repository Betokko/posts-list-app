import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const Popup = ({ children, visible, setVisible }) => {
  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          className="backdrop-blur-xl absolute top-0 bottom-0 left-0 right-0 justify-center items-center z-20 flex"
          onClick={() => setVisible(false)}
        >
          <div
            className=" bg-white w-1/3 p-12 rounded-xl relative shadow-xl"
            onClick={(evt) => evt.stopPropagation()}
          >
            {children}
            <button
              className="absolute top-2 right-2 hover:text-rose-600"
              onClick={() => setVisible(false)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Popup;
