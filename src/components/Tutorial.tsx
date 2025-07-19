"use client";
import { motion } from "framer-motion";

export default function Tutorial() {
  const tutorials = [
    {
      id: 1,
      title: "Accountancy Tutorial",
      desc: "Learn the basics of accounting principles, journal entries, and ledgers.",
      img: "https://cdn-icons-png.flaticon.com/512/2906/2906270.png",
    },
    {
      id: 2,
      title: "Business Studies Tutorial",
      desc: "Explore concepts like management, organization, and business environment.",
      img: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
    },
    {
      id: 3,
      title: "Economics Tutorial",
      desc: "Understand micro and macro economics with real-world examples.",
      img: "https://cdn-icons-png.flaticon.com/512/3523/3523063.png",
    },
    {
      id: 4,
      title: "Mathematics Tutorial",
      desc: "Study commerce-related maths: statistics, probability, and financial maths.",
      img: "https://cdn-icons-png.flaticon.com/512/2906/2906225.png",
    },
  ];

  return (
    <section
      className="bg-[#fdf4f9] text-[#2d1b4e] py-16 px-6"
      id="tutorial"
    >
      <h2 className="text-4xl font-bold text-center mb-12">Our Tutorials</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {tutorials.map((tutorial, index) => (
          <motion.div
            key={tutorial.id}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl p-6 text-center transition"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <img
              src={tutorial.img}
              alt={tutorial.title}
              className="w-20 h-20 mx-auto mb-4 rounded-full"
            />
            <h3 className="text-xl font-semibold mb-2">{tutorial.title}</h3>
            <p className="text-[#4b3c5a] text-sm mb-4">{tutorial.desc}</p>
            <button className="bg-[#6b3fa0] text-white px-5 py-2 rounded-full hover:bg-[#583187] transition">
              Start Learning
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
