import { useState } from 'react';

const Base64 = () => {
    const [size, setSize] = useState('');

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const inputEle = e.target as HTMLInputElement;
        const fileList: FileList = inputEle.files as FileList;
        testBase64(fileList[0]);
    };

    function testBase64(file: File) {
        const reader = new FileReader();
        reader.onload = (e) => {
            const base64Str = e.target?.result as string;
            setImage(base64Str);
        };
        reader.onerror = (err) => {
            setSize(`err ${err}`);
            alert('err');
            console.error(err);
        };
        reader.readAsDataURL(file);
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

export default Base64;
