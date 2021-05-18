import React, { useState, useEffect } from 'react';
import { JobSearchContainer } from './styles';
import { Container, Row, Col, setConfiguration } from 'react-grid-system';
import Search from '../../components/Search';
import JobResults from '../../components/JobResults';

function JobSearch() {
  const [results, setResults] = useState([]);
  const [page, setPage] = useState(1);

  const handleSearch = (text: string) => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    };
    fetch(
      `https://search.torre.co/opportunities/_search/?offset=${page}&size=10&aggregate=${text}`,
      requestOptions
    )
      .then((response) => response.json())
      .then((data) => setResults(data.results));
  };

  setConfiguration({ containerWidths: [540, 740, 960, 1186, 1540] });
  return (
    <JobSearchContainer>
      <Container>
        {results.length === 0 ? (
          <Row>
            <Col>
              <h1 className='title hide'>
                Find the best working opportunity for your!
              </h1>
            </Col>
          </Row>
        ) : (
          ''
        )}
        <Row>
          <Col>
            <Search
              placeholder='Type the position that you are searching for...'
              handleSearch={handleSearch}
            />
          </Col>
        </Row>
      </Container>

      {results.length > 0 ? (
        <Container>
          {' '}
          <JobResults results={results} />{' '}
        </Container>
      ) : (
        ''
      )}
    </JobSearchContainer>
  );
}

export default JobSearch;
