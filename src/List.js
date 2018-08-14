import React from 'react';

const List = (props) => {
    return <p>{props.tasks.join(', ')}</p>
};

export default List;