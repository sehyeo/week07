import React, {Component} from 'react'
//import Home from './pages/Home';
import Ad from './Ad';

class AdPage extends Component {
  constructor(props){
    super(props);
    this.state={ showAd: true, }; // 광고 표시 여부를 관리
  };

  // 광고 표시 여부를 토글하는 메서드
  handleToggleClick = ( ) => {
    this.setState((prevState) => ({
      showAd: !prevState.showAd,
    }));
  }

  render() {
    return (
      <div>
        <Ad showAd={this.state.showAd} />
        <button onClick={this.handleToggleClick}>
          {this.state.showAd ? '광고 숨기기' : '광고 표시하기'}
        </button>
      </div>
    );
  }
}
export default AdPage;