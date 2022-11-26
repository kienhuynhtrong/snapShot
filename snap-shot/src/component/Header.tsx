import React from "react";
import FormSearch from './FormSearch'
import Navigation from './Navigation'
const Header = () => {
  return (
    <div className="snap_wrap_headers">
      <h1>Snap Shot</h1>
      <FormSearch></FormSearch>
      <Navigation></Navigation>
    </div>
  )
}
export default Header