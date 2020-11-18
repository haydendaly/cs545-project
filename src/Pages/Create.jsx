import React from "react";

const Component = () => {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      name: '',
      location: '',
      indoor: false,
      outdoor: false,
      delivery: false,
      temp: false,
      capacity: 0,
      description: '',
      file:''
    };

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleLocationChange = this.handleLocationChange.bind(this);
    this.handleIndoorChange = this.handleIndoorChange.bind(this);
    this.handleOutdoorChange = this.handleOutdoorChange.bind(this);
    this.handleDeliveryChange = this.handleDeliveryChange.bind(this);
    this.handleTempChange = this.handleTempChange.bind(this);
    this.handleCapacityChange = this.handleCapacityChange.bind(this);
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
    this.handleFileChange = this.handleFileChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  };

  handleNameChange(event) {
    this.setState({name: event.target.value});
  }
  handleLocationChange(event) {
    this.setState({location: event.target.value});
  }
  handleIndoorChange(event) {
    this.setState({indoor: event.target.value});
  }
  handleOutdoorChange(event) {
    this.setState({outdoor: event.target.value});
  }
  handleDeliveryChange(event) {
    this.setState({delivery: event.target.value});
  }
  handleTempChange(event) {
    this.setState({temp: event.target.value});
  }
  handleCapacityChange(event) {
    this.setState({capacity: event.target.value});
  }
  handleDescriptionChange(event) {
    this.setState({description: event.target.value});
  }
  handleFileChange(event) {
    this.setState({file: event.target.value});
  }

  handleSubmit(event) {
    //To test submit and fields
    alert(this.state.name + " " + this.state.indoor + " " + this.state.description);
    event.preventDefault();
  }

  render() {
    //const { name, location, indoor, outdoor, delivery, temp, capacity, description, file } = this.state;
    return (
      /*
      <div>
      <p>Create!</p>
      </div>
      */
      <form onSubmit={this.handleSubmit}>
        <div>
        <label>
          Business Name:
          <input type="text" value={this.state.name} onChange={this.handleNameChange} />
        </label>
        </div>
        <label>
          Location:
          <input type="text" value={this.state.location} onChange={this.handleLocationChange} />
        </label>
        <label>
          Indoor Dining:
          <input type="checkbox" value={this.state.indoor} onChange={this.handleIndoorChange} />
        </label>
        <label>
          Outdoor Dining:
          <input type="checkbox" value={this.state.outdoor} onChange={this.handleOutdoorChange} />
        </label>
        <label>
          Delivery:
          <input type="checkbox" value={this.state.delivery} onChange={this.handleDeliveryChange} />
        </label>
        <label>
          Temperature Checks:
          <input type="checkbox" value={this.state.temp} onChange={this.handleTempChange} />
        </label>
        <label>
          Capacity:
          <input type="number" value={this.state.capacity} onChange={this.handleCCapacityhange} />
        </label>
        <label>
          Description:
          <textarea value={this.state.description} onChange={this.handleDescriptionChange} />
        </label>
        <label>
          Photo:
          <input type="file" value={this.state.file} onChange={this.handleFileChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default Component;
