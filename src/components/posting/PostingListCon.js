import React, { useState } from 'react';
import PostingApi from './PostingApi';

const PostingListCon = () => {
    const [readmeContent, setReadmeContent] = useState('');  // git 데이터를 저장할 state

    return (
        <div>
            <PostingApi onDataFetched={setReadmeContent} />
            <h2>GitHub README 내용</h2>
            <pre>{readmeContent}</pre>
        </div>
    );
};

export default PostingListCon;