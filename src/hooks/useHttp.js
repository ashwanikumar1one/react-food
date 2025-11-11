// import { useEffect, useState, useCallback } from "react";

// export default function useHttp(url, config = {}) {
//   const [error, setError] = useState(null);
//   const [isLoading, setIsLoading] = useState(false);
//   const [data, setData] = useState([]);

//   const sendRequest = useCallback(
//     async function sendRequest(data) {
//       setIsLoading(true);

//       const fetchOptions = { ...config };
//       if (fetchOptions.method != "GET" && data != undefined) {
//         fetchOptions.body = data;
//       }

//       try {
//         const response = await fetch(url, fetchOptions);
//         const responseData = await response.json();

//         if (!response.ok) {
//           throw new Error(responseData?.message || "Error in loading ");
//         }

//         setData(responseData);
//       } catch (error) {
//         setError(error.message || "Something went wrong!");
//         console.log("Error", error);
//       }

//       setIsLoading(false);
//     },
//     [url, JSON.stringify(config)]
//   );

//   useEffect(() => {
//     if (config && (config.method === "GET" || !config.method || !config)) {
//       sendRequest();
//     }
//   }, [sendRequest]);

//   return {
//     error,
//     isLoading,
//     data,
//     sendRequest,
//   };
// }
