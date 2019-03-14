import React from 'react';
import PropTypes from 'prop-types';

const GridWrapper = (props) => {
    const { children, width, noGutters, justify } = props;

    var GridWrapperClass = [];
    GridWrapperClass.push("GridWrapper");
    GridWrapperClass.push("row");
    GridWrapperClass.push("col");
    GridWrapperClass.push("col-" + width);
    GridWrapperClass.push("justify-content-" + justify);

    if (noGutters === true)
        GridWrapperClass.push("no-gutters");

    GridWrapperClass = GridWrapperClass.join(" ");

    return <div className={GridWrapperClass}>{children}</div>;
}

GridWrapper.defaultProps = {
    width: "12",
    noGutters: true,
    justify: "between"
};

GridWrapper.propTypes = {
    width: PropTypes.string,
    noGutters: PropTypes.bool,
    justify: PropTypes.string
};

export default GridWrapper;