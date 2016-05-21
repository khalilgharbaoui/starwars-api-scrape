import React from 'react';
import $ from 'jquery';
import NextButton from './NextButton';
import PreviousButton from './PreviousButton';
import { Link } from 'react-router';


class Pagination extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      data: []
    }
  }

  getUrlData() {
    let component = this;
    let pageId = this.props.pageId;
    var url = `http://swapi.co/api/people/?page=${pageId}&format=json`

    $.ajax({
      url: url,
      contentType: 'application/json',
      method: 'GET'
    })
    .success((data) => { })
    .done((data) => { this.setState({ data: data }); })
    .fail((data) => { console.log( "Failed with status " + data.status ); });
  }

  componentDidMount(){
    this.getUrlData();
  }
  render() {

    return(
      <div className="container">
        <br />
        <br />
        {this.state.data.previous ? <PreviousButton url={this.state.data.previous} type={'people'} /> : ''}
        {this.state.data.next ? <NextButton url={this.state.data.next} type={'people'} /> : ''}
        <br />
      </div>
    );
  }
}

export default Pagination;
