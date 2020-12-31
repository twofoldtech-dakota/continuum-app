import React from "react";
import { useRouter } from "next/router";

export default function ProgressBar({creditsRequired, creditsEarned}) {
    const router = useRouter();
    
    var creditsEarnedWidth = creditsEarned + "%";
    return (
        <div className="row">
        <div className="col-md-12">
        <h3 className="progress-title">Credit Earning Progress</h3>
            <div className="progress-outer">
                <div className="progress">
                    <div className="progress-bar progress-bar-info" style={{width:creditsEarnedWidth}}></div>
                    <div className="progress-value"><span>{creditsRequired}</span></div>
                </div>
            </div>
        </div>
    </div>

    );

}
