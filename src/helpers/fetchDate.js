import React from 'react';

function fetchDate() {
    const today = new Date();
    today.setDate(today.getDate() - 14);
    const searchDate = today.toISOString().slice(0, 10);
    return searchDate;
}

export default fetchDate;