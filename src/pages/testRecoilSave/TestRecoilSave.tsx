import { useRecoilValue, useSetRecoilState } from 'recoil';
import {
    testRecoilSaveStore,
    testRecoilUpdateAgeSelector,
    testRecoilUpdateNameSelector,
    useSaveManager,
} from '../../store/testRecoilSaveStore';

const TestRecoilSave = () => {
    const testRecoilSaveState = useRecoilValue(testRecoilSaveStore);
    const setRecoilValue_updateName = useSetRecoilState(testRecoilUpdateNameSelector);
    const setRecoilValue_updateAge = useSetRecoilState(testRecoilUpdateAgeSelector);

    const clickChangeName = () => {
        setRecoilValue_updateName('아무개로 변경');
    };
    const clickChangeAge = () => {
        setRecoilValue_updateAge(100);
    };
    const clickChangeNameAge = () => {
        setRecoilValue_updateName('아무개로 변경');
        setRecoilValue_updateAge(100);
    };

    const { updateName, updateAge } = useSaveManager();

    return (
        <div>
            TestRecoilSave
            <br />
            name : {testRecoilSaveState.name}
            <br />
            age : {testRecoilSaveState.age}
            <hr />
            <div>
                <h2>훅을 이용하여 개별로 업데이트 하는 방식</h2>
                <div style={{ margin: 20 }}>
                    <button
                        onClick={() => {
                            updateName('이름변경2');
                        }}
                    >
                        이름 변경하기{' '}
                    </button>
                    <button
                        onClick={() => {
                            updateAge(200);
                        }}
                    >
                        나이 변경하기{' '}
                    </button>
                </div>
                <div style={{ margin: 20 }}>
                    <button
                        onClick={() => {
                            updateName('이름변경2');
                            updateAge(200);
                        }}
                    >
                        이름 , 나이 변경하기{' '}
                    </button>
                </div>
            </div>
            <hr />
            <div>
                <h2>selector 를 이용하여 개별로 업데이트 하는 방식</h2>
                <div style={{ margin: 20 }}>
                    <button onClick={clickChangeName}>이름 변경하기 </button>
                    <button onClick={clickChangeAge}>나이 변경하기 </button>
                </div>
                <div style={{ margin: 20 }}>
                    <button onClick={clickChangeNameAge}>이름 , 나이 변경하기 </button>
                </div>{' '}
            </div>
        </div>
    );
};

export default TestRecoilSave;
