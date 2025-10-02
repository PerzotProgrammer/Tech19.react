import {Component, type ReactNode} from "react";


interface ClassComponentProps {
    title: string
}

interface ClassComponentState {
    content: string
}

export class ClassComponent extends Component<ClassComponentProps, ClassComponentState> {

    constructor(props: ClassComponentProps) {
        super(props);
        this.state = {
            content: "something",
        };
    }

    render(): ReactNode {
        return (
            <div className="classComponent">
                <h1>{this.props.title}</h1>
                <p>Write something: {this.state.content}</p>
                <input type="text" value={this.state.content} placeholder="Write here..."
                       onChange={event => {
                           this.setState({content: event.target.value})
                       }}/>
                <input type="button" value="Clear"
                       onClick={() => {
                           this.setState({content: ""})
                       }}/>
            </div>
        )
    }
}