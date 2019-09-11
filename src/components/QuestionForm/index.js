import React, { useState } from 'react';
import api from '../../services/api';

import './style.scss';

const QuestionForm = () => {
	const [inputText, setInputText] = useState('');
	const [bgImage, setbgImage] = useState([]);

	const handdleQuestion = (e) => {
		e.preventDefault();

		const answer = ['yes', 'no'];
		const textToSearch = answer[Math.floor(Math.random() * answer.length)];

		getData(textToSearch);
	};

	const getData = async (searchQuery) => {
		const response = await api.get(`${searchQuery}&api_key=Gc7131jiJuvI7IdN0HZ1D7nh0ow5BU6g`);
		const { data } = response.data;

		setbgImage(data);
	};

	return (
		<div className="container">
			<form action="#" onSubmit={handdleQuestion}>
				<input
					type="text"
					name="question"
					id="question"
					placeholder="I'll answer YES or NO. Ask me anything..."
					value={inputText}
					onChange={e => setInputText(e.target.value)}
				/>

				{bgImage && bgImage.map(image => (
					<img key={image.id} src={`https://i.giphy.com/media/${image.id}/giphy.gif`} alt=""/>
				))}

			</form>
		</div>
	);
}


export default QuestionForm;