import "../styles/Output.css";

export const Output = ({name}) => {
    return (
        <div className="col-md-12 d-flex justify-content-center">
            <h1>{name}</h1>
        </div>
    );
}