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

class Confirm extends React.Component<IProps>{
    public static defaultProps = {
        cancelCaption: "Cancel",
        confirmCaption: "Confirm"
    }
    
    public render() {
        return (
            <div className={this.props.open ? "confirm-wrapper confirm-visible" : "confirm-wrapper"}>
                <div className="confirm-container">
                    <div className="confirm-title-container">
                        <span>{this.props.title}</span>
                    </div>
                    <div className="confirm-content-container">
                        <p>{this.props.content}</p>
                    </div>
                    <div className="confirm-buttons-container">
                        <button onClick={this.handleCancelClick} className="confirm-cancel">{this.props.cancelCaption}</button>
                        <button onClick={this.handleConfirmClick} className="confirm-ok">{this.props.confirmCaption}</button>
                    </div>
                </div>
            </div>
        );
    }

    private handleConfirmClick = () => {
        this.props.onConfirmClick();
    }

    private handleCancelClick = () => {
        this.props.onCancelClick();
    }
}

export default Confirm;