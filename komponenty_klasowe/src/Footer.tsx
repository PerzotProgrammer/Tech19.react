import {Component, type ReactNode} from "react";

interface FooterProps {
    openFrom: string
    openTo: string
}

export class Footer extends Component<FooterProps, null> {

    constructor(props: FooterProps) {
        super(props);
    }

    render(): ReactNode {
        return (<div className={"footer"}>
            <h4>Zapraszamy codziennie w godzinach:</h4>
            <p>{this.props.openFrom} - {this.props.openTo}</p>
        </div>);
    }

}