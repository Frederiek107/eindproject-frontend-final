import { render, screen } from '@testing-library/react';
import App from '../App';
import SearchPage from "../pages/SearchPage/SearchPage";

test('App renders the right homepage', () => {
    const url='localhost:3000/home';
    expect(url).toRender(SearchPage);
});