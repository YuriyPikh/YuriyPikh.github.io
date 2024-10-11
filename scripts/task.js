let votes = JSON.parse(localStorage.getItem('votes')) || {
  Spring: 0,
  Summer: 0,
  Autumn: 0,
  Winter: 0
};
let totalVotes = JSON.parse(localStorage.getItem('totalVotes')) || 0;

function submitSurvey() {
  let selectedSeason = document.querySelector('input[name="season"]:checked');

  if (!selectedSeason) {
      alert('Будь ласка, виберіть варіант!');
      return;
  }
  votes[selectedSeason.value]++;
  totalVotes++;

  localStorage.setItem('votes', JSON.stringify(votes));
  localStorage.setItem('totalVotes', JSON.stringify(totalVotes));

  updateResults();
}

function updateResults() {
  document.getElementById('results').style.display = 'block';

  let springPercentage = (votes.Spring / totalVotes) * 100;
  let summerPercentage = (votes.Summer / totalVotes) * 100;
  let autumnPercentage = (votes.Autumn / totalVotes) * 100;
  let winterPercentage = (votes.Winter / totalVotes) * 100;

  document.getElementById('springVotes').textContent = springPercentage.toFixed(2);
  document.getElementById('springBar').style.width = springPercentage + '%';

  document.getElementById('summerVotes').textContent = summerPercentage.toFixed(2);
  document.getElementById('summerBar').style.width = summerPercentage + '%';

  document.getElementById('autumnVotes').textContent = autumnPercentage.toFixed(2);
  document.getElementById('autumnBar').style.width = autumnPercentage + '%';

  document.getElementById('winterVotes').textContent = winterPercentage.toFixed(2);
  document.getElementById('winterBar').style.width = winterPercentage + '%';
}

// Показуємо результати при завантаженні сторінки
window.onload = updateResults;
