let resultBody = '';
function setResultBody(body) {
  resultBody = body;
}

let myFetch = function (/* url */ _, /* options */ __) {
  return {
    text: function () {
      return resultBody;
    },
  };
};

myFetch.__setResultBody = setResultBody;

module.exports = myFetch;
