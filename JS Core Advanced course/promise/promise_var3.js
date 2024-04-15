const fetchMultipleApis = (apiUrls) => {
  function fetchDataFromApi(apiUrl) {
    return new Promise((resolve, reject) => {
      fetch(apiUrl)
        .then((response) => {
          if (!response.ok) {
            throw new Error(`Ошибка при получении данных из API: ${apiUrl}`);
          }
          return response.json();
        })
        .then((data) => {
          resolve(data);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  let promises = apiUrls.map((apiUrl) => fetchDataFromApi(apiUrl));
  return Promise.all(promises);
};
