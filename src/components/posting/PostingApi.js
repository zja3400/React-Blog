import { useState, useEffect } from 'react';
import axios from 'axios';

export const PostingApi = () => {
    const [readmeContent, setReadmeContent] = useState('');

    useEffect(() => {
        const owner = 'zja3400'; // GitHub 사용자명
        const repo = 'Blog-Posting';    // GitHub 저장소명
        const apiUrl = `https://api.github.com/repos/${owner}/${repo}/contents/README.md`;

        axios.get(apiUrl)
            .then(response => {
                // GitHub API에서 반환하는 Base64 인코딩된 content
                const contentBase64 = response.data.content;
                const decodedContent = decodeBase64UTF8(contentBase64);
                setReadmeContent(decodedContent);
            })
            .catch(error => {
                console.error('Error fetching README:', error);
            });
    }, []);

    // Base64를 UTF-8 문자열로 디코딩
    const decodeBase64UTF8 = base64 => {
        const binaryString = atob(base64);
        const bytes = new Uint8Array(binaryString.length);

        for (let i = 0; i < binaryString.length; i++) {
            bytes[i] = binaryString.charCodeAt(i);
        }

        return new TextDecoder('utf-8').decode(bytes);
    };
    return (
      <div>
          <h2>README Content</h2>
          <pre>{readmeContent}</pre>
      </div>
  );
};

