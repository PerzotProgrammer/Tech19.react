import {Component} from "react";

interface CarCardProps {
    carBrand: string
    carName: string
    carModel: string
    carPrice: number
    productionYear: number
    horsePower: number
    engineCapacity: number
    imgPath: string
}

export class CarCard extends Component<CarCardProps, null> {

    private removeCallback: () => void;

    constructor(props: CarCardProps) {
        super(props);
        this.removeCallback = () => {
        };
    }

    render() {
        return (
            <div className={"carCard"}>
                <p className={"carHeader"}>{this.props.carName} {this.props.carModel}</p>
                <img className={"carImg"} src={this.props.imgPath} alt={this.props.imgPath}/>
                <p>Producent: {this.props.carBrand}</p>
                <p>Rok produkcji: {this.props.productionYear}</p>
                <p>Pojemność silnika: {this.props.engineCapacity}</p>
                <p>Moc silnika: {this.props.horsePower}</p>
                <p className={"carPrice"}>Cena: {this.props.carPrice}</p>
                <input className={"carButton"} type="button" value="Kup samochód" onClick={() => {
                    this.buyCar()
                }}/>
            </div>
        )
    }

    setCallback(callback: () => void) {
        this.removeCallback = callback;
    }

    buyCar() {
        alert(`Gratulację!\nZakupiono ${this.props.carName} ${this.props.carModel}`)
        this.removeCallback()
    }
}