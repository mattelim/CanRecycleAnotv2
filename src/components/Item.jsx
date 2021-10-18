import React from 'react' 
import {useState} from 'react'
import { FaInfoCircle, FaCheck, FaTimes, FaAsterisk, FaAngleDown, FaAngleUp } from 'react-icons/fa'
import DOMPurify from 'dompurify'

const Item = ({ item, q /*, splitQ , onExpand */ }) => {

  const CanRecycle = () => {
    switch (item['Recycle']) {
      case "YES":
        if (item['Instructions']) {
          return <h2 className="rec-yes"><FaCheck />*</h2>
        }
        return <h2 className="rec-yes"><FaCheck /></h2>
      case "NO":
        if (item['Instructions']) {
          return <h2 className="rec-no"><FaTimes />*</h2>
        }
        return <h2 className="rec-no"><FaTimes /></h2>
      case "MAYBE":
        return <h2 className="rec-may"><FaAsterisk /></h2>
    }
  }

    /*
    let foundInd = {'Item':[],'Material':[]}
    if (splitQ.length > 0) {
      for(let eachQ of splitQ) {
        foundInd['Item'].push(item['Item'].indexOf(eachQ));
        foundInd['Item'].push(eachQ.length);
        foundInd['Material'].push(item['Material'].indexOf(eachQ));
        foundInd['Material'].push(eachQ.length);
      }
    }

    let finalItem;
    if (foundInd['Item'] != null) {
      let pre, marked, post;
      pre = item['Item'].slice(0,foundInd['Item']);
      marked = item['Item'].slice(foundInd['Item'], );
    }
    */

  const [isInst, toggleInst] = useState(false);
    
    const Instructions = () => {
      const itemInst = item['Instructions'];
      if (itemInst) {
        if (isInst) {
          return <small className='itemRemarks' style={{cursor:'pointer'}} onClick={() => toggleInst(!isInst)}><p className='instrBut'><FaAngleUp /></p><div className='instCont' dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(item['Instructions']) }} style={{display:'block'}} /></small>  
        } 
        return <small className='itemRemarks' style={{cursor:'pointer', width:'40px', height:'15px', alignSelf:'center', backgroundColor:'#FFD979'}} onClick={() => toggleInst(!isInst)}><p className='instrBut'><FaAngleDown /></p><div className='instCont' dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(item['Instructions']) }} style={{display:'none'}}/></small>
      }
      return null
    }

    return (
        <div className='item'>
          <div className='item3'>
            <div className='item2'>
              <p className='itemName'>{item['Item']}</p>
            </div>
            <div className='isItemRe'><CanRecycle /></div>
          </div>
          <Instructions />
        </div>
    )
}

/*
<small className='itemRemarks'><FaInfoCircle style={{cursor:'pointer'}} onClick={() => onExpand(item['Num'])} /> <Instructions /> </small>
*/


export default Item
