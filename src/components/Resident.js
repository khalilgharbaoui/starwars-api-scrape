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
    let url = component.props.url;

    if (url === undefined && this.props.params.personId) {
      let personId = this.props.params.personId;
      console.log(personId);
      url = `http://swapi.co/api/people/${personId}/`;
    }

    //http://api.jquery.com/jQuery.ajax/

    $.ajax({
      url: url + '?format=json',
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


    let resident = this.state.data;

    return (
      <div>
        <h4>{resident.name}</h4>
      </div>
    );
  }
}



export default Resident;
