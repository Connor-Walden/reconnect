import React from "react"

import 'bootstrap/dist/css/bootstrap.min.css';

import CenteredHeading from '../components/CenteredHeading';
import CenteredReconnectIcon from '../components/CenteredReconnectIcon';

const IndexPage: React.FC = () => (
  <div>
    <CenteredHeading title='Reconnect' />
    <CenteredReconnectIcon />
  </div>
)

export default IndexPage
