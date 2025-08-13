import React from 'react';

export function Card(props) {
  return (
    <div className="github-profile">
      <img src={props.avatar_url} alt={`${props.name}'s avatar`} />

      <div className="info">
        <h3>{props.name}</h3>
        <h4>{props.company}</h4>
      </div>
    </div>
  );
}
