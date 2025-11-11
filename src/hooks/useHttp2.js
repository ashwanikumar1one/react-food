import { useCallback, useEffect, useState } from "react";

export default function useHttp2() {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(null);

  const sendRequest = useCallback(async (url, options = {}) => {
    const method = (options.method ?? "GET").toLowerCase();
    const fetchOptions = method != "get" ? { ...options } : {};

    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(url, fetchOptions);
      const responseData = await response.json();

      if (!response.ok) {
        throw new Error(responseData?.message || "Error in loading ");
      }

      setData(responseData);
    } catch (error) {
      setError(error.message || "Something went wrong!");
      console.log("Error", error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  function resetData() {
    setData(null);
    setError(null);
    setIsLoading(false);
  }

  return {
    error,
    isLoading,
    data,
    sendRequest,
    resetData,
  };
}
