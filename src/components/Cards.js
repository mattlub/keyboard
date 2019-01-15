import React from 'react'
import './Cards.css';

const Cards = ({ words, handleDelete }) => (
  <table className="cards-table">
    <thead>
      <tr>
        <th className="en-col">English</th>
        <th className="ar-col">Arabic</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {words.map(word => (
        <tr key={word.id}>
          <td className="en-col">{word.en}</td>
          <td className="ar-col">{word.ar}</td>
          <td>
            <button onClick={() => handleDelete(word.id)}>
              delete
            </button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
)

export default Cards
