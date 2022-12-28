import './index.scss';
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import data from '@emoji-mart/data'
import Picker from '@emoji-mart/react'
import { faSmile } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faInstagram, faLinkedin, faTiktok, faYoutube } from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
    const refForm = useRef();
    const [showEmoji, setShowEmoji] = useState(false);
      
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs
            .sendForm(
                'service_8blrm5m',
                'template_36yifgg',
                refForm.current,
                'DcA4sYUWl-MyisPym'
            )
            .then(
                () => {
                    alert("Message successfully sent");
                    window.location.reload(false);
                },
                () => {
                    alert("Failed to send the message, please try again");
                }
            )
    }
    return (
        <div className='contact'>    
            <div className='handles'>
                <h2>Connect with me!</h2>        

                <div className="handle">
                    <a 
                        href='https://github.com/jasmyneokudo'
                        target="_blank"
                        rel="noreferrer"
                    >
                        <FontAwesomeIcon icon={faGithub}/>
                    </a>
                </div>
                
                <div className="handle">
                    <a 
                        href='https://www.instagram.com/jasmyneokudo/'
                        target="_blank"
                        rel="noreferrer"
                    >
                        <FontAwesomeIcon icon={faInstagram}/>
                    </a>
                </div>

                <div className="handle">
                    <a 
                        href='https://www.linkedin.com/in/jasmyne-okudo-360426161/'
                        target="_blank"
                        rel="noreferrer"
                    >
                        <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                </div>
                <div className="handle">
                    <a 
                        href='https://www.youtube.com/channel/UCG7i5auxCHRsI8I5-B2d1_A'
                        target="_blank"
                        rel="noreferrer"
                    >
                        <FontAwesomeIcon icon={faYoutube} />
                    </a>
                </div>
                <div className="handle">
                    <a 
                        href='https://www.tiktok.com/@jasmyneokudo'
                        target="_blank"
                        rel="noreferrer"
                    >
                        <FontAwesomeIcon icon={faTiktok} />
                    </a>
                </div>
            </div>
            <div className='contact-form'>
                <h2>Send a message</h2>     
            
                <form ref={refForm} onSubmit={sendEmail}>
                    <ul>
                        <li className='half'>
                            <input type='text' name='name' placeholder='Name' required/>
                        </li>
                        <li className='half'>
                            <input type='email' name='email' placeholder='Email' required/>
                        </li>
                        <li>
                            <input type='text' name='subject' placeholder='Subject' required/>
                        </li>
                        <li>
                            <textarea placeholder='Message' name='message' required/>
                        </li>
                        {/* <li>
                            <button type='button' onClick={() => {
                                setShowEmoji(true);
                            }}>
                                <FontAwesomeIcon icon={faSmile} color={'yellow'}/>
                            </button>
                        </li> */}
                        <li>
                            <input type='submit' className='send-button' value="SEND"/>
                        </li>
                    </ul>
                </form>
                {/* <Picker data={data} onEmojiSelect={console.log} /> */}
                
            </div>
        </div>
    )
}

export default Contact;