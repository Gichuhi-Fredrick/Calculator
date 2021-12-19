import React from 'react';

export default function Display({ result, value }) {
  return (
    <div className="displayInput">
      <span>{value || '0'}</span>
      {result ? <span>{result}</span> : ''}
    </div>
  );
}
