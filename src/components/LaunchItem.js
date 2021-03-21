import { useState } from "react";
import PropTypes from "prop-types";
import { AnimatePresence, motion } from "framer-motion";

const LaunchItem = ({ launch }) => {
  const [isOpen, setisOpen] = useState(false);

  const toggleOpen = () => setisOpen(!isOpen);

  return (
    <motion.div layout className="bg-white shadow overflow-hidden rounded-md p-4 mb-3" onClick={toggleOpen}>
      <motion.div layout className="flex">
        <div className="relative">
          <img src={launch.links.patch.small} height="100px" width="100px" alt={launch.name} />
        </div>
        <div className="px-3">
          <h2 className="text-lg text-gray-700">{launch.name}</h2>
          <span className="text-sm text-gray-400">{new Date(launch.date_utc).toLocaleString()}</span>

          <h4 className="text-gray-500 mt-2 text-sm">Cores Landing Success</h4>
          <div className="flex mt-1 text-sm">
            {launch.cores.map((core, index) => (
              <span
                key={core.core}
                className={`flex mr-2 text-gray-500 bg-${
                  core.landing_success ? "green" : "red"
                }-100 px-2 py-1 rounded`}
              >
                <img
                  src={`svg/${core.landing_success === true ? "success" : "fail"}.svg`}
                  alt="Svg"
                  height="20px"
                  width="20px"
                  className="mr-1"
                />
                <span>{core.core?.serial}</span>
              </span>
            ))}
          </div>
        </div>
      </motion.div>

      <AnimatePresence>
        {isOpen && (
          <motion.div layout initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <p>lorem</p>
            <p>lorem</p>
            <p>lorem</p>
            <p>lorem</p>
            <p>lorem</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

LaunchItem.propTypes = {
  launch: PropTypes.shape({
    name: PropTypes.string.isRequired,
    upcoming: PropTypes.bool.isRequired,
    date_utc: PropTypes.string,
    static_fire_date_utc: PropTypes.string,
    links: PropTypes.shape({
      patch: PropTypes.shape({
        small: PropTypes.string,
      }),
    }),
    cores: PropTypes.arrayOf(
      PropTypes.shape({
        landing_success: PropTypes.bool,
      })
    ),
  }).isRequired,
};

export default LaunchItem;
