import React from 'react';
import styled from 'styled-components';
import PText from '../components/PText';
import Button from '../components/Button';
import AboutImg from '../assets/images/hero2.png';
import AboutInfoItem from '../components/AboutInfoItem';
import ContactBanner from '../components/ContactBanner';

const AboutPageStyles = styled.div`
  padding: 20rem 0 10rem 0;

  .top-section {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }
  .left {
    flex: 3;
  }
  .right {
    flex: 2;
  }
  .about__subheading {
    font-size: 2.2rem;
    margin-bottom: 2rem;
    span {
      background-color: var(--deep-dark);
      padding: 0.5rem;
      border-radius: 8px;
    }
  }
  .about__heading {
    font-size: 3.6rem;
    margin-bottom: 3rem;
  }
  .about__info {
    margin-bottom: 4rem;
    .para {
      max-width: 100%;
    }
  }
  .right {
    img {
      border: 2px solid var(--gray-1);
    }
  }
  .about__info__items {
    margin-top: 15rem;
  }
  .about__info__item {
    margin-bottom: 10rem;
  }
  .about__info__heading {
    font-size: 3.6rem;
    text-transform: uppercase;
  }
  @media only screen and (max-width: 768px) {
    padding: 10rem 0;
    .top-section {
      flex-direction: column;
      gap: 5rem;
    }
    .about__subheading {
      font-size: 1.8rem;
    }
    .about__heading {
      font-size: 2.8rem;
    }
    .about__info__heading {
      font-size: 3rem;
    }
  }
`;

export default function About() {
  return (
    <>
      <AboutPageStyles>
        <div className="container">
          <div className="top-section">
            <div className="left">
              <p className="about__subheading">
                Hi, I am <span>Raman Kumar</span>
              </p>
              <h2 className="about__heading">A Web Developer Enthusiast</h2>
              <div className="about__info">
                <PText>
                  I am a Front-End Web Developer, I have done Projects Mainly on
                  HTML5, CSS3, Javascript, and ReactJs.I know basics of BackEnd
                  Development.
                  <br /> <br />
                  I am a Problem-solving Enthusiast, I have solved more than
                  500+ DSA Problems on various Platforms like Leetcode,
                  GeeksForGeeks, Codeforces.
                  <br />
                  <br />
                </PText>
              </div>
              <Button btnLink="" btnText="Download CV" />
            </div>
            <div className="right">
              <img src={AboutImg} alt="me" />
            </div>
          </div>
          <div className="about__info__items">
            <div className="about__info__item">
              <h1 className="about__info__heading">Education</h1>

              <AboutInfoItem title="School" items={['N.S.P.S']} />
              <AboutInfoItem
                title="Intermediate"
                items={['Doon Sr Sec School']}
              />
              <AboutInfoItem
                title="College"
                items={['SJB Institute of Technology']}
              />
            </div>
            <div className="about__info__item">
              <h1 className="about__info__heading">My Skills</h1>

              <AboutInfoItem
                title="FrontEnd"
                items={['HTML', 'CSS', 'JavaScript', 'ReactJs']}
              />
              <AboutInfoItem
                title="BackEnd"
                items={['Node', 'Express', 'MongoDB']}
              />
              <AboutInfoItem
                title="Language"
                items={['Javascript', 'C++', 'Python']}
              />
            </div>
            <div className="about__info__item">
              <h1 className="about__info__heading">Experiences</h1>

              <AboutInfoItem
                title="Dec'20-Feb'21"
                items={[
                  'Web Develop and Design Intern at The Sparks Foundation',
                ]}
              />
              <AboutInfoItem
                title="Mar'20-Pre"
                items={['Member at Devnest - Community of 10000+ people']}
              />
              <AboutInfoItem
                title="July'20-Pre"
                items={['Brand-Ambassador at Tutedude']}
              />
            </div>
          </div>
        </div>
        <ContactBanner />
      </AboutPageStyles>
    </>
  );
}
