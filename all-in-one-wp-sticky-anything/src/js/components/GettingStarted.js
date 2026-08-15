const { useState } = wp.element;

import Content from "./GettingStarted/Content";
import Header from "./GettingStarted/Header";

export default function GettingStarted() {

    return (
        <div className="ai1wpsa-getting-started-wrap">
            <Header />
            <Content />
        </div>
    )

}