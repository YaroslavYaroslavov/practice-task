const fetchUrlsContent = (urls) => {
  function fetchUrl(url) {
    return new Promise((resolve, reject) => {
      fetch(url)
        .then((response) => {
          if (!response.ok) {
            throw new Error(`Ошибка загрузки URL: ${url}`);
          }
          return response.text();
        })
        .then((content) => {
          resolve({ url: url, content: content });
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  let promises = urls.map((url) => fetchUrl(url));
  return Promise.all(promises);
};
