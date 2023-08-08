import React, { useState, useEffect, useRef } from 'react';
import './Contact.css';
import { BsLinkedin } from 'react-icons/bs';
import { BsGithub } from 'react-icons/bs';

function Contact() {
    const myRef = useRef();
    const [visible, setVisible] = useState(false);
  
    useEffect(() => {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true)
          } else {
            setVisible(false)
          }
        })
      }, {
        threshold: 0.1
      })
      observer.observe(myRef.current)
    }, []);
    function clearForm() {
        document.getElementById('form').submit();
        document.getElementById('form').reset();
    }

  return (
    <div className='contact' id='contact'>
        <div className='shimmer contact_background_wrapper'>
            contact
        </div>
        <div ref={myRef} className={`${visible ? 'contact_reveal' : 'contact_reveal_inactive'}`}>
            <div className='root_contact_container'>
                <div className='contact_container'>
                    <div className='contact_wrapper'>
                        <form id='form' className='form_container' action='mailto:wyattchamberlin6@gmail.com' method='post' encType='text/plain' autoComplete='off' onSubmit={clearForm}>
                            <div className='contact_first_line'>
                                <div className='name_wrapper'>
                                    <textarea id="Name" name="Name" className='input_name' placeholder='Name'></textarea>
                                </div>
                                <div className='email_wrapper'>
                                    <textarea id="Email" name="Email" className='input_email' placeholder='Email'></textarea>
                                </div>
                            </div>
                            <div className='contact_second_line'>
                                <div className='subject_wrapper'>
                                    <textarea id="Subject" name="Subject" className='input_subject' placeholder='Subject'></textarea>
                                </div>
                            </div>
                            <div className='contact_third_line'>
                                <div className='message_wrapper'>
                                    <textarea id="Message" name="Message" className='input_message' placeholder='Message'></textarea>
                                </div>
                            </div>
                            <div className='contact_submit_line'>
                                <div className='submit_wrapper'>
                                    <input type="submit" value="Submit" className='input_submit'></input>
                                </div>
                            </div>
                        </form>
                    </div>
                </div> 
            </div>  
            <div className='icon-links'>
                <div className='icon-links_container'>
                    <a className='linked-in_wrapper' href='https://www.linkedin.com/in/wyatt-chamberlin-ab3b14100/' target='blank' rel='noopener noreferrer'>
                        <BsLinkedin className='linked-in'/>
                    </a>  
                    <a className='github_wrapper' href=' https://github.com/elkaholic6' target='blank' rel='noopener noreferrer'>
                        <BsGithub className='github'/>
                    </a>   
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact