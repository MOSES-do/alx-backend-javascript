export default function (success) {
  const p = new Promise((resolve, reject) => {
    if (typeof success === 'boolean') {
      if (success) {
        resolve({
          status: 200,
          body: 'success',
        });
      } else {
        reject(new Error({}));
      }
    } else {
      reject('');
    }
  });

  p.then((value) => {
    console.log(value);
  })
    .catch((e) => {
      console.error(e);
    })
    .then(() => {
      console.log('Got a response from the API');
    });
}
