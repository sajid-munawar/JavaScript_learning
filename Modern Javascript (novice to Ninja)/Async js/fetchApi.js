fetch("https://jsonplaceholder.typicode.com/todos/").then((response) => {
    return response.json()
}).then(data => {
    console.log('1sss',data);
    fetch("https://jsonplaceholder.typicode.com/todos/")
      .then((response1) => {
        return response1.json();
      })
      .then((data1) => {
          console.log('2sss', data1);
          fetch("https://jsonplaceholder.typicode.com/todos/").then(response2 => {
              return response2.json()
          }).then(data2=>{
            console.log('3ssss',data2);
          })
      });
}).catch(err => {
    console.log(err);
});