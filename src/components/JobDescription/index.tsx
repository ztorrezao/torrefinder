import React from 'react';
import { DescriptionContainer } from './styles';
import { IoFlash } from 'react-icons/io5';
import { colors } from '../../styles';
import header from '../../assets/header.svg';

function JobDescription({ job }: any) {
  const { skills, objective, type, organizations, locations, compensation } =
    job;

  return (
    <DescriptionContainer>
      <div
        className='header'
        style={{ backgroundImage: `url(${header})` }}
      ></div>

      <div className='content'>
        <div className='company'>
          <img
            src={organizations[0].picture}
            alt={organizations[0].name}
            className='image'
          />
          <p>
            <strong>{organizations[0].name}</strong>
          </p>
        </div>

        <div className='title'>
          <h4>{objective}</h4>
          <button title='Coming soon' disabled>
            <IoFlash /> Quick-apply
          </button>
        </div>

        <p className='condition'>{type}</p>

        <p>{locations.map((location: any) => `${location},`)}</p>

        <h6>Compensation</h6>
        <p>
          {compensation.data.currency}{' '}
          <span className='strong'>
            {compensation.data.minAmount}{' '}
            {compensation.data.code === 'range' ? '-' : ''}{' '}
            {compensation.data.maxAmount}
          </span>{' '}
          /{compensation.data.periodicity}
        </p>

        {/* <h6>Skills and experience needed</h6>
        <ul className='skills'>
          {Array.isArray(skills) ? (
            skills.map((skill: any, index: any) => <li key={index}>{skill}</li>)
          ) : (
            <li>{skills.name}</li>
          )}
        </ul> */}

        {/* <h6>Description</h6>
        <p className='description'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab fugiat,
          iure cupiditate quos dolores similique.
        </p> */}
      </div>
    </DescriptionContainer>
  );
}

export default JobDescription;
