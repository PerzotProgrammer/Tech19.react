export default function InfoSection() {
    return (
        <div className={"InfoSection"}>
            <h3 className={"SectionTitle"}>Postać ogólna:</h3>
            <p className={"InfoMath"}>ax<sup>2</sup> + bx + c = 0</p>
            <p className={"InfoMath"}>Wyróżnik równania kwadratowego</p>
            <p className={"InfoSubcontent"}>
                &#916; = b<sup>2</sup> - 4ac
                <ul>
                    <li>jeżeli &#916; &gt; 0 to x ma dwa rozwiązania</li>
                    <li>jeżeli &#916; = 0 to x ma jedno rozwiązanie</li>
                    <li>jeżeli &#916; &lt; 0 to x nie ma rozwiązań</li>
                </ul>
            </p>
        </div>
    )
}