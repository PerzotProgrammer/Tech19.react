interface ErrorProps {
    hasError: boolean
}

export default function ErrorMessage(props: ErrorProps) {
    if (props.hasError) return <p className={"Error"}>Błędne dane!</p>
    else return <></>
}