import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import { ListArea } from "../../assets/style/posting/postingStyle"

import testImg from "../../assets/images/post/post-test.jpg"

const PostingListCon = () => {
    const [readmeContent, setReadmeContent] = useState('');

  
      useEffect(() => {
        const postId = 'zja3400';
        const postCategory = 'Blog-Posting';
        const apiUrl = `https://api.github.com/repos/${postId}/${postCategory}/readme`;
    
        axios.get(apiUrl)
          .then(response => {
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
      }

    return (
        <ListArea className="posting-list">
            <ul className="posting-list__ul">
                <li className="posting-list__ul__li">
                    <Link to="/posting/postingView" className="posting-list__ul__li--btn">
                        <div className="img"><img src={testImg} alt="" /></div>
                        <div className="info">
                            <div className="category">
                                <p>Javascript</p>
                            </div>
                            <div className="title"><p>{readmeContent}</p></div>
                            <div className="text"><p className="text-line-3">포스팅 테스트 미리보기 내용입니다. 3줄까지만</p></div>
                        </div>
                    </Link>
                </li>
                <li className="posting-list__ul__li">
                    <Link to="/posting/postingView" className="posting-list__ul__li--btn">
                        <div className="img"><img src={testImg} alt="" /></div>
                        <div className="info">
                            <div className="category">
                                <p>Javascript</p>
                            </div>
                            <div className="title"><p>포스팅 테스트 제목입니다.포스팅 테스트 제목입니다.포스팅 테스트 제목입니다.</p></div>
                            <div className="text"><p className="text-line-3">포스팅 테스트 미리보기 내용입니다. 3줄까지만</p></div>
                        </div>
                    </Link>
                </li>   
                <li className="posting-list__ul__li">
                    <Link to="/posting/postingView" className="posting-list__ul__li--btn">
                        <div className="img"><img src={testImg} alt="" /></div>
                        <div className="info">
                            <div className="category">
                                <p>Javascript</p>
                            </div>
                            <div className="title"><p>포스팅 테스트 제목입니다.포스팅 테스트 제목입니다.포스팅 테스트 제목입니다.</p></div>
                            <div className="text"><p className="text-line-3">포스팅 테스트 미리보기 내용입니다. 3줄까지만</p></div>
                        </div>
                    </Link>
                </li>  
                <li className="posting-list__ul__li">
                    <Link to="/posting/postingView" className="posting-list__ul__li--btn">
                        <div className="img"><img src={testImg} alt="" /></div>
                        <div className="info">
                            <div className="category">
                                <p>Javascript</p>
                            </div>
                            <div className="title"><p>포스팅 테스트 제목입니다.포스팅 테스트 제목입니다.포스팅 테스트 제목입니다.</p></div>
                            <div className="text"><p className="text-line-3">포스팅 테스트 미리보기 내용입니다. 3줄까지만</p></div>
                        </div>
                    </Link>
                </li>  
                <li className="posting-list__ul__li">
                    <Link to="/posting/postingView" className="posting-list__ul__li--btn">
                        <div className="img"><img src={testImg} alt="" /></div>
                        <div className="info">
                            <div className="category">
                                <p>Javascript</p>
                            </div>
                            <div className="title"><p>포스팅 테스트 제목입니다.포스팅 테스트 제목입니다.포스팅 테스트 제목입니다.</p></div>
                            <div className="text"><p className="text-line-3">포스팅 테스트 미리보기 내용입니다. 3줄까지만</p></div>
                        </div>
                    </Link>
                </li>                                                
            </ul>
        </ListArea>
    );
}
export default PostingListCon;
