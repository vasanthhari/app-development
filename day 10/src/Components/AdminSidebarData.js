import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const AdminSidebarData = [
  {
    title: 'Home',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'Upcoming',
    path: '/eventss',
    icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text'
  },
  {
    title: 'Event-Types',
    path: '/event-typess',
    icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text'
  },
  {
    title: 'Payment',
    path: '/paymentt',
    icon: <FaIcons.FaCcVisa />,
    cName: 'nav-text'
  },
  {
    title: 'Feedback',
    path: '/feedbackk',
    icon: <FaIcons.FaEnvelopeOpenText />,
    cName: 'nav-text'
  },
  {
    title: 'Support',
    path: '/supportt',
    icon: <IoIcons.IoMdHelpCircle />,
    cName: 'nav-text'
  }
];