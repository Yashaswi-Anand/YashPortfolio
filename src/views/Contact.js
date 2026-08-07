import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAddressCard, faPhone, faEnvelope, faMapMarkerAlt, faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { motion } from 'framer-motion';
import AnimatedSection from '../components/AnimatedSection';
// import AnimatedText from '../components/AnimatedText';

const CONTACT_EMAIL = 'anandyash1711@gmail.com';

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = form.subject || `Portfolio message from ${form.name}`;
    const body = `Hi Yashaswi,\n\n${form.message}\n\nRegards,\n${form.name}${form.email ? `\n${form.email}` : ''}`;
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const contactItems = [
    {
      icon: faPhone,
      label: "Contact",
      value: "+91 9471487515",
      href: "tel:+919471487515",
      color: "#4ecdc4"
    },
    {
      icon: faEnvelope,
      label: "Email",
      value: "anandyash1711@gmail.com",
      href: "mailto:anandyash1711@gmail.com",
      color: "#4ecdc4"
    },
    {
      icon: faMapMarkerAlt,
      label: "Address",
      value: "Vatva, Ahmedabad, Gujarat, India",
      href: "https://www.google.com/maps?q=Vatva,+Ahmedabad,+Gujarat,+India",
      color: "#4ecdc4"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.25, 0.25, 0.75],
      },
    },
  };

  return (
    <div>
      <AnimatedSection className="section-screen">
        <motion.div
          className="d-flex justify-center align-center g-10"
          style={{ marginBottom: "2rem" }}
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.span
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.4, type: "spring", stiffness: 200 }}
            whileHover={{ scale: 1.2, rotate: 360, transition: { duration: 0.6 } }}
          >
          </motion.span>
          <div className='d-flex justify-center align-center g-10'>
            <span><FontAwesomeIcon icon={faAddressCard} style={{ fontSize: '1.9rem', color: '#4ecdc4' }} /></span><span><h1>Contact</h1></span>
          </div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="contact-grid"
        >
          {contactItems.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{
                scale: 1.05,
                y: -10,
                transition: { duration: 0.3 }
              }}
              whileTap={{ scale: 0.95 }}
              className="contact-card"
            >
              <motion.div
                className="contact-icon"
                style={{ color: item.color }}
                whileHover={{
                  scale: 1.2,
                  rotate: 10,
                  transition: { duration: 0.3 }
                }}
              >
                <FontAwesomeIcon icon={item.icon} />
              </motion.div>
              <div className="contact-info">
                <h3>{item.label}</h3>
                <motion.a
                  href={item.href}
                  target={item.label === "Address" ? "_blank" : undefined}
                  rel={item.label === "Address" ? "noreferrer" : undefined}
                  whileHover={{
                    color: item.color,
                    transition: { duration: 0.3 }
                  }}
                  className="contact-link"
                >
                  {item.value}
                </motion.a>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.form
          className="contact-form"
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="contact-form-title">Send me a message</h3>
          <p className="contact-form-subtitle">
            Fill out the form below and it will open your mail app with the message ready to send.
          </p>

          <div className="contact-form-row">
            <div className="contact-form-field">
              <label htmlFor="cf-name">Name</label>
              <input
                id="cf-name"
                type="text"
                name="name"
                placeholder="Your name"
                value={form.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="contact-form-field">
              <label htmlFor="cf-email">Email</label>
              <input
                id="cf-email"
                type="email"
                name="email"
                placeholder="you@example.com"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="contact-form-field">
            <label htmlFor="cf-subject">Subject</label>
            <input
              id="cf-subject"
              type="text"
              name="subject"
              placeholder="What is this about? (optional)"
              value={form.subject}
              onChange={handleChange}
            />
          </div>

          <div className="contact-form-field">
            <label htmlFor="cf-message">Message</label>
            <textarea
              id="cf-message"
              name="message"
              rows={5}
              placeholder="Write your message here..."
              value={form.message}
              onChange={handleChange}
              required
            />
          </div>

          <motion.button
            type="submit"
            className="contact-form-submit"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.97 }}
          >
            <FontAwesomeIcon icon={faPaperPlane} />
            Send Message
          </motion.button>
        </motion.form>
      </AnimatedSection>
      <div style={{ marginBottom: 100 }}></div>
    </div>
  )
}

export default Contact