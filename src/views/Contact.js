import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBriefcase } from '@fortawesome/free-solid-svg-icons'

function Contact() {
  return (
    <div className="section-screen">
      <div className="d-flex justify-center align-center g-10" style={{ marginBottom: "1rem" }}>
        <FontAwesomeIcon icon={faBriefcase} size="lg" style={{ marginRight: "0.5rem" }} />
        <h1>Contact</h1>
      </div>
      <div>
        <h1>Phone Number: <a href="tel:+919471487515">+91 9471487515</a></h1>
        <h1>Email: <a href="mailto:anandyash1711@gmail.com">anandyash1711@gmail.com</a></h1>
        <h1>Address: <a rel="noreferrer" href="https://www.google.com/maps?q=Vatva,+Ahmedabad,+Gujarat,+India" target="_blank">Vatva, Ahmedabad, Gujarat, India</a></h1>
      </div>
    </div>
  )
}

export default Contact