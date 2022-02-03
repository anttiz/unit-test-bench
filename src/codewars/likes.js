/* eslint-disable import/prefer-default-export */
// https://www.codewars.com/kata/5266876b8f4bf2da9b000362/train/javascript
export function likes(names) {
  switch (names.length) {
    case 0: return 'no one likes this';
    case 1: return `${names[0]} likes this`;
    case 2: {
      const [first, second] = names;
      return `${first} and ${second} like this`;
    }
    case 3: {
      const [first, second, third] = names;
      return `${first}, ${second} and ${third} like this`;
    }
    default: {
      const [first, second, ...rest] = names;
      return `${first}, ${second} and ${rest.length} others like this`;
    }
  }
}
