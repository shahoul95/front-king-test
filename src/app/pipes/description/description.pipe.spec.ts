import { DescriptionPipe } from './description.pipe';

describe('DescriptionKingPipe', () => {
  it('create an instance', () => {
    const pipe = new DescriptionPipe();
    expect(pipe).toBeTruthy();
  });
});
