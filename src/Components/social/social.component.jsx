import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'

import './social.styles.scss'

const linkedinIcon = <FontAwesomeIcon icon={faLinkedin} />
const githubIcon = <FontAwesomeIcon icon={faGithub} />

const Social = () => (
    <div className='fa-6x socialIcons'>
        <div className='singleIcon'>
            <a target='_blank' rel="noopener noreferrer" href='https://www.linkedin.com/in/rebecca-chavez-6979461b2/'>{linkedinIcon}</a></div>
        <div className='singleIcon'>
            <a target='_blank' rel="noopener noreferrer" href='https://github.com/rebeccachavezlv'>{githubIcon}</a></div>
    </div>
)

export default Social