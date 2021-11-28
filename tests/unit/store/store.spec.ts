import { Store } from 'vuex';
import { store } from '@/store';

describe('Vuex Store', () => {
  it('should init store', () => {
    expect(store).toBeInstanceOf(Store);
  });
});
