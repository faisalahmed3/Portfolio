import React, { useRef } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaWhatsapp } from "react-icons/fa";
import Lottie from "lottie-react";
import Swal from "sweetalert2";
import emailjs from "@emailjs/browser";
import contactAnimation from "../../assets/Contact.json";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_a7aa5bn",    
        "template_vvpzmcc",   
        form.current,
        "3UnAqnTft0Ru4JcK5"     
      )
      .then(
        (result) => {
          console.log(result.text);
          Swal.fire({
            icon: "success",
            title: "Message Sent!",
            text: "Thank you for reaching out. I'll get back to you soon!",
            timer: 2500,
            showConfirmButton: false,
          });
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong. Please try again later.",
          });
        }
      );
  };

  return (
    <motion.section
      className="flex flex-col justify-center items-center px-6 md:px-16 xl:px-64"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <h2 className="text-4xl md:text-5xl font-bold text-[#ff7b72] mb-10 text-center">
        Contact Me
      </h2>

      <div className="flex flex-col-reverse lg:flex-row items-center gap-10 w-full">
        
        {/* Form */}
        <form
          ref={form}
          onSubmit={sendEmail}
          className="w-full lg:w-1/2 space-y-4 bg-white/10 backdrop-blur-md p-6 rounded-xl shadow-xl hover:shadow-red-400/40 transition duration-300"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="w-full px-4 py-3 bg-black/30 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-[#ff3c38]"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="w-full px-4 py-3 bg-black/30 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-[#ff3c38]"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            className="w-full px-4 py-3 bg-black/30 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-[#ff3c38]"
            required
          ></textarea>
          <button
            type="submit"
            className="bg-[#ff3c38] hover:bg-[#d72a2a] text-white px-6 py-3 rounded-xl transition duration-300 font-semibold shadow-md"
          >
            Send Message
          </button>
        </form>

        {/* Lottie Animation & Socials */}
        <div className="w-full lg:w-1/2 flex flex-col items-center gap-6">
          <div>
            <Lottie animationData={contactAnimation} loop className="w-64" />
          </div>
          <div className="flex gap-6 text-3xl text-[#ff7b72]">
            <a
              href="https://github.com/faisalahmed3"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors duration-300"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/faisal-ahmed4417/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors duration-300"
            >
              <FaLinkedin />
            </a>
            <a
              href="mailto:faisalahmed4417@gmail.com"
              className="hover:text-white transition-colors duration-300"
            >
              <FaEnvelope />
            </a>
            <a
              href="https://wa.me/8801876141732"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors duration-300"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
