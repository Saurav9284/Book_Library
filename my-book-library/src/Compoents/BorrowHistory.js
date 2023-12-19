import React from 'react';

const BorrowHistory = ({ history }) => {
  return (
    <div>
      <h2>Borrow History</h2>
      <ul>
        {history.map((entry, index) => (   
          <li key={index}>
            <strong>{entry.title}</strong> - Borrowed by {entry.borrower} on {entry.date}
          </li>
        ))}
      </ul>
    </div>
    
  );
};

export default BorrowHistory;