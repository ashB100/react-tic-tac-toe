import React from "react";

// A Functional component, also a controlled component that receives its
// value from the parent
export function Square(props) {
    // Note that onClick={props.onClick()} won't work as it would call
    // props.onClick immediately instead of passing it down
    return (
        <button className="square" onClick={props.onClick}>
            {props.value}
        </button>
    );
}
