import React from 'react';
import { Link } from 'react-router';



class NextButton extends React.Component {




  render() {
    let match = this.props.url.match(/page=(\d+)/);
    let pageNumber = match.pop();

    return (
      <div>
        <Link
          to={`/${this.props.type}/${pageNumber}`}
          url={this.props.url}
          className="btn btn-primary" style={{float: 'right'}} >Next Page</Link>
        <br />
      </div>
    );
  }
}



export default NextButton;
