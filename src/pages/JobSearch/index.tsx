import React from 'react';
import { JobSearchContainer } from './styles';
import { Container, Row, Col, setConfiguration } from 'react-grid-system';
import Search from '../../components/Search';

function JobSearch() {
  setConfiguration({ containerWidths: [540, 740, 960, 1186, 1540] });
  return (
    <JobSearchContainer>
      <Container>
        <Row>
          <Col>
            <Search placeholder="Job search" />
          </Col>
        </Row>
      </Container>
    </JobSearchContainer>
  );
}

export default JobSearch;
