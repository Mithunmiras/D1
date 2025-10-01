import {
  aboutHeading,
  aboutSubheading,
  mission,
  vision,
  whyChoose,
  stats,
} from "../config/aboutData";
import { FaCheckCircle } from "react-icons/fa";
import CountUp from "react-countup";
import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-gray-800 mb-4"
          >
            {aboutHeading}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            {aboutSubheading}
          </motion.p>
        </div>

        {/* Mission + Why Choose */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          {/* Mission & Vision */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-4">{mission.title}</h3>
            <p className="text-gray-600 mb-6">{mission.description}</p>

            <h3 className="text-2xl font-bold mb-4">{vision.title}</h3>
            <p className="text-gray-600">{vision.description}</p>
          </motion.div>

          {/* Why Choose */}
          <motion.div
            initial={{ opacity: 0, x: 40, scale: 0.95 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-lg shadow-lg"
          >
            <h3 className="text-2xl font-bold mb-6 text-center">
              {whyChoose.title}
            </h3>
            <ul className="space-y-4">
              {whyChoose.items && whyChoose.items.map((item, idx) => (
                <motion.li
                  key={idx}
                  className="flex items-center"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.15 }}
                  viewport={{ once: true }}
                >
                  <FaCheckCircle className="text-green-500 mr-3" />
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-8 text-center">
          {stats.map((s, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              viewport={{ once: true }}
            >
              <motion.div
                className="text-4xl font-bold text-blue-600 mb-2"
                whileInView={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 0.6, delay: 2.5 + idx * 0.3 }}
                viewport={{ once: true }}
              >
                <CountUp
                  end={parseInt(String(s.value).replace(/[^0-9]/g, ""), 10) || 0}
                  duration={3}
                  separator="," 
                  enableScrollSpy
                  scrollSpyOnce
                  smartEasingThreshold={1000}
                  smartEasingAmount={500}
                />
                {s.value.replace(/[0-9]/g, "")}
              </motion.div>
              <div className="text-gray-600">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
