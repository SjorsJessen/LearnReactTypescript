import React, {useState} from "react";
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
    console.log("Confirm component rendering!");
    
    const[cancelClickCount, setCancelClickCount] = useState(0);
    
    
    
    React.useEffect(() => {
        console.log("Confirm first rendering");
        return () => {
            console.log("Confirm unmounted");
        };
    }, []);
    
    const handleConfirmClick = () => {
        props.onConfirmClick();
    }

    const handleCancelClick = () => {
        const newCount = cancelClickCount + 1;
        setCancelClickCount(newCount);
        if (newCount >= 2) {
            props.onCancelClick();
        }
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
                    <button onClick={handleCancelClick} className="confirm-cancel">
                        {cancelClickCount === 0 ? props.cancelCaption : "Really?"}
                    </button>
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

const ConfirmMemo = React.memo(Confirm);
export default ConfirmMemo;
