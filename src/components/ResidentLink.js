import React from 'react';



class ResidentLink extends React.Component {

  personId() {
    let url = this.props.url;
    let detailsurl = url.split("/");
    detailsurl.pop();
    return detailsurl.pop();
  }



  render() {

    return (
      <div>
        <a
          href={`/person/${this.personId()}`}
          url={this.props.url}>details</a>
        <br />
      </div>
    );
  }
}



export default ResidentLink;
