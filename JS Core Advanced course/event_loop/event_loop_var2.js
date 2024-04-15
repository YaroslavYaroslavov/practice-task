const fetchDataWithTimeout = async (url, timeout) => {
  const controller = new AbortController();
  const signal = controller.signal;

  const timeoutId = setTimeout(() => {
    controller.abort();
  }, timeout);

  try {
    const response = await fetch(url, { signal });
    clearTimeout(timeoutId);
    if (!response.ok) {
      throw new Error(`Ошибка при получении данных: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    if (error.name === "AbortError") {
      console.error("Запрос был отменен из-за превышения времени ожидания.");
    } else {
      console.error("Произошла ошибка при получении данных:", error.message);
    }
  }
};
