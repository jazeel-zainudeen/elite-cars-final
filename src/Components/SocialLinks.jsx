import React from 'react';
import { SocialIcon } from 'react-social-icons';

const SocialLinks = ({ className, iconClassName = null }) => {
    return (
        <div className={`${className}`}>
            <SocialIcon bgColor='transparent' className={`${iconClassName}`} url="#" network='facebook' />
            <SocialIcon bgColor='transparent' className={`${iconClassName}`} url="#" network='linkedin' />
            <SocialIcon bgColor='transparent' className={`${iconClassName}`} url="#" network='instagram' />
            <SocialIcon bgColor='transparent' className={`${iconClassName}`} url="#" network='youtube' />
            <SocialIcon bgColor='transparent' className={`${iconClassName}`} url="#" network='twitter' />
        </div>
    );
}

export default SocialLinks;
