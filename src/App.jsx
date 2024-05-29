import React, { useState, useEffect } from "react";
import { useFetch } from "./hooks/useFetch";

// TODO: useFetch 라는 커스텀훅을 사용해서 리팩터링 해보세요

const App = () => {
  const { title, error, loading } = useFetch();
  // console.log(loading);

  return (
    <div>
      <h1>Data Fetching Example</h1>
      <p>
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>Error: {error.message}</p>
        ) : (
          <p>{title}</p>
        )}
      </p>
    </div>
  );
};

export default App;
