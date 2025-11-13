interface HeaderProps {
    companyName: string,
    onReceiveSummerFootwear: () => void,
    onReceiveWinterFootwear: () => void,
    deleteSoldItems: () => void
}

export default function Header(props: HeaderProps) {
    return (
        <div className="Header">
            <h1>Polecamy buty firmy: {props.companyName}</h1>
            <br/>
            <input type="button" value="Przyjmij buty letnie" onClick={
                () => {
                    props.onReceiveSummerFootwear()
                }
            }/>
            <input type="button" value="Przyjmij buty zimowe" onClick={
                () => {
                    props.onReceiveWinterFootwear()
                }
            }/>
            <input type="button" value="Usuń wyprzedane" onClick={
                () => {
                    props.deleteSoldItems()
                }
            }/>
        </div>
    )
}