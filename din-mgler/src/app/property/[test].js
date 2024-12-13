"use client";

import {useState} from "react";

import {Link} from "next/link";

export default function Home() {
  const [data, setData] = useState(null); // Initialize as null to handle cases where data is not yet fetched

  const fetchData = async () => {
    try {
      const response = await fetch("/API/MinMgler");

      const result = await response.json();
      console.log(result);
      setData(result); // Set the whole result (including data.message.albums.items)
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div className="p-4">
      <button className="btn mb-4" onClick={fetchData}>
        Fetch Data
      </button>

      <div className="flex flex-wrap gap-4">
        {/* If data exists and is structured correctly, map over the albums */}
        {data ? (
          data.map((property, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-4 shadow-md rounded-lg w-64"
            >
              <Link href={`/property/${property.id}`}>Test</Link>

              <Link href={`/property/${property.id}`}>
                <img
                  src={
                    property.images && property.images[0]
                      ? property.images[0].url
                      : ""
                  }
                  alt={property.images[0].name}
                  className="w-40 h-40 object-cover rounded-lg mb-4"
                />
              </Link>
              <div className="text-center font-semibold">{property.type}</div>
            </div>
          ))
        ) : (
          <p>No properties found or data is not available.</p>
        )}
      </div>

      {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
    </div>
  );
}
