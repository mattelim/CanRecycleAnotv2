import React from 'react'
import Item from './Item'

const Items = ({ items, /*onExpand,*/ q, searchParam }) => {

  const legend = [
    {
    "Num": 1,
    "Item": "Can be recycled in the blue recycling bins",
    "Recycle": "YES",
    "Instructions": null
    },
    {
    "Num": 2,
    "Item": "Can be recycled in the blue recycling bins — click for more instructions",
    "Recycle": "YES",
    "Instructions": "Specific instructions here"
    },
    {
    "Num": 3,
    "Item": "Can be recycled but not in blue recycling bins — click for more instructions",
    "Recycle": "MAYBE",
    "Instructions": "Specific instructions here"
    },
    {
    "Num": 4,
    "Item": "Cannot be recycled — click for more instructions",
    "Recycle": "NO",
    "Instructions": "Specific instructions here"
    },
    {
    "Num": 5,
    "Item": "Cannot be recycled — put into rubbish bin",
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
  
  const isLegend = q == "?";
  
  if (q != "" && !isLegend) {
    items = searchItems(items);
  } else if (isLegend) {
    items = legend;
  }

  const LegendTitle = () => {
    if (isLegend) {
      return (
        <strong className="title">Legend</strong>
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