export default function (success) {
  return new Promise((resolve, reject) => {
    if (success) {
      resolve({
        status: 200,
        body: 'success',
      });
    } else {
      reject(throw new Error('The fake API is not working currently'));
    }
  });
}
