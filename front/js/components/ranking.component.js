function Ranking(selector) {
  Component.call(this, selector);
  this.numbers = [];
};

Ranking.prototype = Object.create(Component.prototype);
Ranking.constructor = Ranking;

Ranking.prototype.init = function() {
  const self = this;

  axios.get('http://localhost:3000/numbers')
    .then(response => {
      self.numbers = response.data.data.map(function(number) {
        return {
          id: number,
          [number]: 0
        };
      });
    })
    .then(() => self.render())
    .catch(function(error) {
      console.error(error);
    });
};


Ranking.prototype.rankingUpdate = function (randomNumbersInstance) {
  // TODO
}

Ranking.prototype.render = function() {
  const container = this.getDOMElement();

  this.numbers.forEach(number => {
      const listElement = document.createElement('li');
      listElement.classList.add('list-group-item');
      listElement.innerHTML = number.id;
      container.appendChild(listElement);
  });
};
