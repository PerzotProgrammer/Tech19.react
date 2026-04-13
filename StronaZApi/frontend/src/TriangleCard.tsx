import type {ApiResponse} from "./ApiResponse.tsx";

export default function TriangleCard(params: { data: ApiResponse }) {


    let triangleImgSrc = "";
    if (params.data.isEquilateral) triangleImgSrc = "./rownoboczny.png";
    else if (params.data.isIsosceles) triangleImgSrc = "./rownoramienny.png";
    else if (params.data.isRight) triangleImgSrc = "./prostokatny.png";
    else if (params.data.isTriangle) triangleImgSrc = "./trojkat.png";

    return (
        <>
            {params.data.isTriangle ?
                <div>
                    <p>WARTOŚCI TWORZĄ TRÓJKĄT</p>

                    {params.data.isEquilateral || params.data.isIsosceles || params.data.isRight ?
                        <>
                            <p>Specjalne własności</p>
                            {params.data.isEquilateral ?
                                <p>Równoboczny</p> : ""}
                            {params.data.isIsosceles && !params.data.isEquilateral ?
                                <p>Równoramienny</p> : ""}
                            {params.data.isRight ?
                                <p>Prostokątny</p> : ""}
                        </>
                        : ""
                    }

                    <img src={triangleImgSrc} alt={triangleImgSrc}/>
                </div>
                :
                <div>
                    <p>WARTOŚCI NIE TWORZĄ TRÓJKĄTA</p>
                </div>
            }
        </>
    )
}