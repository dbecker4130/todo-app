import React from 'react';
import { compose, withState, withHandlers } from 'recompose';

const expandState = withState("expanded", "setExpanded", true)

const Dropdown = expandState(({ expanded, setExpanded }) => (
    <div className="expand-button" onClick={() => setExpanded(!expanded)}>
        { expanded ? <div className="arrow-down">Down</div> : 
            <div className="arrow-up">
                <p>This is expanded</p>
            </div> 
        }
    </div>
));

export default Dropdown;