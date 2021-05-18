import React from 'react';
import { JobResultsContainer } from './styles';
import { Container, Row, Col, setConfiguration } from 'react-grid-system';
import Search from '../../components/Search';
import JobResult from '../JobResult';
import JobDescription from '../JobDescription';

function JobResults() {
  setConfiguration({ containerWidths: [540, 740, 960, 1186, 1540] });
  return (
    <JobResultsContainer>
      <Row>
        <p></p>
      </Row>
      <Row gutterWidth={21}>
        <Col sm={12} lg={5} className='job-list'>
          <JobResult/>
          <JobResult/>
          <JobResult/>
          <JobResult/>
          <JobResult/>
          <JobResult/>
          <JobResult/>
          <JobResult/>
          <JobResult/>
          <JobResult/>
          <JobResult/>
          <JobResult/>
          <JobResult/>
        </Col>
        <Col sm={12} lg={7} className='job-description'>
          <JobDescription />
        </Col>
      </Row>
    </JobResultsContainer>
  );
}

export default JobResults;
