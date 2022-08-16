import "../styles/Button.css";

export const Button = ({funCall, label, color}) => {
    let btnColor = `btn btn-${color}`;
    return (
        <button className={btnColor} onClick={funCall}>{label}</button>
    );
}