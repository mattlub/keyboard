import React from 'react'
import './Cards.css';

const Cards = ({ words }) => (
  <table className="cards-table">
    <thead>
      <tr>
        {/* <th>id</th> */}
        <th className="en-col">English</th>
        <th className="ar-col">Arabic</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {words.map(word => (
        <tr key={word.id}>
          {/* <td>{word.id}</td> */}
          <td className="en-col">{word.en}</td>
          <td className="ar-col">{word.ar}</td>
          <td><button>delete</button></td>
        </tr>
      ))}
    </tbody>
  </table>
)

export default Cards
