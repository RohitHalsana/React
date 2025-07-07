import React from 'react'

export const Loader = async() => {
    const response =  await fetch('https://api.github.com/users/rohithalsana')
    if (!response.ok) throw new Error('Network error');
    return response.json();
}

