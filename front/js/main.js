const ranking = new Ranking('#numbers-ranking');
ranking.init();

const randomNumbers = new RandomNumbers('#current-random-numbers');
randomNumbers.init()
  .then(() => ranking.rankingUpdate(randomNumbers.randomNumbers));

const numbersUpdate = () => {
  randomNumbers.init()
    .then(ranking.rankingUpdate(randomNumbers.randomNumbers));
}

setInterval(() => numbersUpdate(), 10000);
