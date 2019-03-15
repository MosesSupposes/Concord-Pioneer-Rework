import React, { Component } from 'react';
import helpers from './lib/helpers'
import SmallSquare from './components/stateful/SmallSquare';
import harvesthouse from './assets/img/harvesthouse-312x146.png'
const { determineAdCategory, formatAdType, objectFromEntries } = helpers

// TODO: Format date on each ad

class App extends Component {
  constructor() {
    super()
    this.state = {
      allArticles: {
        entertainment: [],
        sports: [],
        weather: [],
        news: []
      },
  
      allAds: {
        small: {
            smallSquares: [],
            squares: []
        },
  
        medium: {
            banners: [],
            leaderboards: [],
            inlineRectangles: [],
            largeRectangle: []
        },
  
        large: {
          skyscrapers: [],
          wideSkyscrapers: [],
          fullPages: []
        }
      }
    }
    this.storeAdMetaInfo = this.storeAdMetaInfo.bind(this)
  }

  storeAdMetaInfo(metaInfo) {
    const category = determineAdCategory(metaInfo.type)
    const adType = formatAdType(metaInfo.type)
    const newAdState = Object.assign({}, this.state.allAds)
    const importantMetaInfo = objectFromEntries(
      Object.entries(metaInfo).filter(([key, value]) => key !== 'type')
    )
    // { allAdds.small.smallSquares = {id: 4, description...} }
    newAdState[category][adType].push(importantMetaInfo)

    this.setState({ allAds: newAdState }) 
  }

  // 250 x 250 – Square.
  // 200 x 200 – Small Square.
  // 468 x 60 – Banner.
  // 728 x 90 – Leaderboard.
  // 300 x 250 – Inline Rectangle.
  // 336 x 280 – Large Rectangle.
  // 120 x 600 – Skyscraper.
  // 160 x 600 – Wide Skyscraper.
  render() {
    return (
      <>
      <h1>Concord Pioneer</h1>
      <SmallSquare id="4" 
                   image={harvesthouse}
                   date={Date.now()} 
                   company={'Whatever Inc.'} 
                   description='test' 
                   storeMetaInfo={this.storeAdMetaInfo} 
      />
      </>
    )
  }
}

export default App;
