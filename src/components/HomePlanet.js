import React from 'react';
import $ from 'jquery';


class HomePlanet extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      data: null
    }
  }

  getHomeworldName() {


    let component = this;
    let APIurl = component.props.url;

    //http://api.jquery.com/jQuery.ajax/

    $.ajax({
      url: APIurl,
      dataType: 'json',
      contentType: 'application/json',
      cache: false,
      method: 'GET'

    })
    .success((data) => {

      this.setState({
        data: data.name
      })
    })
    .done((data) => {

    })
    .fail(function(data) {

      console.log("Failed but status " + data.status);
    });

  }

componentDidMount() {
    this.getHomeworldName();
  }

  render() {
    let homeplanet = this.state.data;
    console.log(homeplanet);
    return (
      <div>
        <h5>
          Planet: {homeplanet}
        </h5>
      </div>
    );
  }
}



export default HomePlanet;
