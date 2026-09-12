import { motion } from "framer-motion";
import { CERTIFICATIONS, EDUCATION } from "../constants";

const Education = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Education & Certifications
      </motion.h2>

      <div className="mx-auto max-w-4xl">
        {EDUCATION.map((entry) => (
          <div key={entry.qualification} className="mb-8 flex flex-wrap lg:justify-center">
            <div className="w-full lg:w-1/3">
              <p className="mb-2 text-sm text-neutral-400">{entry.period}</p>
            </div>
            <div className="w-full lg:w-2/3">
              <h3 className="font-semibold">{entry.qualification}</h3>
              <p className="text-neutral-400">{entry.institution}</p>
              <p className="text-sm text-purple-200">{entry.result}</p>
            </div>
          </div>
        ))}

        <h3 className="mb-4 mt-12 text-xl font-semibold text-purple-200">Certifications</h3>
        <div className="flex flex-wrap gap-2">
          {CERTIFICATIONS.map((certification) => (
            <span key={certification} className="rounded bg-neutral-900 px-3 py-2 text-sm text-purple-200">
              {certification}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education;
