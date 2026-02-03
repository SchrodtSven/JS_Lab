async function getData() {
  const url = "http://localhost:8080/lidl.json";
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const result = await response.json();
    console.table(result);
  } catch (error) {
    console.error(error.message);
  }
}