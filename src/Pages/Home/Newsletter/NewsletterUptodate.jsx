import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
const NewsletterUptodate = () => {
    const form = useRef();
    const navigate = useNavigate();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_ryizezb', 'template_g2okr7h', form.current, {
                publicKey: 'gj81_Dvnddqffz55Z',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                    Swal.fire({
                        title: "Good job!",
                        text: "Successfully get your mail. Soon we contact with you!",
                        icon: "success"
                      });
                      navigate('/')
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };
    return (
        <div className='pt-24'>
          <div className='bg-green-600 text-white text-center py-8'><h2 className=' font-bold text-8xl'>NEWSLETTER</h2>
          <p className='text-xl'>Stay Up to Date</p></div>
        <form ref={form} onSubmit={sendEmail} className="card-body lg:mx-44">
        <div className="form-control">
                <label className="label">
                    <span className="label-text">Name</span>
                </label>
                <input type="text" placeholder="Your name" name="from_name" className="input input-bordered" required />
            </div>
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Email</span>
                </label>
                <input type="email" placeholder="email" name="from_email" className="input input-bordered" required />
            </div>
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Message</span>
                </label>
                <textarea type="text" name="message" placeholder="message" className="input input-bordered" required />
                
            </div>
            <div className="form-control mt-6">
                <input type="submit" value="Send" className="btn bg-green-600"/>
            </div>
        </form>
    </div>
    );
};


export default NewsletterUptodate;