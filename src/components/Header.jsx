import React from 'react';

const Header = ({title, scrollTop}) => {

const Logo = () => {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 71 69" height="100%">
<path d="M31.8995 43.0944H36.4895C36.4895 42.3984 36.5195 41.8584 36.5795 41.4744C36.6395 41.0784 36.8375 40.5984 37.1735 40.0344C37.4735 39.5424 37.8695 39.0864 38.3615 38.6664C38.8655 38.2464 39.3995 37.7304 39.9635 37.1184C40.7795 36.2544 41.4515 35.3124 41.9795 34.2924C42.5195 33.2724 42.7895 32.1444 42.7895 30.9084C42.7895 30.0804 42.6455 29.2644 42.3575 28.4604C42.0695 27.6564 41.6615 26.9484 41.1335 26.3364C40.3655 25.4004 39.3935 24.7284 38.2175 24.3204C37.0415 23.9124 35.7935 23.7084 34.4735 23.7084C33.6095 23.7084 32.7515 23.8404 31.8995 24.1044C31.0475 24.3564 30.2735 24.7284 29.5775 25.2204C28.7015 25.8324 27.9935 26.6544 27.4535 27.6864C26.9255 28.7064 26.6015 29.8164 26.4815 31.0164H31.0535C31.0175 29.9604 31.3595 29.1444 32.0795 28.5684C32.3915 28.2924 32.7695 28.0944 33.2135 27.9744C33.6695 27.8544 34.1435 27.7944 34.6355 27.7944C35.2355 27.7944 35.7995 27.8904 36.3275 28.0824C36.8555 28.2624 37.2875 28.5744 37.6235 29.0184C37.8395 29.2824 37.9895 29.5884 38.0735 29.9364C38.1575 30.2724 38.1995 30.6384 38.1995 31.0344C38.1995 31.6584 38.1155 32.2344 37.9475 32.7624C37.7915 33.2904 37.4735 33.8244 36.9935 34.3644C36.3935 35.0004 35.8475 35.5104 35.3555 35.8944C34.8635 36.2784 34.4195 36.6564 34.0235 37.0284C33.6275 37.4004 33.2675 37.9044 32.9435 38.5404C32.5715 39.2004 32.3015 39.9204 32.1335 40.7004C31.9775 41.4684 31.8995 42.2664 31.8995 43.0944ZM31.9355 50.1324H36.4895V45.3624H31.9355V50.1324Z" fill="black"/>
<path d="M64.9313 46.1763C68.4312 52.1708 64.1144 59.7033 57.173 59.7141L43.1309 59.7359V55.1374L35.6309 61.6325L43.1309 68.1277V63.7359L57.1792 63.7141C67.2057 63.6985 73.441 52.8182 68.3857 44.1595L59.6073 29.124L56.153 31.1408L64.9313 46.1763Z" fill="black"/>
<path d="M13.0633 59.8204C6.122 59.8541 1.75706 52.3495 5.21841 46.3327L12.2206 34.1609L16.203 36.4602L14.328 26.7174L4.95303 29.965L8.75645 32.1609L1.7512 44.338C-3.24853 53.029 3.05638 63.8691 13.0827 63.8204L30.493 63.7358L30.4736 59.7359L13.0633 59.8204Z" fill="black"/>
<path d="M26.7389 8.5379C30.1804 2.50968 38.8621 2.48185 42.3422 8.48789L49.3821 20.6378L45.3996 22.9371L54.7746 26.1847L56.6496 16.4419L52.8462 18.6378L45.8031 6.4825C40.7764 -2.19288 28.2362 -2.15269 23.2652 6.55474L14.6332 21.6747L18.107 23.6579L26.7389 8.5379Z" fill="black"/>
</svg>
}

  if (scrollTop > 50) {
    //console.log('ok');
    return (
      <header>
        <div id="head2" className="small">
        <Logo />
        <h3>{title}</h3>
      </div>
      </header>
    )
  } 
  
  return (
    <header>
      <div id="head2" className="big">
          <Logo />
        <h2>{title}</h2>
      </div>
      <p>A simple guide to recycling in Singapore 🇸🇬</p>
    </header>
  )
}

export default Header
