import React from 'react';
import ReactDOM from 'react-dom';
import SignupPage from '../pages/SignupPage/SignupPage';

test('Signup Page renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<SignupPage />, div);
});