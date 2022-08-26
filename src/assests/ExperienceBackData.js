import { BiHome } from 'react-icons/bi';
import { SiFlutter } from 'react-icons/si';
import { SiPhp } from 'react-icons/si';
import { FaLaravel } from 'react-icons/fa';
import { SiMysql } from 'react-icons/si'



export const ExBackData = [
    {
        id: 1,
        exName: 'PHP',
        exLevel: 'Advanced',
        icons: <SiPhp className='ex_details_icon' />
    },
    {
        id: 2,
        exName: 'Laravel',
        exLevel: 'Entermediate',
        icons: <FaLaravel className='ex_details_icon' />
    },
    {
        id: 3,
        exName: 'MySQL',
        exLevel: 'Advanced',
        icons: <SiMysql className='ex_details_icon' />
    },
    {
        id: 6,
        exName: 'Flutter',
        exLevel: ' Beginner',
        icons: <SiFlutter className='ex_details_icon' />
    }


];