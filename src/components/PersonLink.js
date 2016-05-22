import React from 'react';
import {Link} from 'react-router';



class PersonLink extends React.Component {
  personId() {
    let url = this.props.url.split("/");
    url.pop();
    return url.pop();
  }

  

  render() {
    return (
      <div>
        <Link
          to={`/person/${this.personId()}`}>details</Link>
        <br />
      </div>
    );
  }
}



export default PersonLink;
