import { useState } from 'react';

const Blob = () => {
    const [size, setSize] = useState('');

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const inputEle = e.target as HTMLInputElement;
        const fileList: FileList = inputEle.files as FileList;
        testCreateObjectURL(fileList[0]);
    };

    function testCreateObjectURL(file: File) {
        try {
            const blobUrl = URL.createObjectURL(file);
            setImage(blobUrl);
        } catch (err) {
            setSize(`err ${err}`);
        }
    }

    const setImage = (src: string) => {
        const img = new Image();
        img.onload = () => {
            setSize(`${img.width} x ${img.height}`);
        };
        img.onerror = (err) => {
            setSize(`err ${err}`);
            alert('err');
        };
        img.src = src;
    };

    return (
        <>
            <input type="file" onChange={onChange} />
            <br />
            <p>size : {size}</p>
        </>
    );
};

export default Blob;
