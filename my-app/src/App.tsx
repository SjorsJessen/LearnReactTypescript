import React from 'react';
import logo from './logo.svg';
import './App.css';
import Confirm from "./Confirm";
import ConfirmMemo from "./Confirm";

interface IState{
    confirmDialogOpen: boolean;
    confirmMessage: string;
    confirmVisible:boolean;
    countDown:number;
}

class App extends React.Component<{}, IState> {
    private timer: number = 0;
    private renderCount: number = 0;
    
    constructor(props: {}) {
        super(props);
        this.state = {
            confirmMessage: "Please, click confirm",
            confirmDialogOpen: false,
            confirmVisible: true,
            countDown: 10,
        };
    }

    public static getDerivedStateFromProps(props: {}, state: IState) {
        // console.log("getDerivedStateFromProps", props, state);
        return null;
    }

    public shouldComponentUpdate(nextProps: {}, nextState: IState)
    {
        // console.log("shouldComponentUpdate", nextProps, nextState);
        return true;
    }
    
    public getSnapshotBeforeUpdate(prevProps: {}, prevState: IState) {
        this.renderCount += 1;
        // console.log("getSnapshotBeforeUpdate", prevProps, prevState, {renderCount: this.renderCount});
        return this.renderCount;
    }
    
    public componentDidUpdate(prevProps: {}, prevState: IState, snapshot: number) {
        // console.log("componentDidUpdate", prevProps, prevState, snapshot, {renderCount: this.renderCount});
    }
    
    public componentDidMount() {
        this.timer = window.setInterval(() => this.handleTimerClick(), 1000)
    }

    public componentWillUnmount() {
        clearInterval(this.timer);
    }
    
    private handleOpenDialogClick = () => {
        this.setState({ confirmDialogOpen: true });
        clearInterval(this.timer);
    }
    
    private handleCancelClick = () => {
        this.setState({ 
            confirmMessage: "Take a break, I'm sure you will later", 
            confirmDialogOpen: false 
        });
        clearInterval(this.timer);
    };
    
    private handleConfirmClick = () => {
        this.setState({ 
            confirmMessage: "Cool, carry on reading!", 
            confirmDialogOpen: false 
        });
        clearInterval(this.timer);
    };

    private handleTimerClick() {
        this.setState(
            {
                confirmMessage: `Please hit the confirm button ${this.state.countDown} secs to go`,
                countDown: this.state.countDown - 1
            },
            () => {
                if (this.state.countDown <= 0) {
                    clearInterval(this.timer);
                    this.setState({
                        confirmMessage: "Too late to confirm!",
                        confirmVisible: false
                    });
                }
            }
        );
    }
    
  public render (){
      return(
          <div className="App">
              <header className="App-header">
                  <img src={logo} className="App-logo" alt="logo" />
                  <p>
                      Edit <code>src/App.tsx</code> and save to reload.
                  </p>
                  <a
                      className="App-link"
                      href="https://reactjs.org"
                      target="_blank"
                      rel="noopener noreferrer"
                  >
                      Learn React and TypeScript
                  </a>
              </header>
              <p>{this.state.confirmMessage}</p>
              {this.state.confirmVisible && (<button onClick={this.handleOpenDialogClick}>Confirm</button>)}
              {this.state.countDown > 0 &&
              (  
                  <ConfirmMemo
                      open={this.state.confirmDialogOpen}
                      title="This is where our title should go"
                      content="This is where our content should go"
                      confirmCaption="Yes, please!"
                      onConfirmClick={this.handleConfirmClick}
                      onCancelClick={this.handleCancelClick}
                  />
              )}
          </div>
        )
    }
}

export default App;
