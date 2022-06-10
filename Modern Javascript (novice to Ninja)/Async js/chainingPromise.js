const getData=() => {
  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();

    request.addEventListener("readystatechange", () => {
      // console.log(request,request.readyState);
      if (request.readyState === 4 && request.status === 200) {
        const data = JSON.parse(request.responseText);
        resolve(data);
      } else if (request.readyState === 4) {
        reject("rejected");
      }
    });

    request.open("GET", "https://jsonplaceholder.typicode.com/todos/");

    request.send();
  });
};

getData().then(data => {
    console.log('first',data);
    return getData()
}).then(data => {
    console.log('second', data);
    return getData()
}).then(data => {
    console.log('third',data);
}).catch(err => {
    console.log(err);
})