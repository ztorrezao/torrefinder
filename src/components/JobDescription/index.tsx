import React from 'react';
import { DescriptionContainer } from './styles';
import { IoFlash } from 'react-icons/io5';
import { colors } from '../../styles';
import header from '../../assets/header.svg';

function JobDescription(props: any) {
  const {} = props;

  return (
    <DescriptionContainer>
      <div
        className='header'
        style={{ backgroundImage: `url(${header})` }}
      ></div>

      <div className='content'>
        <div className='company'>
          <img src='' alt='image' className='image' />
          <p>
            <strong>Company</strong>
          </p>
        </div>

        <div className='title'>
          <h4>Job title</h4>
          <button title='Coming soon' disabled>
            <IoFlash /> Quick-apply
          </button>
        </div>

        <p className='condition'>Job conditions</p>

        <p>Location</p>

        <p>You'd rank:</p>
        <p>
          <span className='strong'>5th</span> /16
        </p>

        <h6>Compensation</h6>
        <p>
          USD$ <span className='strong'>30K - 40K</span> /year
        </p>

        <h6>Skills and experience needed</h6>
        <ul className="skills">
          <li>Node.js</li>
          <li>JavaScript</li>
          <li>React.js</li>
        </ul>

        <h6>Description</h6>
        <p className='description'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab fugiat,
          iure cupiditate quos dolores similique.
        </p>
      </div>
    </DescriptionContainer>
  );
}

export default JobDescription;
