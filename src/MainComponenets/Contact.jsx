import '../Style.css/Contact.css'

const Contact = () => {
  return (
    <div className='Contactpage'>
        <div className="contacttitle">
          <h1 className='Contact-title'>Contact Page</h1>
          <iframe className='contact-map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8454.069380705376!2d77.14976429972447!3d28.735005421802885!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d01a248f9d175%3A0x4837b8eb42597a2b!2sMukarba%20Chowk!5e0!3m2!1sen!2sin!4v1693253354402!5m2!1sen!2sin"              style={{width:"600", height:"450", border:"0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <div className="formContact">
          <input type="text"  placeholder='USERNAME' />
          <input type="text"  placeholder='EMAIL'/>
          <textarea name="" id="" cols="30" rows="10" placeholder='ENTER YOUR MESSAGE'></textarea>
        </div>
    </div>
  )
}

export default Contact