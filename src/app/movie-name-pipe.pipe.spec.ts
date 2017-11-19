import { MovieNamePipePipe } from './movie-name-pipe.pipe';

describe('MovieNamePipePipe', () => {
  it('create an instance', () => {
    const pipe = new MovieNamePipePipe();
    expect(pipe).toBeTruthy();
  });
});
