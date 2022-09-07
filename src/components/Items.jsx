import React from 'react'
import Item from './Item'
// import LandingImage from '../RecyclingIso.png'

const Items = ({ items, /*onExpand,*/ q, searchParam }) => {

  const legend = [
    {
    "Num": 1,
    "SpecificType": "Can be recycled in the blue recycling bins",
      "Item": "<span class=\"list-item\">specific Item 1</span>,<span class=\"list-item\">specific Item 2</span>,<span class=\"list-item\">specific Item 3</span>,",
    "Recycle": "YES",
    "Instructions": null
    },
    {
    "Num": 2,
    "SpecificType": "Can be recycled in the blue recycling bins — click for more instructions",
     "Item": "<span class=\"list-item\">specific Item 1</span>,<span class=\"list-item\">specific Item 2</span>,<span class=\"list-item\">specific Item 3</span>,",
    "Recycle": "YES",
    "Instructions": "Specific instructions here"
    },
    {
    "Num": 3,
    "SpecificType": "Can be recycled but not in blue recycling bins — click for more instructions",
     "Item": "<span class=\"list-item\">specific Item 1</span>,<span class=\"list-item\">specific Item 2</span>,<span class=\"list-item\">specific Item 3</span>,",
    "Recycle": "MAYBE",
    "Instructions": "Specific instructions here"
    },
    {
    "Num": 4,
    "SpecificType": "Cannot be recycled — click for more instructions",
    "Item": "<span class=\"list-item\">specific Item 1</span>,<span class=\"list-item\">specific Item 2</span>,<span class=\"list-item\">specific Item 3</span>,",
    "Recycle": "NO",
    "Instructions": "Specific instructions here"
    },
    {
    "Num": 5,
    "SpecificType": "Cannot be recycled — put into rubbish bin",
    "Item": "<span class=\"list-item\">specific Item 1</span>,<span class=\"list-item\">specific Item 2</span>,<span class=\"list-item\">specific Item 3</span>,",
    "Recycle": "NO",
    "Instructions": null
    },
  ];

  let splitQ = q.split(' ');

  /*
  // Search function that does NOT concatenate Item and Material
  const searchItems = (items) => {
    return items.filter((item) => {
      return searchParam.some((newItem) => {
        return splitQ.reduce((prev, curr) => {
          return prev && item[newItem]
            .toString()
            .toLowerCase()
            .indexOf(curr.toLowerCase()) > -1;
          }, true);
      });
    });
  }
  */

  // Search function that concatenates Item and Material
  const searchItems = (items) => {
    return items.filter((item) => {
      return splitQ.reduce((prev, curr) => {
        return prev && searchParam.reduce((prev1, curr1) => {
	        return prev1 + item[curr1].toString().toLowerCase()
        },'').indexOf(curr.toLowerCase()) > -1;
      }, true);
    });
  }

  /*
  // line 28-30 can be replaced with a less general expression:
  return prev && (item['Item'].toString().toLowerCase() + item['Material'].toString().toLowerCase()).indexOf(curr.toLowerCase()) > -1;
  */
  
  const isLegend = q == "";
  
  if (q != "" && !isLegend) {
    items = searchItems(items);
  } else if (isLegend) {
    items = legend;
  }

  const LegendTitle = () => {
    if (isLegend) {
      return ( 
        <>
          <p className="landing-tip">To get optimal results, include both the material and the object. E.g. 'plastic bottle' </p>
        <img src="https://i.ibb.co/DGLm7TV/Recycling-Isometric.png" alt="Person recycling" /> <strong className="title">Legend</strong>
        </>
      )
    }
    return null
  }
  
  return (
    <>
    <LegendTitle />
      {items.map((item) => (
        <Item key={item.Num} item={item} q={q} /*splitQ={splitQ} onExpand={onExpand}*/ />

      ))}
    </>
  )
}

export default Items