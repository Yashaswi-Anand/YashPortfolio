import { CNavItem } from '@coreui/react'
import CIcon from '@coreui/icons-react'
import {
    cilDollar,
    cilMic,
    cilHistory,
    cilWalk,
} from '@coreui/icons'

const navbar = [
    {
        component: CNavItem,
        name: 'About Me',
        to: '/about',
        icon: <CIcon icon={cilWalk} customClassName="nav-icon" />,
        badge: { color: 'info', text: '' },
    },
    {
        component: CNavItem,
        name: 'Work Experience',
        to: '/experience',
        icon: <CIcon icon={cilMic} customClassName="nav-icon" />,
    },
    {
        component: CNavItem,
        name: 'Internship',
        to: '/internship',
        icon: <CIcon icon={cilWalk} customClassName="nav-icon" />,
        badge: { color: 'info', text: '' },
    },
    {
        component: CNavItem,
        name: 'Education',
        to: '/education',
        icon: <CIcon icon={cilHistory} customClassName="nav-icon" />,
    },
    {
        component: CNavItem,
        name: 'Projects',
        to: '/project',
        icon: <CIcon icon={cilHistory} customClassName="nav-icon" />,
    },
    {
        component: CNavItem,
        name: 'Skills',
        to: '/skills',
        icon: <CIcon icon={cilDollar} customClassName="nav-icon" />,
    },
    {
        component: CNavItem,
        name: 'Achievements',
        to: '/achievements',
        icon: <CIcon icon={cilHistory} customClassName="nav-icon" />,
    }
]

export { navbar };
