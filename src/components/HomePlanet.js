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
      cache: true,
      method: 'GET'

    })
    .success((data) => {

      this.setState({
        data: data.name
      })
      console.log(this.state.data);

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

    if(this.state.data === null){
      var homeplanet = '';

    } else {
      var homeplanet = 'Planet: ' + this.state.data;
    }
    return (
      <div>
        <h5>
          {homeplanet}
        </h5>
      </div>
    );
  }
}



export default HomePlanet;
