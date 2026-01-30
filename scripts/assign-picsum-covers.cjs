/**
 * Replaces all external article cover URLs (Unsplash, etc.) with unique
 * Picsum Photos URLs (seed = article id). Keeps local /images/... URLs as-is.
 */

const fs = require('fs');
const path = require('path');

const articlesPath = path.join(process.cwd(), 'app/data/articles.ts');
let s = fs.readFileSync(articlesPath, 'utf8');

const idRegex = /id:\s*(\d+)/g;
const imageRegex = /imageUrl:\s*"([^"]+)"/g;

const ids = [];
let m;
while ((m = idRegex.exec(s)) !== null) {
  ids.push({ id: parseInt(m[1], 10), pos: m.index });
}

const images = [];
while ((m = imageRegex.exec(s)) !== null) {
  images.push({
    url: m[1],
    start: m.index,
    end: m.index + m[0].length,
  });
}

const pairs = [];
for (const im of images) {
  const prev = ids.filter((x) => x.pos < im.start).pop();
  if (prev) pairs.push({ id: prev.id, ...im });
}

const toReplace = pairs.filter((p) => !p.url.startsWith('/images/'));
console.log('Replacing', toReplace.length, 'external imageUrl(s) with Picsum seed=id. Keeping', pairs.length - toReplace.length, 'local.');

toReplace.sort((a, b) => b.start - a.start);
for (const p of toReplace) {
  const newUrl = `https://picsum.photos/seed/${p.id}/800/600`;
  s = s.slice(0, p.start) + `imageUrl: "${newUrl}"` + s.slice(p.end);
}

fs.writeFileSync(articlesPath, s, 'utf8');
console.log('Done. articles.ts updated.');
