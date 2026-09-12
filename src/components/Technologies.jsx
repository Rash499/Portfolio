import { motion } from "framer-motion";
import { SKILLS } from "../constants";

const Technologies = () => {
  return (
    <motion.div
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: -100 }}
      transition={{ duration: 1.5 }}
      className="border-b border-neutral-800 pb-24"
    >
      <h2 className="my-20 text-center text-4xl">Skills</h2>
      <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2">
        {SKILLS.map((skill) => (
          <motion.div
            key={skill.category}
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="mb-4 text-xl font-semibold text-purple-200">{skill.category}</h3>
            <div className="flex flex-wrap gap-2">
              {skill.items.map((item) => (
                <span
                  key={item}
                  className="rounded bg-neutral-900 px-3 py-2 text-sm font-medium text-purple-200"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Technologies;
