import fetchCountry from '../helpers/fetchCountry';

test('fetchCountry should return the name of the country corresponding with the countrycode from the LocationContextProvider', () => {
    const countrycode1 = 408;
    const countrycode2 = 33;
    const countrycode3 = 357;
    const result1 = fetchCountry(countrycode1);
    const result2 = fetchCountry(countrycode2);
    const result3 = fetchCountry(countrycode3);
    expect(result1.name).toBe('Singapore');
    expect(result2.name).toBe('Canada');
    expect(result3.name).toBe('Lithuania');
})