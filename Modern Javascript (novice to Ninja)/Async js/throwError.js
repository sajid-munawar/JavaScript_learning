const getTodos = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todoss/");
  const data = await response.json();

  if (response.status !== 200) {
    throw new Error("data could not fetch");
  }
  return data;
};

getTodos()
  .then((data) => console.log(data))
  .catch((err) => console.log("Error is", err.message));
