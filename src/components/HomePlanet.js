import React from 'react';
import $ from 'jquery';


class Resident extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      data: []
    }
  }

  getData() {


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
      component.setState({

        data: data

      });
    })
    .done((data) => {

    })
    .fail(function(data) {

      console.log("Failed but status " + data.status);
    });

  }
  componentDidMount() {
    this.getData();
  }

  render() {
    let homeplanet = this.state.data;
    console.log(homeplanet);

    return (

      <div>
        <h5>
          Planet: {homeplanet.name}
        </h5>
      </div>
    );
  }
}



export default Resident;
