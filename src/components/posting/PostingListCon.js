import React from "react";
import { Link } from "react-router-dom";
import { ListArea } from "../../assets/style/posting/postingStyle"

import testImg from "../../assets/images/post/post-test.jpg"

const PostingListCon = () => {
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
