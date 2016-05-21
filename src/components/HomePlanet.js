import React from 'react';
import $ from 'jquery';


class HomePlanet extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      data: 'loading...'
    }
  }

  getHomeworldName() {


    let component = this;
    let APIurl = component.props.url;
    $.ajax({
      dataType: 'json',
      url: APIurl + '?format=json',
      contentType: 'application/json',
      method: 'GET'

    })
    .success((data) => {
      this.setState({
        data: data
      });
    })
    .done((data) => {

    })
    .fail((data) => {

      console.log("Failed but status " + data.status);
    });

  }

  componentDidMount() {
    this.getHomeworldName();
  }

  render() {
    return (
      <div>
        <h5>
          {this.state.data.name ? ('Planet: ' + this.state.data.name) : ''}
        </h5>
      </div>
    );
  }
}



export default HomePlanet;
