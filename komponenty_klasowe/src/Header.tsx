import {Component, type ReactNode} from "react";

interface HeaderProps {
    shopName: string
    shopMotto: string
}

export class Header extends Component<HeaderProps, null> {

    constructor(props: HeaderProps) {
        super(props);
    }

    render(): ReactNode {
        return (<>
            <h1 className={"shopName"}>Salon samochodowy <span className={"shopNameItalic"}>{this.props.shopName}</span></h1>
            <h3 className={"shopMotto"}>{this.props.shopMotto}</h3>
        </>);
    }

}