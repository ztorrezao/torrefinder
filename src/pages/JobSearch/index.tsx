import React from 'react';
import { JobSearchContainer } from './styles';
import { Container, Row, Col, setConfiguration } from 'react-grid-system';
import Search from '../../components/Search';
import JobResults from '../../components/JobResults';

function JobSearch() {
  setConfiguration({ containerWidths: [540, 740, 960, 1186, 1540] });
  return (
    <JobSearchContainer>
      <Container>
        {/* <Row>
          <Col>
            <h1 className='title hide'>
              Find the best working opportunity for your!
            </h1>
          </Col>
        </Row> */}
        <Row>
          <Col>
            <Search placeholder='Type the position that you are searching for...' />
          </Col>
        </Row>
      </Container>

      <Container>
        <JobResults />
      </Container>
    </JobSearchContainer>
  );
}

export default JobSearch;
