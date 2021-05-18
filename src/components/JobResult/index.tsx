import React from 'react';
import { ResultContainer } from './styles';
import { IoSearch } from 'react-icons/io5';
import { colors } from '../../styles';

function JobResult({job, handleOnJobClick}: any) {
  const {objective, type, organizations, locations, compensation} = job;


  return (
    <ResultContainer onClick={() => handleOnJobClick(job)}>
      <div>
        <img src={organizations[0].picture} alt={organizations[0].name} className='image' />
      </div>
      <div className='description'>
        <div className='info'>
          <h6>{objective}</h6>
          <p>{type}</p>
          <p>
            <strong>{organizations[0].name}</strong>
          </p>
          <p>{locations[0]}</p>
          <p>
            {compensation.data.currency} <span className='strong'>{compensation.data.minAmount} {compensation.data.code === 'range'? '-' : ''} {compensation.data.maxAmount}</span> /{compensation.data.periodicity}
          </p>
        </div>
      </div>
    </ResultContainer>
  );
}

export default JobResult;
