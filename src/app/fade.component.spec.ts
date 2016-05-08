import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { FadeAppComponent } from '../app/fade.component';

beforeEachProviders(() => [FadeAppComponent]);

describe('App: Fade', () => {
  it('should create the app',
      inject([FadeAppComponent], (app: FadeAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'fade works!\'',
      inject([FadeAppComponent], (app: FadeAppComponent) => {
    expect(app.title).toEqual('fade works!');
  }));
});
