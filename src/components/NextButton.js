import React from 'react';
import { Link } from 'react-router';



class NextButton extends React.Component {


  pageId() {
    let url = this.props.url.split(/&page=/);
    let pageNumber = url.pop();
    return pageNumber;
  }




  render() {
    return (
      <div>
        <Link
          to={`/${this.props.type}/${this.pageId()}`}
          url={this.props.url}
          className="btn btn-primary" style={{float: 'right'}} >Next Page</Link>
        <br />
      </div>
    );
  }
}



export default NextButton;
