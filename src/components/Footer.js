import React from 'react';
import styled from 'styled-components';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';
import PText from './PText';
import FooterCol from './FooterCol';

const FooterStyle = styled.div`
  background-color: var(--deep-dark);
  padding-top: 10rem;
  .container {
    display: flex;
    gap: 3rem;
  }
  .footer__col1 {
    flex: 2;
  }
  .footer__col2,
  .footer__col3,
  .footer__col4 {
    flex: 1;
  }
  .footer__col1__title {
    font-size: 3.5rem;
    margin-bottom: 1rem;
  }
  .copyright {
    background-color: var(--dark-bg);
    text-align: left;
    padding: 1rem 0;
    margin-top: 5rem;
    .para {
      margin-left: 0;
    }
  }
  @media only screen and (max-width: 768px) {
    .container {
      flex-direction: column;
      gap: 0rem;
      & > div {
        margin-top: 5rem;
      }
    }
    .footer__col1 .para {
      max-width: 100%;
    }
    .copyright {
      .container {
        div {
          margin-top: 0;
        }
      }
    }
  }
`;

export default function Footer() {
  return (
    <FooterStyle>
      <div className="container">
        <div className="footer__col1">
          <h1 className="footer__col1__title">Raman Kumar</h1>
          <PText>
            I am a Front-End Web Developer and a Problem solver Enthusiast. I
            have done Projects Mailny on HTML, Javascript, and ReactJs, and I
            have solved 500+ Data Structures and Algorithm Problems On various
            Coding Platforms.
          </PText>
        </div>
        <div className="footer__col2">
          <FooterCol
            heading="Important Links"
            links={[
              {
                title: 'Home',
                path: '/',
                type: 'Link',
              },
              {
                type: 'Link',
                title: 'About',
                path: '/about',
              },
              {
                type: 'Link',
                title: 'Projects',
                path: '/projects',
              },
              {
                type: 'Link',
                title: 'Contact',
                path: '/contact',
              },
            ]}
          />
        </div>
        <div className="footer__col3">
          <FooterCol
            heading="Contact Info"
            links={[
              {
                title: '+91 7665444998',
                path: 'tel:+8854355878',
              },
              {
                title: 'rmn5124@gmail.com',
                path: 'mailto:rmn5124@gmail.com',
              },
              {
                title: 'BGS, Bangalore, Karnataka',
                path: 'http://google.com/maps',
              },
            ]}
          />
        </div>
        <div className="footer__col4">
          <FooterCol
            heading="social Links"
            links={[
              {
                title: <LinkedInIcon fontSize="large" />,
                path: 'https://www.linkedin.com/in/rmn-52012/',
              },
              {
                title: <GitHubIcon fontSize="large" />,
                path: 'https://github.com/rmn5124',
              },
              {
                title: <InstagramIcon fontSize="large" />,
                path: 'https://www.instagram.com/rmnchoudhary_/',
              },
              {
                title: <FacebookIcon fontSize="large" />,
                path: 'https://www.facebook.com/raman.raj.52012/',
              },
            ]}
          />
        </div>
      </div>
      <div className="copyright" />
    </FooterStyle>
  );
}
