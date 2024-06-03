import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'

type StringLiteral<T> = T extends string ? string extends T ? never : T : never;

function useStoreWithSetOfProductIdsAddedTo<
  const TStoreIntention extends string,
>(storeIntention: StringLiteral<TStoreIntention>) {
  const privateSymbol = `__productIdsIn${storeIntention}` as const;

  const isProductInSetMethodKey = `isProductIdIn${storeIntention}` as const;

  const addProductToSetMethodKey = `addProductIdTo${storeIntention}` as const;
  const removeProductFromSetMethodKey = `removeProductIdFrom${storeIntention}` as const;
  const doOppositeStateOfProductIdInSetMethodKey = `doOppositeStateOfProductIdIn${storeIntention}` as const;

  type TOnlyDataStore = {
    [k in typeof privateSymbol]: Set<number>
  };

  type TOnlyGetMethods = {
    [k in typeof isProductInSetMethodKey]: (productId: number) => boolean
  };
  type TOnlySetMethods = {
    [k in
      | typeof addProductToSetMethodKey
      | typeof removeProductFromSetMethodKey
      | typeof doOppositeStateOfProductIdInSetMethodKey
    ]: (productId: number) => void
  };
  type TCombinedStore = TOnlyDataStore & TOnlyGetMethods & TOnlySetMethods;


  return create(persist<TCombinedStore>(
    (set, get) => ({
      [privateSymbol]: new Set<number>([]),

      [isProductInSetMethodKey]: (productId) => {
        return (get() as TOnlyDataStore)[privateSymbol].has(productId);
      },

      [addProductToSetMethodKey]: (productId) => {
        (get() as TOnlyDataStore)[privateSymbol].add(productId);
        set({ ...get() });
      },
      [removeProductFromSetMethodKey]: (productId) => {
        (get() as TOnlyDataStore)[privateSymbol].delete(productId);
        set({ ...get() });
      },
      [doOppositeStateOfProductIdInSetMethodKey]: (productId) => {
        const targetSet = (get() as TOnlyDataStore)[privateSymbol];

        if(targetSet.has(productId))
          targetSet.delete(productId)
        else
          targetSet.add(productId);

        set({ ...get() });
      },
    }) as TCombinedStore,
    {
      name: `productIdsIn${storeIntention}Storage`, // unique name
      storage: createJSONStorage(() => localStorage, {
        reviver: (key, value) => {
          if (value
            && typeof value === 'object'
            && value !== null
            && '__type' in value
            && value?.__type === 'set'
            && '__value' in value
            && Array.isArray(value.__value)
          ) {
            return new Set(value.__value)
          }
          return value
        },
        replacer: (key, value) => {
          if (value instanceof Set) {
            return { __type: 'set', __value: [...(value as any).values()] }
          }
          return value
        },
      }),
    }
  ))
}

// eslint-disable-next-line react-hooks/rules-of-hooks
export const useStoreWithSetOfProductIdsAddedToFavorites = useStoreWithSetOfProductIdsAddedTo('Favorites');

// eslint-disable-next-line react-hooks/rules-of-hooks
export const useStoreWithSetOfProductIdsAddedToCart = useStoreWithSetOfProductIdsAddedTo('Cart');
