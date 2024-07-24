export default function (success) {
  return new Promise((resolve, reject) => {
    if (typeof success === 'boolean') {
      if (success) {
        resolve({
          status: 200,
          body: 'Success',
        });
      } else {
        reject(new Error('The fake API is not working currently'));
      }
    } else {
      reject(new Error('The fake API is not working currently'));
    }
  });
}
