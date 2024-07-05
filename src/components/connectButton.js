import React from 'react';

const ConnectButton = ({initialize}) => {
  return (
    <div>
      {<button onClick={initialize}>Connect MetaMask</button>}
    </div>
  );
};

export default ConnectButton;