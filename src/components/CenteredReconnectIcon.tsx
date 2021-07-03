import React from 'react';

import { StaticImage } from 'gatsby-plugin-image';

import { Row, Col } from 'react-bootstrap';

const styles = {
    img: {
      marginBottom: `1.45rem`
    },
    row: {
      marginTop: '50px'
    }
  }
  
  const classes = {
    row: {
      alignCenter: 'd-flex justify-content-center align-items-center'
    }
  }

const CenteredReconnectIcon : React.FC = () => {
    return (
        <Row
            className={classes.row.alignCenter}
            style={styles.row}
        >
            <Col 
              className={classes.row.alignCenter}
              md='auto'
              style={styles.img}
            >
                <StaticImage
                    src='../images/Reconnect_overlay.png'
                    width={300}
                    quality={95}
                    alt='Reconnect alternate image'
                    style={styles.img}
                />
            </Col>
        </Row>
    );
}

export default CenteredReconnectIcon;