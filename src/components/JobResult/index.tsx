import React from 'react';
import { ResultContainer } from './styles';
import { IoSearch } from 'react-icons/io5';
import { colors } from '../../styles';

function JobResult(props: any) {
  const {} = props;

  return (
    <ResultContainer>
      <div>
        <img src='' alt='image' className='image' />
      </div>
      <div className='description'>
        <div className='info'>
          <h6>Job title</h6>
          <p>Job conditions</p>
          <p>
            <strong>Company</strong>
          </p>
          <p>Location</p>
          <p>
            USD$ <span className='strong'>30K - 40K</span> /year
          </p>
        </div>
        <div className='rates'>
          <p>You'd rank:</p>
          <p>
            <span className='strong'>5th</span> /16
          </p>
        </div>
      </div>
    </ResultContainer>
  );
}

export default JobResult;
