import { likes } from '../../src/codewars/likes';

describe('Codewars', () => {
  it('likes', () => {
    expect(likes([])).toStrictEqual('no one likes this');
    expect(likes(['Peter'])).toStrictEqual('Peter likes this');
    expect(likes(['Jacob', 'Alex'])).toStrictEqual('Jacob and Alex like this');
    expect(likes(['Max', 'John', 'Mark'])).toStrictEqual('Max, John and Mark like this');
    expect(likes(['Alex', 'Jacob', 'Mark', 'Max'])).toStrictEqual('Alex, Jacob and 2 others like this');
  });
});
