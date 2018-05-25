function Ranking(selector) {
  Component.call(this, selector);
  this.numbers = [];
  this.currentRanking = [];
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
    .then(() => self.render(this.numbers))
    .catch(function(error) {
      console.error(error);
    });
};


Ranking.prototype.rankingUpdate = function (randomNumbersInstance) {
  // TODO
}

Ranking.prototype.render = function(arr) {
  const container = this.getDOMElement();

  arr.forEach(number => {
      const listElement = document.createElement('li');
      listElement.classList.add('list-group-item');
      listElement.innerHTML = number.id;
      container.appendChild(listElement);
  });
};
