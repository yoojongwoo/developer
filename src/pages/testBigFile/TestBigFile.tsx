import Base64 from './Base64';
import Blob from './Blob';

const TestBigFile = () => {
    return (
        <>
            <h1>첨부한 이미지 파일의 가로 세로 사이즈를 측정 하는 테스트</h1>
            <a href="https://commons.wikimedia.org/wiki/Category:Large_images">Large_images</a>
            <h2>Base64</h2>
            <Base64 />
            <h2>Blob</h2>
            <Blob />
        </>
    );
};

export default TestBigFile;
