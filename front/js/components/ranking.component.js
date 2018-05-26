class Ranking extends Component {
  constructor (selector) {
    super(selector);
    this.numbers = [];
  }
  
  async init() {
    try {
      const numbers = await axios.get('http://localhost:3000/numbers')
        .then(response => response.data.data.map(number => ({
          id: number,
          count: 0
        })));
      this.numbers = numbers;
      this.render(numbers);
    } catch (error) {
      console.error(error);
    };
  };

  updateCount(number) {
    for (let i in this.numbers) {
      if (this.numbers[i].id === number.id) {
        this.numbers[i] = { id: this.numbers[i].id, count: this.numbers[i].count + 1}
      };
    };
  };
  
  rankingUpdate(randomNumbersInstances) {
    randomNumbersInstances.forEach(instance => this.updateCount(instance));
    console.log(this.numbers, randomNumbersInstances);
    const displayOrder = this.numbers
    let swap = {};
    for (let i = 1; i < displayOrder.length; i++) {
      let j = i;
      while (j > 0 && displayOrder[j - 1].count > displayOrder[j].count ) {
        swap = displayOrder[j];
        displayOrder[j] = displayOrder[j - 1];
        displayOrder[j - 1] = swap;
        j--;
      };
    };
    this.render(displayOrder.reverse());
  };
  
  render(arr) {
    const container = this.getDOMElement();
    if (container.hasChildNodes()) {
      while (container.firstChild) {
        container.removeChild(container.firstChild);
      };
    };
  
    arr.forEach(number => {
        const listElement = document.createElement('li');
        listElement.classList.add('list-group-item');
        listElement.innerHTML = number.id;
        container.appendChild(listElement);
    });
  };
};
