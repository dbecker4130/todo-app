import React from 'react';
import PropTypes from 'prop-types';

import { withState } from 'recompose';

const expandState = withState("expanded", "setExpanded", true)

// NOTE use recompose branch() to pass props

const Dropdown = expandState(({ expanded, setExpanded }) => (
    <div className="expand-button" onClick={() => setExpanded(!expanded)}>
        { expanded ? <div className="arrow-down">more info =></div> : 
            <div className="arrow-up">
                <p>More Info: </p>
            </div> 
        }
    </div>
));

export default Dropdown;