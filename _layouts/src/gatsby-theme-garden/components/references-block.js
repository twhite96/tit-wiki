import React from "react";
import Reference from "gatsby-theme-garden/src/components/reference";

import "gatsby-theme-garden/src/components/references-block.css";

const ReferencesBlock = ({ references }) => {
  const footer = (
    <React.Fragment>
      <p>
      Have opinions? Hot takes? You can send them to me at the following <em>exclusive</em> web addresses. 
      You can <a href="mailto:tiff@omg.lol">email me</a> or 
      browse through <a href="https://tiffany.lol">my bio</a> to 
      find other ways to connect with me.
      </p>
    </React.Fragment>
  );

  if (!references.length) {
    return <div className="references-block">{footer}</div>;
  }

  return (
    <div className="references-block">
      <h3>Links to this note</h3>
      <div>
        {references.map((ref) => (
          <Reference node={ref} key={ref.id} />
        ))}
      </div>
      <hr />
      {footer}
    </div>
  );
};

export default ReferencesBlock;