import React from 'react';

function removeTitleFaults(title) {
    const newTitle = title.replace("&#39;", "'");
    return newTitle;
}

export default removeTitleFaults;
