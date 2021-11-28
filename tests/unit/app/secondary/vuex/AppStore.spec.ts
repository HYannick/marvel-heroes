import AppStore from '@/app/secondary/vuex/AppStore';
import { createHero } from '@unit/hero/fixtures/hero.fixtures';
import { StoreHelper } from '@unit/store/mockedStore';

const store = StoreHelper.generateStore();
const appStore = new AppStore(store);

describe('AppStore', () => {
  it('should have no current details by default', () => {
    expect(appStore.currentHeroDetails).toBeNull();
  });

  it('should get current details', async () => {
    await appStore.setCurrentHeroDetails(createHero().properties);
    expect(appStore.currentHeroDetails).toEqual(createHero().properties);
  });

  it('should reset current details', async () => {
    await appStore.resetCurrentHeroDetails();
    expect(appStore.currentHeroDetails).toBeNull();
  });
});
