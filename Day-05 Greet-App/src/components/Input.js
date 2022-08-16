import "../styles/Input.css";

export const Input = ({funCall, label, val}) => {
    return (
        <div className="col-md-6">
            <input value={val} onChange={funCall} type="text" class="form-control" placeholder={label} aria-label={label}/>
        </div>
    );
}