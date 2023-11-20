import React from 'react'
import { ReactComponent as AdImage } from "../img/AdImage.svg";
export default function Ad({ showAd }) {
  if(showAd){
  return (
    <div>
      <AdImage alt="광고" />
    </div>
  );
   } else {
      return null; // 광고를 표시하지 않음
  }
}
