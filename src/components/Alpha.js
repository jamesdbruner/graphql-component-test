import React, { useState, useEffect } from "react";

const Alpha = () => {
  const [loading, setLoading] = useState(true);
  const [person, setPerson] = useState({});

  useEffect(() => {
    fetch("https://swapi.dev/api/people/1/")
      .then(res => res.json())
      .then(resJson => {
        setPerson(resJson);
        setLoading(false);
      });
  }, []);

  if (loading) return <h1>...Loading</h1>;

  return (
    <div>
      <h1>{person.name}</h1>
    </div>
  );
}

export default Alpha

