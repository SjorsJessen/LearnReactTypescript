import React from "react";
import "./Confirm.css"

interface IProps{
    open:boolean,
    title:string;
    content:string;
    cancelCaption?:string;
    confirmCaption?:string;
    onConfirmClick: () => void;
    onCancelClick: () => void;
}

const Confirm: React.FC<IProps> = (props) =>{
    
    const handleConfirmClick = () => {
        props.onConfirmClick();
    }

    const handleCancelClick = () => {
        props.onCancelClick();
    }
    
    return (
        <div className={props.open ? "confirm-wrapper confirm-visible" : "confirm-wrapper"}>
            <div className="confirm-container">
                <div className="confirm-title-container">
                    <span>{props.title}</span>
                </div>
                <div className="confirm-content-container">
                    <p>{props.content}</p>
                </div>
                <div className="confirm-buttons-container">
                    <button onClick={handleCancelClick} className="confirm-cancel">{props.cancelCaption}</button>
                    <button onClick={handleConfirmClick} className="confirm-ok">{props.confirmCaption}</button>
                </div>
            </div>
        </div>
    );
}

Confirm.defaultProps = {
    cancelCaption: "Cancel",
    confirmCaption: "Confirm"
}

export default Confirm;