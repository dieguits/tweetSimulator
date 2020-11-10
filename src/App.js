import React, { useState, useEffect } from 'react';
import { Container, Snackbar } from "@material-ui/core";
import Header from './components/Header';
import SendTweet from "./components/SendTweet";
import ListTweets from "./components/ListTweets";

import { TWEETS_STORAGE } from "./utils/constants";

function App() {

	const [toastProps, setToastProps] = useState({
		open: false,
		text: null,
	});

	const [allTweets, setAllTweets] = useState([]);
	const [reloadTweet, setReloadTweet] = useState(false);

	useEffect(() => {
		const allTweetsStorage = localStorage.getItem(TWEETS_STORAGE);
		const allTweetsArray = JSON.parse(allTweetsStorage);
		setAllTweets(allTweetsArray);
		setReloadTweet(false)
	}, []);

	const deleteTweet = (index) => {
		allTweets.splice(index, 1);
		setAllTweets(allTweets);
		localStorage.setItem(TWEETS_STORAGE, JSON.stringify(allTweets));
		setReloadTweet(true);
	};

	return (
		<div className="App">
			<Container className="tweets-simulator" maxWidth={false}>
				<Header />
				<SendTweet setToastProps={setToastProps} allTweets={allTweets} />
				<ListTweets allTweets={allTweets} deleteTweet={deleteTweet} />
				<Snackbar
					anchorOrigin={{
						vertical: "top",
						horizontal: "right"
					}}
					open={toastProps.open}
					autoHideDuration={1000}
					message={<span id="message-id">{toastProps.text}</span>}
				/>
			</Container>
		</div>
	);
}

export default App;
