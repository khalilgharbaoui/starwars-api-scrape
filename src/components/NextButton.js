import React from 'react';
import { Link } from 'react-router';



class NextButton extends React.Component {


render() {
    let match = this.props.next.match(/page=(\d+)/);
    let pageNumber = match.pop();

    return (
      <div>
        <Link
          to={`/${this.props.type}/${pageNumber}`}
          className="btn btn-primary" style={{float: 'right'}} >Next Page</Link>
        <br />
      </div>
    );
  }
}



export default NextButton;
