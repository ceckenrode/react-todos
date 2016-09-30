import React from 'react';
import '../assets/sass/container.scss';

const Container = (props) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4 col-md-offset-4">
          {props.children}
        </div>
      </div>
    </div>
  );
};

export default Container;
