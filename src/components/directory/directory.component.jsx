import { render } from "@testing-library/react";
import React from "react";

import MenuItem from "../menu-item/menu-item.component";
import { connect } from "react-redux";

import { selectDirectorySections } from "./directory.selectors";
import { createStructuredSelector } from "reselect";

// Needs to be a class because we will use State
const Directory = ({ sections }) => {
  return (
    <div className="directory-menu">
      {sections.map(({ id, ...otherSectionProps }) => (
        <MenuItem key={id} {...otherSectionProps} />
      ))}
    </div>
  );
}; // end class

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections,
});
export default connect(mapStateToProps)(Directory);
