import React from 'react';

function DisplayData({firstName, lastName}) {
  return <div>
    <h2>Displayed Names</h2>
    <p>{firstName}</p>
    <p>{lastName}</p>
  </div>;
}

export default DisplayData;
