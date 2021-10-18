import React from 'react';

const ScrollDiv = ({}) => {

  const handleScroll = e => {
    let element = e.target
    if (element.scrollHeight - element.scrollTop === '20px') {
      console.log('scrolled');
    }
  }
}

export default ScrollDiv