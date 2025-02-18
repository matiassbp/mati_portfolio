import React from "react";
import { FaLinkedin, FaGithub, FaCode } from "react-icons/fa6";
import { CONTACT } from "../constants";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <motion.div
      whileInView={{ opacity: 1, x: 0 }}
      initial={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.5 }}
      className="border-b border-neutral-900 pb-20"
    >
      <h2 className="my-10 text-center text-4xl">Contacto</h2>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a href="https://linkedin.com/in/tuperfil" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="cursor-pointer hover:text-blue-500 transition" />
        </a>
        <a href="https://github.com/tuusuario" target="_blank" rel="noopener noreferrer">
          <FaGithub className="cursor-pointer hover:text-gray-500 transition" />
        </a>
        <a href="https://www.hackerrank.com/tuusuario" target="_blank" rel="noopener noreferrer">
          <FaCode className="cursor-pointer hover:text-green-600 transition" />
        </a>
      </div>
      <div className="text-center tracking-tighter">
        <p className="my-4">{CONTACT.phoneNo}</p>
        <p className="my-4">{CONTACT.address}</p>
        <a href={`mailto:${CONTACT.email}`} className="border-b">
          {CONTACT.email}
        </a>
      </div>
    </motion.div>
  );
};

export default Contact;
