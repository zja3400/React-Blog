import { useEffect } from 'react';
import axios from 'axios';

export const PostingApi = ({ onDataFetched, filePath }) => {
    useEffect(() => {
        const fetchFile = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/posting/all/${filePath}`);
                onDataFetched(response.data); // md 내용 전달
            } catch (error) {
                console.error("파일 로딩 에러:", error);
            }
        };

        fetchFile();
    }, [filePath]);

    return null;
};