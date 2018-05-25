function RandomNumbers(selector) {
  Component.call(this, selector);
  this.randomNumbers = [];
};

RandomNumbers.prototype = Object.create(Component.prototype);
RandomNumbers.constructor = RandomNumbers;

RandomNumbers.prototype.init = function () {
  const self = this;
  return axios.get('http://localhost:3000/random-numbers')
    .then(response => {
      self.randomNumbers = response.data.data.map(function (number) {
        return {
          id: number
        };
      });
    })
    .then(() => self.render())
    .catch(error => console.error(error)
  );
};

RandomNumbers.prototype.render = function () {
  const container = this.getDOMElement();
  if (container.hasChildNodes()) {
    while (container.firstChild) {
      container.removeChild(container.firstChild);
    };
  };
  
  this.randomNumbers.forEach(number => {
    const listElement = document.createElement('li');
    listElement.classList.add('list-group-item');
    listElement.innerHTML = number.id;
    container.appendChild(listElement);
  });  
};
