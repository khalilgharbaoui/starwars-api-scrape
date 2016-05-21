import React from 'react';
import {Link} from 'react-router';



class PreviousButton extends React.Component {


  render() {
    let match = this.props.url.match(/page=(\d+)/);
    let pageNumber = match.pop();

    return (
      <div>
        <Link
          to={`/${this.props.type}/${pageNumber}`}
          url={this.props.url}
          className="btn btn-primary" style={{float: 'left'}} >Previews Page</Link>
        <br />
      </div>
    );
  }
}



export default PreviousButton;
