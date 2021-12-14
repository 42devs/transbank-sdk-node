export function makeId(len: number): string {
  const character = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const l = character.length;
  let result = '';
  for (let i = 0; i < len; i += 1) {
    result += character.charAt(Math.floor(Math.random() * l));
  }
  return result;
}
