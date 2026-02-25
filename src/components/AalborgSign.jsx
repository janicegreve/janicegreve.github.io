import { motion } from 'framer-motion';

export const AalborgSign = () => {
  return (
    <div className="relative inline-block">
      <img src="/aalborgsignstatic.webp" alt="Book" className="" />

      <motion.img
        src="/aalborgsignwaves.webp"
        style={{
          top: `${826/10}%`,
          left: `${788/30}%`,
          width: `${408/30}%`,
        }}
        className="absolute"
        animate={{ x: ["0%", "27%"] }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "linear"
        }}
        alt="Moving element"
      />

      <motion.img
        src="/aalborgsignbridge.webp"
        style={{
          top: `${784/10}%`,
          left: `${853/30}%`,
          width: `${401/30}%`,
          transformOrigin: "0 0",
        }}
        className="absolute"
        animate={{ rotate: [-45, -45, 0, 0, -45, -45, 0, 0, -45, -45] }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
          times: [0, 0.05, 0.15, 0.25, 0.35, 0.65, 0.75, 0.85, 0.95, 1],
        }}
        alt="Moving element"
      />

      <motion.img
        src="/aalborgsignheart.webp"
        style={{
          top: "20%",
          left: "5%",
          width: `${580/30}%`,
          transformOrigin: "center center",
        }}
        className="absolute"
        animate={{
          x: ["5%", "5%", "360%", "360%"],
          rotate: [-45, -45, 45, 45],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
          times: [0, 0.2, 0.8, 1],
        }}
        alt="Moving element"
      />
    </div>
  );
}
