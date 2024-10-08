import * as React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Link from '@mui/material/Link';

const Social = () => {
    return (
        <div>
            <Link href="https://facebook.com" target="_blank">
                <FacebookIcon></FacebookIcon>
            </Link>
            <Link href="https://x.com" target="_blank">
                <TwitterIcon></TwitterIcon>
            </Link>
            <Link href="https://instagram.com" target="_blank">
                <InstagramIcon></InstagramIcon>
            </Link>
            <Link href="https://linkedin.com" target="_blank">
                <LinkedInIcon></LinkedInIcon>
            </Link>
        </div>
    );
};

export default Social;