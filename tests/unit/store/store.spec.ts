import { Store } from "vuex";
import { StoreHelper } from "@unit/store/mockedStore";
import { store } from "@/store";

describe("Vuex Store", () => {
  it("should init store", () => {
    expect(store).toBeInstanceOf(Store);
  });

  // it("should reset the entire store", async () => {
  //   const store = StoreHelper.generateStoreOutOfVueContext();
  //   await store.dispatch(CardVuexActions.SET_CARDS, [CARD_ONE, CARD_ONE]);
  //   await store.dispatch(BillingVuexActions.SET_PLANS, MOCKED_PLANS);
  //   await store.dispatch(
  //     CollaboratorVuexActions.SET_COLLABORATORS,
  //     MOCKED_COLLABORATORS
  //   );
  //   await store.dispatch(MandateAuthorizationVuexActions.SET_MANDATES, [
  //     MANDATE_ONE,
  //     MANDATE_TWO,
  //   ]);
  //   await store.dispatch("RESET_DATA");
  //   expect(
  //     store.getters[BillingVuexGetters.GET_PLANS_SORTED_BY_PRICE]()
  //   ).toBeNull();
  //   expect(
  //     store.getters[CollaboratorVuexGetters.GET_COLLABORATORS]()
  //   ).toBeNull();
  //   expect(
  //     store.getters[MandateAuthorizationVuexGetters.GET_MANDATES]()
  //   ).toBeNull();
  //   expect(store.getters[CardVuexGetters.GET_CARDS]()).toBeNull();
  // });
});
