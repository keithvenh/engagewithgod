import './contact.scss';

import {useState} from 'react';
import {init as emailjsInit, sendForm as emailjsSendForm} from '@emailjs/browser'

export default function Contact() {

  const [formData, setFormData] = useState({
    "contact_number": Math.random() * 100000 | 0,
    "honeypot": '',
    "user_name": '',
    "user_email": '',
    "message": ''
  })

  const [formSubmitSuccess, setFormSubmitSuccess] = useState(false);

  const thankYouMessage = <div className='thank-you-message'><h3>Thanks for reaching out! Your form has been successfully submitted and we will be in touch shortly!</h3></div>

  const familyImage = require('../../assets/images/family-image.jpg');

  function handleContactFormInput(event) {
    const {name, value} = event.target
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  function handleSubmit(event) {
    event.preventDefault();
    emailjsInit('XCUw7zYjR_2faxZRn');

    // Check the honeypot, it should be empty
    if(event.target.honeypot.value === '') {

      // Attempt to Submit the Form
      emailjsSendForm('contact_service', 'contact_form', event.target)
        .then(function() {
  
          // === Form Submission Success === //

          // Reset the form
          setFormData({
            "contact_number": Math.random() * 100000 | 0,
            "honeypot": '',
            "user_name": '',
            "user_email": '',
            "message": ''
          })

          // Display a success and thank you message.
          setFormSubmitSuccess(true);

          // Clear the success and thank you message after 5 seconds.
          setTimeout(() => {setFormSubmitSuccess(false)}, 10000)
  
        }, function(error) {console.log('FAILED...', error)})

    }
  }

  return (
    <article id='contact' className='contact'>

      <h2>Contact Us</h2>

      {formSubmitSuccess ? thankYouMessage : ''}

      <div className='image-container'>
        <img src={familyImage} alt='our family' />
      </div>

      <div className='contact-form-container'>

        <form className='contact-form' onSubmit={handleSubmit}>

          <input type="hidden" id='contact_number' name="contact_number" value={formData['contact_number']}/>
          <input type='text' id='honeypot' name='honeypot' value={formData["honeypot"]} onChange={handleContactFormInput} />

          <div className='form-field'>
            <label htmlFor='user_name'>Name</label>
            <input type='text' id='user_name' name='user_name'value={formData["user_name"]} onChange={handleContactFormInput} />
          </div>

          <div className='form-field'>
            <label htmlFor='user_email'>Email</label>
            <input type='email' id='user_email' name='user_email'value={formData["user_email"]} onChange={handleContactFormInput} />
          </div>

          <div className='form-field'>
            <label htmlFor='message'>Message</label>
            <textarea rows='5' id='message' name='message'value={formData["message"]} onChange={handleContactFormInput}/>
          </div>

          <div className='form-field'>
            <input className='button form-button submit-button' id='submit' type='submit' value='Submit' />
          </div>

        </form>

      </div>

    </article>
  )
}