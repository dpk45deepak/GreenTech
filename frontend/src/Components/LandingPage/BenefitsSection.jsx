import React from "react";
import { motion } from "framer-motion";

const Benefits = () => {
  const benefits = [
    { title: "Increase Crop Yield", icon: "📈", desc: "Boost productivity with smart insights." },
    { title: "Reduce Water Usage", icon: "💧", desc: "Save resources with efficient irrigation." },
    { title: "Improve Soil Health", icon: "🌿", desc: "Enhance sustainability for the future." },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
    }),
  };

  return (
    <section className="py-16 px-6 bg-gradient-to-b from-green-50 to-white">
      <div className="container mx-auto">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-extrabold text-center mb-12 text-gray-900"
        >
          Benefits of <span className="text-green-600">Sirgo</span>
        </motion.h2>

        {/* Benefit Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={cardVariants}
              className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 text-center border border-gray-100 hover:border-green-200"
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-5xl mb-4">{benefit.icon}</div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">{benefit.title}</h3>
              <p className="text-gray-600 text-sm">{benefit.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
