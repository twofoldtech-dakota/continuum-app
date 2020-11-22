import React from "react";

export default function ToggleCourses({ active, children }) {
    // Switch all children and return the "active" one
    return children.filter((child) => child.props.name == active);
}
