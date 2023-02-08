import React, { useContext } from "react";
import {GlobalInfo} from './App';
import SuperChild from "./SuperChild";

function Child() {
    const {appColor, getDay} = useContext(GlobalInfo);
    console.warn('AppColor : ',appColor)
    return (
      <div>
        <h1 style={{color: appColor}}>Child Component</h1>
        <SuperChild/>
      </div>
    );
  }
  
  export default Child;