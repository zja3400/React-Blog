import React from 'react';
import {Routes, Route} from 'react-router-dom';
import PostingList from '../src/page/posting/PostingList';
import PostingView from '../src/page/posting/PostingView';
import Main from '../src/page/main/Main';


const AppRoutes = () => {
	return(
		<Routes>
      		<Route path="/main/Main" element={<Main />} />	
			<Route path="/posting/PostingList" element={<PostingList />} />
            <Route path="/posting/postingView/*" element={<PostingView />} />
		</Routes>
	)
}
export default AppRoutes;