import { atom, selector, useRecoilState } from 'recoil';

type T_testRecoilSaveStore = {
    name: string;
    age: number;
};

const testRecoilSaveStore = atom<T_testRecoilSaveStore>({
    key: 'testRecoilSaveStore',
    default: {
        name: 'default',
        age: 0,
    },
});

// const testRecoilUpdateNameSelector = selector<string>({
//     key: 'testRecoilUpdateNameSelector',
//     get: ({ get }) => {
//         return get(testRecoilSaveStore).name;
//     },
//     set: ({ get, set }, newValue) => {
//         const currentData = get(testRecoilSaveStore);
//         set(testRecoilSaveStore, { ...currentData, name: newValue } as T_testRecoilSaveStore);
//     },
// });

// const testRecoilUpdateAgeSelector = selector<number>({
//     key: 'testRecoilUpdateAgeSelector',
//     get: ({ get }) => {
//         return get(testRecoilSaveStore).age;
//     },
//     set: ({ get, set }, newValue) => {
//         const currentData = get(testRecoilSaveStore);
//         set(testRecoilSaveStore, { ...currentData, age: newValue } as T_testRecoilSaveStore);
//     },
// });

const testRecoilUpdateNameSelector = selector<string>({
    key: 'testRecoilUpdateNameSelector',
    get: ({ get }) => {
        return get(testRecoilSaveStore).name;
    },
    set: ({ set }, newValue) => {
        set(testRecoilSaveStore, (prev) => ({ ...prev, name: newValue } as T_testRecoilSaveStore));
    },
});

const testRecoilUpdateAgeSelector = selector<number>({
    key: 'testRecoilUpdateAgeSelector',
    get: ({ get }) => {
        return get(testRecoilSaveStore).age;
    },
    set: ({ set }, newValue) => {
        set(testRecoilSaveStore, (prev) => ({ ...prev, age: newValue } as T_testRecoilSaveStore));
    },
});

export function useSaveManager() {
    const [state, setState] = useRecoilState(testRecoilSaveStore);

    const updateName = (name: string) => {
        setState({ ...state, name });
    };
    const updateAge = (age: number) => {
        setState({ ...state, age });
    };

    return { updateName, updateAge };
}

export { testRecoilSaveStore, testRecoilUpdateNameSelector, testRecoilUpdateAgeSelector };
