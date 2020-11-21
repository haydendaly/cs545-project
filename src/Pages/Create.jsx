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
      <form onSubmit={handleSubmit}>
        <div>
        <label>
          Business Name:
          <input type="text" value={name} onChange={e => setName(e.target.value)} />
        </label>
        </div>
        <label>
          Location:
          <input type="text" value={location} onChange={e => setLocation(e.target.value)} />
        </label>
        <label>
          Indoor Dining:
          <input type="checkbox" value={indoor} onChange={e => setIndoor(e.target.value)} />
        </label>
        <label>
          Outdoor Dining:
          <input type="checkbox" value={outdoor} onChange={e => setOutdoor(e.target.value)} />
        </label>
        <label>
          Delivery:
          <input type="checkbox" value={delivery} onChange={e => setDelivery(e.target.value)} />
        </label>
        <label>
          Temperature Checks:
          <input type="checkbox" value={temp} onChange={e => setTemp(e.target.value)} />
        </label>
        <label>
          Capacity:
          <input type="number" value={capacity} onChange={e => setCapacity(e.target.value)} />
        </label>
        <label>
          Description:
          <textarea value={description} onChange={e => setDescription(e.target.value)} />
        </label>
        <label>
          Photo:
          <input type="file" value={file} onChange={e => setFile(e.target.value)} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
}

export default Component;
