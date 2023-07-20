import React from "react";
import Confetti from "react-confetti";
import Moon from "../images/Moon512.png";
import RealMoon from "../images/RealMoon.png";

const HBD = (props) => {
    //States
    const [celebrate, set_celebrate] = React.useState(false);

    const reveal = () => {
        set_celebrate(() => true);
    };

    const reset = () => {
        set_celebrate(() => false);
    };

    return (
        <div
            className={`hbd${
                props.dark_schema ? " dark-schema" : " light-schema"
            }`}
        >
            {celebrate && <Confetti />}
            {!celebrate && <h2>Moon</h2>}
            {celebrate && <h2>Real Moon</h2>}

            {!celebrate && <img src={Moon} className="moon-image" alt="Moon" />}
            {celebrate && (
                <img
                    src={RealMoon}
                    className="real-moon-image"
                    alt="Real Moon"
                />
            )}

            {!celebrate && <p className="celebrate-instruct">Click to reveal the <b>Real Moon</b></p>}
            {celebrate && (
                <span className="celebrate-congrats">Happy Birthday !!!</span>
            )}
            {!celebrate && (
                <button
                    className="celebrate-button dark-bg"
                    id="roll_button"
                    onClick={reveal}
                >
                    Reveal
                </button>
            )}
            {celebrate && (
                <button
                    className="reset-button dark-bg"
                    id="roll_button"
                    onClick={reset}
                >
                    Hide
                </button>
            )}
        </div>
    );
};
export default HBD;