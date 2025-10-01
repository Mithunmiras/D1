import React from 'react';
import { motion } from 'framer-motion';
import { FaCheck, FaPlay } from 'react-icons/fa';

const SaaSProducts = ({ data }) => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            {data.headline}
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            {data.subtitle}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {data.products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 hover:shadow-2xl transition duration-300"
            >
              <div className="relative h-64 bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden group">
                <img
                  src={product.videoThumbnail}
                  alt={product.title}
                  className="w-full h-full object-cover transition duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                  <div className="bg-white bg-opacity-90 rounded-full p-6 cursor-pointer hover:bg-opacity-100 transition">
                    <FaPlay className="text-blue-600 text-2xl ml-1" />
                  </div>
                </div>
                <div className="absolute top-4 left-4">
                  <span className="bg-gradient-to-r from-purple-600 to-blue-600 text-white text-xs font-semibold px-4 py-2 rounded-full">
                    {product.tag}
                  </span>
                </div>
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-gray-800">
                  {product.title}
                </h3>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">
                    Key Capabilities
                  </h4>
                  <div className="space-y-2">
                    {product.capabilities.map((capability, capIndex) => (
                      <div key={capIndex} className="flex items-start space-x-3">
                        <div className="bg-gradient-to-br from-purple-500 to-blue-600 text-white rounded-full p-1 mt-0.5 flex-shrink-0">
                          <FaCheck className="w-2.5 h-2.5" />
                        </div>
                        <span className="text-gray-700 text-sm">{capability}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between pt-6 border-t border-gray-200">
                  {product.stats.map((stat, statIndex) => (
                    <div key={statIndex} className="text-center">
                      <div className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                        {stat.value}
                      </div>
                      <div className="text-xs text-gray-500">{stat.label}</div>
                    </div>
                  ))}
                </div>

                <button className="mt-6 w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition duration-300">
                  LEARN MORE
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SaaSProducts;
