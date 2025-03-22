import { useEffect } from 'react';
import axios from 'axios';

export const PostingApi = ({ onDataFetched }) => {
    useEffect(() => {
        const owner = 'zja3400';
        const repo = 'Blog-Posting';
        const apiUrl = `https://api.github.com/repos/${owner}/${repo}/contents/tab_04.html`;

        axios.get(apiUrl)
            .then(response => {
                if (response.data.content) {
                    const contentBase64 = response.data.content;
                    const decodedContent = decodeBase64UTF8(contentBase64);
                    const extractedText = extractTitle(decodedContent);
                    onDataFetched(extractedText); // 타이틀 내용만 부모 컴포넌트로 전달
                }
            })
            .catch(error => {
                console.error('Error fetching content:', error);
            });
    }, []);

    // Base64를 UTF-8로 디코딩
    const decodeBase64UTF8 = (base64) => {
        try {
            return decodeURIComponent(escape(atob(base64)));
        } catch (error) {
            console.error("Decoding error:", error);
            return "";
        }
    };

    // HTML에서 타이틀 태그 내용 추출
    const extractTitle = (htmlString) => {
        try {
            const parser = new DOMParser();
            const doc = parser.parseFromString(htmlString, "text/html");
            const titleElement = doc.querySelector("title");
            return titleElement ? titleElement.textContent : "타이틀 없음";
        } catch (error) {
            console.error("HTML Parsing error:", error);
            return "오류 발생";
        }
    };

    return null;
};
