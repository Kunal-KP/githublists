import React from 'react';
import StarredList from '../containers/starredList';
require('../../scss/style.scss');

const MyApp = () => (
    <div>
        <h1 className="align shadow"><u>Most Starred Github Repos:</u></h1>
        <StarredList/>
    </div>
);

export default MyApp;
