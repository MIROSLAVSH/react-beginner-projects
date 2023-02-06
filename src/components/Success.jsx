import React from 'react';

export const Success = ({ count }) => {
  return (
    <div class="success-block">
      <img src="/assets/success.svg" alt="Success" />
      <h3>Success!</h3>
      <p>All {count} users send invide.</p>
      <button className="send-invite-btn">Назад</button>
    </div>
  );
};
