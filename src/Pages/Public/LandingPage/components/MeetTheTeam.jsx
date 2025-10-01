import React from "react";
import { motion } from "framer-motion";

const MeetTheTeam = () => {
  const teamMembers = [
    {
      photo: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg",
      name: "Rahul Verma",
      role: "Founder & CEO",
      bio: "With over 15 years of experience in digital transformation, Rahul leads our vision to empower MSMEs across India."
    },
    {
      photo: "https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg",
      name: "Priya Singh",
      role: "Head of Strategy",
      bio: "Priya brings expertise in business strategy and digital innovation, helping clients achieve exponential growth."
    },
    {
      photo: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg",
      name: "Amit Kumar",
      role: "Technical Director",
      bio: "Amit oversees all technical implementations, ensuring cutting-edge solutions that deliver real business value."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900"
        >
          Meet Our Expert Team
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all text-center"
            >
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                className="mb-6"
              >
                <img
                  src={member.photo}
                  alt={member.name}
                  className="w-32 h-32 rounded-full object-cover mx-auto border-4 border-purple-200"
                />
              </motion.div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                {member.name}
              </h3>
              <p className="text-purple-600 font-semibold mb-4">
                {member.role}
              </p>
              <p className="text-gray-600 leading-relaxed">
                {member.bio}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MeetTheTeam;
