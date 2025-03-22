import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { ListArea } from "../../assets/style/posting/postingStyle";
import { PostingApi } from "../../components/posting/PostingApi";

import testImg from "../../assets/images/post/post-test.jpg";

const PostingListCon = () => {
    const [title, setTitle] = useState('');

    return (
        <ListArea className="posting-list">
            {/* GitHub API에서 h1 내용 가져오기 */}
            <PostingApi onDataFetched={setTitle} />

            <ul className="posting-list__ul">
                <li className="posting-list__ul__li">
                    <Link to="/posting/postingView" className="posting-list__ul__li--btn">
                        <div className="img"><img src={testImg} alt="" /></div>
                        <div className="info">
                            <div className="category">
                                <p>Javascript</p>
                            </div>
                            <div className="title">
                                <h2>{title ? title : "로딩 중..."}</h2>
                            </div>
                            <div className="text">
                                <p className="text-line-2">포스팅 테스트 미리보기 내용입니다. 2줄까지만</p>
                            </div>
                        </div>
                    </Link>
                </li>
            </ul>
        </ListArea>
    );
};

export default PostingListCon;
