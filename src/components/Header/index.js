
import './index.scss';
import React from 'react';

const Header = ({url}) => (
  <header className="header">
    <h1>Friends Meet</h1>
    <a href={url}>{url}</a>
  </header>
);

export default Header;