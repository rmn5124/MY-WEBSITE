import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ButtonStyle = styled.div`
  margin-top: 2rem;
  .button {
    font-size: 2.2rem;
    background-color: ${(props) =>
      props.outline ? 'transperant' : 'var(--gray-1)'};
    padding: 0.7em 2em;
    border: 2px solid var(--gray-1);
    border-radius: 8px;
    display: inline-block;
    color: ${(props) => (props.outline ? 'var(--gary-1)' : 'black')};
  }
  .button:hover {
    box-shadow: 4px 4px 6px 0 rgba(255, 255, 255, 0.5),
      -4px -4px 6px 0 rgba(116, 125, 136, 0.5),
      inset -4px -4px 6px 0 rgba(255, 255, 255, 0.2),
      inset 4px 4px 6px 0 rgba(0, 0, 0, 0.4);

    background-position: right center; /* change the direction of the change here */
    color: #fff;
    text-decoration: none;
    background-image: linear-gradient(
      to right,
      #314755 0%,
      #055052 51%,
      #314755 100%
    );
  }
  @media only screen and (max-width: 768px) {
    .button {
      font-size: 1.8rem;
    }
  }
`;

export default function Button({ btnText = 'test', outline = false }) {
  return (
    <ButtonStyle outline={outline} className="button-wrapper">
      <Link
        className="button"
        to={{
          pathname:
            'https://drive.google.com/file/d/1Qix4l7zBM23aCQ_zzdI6qzuBImAXTEnu/view?usp=sharing',
        }}
        target="_blank"
      >
        {btnText}
      </Link>
    </ButtonStyle>
  );
}
