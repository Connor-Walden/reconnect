import React from 'react';

import { Link } from 'gatsby'

const testComponent: React.FC = () => {
    return (
        <div>
            <h1>TEST PAGE</h1>
            <Link to='/'>Go back home</Link>
        </div>
    );
}

export default testComponent;