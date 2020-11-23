import React, { useState } from "react";

const Component = () => {
    const [name, setName] = useState('');
    const [location, setLocation] = useState('');
    const [indoor, setIndoor] = useState(false);
    const [outdoor, setOutdoor] = useState(false);
    const [delivery, setDelivery] = useState(false);
    const [temp, setTemp] = useState(false);
    const [capacity, setCapacity] = useState(0);
    const [description, setDescription] = useState('');
    const [file, setFile] = useState('');

  const handleSubmit = () => {
    alert(name + " " + indoor + " " + description);
  }

    return (
      <div style={overall}>
      <form onSubmit={handleSubmit}>
      <div style={mainForm}>
        <div>
          <label style={formTitle}>Upload Your Business</label>
        </div>
        <div>
        <label>
          Business Name:
          <input type="text" value={name} onChange={e => setName(e.target.value)} style={busName}/>
        </label>
        </div>
        <div>
        <label>
          Location:
          <input type="text" value={location} onChange={e => setLocation(e.target.value)} style={locationCenter}/>
        </label>
        </div>
        <div>
        <label>
          Indoor Dining:
          <input type="checkbox" value={indoor} onChange={e => setIndoor(e.target.value)} style={checkOne}/>
        </label>
        </div>
        <div>
        <label>
          Outdoor Dining:
          <input type="checkbox" value={outdoor} onChange={e => setOutdoor(e.target.value)} style={checkTwo}/>
        </label>
        </div>
        <div>
        <label>
          Delivery:
          <input type="checkbox" value={delivery} onChange={e => setDelivery(e.target.value)} style={checkThree}/>
        </label>
        </div>
        <div>
        <label>
          Temperature Checks:
          <input type="checkbox" value={temp} onChange={e => setTemp(e.target.value)} style={checkFour}/>
        </label>
        </div>
        <div>
        <label>
          Capacity:
          <input type="number" value={capacity} onChange={e => setCapacity(e.target.value)} style={capCenter}/>
        </label>
        </div>
        <div>
        <label>
          Description:
          <textarea value={description} onChange={e => setDescription(e.target.value)} style={descriptionCenter}/>
        </label>
        </div>
        <div>
        <label>
          Photo:
          <input type="file" value={file} onChange={e => setFile(e.target.value)} style={photoCenter}/>
        </label>
        </div>
        <input type="submit" value="Submit" style={submitDown}/>
      </div>
      </form>
      </div>
    );
}
const overall = {
  backgroundColor: "#EEEEEE",
  paddingBottom: "13em",
  paddingTop: "0.01em",
}

const formTitle = {
  marginLeft: "5.6em",
  marginBottom: "3em",
  fontSize: "20px",
  fontWeight: "bold",
  color: "#56A0FD",
}

const mainForm = {
  marginLeft: "38em",
  marginTop: "10em",
  marginRight: "31em",
  backgroundColor: "white",
  padding: "5em",
  paddingTop: "4em",
  paddingBottom: "4em",
  borderRadius: "1em",
};

const busName = {
  marginLeft: "3em",
};
const locationCenter = {
  marginLeft: "6.1em",
};

const checkOne = {
  marginLeft: "9em",
};

const checkTwo = {
  marginLeft: "8.2em",
};

const checkThree = {
  marginLeft: "11.4em",
};
const checkFour = {
  marginLeft: "5.7em",
};

const capCenter = {
  marginLeft: "6em",
};

const descriptionCenter = {
  marginLeft: "4.8em",
  marginTop: "1em",
};

const photoCenter = {
  marginLeft: "10.2em",
};

const submitDown = {
  marginTop: "2.5em",
  marginLeft: "10.5em",
  backgroundColor: "#56A0FD",
  borderColor: "white",
  color: "white",
  borderRadius: "2em",
}

export default Component;
