import React from 'react';
import { useState } from 'react';
import {
	FaInfoCircle,
	FaRecycle,
	FaTrashAlt,
	FaAngleUp,
	FaBars
} from 'react-icons/fa';
import DOMPurify from 'dompurify';
// import BlueBinSVG from '../bluebin.svg';

const BlueBin = () => {
  return <svg width="1em" height="1em" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14 2H36V12H14V2Z" fill="black"/>
<path d="M2 18L4.60233 48.1719C4.69153 49.206 5.55698 50 6.59493 50H43.4051C44.443 50 45.3085 49.206 45.3977 48.1719L48 18H2Z" fill="#2E7CF6"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M0 14C0 15.1046 0.895432 16 2 16H48C49.1046 16 50 15.1046 50 14C50 12.8954 49.1046 12 48 12H41.5137C40.5088 12 39.6599 11.2543 39.5303 10.2578L38.4233 1.74216C38.2937 0.745651 37.4449 0 36.44 0H13.56C12.5551 0 11.7063 0.74565 11.5767 1.74216L10.4697 10.2578C10.3401 11.2543 9.49124 12 8.48634 12H2C0.895431 12 0 12.8954 0 14ZM33.4463 12C34.6533 12 35.5852 10.939 35.4296 9.74216L34.9096 5.74216C34.78 4.74565 33.9312 4 32.9263 4H17.0737C16.0688 4 15.22 4.74565 15.0904 5.74216L14.5704 9.74216C14.4148 10.939 15.3467 12 16.5537 12H33.4463Z" fill="#2E7CF6"/>
</svg>
}

const Item = ({ item, q /*, splitQ , onExpand */ }) => {
	const CanRecycle = () => {
		switch (item['Recycle']) {
			case 'YES':
				return (
					<h2 className="rec-yes">
						<BlueBin />
					</h2>
				);
			case 'NO':
				return (
					<h2 className="rec-no">
						<FaTrashAlt />
					</h2>
				);
			case 'MAYBE':
				return (
					<h2 className="rec-may">
						<FaRecycle />
					</h2>
				);
		}
	};

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
	const [isItems, toggleItems] = useState(false);

	const AllItems = () => {
		if (isItems) {
			return (
				<>
					<small
						className="allItems expanded"
						onClick={() => toggleItems(!isItems)}
					>
						<p className="allItemsBut">
							<FaAngleUp /> SHOW ALL ITEMS
						</p>
					</small>
				</>
			);
		}
		return (
			<>
				<small
					className="allItems condensed"
					onClick={() => {
            toggleItems(!isItems);
            if (isInst) {
              toggleInst(!isInst);
            }
          }}
				>
					<p className="allItemsBut">
						<FaBars /> SHOW ALL ITEMS
					</p>
				</small>
			</>
		);
	};
	const Instructions = () => {
		const itemInst = item['Instructions'];

		if (itemInst) {
			if (isInst) {
				return (
					<>
						<small
							className="itemRemarks expanded"
							onClick={() => toggleInst(!isInst)}
						>
							<p className="instrBut">
								<FaAngleUp /> INSTRUCTIONS
							</p>
						</small>
					</>
				);
			}
			return (
				<>
					<small
						className="itemRemarks condensed"
						onClick={() => {
            toggleInst(!isInst);
            if (isItems) {
              toggleItems(!isItems);
            }
          }}
					>
						<p className="instrBut">
							<FaInfoCircle /> INSTRUCTIONS
						</p>
					</small>
				</>
			);
		}
		return null;
	};

	const MoreTabs = () => {
    if (isInst) {
      return (
  			<>
          <div className="more-tabs">
    				<Instructions />
    				<AllItems />
          </div>
          <div
								className="instCont moreinfo"
								dangerouslySetInnerHTML={{
									__html: DOMPurify.sanitize(item['Instructions'])
								}}
								style={{ display: 'block' }}
					/>
  			</>
  		)
    } else if (isItems) {
      return (
  			<>
          <div className="more-tabs">
    				<Instructions />
    				<AllItems />
          </div>
          <div
								className="allItemsCont moreinfo"
								dangerouslySetInnerHTML={{
									__html: DOMPurify.sanitize(item['Item'])
								}}
								style={{ display: 'block' }}
					/>
  			</>
  		)
    }
    return (
			<>
        <div className="more-tabs">
  				<Instructions />
  				<AllItems />
        </div>
			</>
		)
	};

	return (
		<>
			<div className="item">
				<div className="item3">
					<div className="item2">
						<p className="itemName">{item['SpecificType']}</p>
					</div>
					<div className="isItemRe">
						<CanRecycle />
					</div>
				</div>
			</div>
			<MoreTabs />
		</>
	);
};

/*
<small className='itemRemarks'><FaInfoCircle style={{cursor:'pointer'}} onClick={() => onExpand(item['Num'])} /> <Instructions /> </small>
*/

export default Item;
