class RandomNumbers extends Ranking {
  constructor (selector) {
    super(selector);
    this.randomNumbers = [];
  }

  init() {
    return axios.get('http://localhost:3000/random-numbers')
      .then(response => {
        this.randomNumbers = response.data.data.map(number => {
          return {
            id: number
          };
        });
      })
      .then(() => this.render(this.randomNumbers))
      .catch(error => {
        console.error(error);
      });
  };
};
