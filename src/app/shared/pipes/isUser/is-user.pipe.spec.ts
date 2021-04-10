import { IsUserPipe } from './is-user.pipe';

describe('IsUserPipe', () => {
  it('create an instance', () => {
    const pipe = new IsUserPipe();
    expect(pipe).toBeTruthy();
  });
});
