import { useState } from "react";

export default function useFetch(baseUrl) {
  const [loading, setLoading] = useState(true);

  function get(url) {
    return new Promise((resolve, reject) => {
      fetch(baseUrl + url, {
        headers: {
          "x-api-key":
            "live_p6VBIZ4snMuIyiDLx5hGJQrT24kVASi64pDHG8EBd2hdNe2cnaHDsgzGSBvsE3W9",
        },
      })
        .then((response) => response.json())
        .then((data) => {
          if (!data) {
            setLoading(false);
            return reject(data);
          }
          setLoading(false);
          resolve(data);
        })
        .catch((error) => {
          setLoading(false);
          reject(error);
        });
    });
  }

  return { get, loading };
}
