import { RootState } from '../../store/redux/store';
import { userActions } from '../../store/redux/userReduxStore';
import { useDispatch, useSelector } from 'react-redux';

const TestReduxSave = () => {
    const userState = useSelector((state: RootState) => state.user);
    const dispatch = useDispatch();

    console.log('userState', userState);
    return (
        <div>
            TestReduxSave
            <br />
            name : {userState.name}
            <br />
            age : {userState.age}
            <hr />
            <div>
                <h2>훅을 이용하여 개별로 업데이트 하는 방식</h2>
                <div style={{ margin: 20 }}>
                    <button
                        onClick={() => {
                            dispatch(userActions.updateName('이름변경2'));
                        }}
                    >
                        이름 변경하기{' '}
                    </button>
                    <button
                        onClick={() => {
                            dispatch(userActions.updateAge(200));
                        }}
                    >
                        나이 변경하기{' '}
                    </button>
                </div>
                <div style={{ margin: 20 }}>
                    <button
                        onClick={() => {
                            // redux는 React의 batch 기능을 사용하여 여러 액션을 연달아
                            // dispatch해도 컴포넌트는 한 번만 리렌더링됩니다.
                            // 이로 인해 성능 최적화가 이루어집니다.
                            dispatch(userActions.updateName('이름변경2'));
                            dispatch(userActions.updateAge(200));
                        }}
                    >
                        이름 , 나이 변경하기{' '}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default TestReduxSave;
