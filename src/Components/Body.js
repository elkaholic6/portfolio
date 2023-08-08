import React, { useRef, useEffect, useState } from 'react';
import './Body.css';
import ProjectItem from './ProjectItem';
import InvisibleTreehouseBio from './PortfolioBios/InvisibleTreehouseBio';

function Body() {
  const myRef = useRef();
  const [visible, setVisible] = useState(false);
  const [projectTitle, setProjectTitle] = useState('');
  const [projectBio, setProjectBio] = useState('');

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setVisible(true)
        } else {
          setVisible(false)
        }
      })
    }, {
      threshold: 0.1
    })
    observer.observe(myRef.current)
  }, []);

  function setTreehouseData() {
    setProjectTitle("Invisible Treehouse");
    setProjectBio(`Invisible Treehouse is an innovative music streaming platform that incorporates
    a built-in NFT marketplace, empowering artists to upload and distribute their music directly to listeners worldwide. 
    With the added benefit of leveraging IPFS (InterPlanetary File System) for streaming, artists can share their creations 
    seamlessly and without intermediaries. The platform also enables artists to mint their uploaded songs as ERC1155 tokens 
    with the option to set a limited quantity of up to 10,000. Additionally, artists have the opportunity to establish ongoing 
    royalty fees of up to 10% for future transactions involving their music NFTs.`);
  }

  function setBlockExplorerData() {
    setProjectTitle("Block Explorer");
    setProjectBio(`A sleek and streamlined block explorer, leveraging Alchemy's powerful SDK to bring users
     essential blockchain insights at their fingertips. Designed with simplicity and efficiency in mind, this block explorer 
     allows users to effortlessly search transactions using transaction hashes, block numbers, and wallet addresses.
    Users can quickly retrieve transaction details, view straightforward transaction data, and stay up-to-date 
    with real-time gas prices and ETH prices.`);
  }

  return (
    <div className='body' id='portfolio'>
      <div className='shimmer body_portfolio_background'>
        portfolio
      </div>
      <div ref={myRef} className={`${visible ? 'body_reveal' : 'body_reveal_inactive'}`}>
        <div className='page_body_container'>
          <div className='body_wrapper'>
              {window.innerWidth < 768 ? (
                <div className='body_content'>
                  {projectTitle && (
                    <div className='info' id='info-mobile'>
                        <InvisibleTreehouseBio projectBio={projectBio} projectTitle={projectTitle} />
                    </div>
                  )}
                  <div className='body_items'>
                    <div>
                      <ProjectItem
                      src="images/InvisibleTreehouseImage.png"
                      text="Invisible Treehouse"
                      link="https://invisible-treehouse.web.app/"
                      handleInfoClick={setTreehouseData}
                      />
                    </div>
                    <div>
                      <ProjectItem
                      src="images/BlockExplorer.png"
                      text="Block Explorer"
                      link="https://block-explorer-alchemy-sdk.web.app/"
                      handleInfoClick={setBlockExplorerData}
                      />
                    </div>
                  </div>
                  <div className='placeholder'>
                    <p>Click on an image to view project details</p>
                  </div>
                </div>
              ) : (
                <div className='body_content'>
                  <div className='info' id='info'>
                    {projectTitle ? (
                      <InvisibleTreehouseBio projectBio={projectBio} projectTitle={projectTitle} />
                    ) : (
                      <div className='placeholder'>
                        <p>Click on an image to view project details</p>
                      </div>
                    )}
                  </div>
                  <div className='body_items'>
                    <div>
                      <ProjectItem
                      src="images/InvisibleTreehouseImage.png"
                      text="Invisible Treehouse"
                      link="https://invisible-treehouse.web.app/"
                      handleInfoClick={setTreehouseData}
                      />
                    </div>
                    <div>
                      <ProjectItem
                      src="images/BlockExplorer.png"
                      text="Block Explorer"
                      link="https://block-explorer-alchemy-sdk.web.app/"
                      handleInfoClick={setBlockExplorerData}
                      />
                    </div>
                  </div>
                </div>
              )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Body