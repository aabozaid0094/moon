import React from "react";
import Confetti from "react-confetti";
import Moon from "../images/Moon512.png";

const HBD = (props) => {
    //States
    const [celebrate, set_celebrate] = React.useState(false);

    // Effects
    React.useEffect(() => {
        set_celebrate(() => {
            return true;
        });
    }/*, [tenzies]*/);

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
            <h2>Happy Birthday</h2>
            <img src={Moon} className="moon-image" alt="Moon" />
            <p>
                Click Celebrate to celebrate ^_^
            </p>
            {celebrate && (
                <span className="celebrate-congrats">Congrats!!!</span>
            )}
            {!celebrate && (
                <button
                    className="celebrate-button dark-bg"
                    id="roll_button"
                    onClick={set_celebrate}
                >
                    Celebrate
                </button>
            )}
            {celebrate && (
                <button
                    className="reset-button dark-bg"
                    id="roll_button"
                    onClick={reset}
                >
                    Reset
                </button>
            )}
        </div>
    );
};
export default HBD;
