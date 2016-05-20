import React from 'react';
import {Link} from 'react-router';

class Welcome extends React.Component{

  constructor(){
    super();

  }

  render(){
    return (



      <div className="container">
        <h1>Welcome to the StarWars API Scrapper</h1>
          <Link className="btn btn-primary btn-lg btn-block" to={`/people/1`}>Enter you may!</Link>
      </div>

  );
}
}

export default Welcome;
