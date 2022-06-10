const getTodos = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos/");
    const data = await response.json();
    const response1 = await fetch("https://jsonplaceholder.typicode.com/todos/");
    const data1 = await response1.json();
    const response2 = await fetch("https://jsonplaceholder.typicode.com/todos/");
    const data2 = await response2.json();
    return [ data, data1, data2 ]
};

getTodos().then(data => {
    console.log(data);
    [d1,d2,d3]=data
    console.log(d1);
    console.log(d2);
    console.log(d3);
})