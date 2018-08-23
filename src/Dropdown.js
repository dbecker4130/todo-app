import React from 'react';
import { withState } from 'recompose';

const expandState = withState("expanded", "setExpanded", true)

const Dropdown = expandState(({ expanded, setExpanded }) => (
    <div className="expand-button" onClick={() => setExpanded(!expanded)}>
        { expanded ? <div className="arrow-down">more info =></div> : 
            <div className="arrow-up">
                {/* <p>{props.completed.extra}</p> */}
                <p>This is expanded</p>
            </div> 
        }
    </div>
));

export default Dropdown;