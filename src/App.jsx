import React from 'react';
import { useState, useEffect } from 'react';
import Header from './components/Header';
import Items from './components/Items';
import Footer from './components/Footer';
import listData from './ItemsList.json';

const appTitle = "Can Recycle Anot?";

const App = () => {

  /*
  const [items, setItems] = useState([])

  useEffect(() => {
    const getItems = async () => {
      const itemsFromFile = await fetchItems()
      setItems(itemsFromFile)
    }
    getItems()
  }, [])


  const fetchItems = async () => {
    const res = await fetch('./src/ItemsList.json')
    // if (response.ok) { // if HTTP-status is 200-299
    // // get the response body (the method explained below)
    // let json = await response.json();
    // } else {
    // console.log("HTTP-Error: " + response.status);
    // }
    const data = await res.json()
    //console.log(data)
    return data
  }
*/

// Expand the item feature for more info
// Currently not implemented yet
/*
const expandItem = (num) => {
  console.log('expand', num)
}
*/

// Search Function
const [q, setQ] = useState("");
// const [searchParam] = useState(["Material", "Item"]);
const [searchParam] = useState(["Item"]);

/*
// How to implement a dynamic margin height?
// Lame but did it by using dummies
const headerMargin = () => {
  document.querySelector('.header-cont').offsetHeight;
}
*/

const [scrollTop, setScrollTop] = useState();
// const [scrolling, setScrolling] = useState();

useEffect(() => {
  const onScroll = (e) => {
    setScrollTop(e.target.documentElement.scrollTop);
    //setScrolling(e.target.documentElement.scrollTop > scrollTop);
  };
  window.addEventListener("scroll", onScroll);
  return () => window.removeEventListener("scroll", onScroll);
  }, [scrollTop]);
  
/*
useEffect(() => {
  console.log('scrolling: ' + scrolling);
}, [scrolling]);

useEffect(() => {
  console.log('scrollTop: ' + scrollTop);
}, [scrollTop]);
*/


  return (
    <div className="App">
      <div className="header-bg">
        <div className="header-cont"> 
          <Header title={appTitle} scrollTop={scrollTop}/> 
          <div className="search-cont">
          <input id="search" type="search" placeholder=" search... or type '?' for legend" value={q} onChange={(e) => { 
          setQ(e.target.value);
          }}/>
          </div>
        </div>
      </div>

      <div className="header-cont" id="dummy-header"> 
        <Header title={appTitle} /> 
          <div className="search-cont">
            <div id="dummy-search">
            </div>
          </div>
        </div>
      <div className="items-flex">
      <div className="items-cont">
        <Items items={listData} /*onExpand={expandItem}*/ q={q} searchParam={searchParam} />
      </div>
      </div>
      <Footer title={appTitle}/>
    </div>
  );
}

export default App;

/*


      <div className="main">
        {items.filter((oneItem) => {
          if(items === ""){
            return oneItem;
          }
          else if(oneItem.name.toLowerCase().includes(items.toLowerCase())){
            return oneItem
          }

        }).map((oneItem) => (
          <div key={oneItem.id}>
            <p className="it"> 
              {oneItem.name}
            </p>
          </div>
        ))
        }
      </div>
      */