import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import { ListArea } from "../../assets/style/posting/postingStyle";
import testImg from "../../assets/images/post/post-test.jpg";

const PostingListCon = () => {
    const [mdList, setMdList] = useState([]); 

    useEffect(() => {
        axios.get('http://localhost:3000/api/posting/all/')
            .then(response => {                
                setMdList(response.data);    // 배열 형태로 받아서 set
            })
            .catch(error => {
                console.error('파일 목록을 불러오는 데 실패:', error);
            });
    }, []);

    return (
        <ListArea className="posting-list">            
            <ul className="posting-list__ul">
                {mdList.map((filePath, idx) => {
                    const fileName = filePath.split('/').pop().replace('.md', '');
                    const encodedFilePath = filePath.split('/').map(encodeURIComponent).join('/');

                    return (
                    <li key={idx} className="posting-list__ul__li">
                        <Link to={`/posting/postingView/${encodedFilePath}`} className="posting-list__ul__li--btn">                        
                            <div className="img">
                                <img src={testImg} alt="" />
                            </div>
                            <div className="info">
                                <div className="title">
                                    <h2>{fileName}</h2>
                                </div>
                            </div>
                        </Link>
                    </li>
                    );
                })}
            </ul>
        </ListArea>
    );
};

export default PostingListCon;
