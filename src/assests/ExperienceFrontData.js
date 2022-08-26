import { AiFillHtml5 } from 'react-icons/ai';
import { DiCss3 } from 'react-icons/di';
import { SiReact } from 'react-icons/si';
import { SiTailwindcss } from 'react-icons/si';
import { DiJavascript } from 'react-icons/di';



export const ExFrontData = [
    {
        id: 1,
        exName: 'HTML',
        exLevel: ' professional',
        icons: <AiFillHtml5 className='ex_details_icon' />
    },
    {
        id: 2,
        exName: 'CSS',
        exLevel: ' professional',
        icons: <DiCss3 className='ex_details_icon' />
    },
    {
        id: 3,
        exName: 'React',
        exLevel: ' Advanced',
        icons: <SiReact className='ex_details_icon' />
    },
    {
        id: 4,
        exName: 'Tailwind',
        exLevel: ' Beginner',
        icons: <SiTailwindcss className='ex_details_icon' />
    },
    {
        id: 5,
        exName: 'JavaScript',
        exLevel: ' Advanced',
        icons: <DiJavascript className='ex_details_icon' />
    }


];