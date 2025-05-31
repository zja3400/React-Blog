import 'highlight.js/styles/github.css'; 
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import rehypeHighlight from "rehype-highlight";
import MarkdownPreview from '@uiw/react-markdown-preview';
import { ViewArea } from "../../assets/style/posting/postingStyle";
import axios from 'axios';

const PostingViewCon = () => {
  const { '*': filePath } = useParams();
  const [content, setContent] = useState('');  // 여기서 content 선언

  useEffect(() => {
    axios.get(`http://localhost:3000/api/posting/file?path=${filePath}`)
      .then(res => setContent(res.data))
      .catch(console.error);
  }, [filePath]);

    return (
        <ViewArea className="posting-view">
           <MarkdownPreview rehypePlugins={[rehypeHighlight]} source={content} />
        </ViewArea>
    );
};

export default PostingViewCon;
