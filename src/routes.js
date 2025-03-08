import React from 'react';
import {Routes, Route} from 'react-router-dom';
import PostingList from '../src/page/posting/PostingList';
import PostingView from '../src/page/posting/PostingView';


const AppRoutes = () => {
	return(
		<Routes>
			<Route path="/posting/PostingList" exact element={<PostingList />} />
			<Route path="/posting/PostingView" element={<PostingView />} />
		</Routes>
	)
}
export default AppRoutes;