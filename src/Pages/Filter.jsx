import React, { useContext } from "react";

import { DataContext } from "../functions/provider";

const Component = () => {
  const { filters, setFilters } = useContext(DataContext);

  return (
    <div
      style={{
        width: 300,
        backgroundColor: "#CCDDEA",
        marginLeft: 30,
        borderRadius: 20,
        padding: 20,
        position: "fixed"
      }}
    >
      <h2>Filters</h2>
      <p style={{ color: "#444", fontSize: 12 }}>Filter by dining options</p>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <input
          type="checkbox"
          style={{ height: 20, width: 20, borderRadius: 5 }}
          checked={filters.open}
          onChange={() => setFilters({...filters, open: !filters.open })}
        />
        <p style={{marginLeft: 10 }}>Open</p>
      </div>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <input
          type="checkbox"
          style={{ height: 20, width: 20, borderRadius: 5 }}
          checked={filters.indoor}
          onChange={() => setFilters({...filters, indoor: !filters.indoor })}
        />
        <p style={{marginLeft: 10 }}>Indoor Dining</p>
      </div>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <input
          type="checkbox"
          style={{ height: 20, width: 20, borderRadius: 5 }}
          checked={filters.outdoor}
          onChange={() => setFilters({...filters, outdoor: !filters.outdoor })}
        />
        <p style={{marginLeft: 10 }}>Outdoor Dining</p>
      </div>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <input
          type="checkbox"
          style={{ height: 20, width: 20, borderRadius: 5 }}
          checked={filters.delivery}
          onChange={() => setFilters({...filters, delivery: !filters.delivery })}
        />
        <p style={{marginLeft: 10 }}>Delivery</p>
      </div>
      <p style={{ color: "#444", fontSize: 12 }}>Filter by distance</p>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <input
          type="checkbox"
          style={{ height: 20, width: 20, borderRadius: 5 }}
          checked={filters.distance >= 1}
          onChange={() => setFilters({...filters, distance: 1 })}
        />
        <p style={{marginLeft: 10 }}>Within 1 Mile</p>
      </div>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <input
          type="checkbox"
          style={{ height: 20, width: 20, borderRadius: 5 }}
          checked={filters.distance >= 2}
          onChange={() => setFilters({...filters, distance: 2 })}
        />
        <p style={{marginLeft: 10 }}>Within 2 Miles</p>
      </div>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <input
          type="checkbox"
          style={{ height: 20, width: 20, borderRadius: 5 }}
          checked={filters.distance >= 5}
          onChange={() => setFilters({...filters, distance: 5 })}
        />
        <p style={{marginLeft: 10 }}>Within 5 Miles</p>
      </div>
    </div>
  );
};

export default Component;
