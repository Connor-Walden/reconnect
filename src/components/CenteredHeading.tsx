import React from 'react';

import { Row, Col } from 'react-bootstrap';

interface props {
    title: String
}

const styles = {
  headingText: {
    textShadow: '0px 6px 8px #000000',
    fontSize: '30pt',
    marginTop: '100px'
  }
}

const classes = {
    row: {
        justifyCenter: 'justify-content-md-center'  
    },
    col: {
        noPadding: 'p-0',
    },
    headings: {
        text: 'text-center'
    }
}

const CenteredHeading : React.FC<props> = ({ title }) => {
    return (
    <Row 
      className={classes.row.justifyCenter}
    >
      <Col 
        md='auto' 
        className={classes.col.noPadding}
      >
        <h1 
          className={classes.headings.text} 
          style={styles.headingText}
        >{title}</h1>
      </Col>
    </Row>
    );
}

export default CenteredHeading;