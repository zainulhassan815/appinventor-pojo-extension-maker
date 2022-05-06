import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/app';
import './index.css';

const Main: React.FC = () => {
	return (
		<div className='bg-white dark:bg-gray-900'>
			<App />
		</div>
	);
};

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<Main />
	</React.StrictMode>
);
