import { BiHome } from 'react-icons/bi';
import { BsWhatsapp } from 'react-icons/bs';
import { HiOutlineMail } from 'react-icons/hi'


export const contactData = [
    {
        id: 1,
        contactType: 'Email',
        contactText: 'moro.bash97@gmail.com',
        contactLink: 'mailto:moro.bash97@gmail.com',
        contactTextLink: 'Send Message',
        icons: <HiOutlineMail className='contact_icon' />
    },
    {
        id: 2,
        contactType: 'WhatsApp',
        contactText: '+966 550526982',
        contactLink: 'https://wa.me/0550526982',
        contactTextLink: 'Send Message',
        icons: <BsWhatsapp className='contact_icon' />
    }
    //,
    // {
    //     id: 3,
    //     contactType: 'Experiance',
    //     contactText: '3+ Years Working',
    //     contactLink: '',
    //     contactTextLink: '',
    //     icons: <BiHome className='contact_icon' />
    // }


];