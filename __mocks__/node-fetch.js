const fetch = jest.createMockFromModule('node-fetch');

let resultBody = '';
function setResultBody(body) {
  resultBody = body;
}

let myFetch = function (url, opts) {
  return {
    text: function () {
      return resultBody;
    },
  };
};
myFetch.__setResultBody = setResultBody;

module.exports = myFetch;
