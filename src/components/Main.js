import React from "react";

export const Main = (props) => {
    return (
        <div>
                    <button
                        className="btn btn-primary"
                        onClick={() => props.changeUsername('Anna')}>{props.button}
                    </button>
        </div>
    );
};