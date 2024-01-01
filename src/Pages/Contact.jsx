import { MdEmail, MdLocationOn, MdPhone } from 'react-icons/md'

const Contact = () => {
    return (
        <div className="min-h-[90vh] flex items-center justify-center">
            <div className="py-10 px-3 md:px-14 block ">
                <h1 className="text-4xl font-semibold text-center mb-20">Contact Us</h1>

                <div className='my-7 w-full md:w-[38rem] hidden md:flex items-start justify-center flex-col md:flex-row [&>div]:flex-1 [&>div]:p-5 text-center'>
                    <div>
                        <p className='w-14 aspect-square bg-neutral-600 mx-auto mb-4 rounded-md flex items-center justify-center'>
                            <MdPhone className='text-4xl text-primary-200' />
                        </p>
                        <p className='text-base'>+918299129714</p>
                    </div>
                    <div className='border-x-2'>
                        <p className='w-14 aspect-square bg-neutral-600 mx-auto mb-4 rounded-md flex items-center justify-center'>
                            <MdEmail className='text-4xl text-primary-200' />
                        </p>
                        <p className='text-base'>devxprite@gmail.com</p>
                    </div>
                    <div>
                        <p className='w-14 aspect-square bg-neutral-600 mx-auto mb-4 rounded-md flex items-center justify-center'>
                            <MdLocationOn className='text-4xl text-primary-200' />
                        </p>
                        <p className='text-base'> cybercon cybercon</p>
                    </div>
                </div>

                <form className="mt-6" action="">
                    <label className="block" htmlFor="name">Your Name</label>
                    <input className="input w-full mb-4" type="text" name="name" id="name" />

                    <label className="block" htmlFor="email">Your Email</label>
                    <input className="input w-full mb-4" type="email" name="email" id="email" />

                    <label className="block" htmlFor="message">Your Message</label>
                    <textarea className="input w-full mb-4" name="message" id="message" rows="5"></textarea>

                    <button className='px-4 py-2 gradient_btn w-auto' >Send Message</button>
                </form>

            </div>
        </div>
    );
}

export default Contact;