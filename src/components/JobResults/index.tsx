import React, { useEffect, useState } from 'react';
import { JobResultsContainer } from './styles';
import { Container, Row, Col, setConfiguration } from 'react-grid-system';
import Search from '../../components/Search';
import JobResult from '../JobResult';
import JobDescription from '../JobDescription';

function JobResults({ results }: any) {
  setConfiguration({ containerWidths: [540, 740, 960, 1186, 1540] });
  const [jobData, setJobData] = useState({});

  const handleOnJobClick = (clickedJob: any) => {
    setJobData(clickedJob);
  };
  return (
    <JobResultsContainer>
      <Row>
        <p></p>
      </Row>
      <Row gutterWidth={21}>
        <Col sm={12} lg={5} className='job-list'>
          {results.map((job: any, index: number) => (
            <JobResult
              key={job.id}
              job={job}
              handleOnJobClick={handleOnJobClick}
            />
          ))}
        </Col>
        <Col sm={12} lg={7} className='job-description'>
          {Object.keys(jobData).length === 0 &&
          jobData.constructor === Object ? (
            ''
          ) : (
            <JobDescription job={jobData} />
          )}
        </Col>
      </Row>
    </JobResultsContainer>
  );
}

export default JobResults;
