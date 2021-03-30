﻿import * as React from "react";

interface ITabsContext {
    activeName?: string;
    handleTabClick?: (name: string) => void;
}
const TabsContext = React.createContext<ITabsContext>({});

interface IState {
    activeName: string;
}

class Tabs extends React.Component<{ }, IState> {
    public static Tab: React.FC<ITabProps> = props => (
        <TabsContext.Consumer>
            {(context: ITabsContext) => {
                const activeName = context.activeName ? context.activeName : props.initialActive ? props.name : "";
                const handleTabClick = (e: React.MouseEvent<HTMLLIElement>) =>
                {
                    if (context.handleTabClick) {
                        context.handleTabClick(props.name);
                    }
                };
                return (
                    <li onClick={handleTabClick} className={props.name === activeName ? "active" : ""}>
                        {props.children}
                    </li>
                );
            }}
        </TabsContext.Consumer>
    );

    private handleTabClick = (name: string) => {
        this.setState({ activeName: name });
    };
    
    public render() {
        return (
            <TabsContext.Provider 
                value={{activeName: this.state ? this.state.activeName : "", handleTabClick: this.handleTabClick}}
            >
                <ul className="tabs">{this.props.children}</ul>
            </TabsContext.Provider>
        );
    }
}

export default Tabs;

interface ITabProps {
    name: string;
    initialActive?: boolean;
}