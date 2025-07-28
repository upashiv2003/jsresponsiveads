// 1️⃣  Names whose types include the string "grass"
const answer1 = pokes
  .filter(p => p.types.includes(type))
  .map(p => p.name);

// 2️⃣  Names that have AT LEAST ONE of the requested types
const answer2Or = pokes
  .filter(p => types.some(t => p.types.includes(t)))
  .map(p => p.name);

// 3️⃣  Names that have ALL of the requested types
const answer2And = pokes
  .filter(p => types.every(t => p.types.includes(t)))
  .map(p => p.name);
