import React, { useState } from "react";

function InputDisplay({ btnPress }) {
  return <input
    type="text"
    style={{ width: "200px", fontSize: "20px" }}
    id="input"
    placeholder="Enter here"
    value={btnPress}
    readOnly
  />;

}

export default InputDisplay;
