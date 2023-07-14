import { useState, useEffect } from "react";

const useFetch = (url, initialData) => {
      const [data, setData] = useState(initialData);
      useEffect(() => {
          fetch(url)
          .then((res) => res.json())
          .then((data) => setData(data))
          .catch((err) => console.log(err));
      }, [url]);
      return {data};
};
export default useFetch;