import { useState, useEffect } from 'react';
import axios from 'axios';

const PostingApi = ({ onDataFetched }) => {  // props 추가
    const [readmeContent, setReadmeContent] = useState('');

    useEffect(() => {
        const owner = 'zja3400'; // GitHub 사용자명
        const repo = 'Blog-Posting'; // GitHub 저장소명
        const apiUrl = `https://api.github.com/repos/${owner}/${repo}/contents/tab_04.html`;

        axios.get(apiUrl)
            .then(response => {
                // Base64 인코딩된 데이터 디코딩
                const contentBase64 = response.data.content;
                const decodedContent = decodeBase64(contentBase64);
                setReadmeContent(decodedContent);
                onDataFetched(decodedContent);  // 부모에게 데이터 전달
            })
            .catch(error => {
                console.error('Error', error);
            });
    }, []);

    // Base64를 UTF-8 문자열로 디코딩하는 함수
    const decodeBase64 = (base64) => {
        return decodeURIComponent(escape(atob(base64)));
    };

    return null;  // 이 컴포넌트는 데이터를 가져와서 부모에 전달하는 역할만 함
};

export default PostingApi;
