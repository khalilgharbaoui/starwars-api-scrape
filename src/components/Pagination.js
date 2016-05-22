import React from 'react';
import $ from 'jquery';
import NextButton from './NextButton';
import PreviousButton from './PreviousButton';
import { Link } from 'react-router';


class Pagination extends React.Component {

  constructor(props) {
    super(props);


  }


  render() {

    return(
      <div className="container">
        <br />
        <br />
        {this.props.previous ? <PreviousButton previous={this.props.previous} type={this.props.type} /> : ''}
        {this.props.next ? <NextButton next={this.props.next} type={this.props.type} /> : ''}
        <br />
      </div>
    );
  }
}

export default Pagination;
