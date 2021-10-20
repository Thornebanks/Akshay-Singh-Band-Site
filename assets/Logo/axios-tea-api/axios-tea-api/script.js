/*
 * JavaScript Axios & Web APIs
 */

const teaListElem = document.getElementById('tea-list');
console.log(teaListElem);

axios
  .get(`https://tea-api-vic-lo.herokuapp.com/tea`)
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });
