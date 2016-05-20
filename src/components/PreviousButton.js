import React from 'react';
import {Link} from 'react-router';



class PreviousButton extends React.Component {


  pageId() {
    let url = this.props.url.split(/&page=/);
    let pageNumber = url.pop();
    return pageNumber;
  }




  render() {
    let component = this;
    return (
      <div>
        <Link
          to={`/${this.props.type}/${this.pageId()}`}
          url={this.props.url}
          className="btn btn-primary" style={{float: 'left'}} >Previous Page</Link>
        <br />
      </div>
    );
  }
}



export default PreviousButton;
