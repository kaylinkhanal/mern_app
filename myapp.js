//this is javascript file

let response = new Promise((resolve, reject) => {
  if (2 === 1 + 1) {
    resolve(resolved);
  } else {
    reject(rejected);
  }
});

response.then((msg) => console.log(msg)).catch((err) => console.log(err));
