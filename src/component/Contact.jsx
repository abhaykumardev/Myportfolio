import React, { useRef } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaMapMarkedAlt,
  FaPhone,
  FaTwitter,
} from 'react-icons/fa'

const Contact = () => {
  const formRef = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_dj938y4',      // ✅ your service ID
        'template_b9nvgq6',     // ✅ your template ID
        formRef.current,
        'cTTP3CvK1xhXgz89w'     // ✅ your public key
      )
      .then(
        () => {
          alert('Message sent successfully 🚀')
          formRef.current.reset()
        },
        (error) => {
          console.error('EmailJS Error:', error)
          alert('Something went wrong ❌ Please try again.')
        }
      )
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: 'easeInOut' }}
      viewport={{ once: false, amount: 0.2 }}
      id="contact"
      className="py-20 bg-slate-900"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-4">
          Get in <span className="text-purple-400">Touch</span>
        </h2>

        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16">
          I'm always open to discussing new projects, creative ideas, or
          opportunities. Feel free to reach out!
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-4xl mx-auto">
          
          {/* LEFT FORM */}
          <form
            ref={formRef}
            onSubmit={sendEmail}
            className="flex flex-col space-y-6"
          >
            <div>
              <label className="block text-gray-300 mb-2">
                Your Name
              </label>
              <input
                type="text"
                name="name"
                required
                className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-dark-400 text-gray-200 focus:outline-none focus:border-purple-500"
              />
            </div>

            <div>
              <label className="block text-gray-300 mb-2">
                Your Email
              </label>
              <input
                type="email"
                name="email"
                required
                className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-dark-400 text-gray-200 focus:outline-none focus:border-purple-500"
              />
            </div>

            <div>
              <label className="block text-gray-300 mb-2">
                Your Message
              </label>
              <textarea
                name="message"
                rows="5"
                required
                className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-dark-400 text-gray-200 focus:outline-none focus:border-purple-500"
              ></textarea>
            </div>

            {/* REQUIRED FOR {{time}} */}
            <input
              type="hidden"
              name="time"
              value={new Date().toLocaleString()}
            />

            <button
              type="submit"
              className="px-6 py-3 bg-purple-500 rounded-lg font-medium hover:bg-purple-700 transition duration-300"
            >
              Send Message
            </button>
          </form>

          {/* RIGHT INFO */}
          <div className="space-y-8">
            <div className="flex items-start">
              <FaMapMarkedAlt className="text-purple text-2xl mr-4" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Location</h3>
                <p className="text-gray-300">Gorakhpur, India</p>
              </div>
            </div>

            <div className="flex items-start">
              <FaEnvelope className="text-purple text-2xl mr-4" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Email</h3>
                <p className="text-gray-300">
                  abhaykumar.dev01@gmail.com
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <FaPhone className="text-purple text-2xl mr-4" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Phone</h3>
                <p className="text-gray-300">+91 9115256074</p>
              </div>
            </div>

            <div className="pt-4">
              <h3 className="text-lg font-semibold mb-4">Follow Me</h3>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/abhaykumardev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-dark-300 flex items-center justify-center hover:bg-purple/20"
                >
                  <FaGithub />
                </a>

                <a
                  href="https://www.linkedin.com/in/contact-abhay-kumar/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-dark-300 flex items-center justify-center hover:bg-purple/20"
                >
                  <FaLinkedin />
                </a>

                <a
                  href="https://twitter.com/YOUR_USERNAME"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-dark-300 flex items-center justify-center hover:bg-purple/20"
                >
                  <FaTwitter />
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </motion.div>
  )
}

export default Contact
