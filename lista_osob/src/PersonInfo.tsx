import type {Person} from "./Person.ts";

interface PersonInfoProp {
    person: Person
}

export default function PersonInfo(prop: PersonInfoProp) {
    return (
        <tr>
            <td>{prop.person.getLocalizedName()}</td>
            <td>{prop.person.getAge()} lat</td>
            <td>{prop.person.getHeight()} cm</td>
            <td>{prop.person.getSex()}</td>
            <td>{prop.person.isMature() ? "Tak" : "Nie"}</td>
        </tr>
    );
}