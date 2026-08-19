const games = ["Fortnite", "Warzone", "Peak", "BrawlStars", "Valorant"];

console.log('Initial array:', games);
console.log('Length:', games.length);
console.log('Index of "Peak":', games.indexOf('Peak'));

const copied = games.slice();
copied.push('Apex Legends');
console.log('After push:', copied.join(', '));

const popped = copied.slice();
popped.pop();
console.log('After pop (removed last):', popped.join(', '));

const mapped = games.map((title) => title.toUpperCase());
console.log('Mapped to uppercase:', mapped);

const filtered = games.filter((title) => title.length <= 6);
console.log('Filtered (length <= 6):', filtered);

const found = games.find((title) => title.startsWith('V'));
console.log('Find first starting with V:', found);

const hasValorant = games.includes('Valorant');
console.log('Includes Valorant?:', hasValorant);

const sorted = games.slice().sort();
console.log('Sorted copy:', sorted);

const joined = games.join(' | ');
console.log('Joined string:', joined);

const numbers = [3, 7, 2, 9, 4];
const sum = numbers.reduce((accumulator, n) => accumulator + n, 0);
console.log('Numbers:', numbers, 'Sum:', sum);

const matrix = [
	[1, 2, 3],
	[4, 5, 6],
	[7, 8, 9]
];
console.log('Matrix[1][2]:', matrix[1][2]);

const longest = games.reduce((best, cur) => (cur.length > best.length ? cur : best), '');
console.log('Longest game name:', longest);

games.forEach((g, i) => console.log(`Game ${i + 1}:`, g));

console.log('--- End of array exercise ---');