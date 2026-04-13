const express = require('express')
const cors = require('cors')
const app = express()
const port = 8080

app.use(express.json())
app.use(cors())

function classifyTriangle(a, b, c) {
    const areValidNumbers = [a, b, c].every(
        (value) => typeof value === 'number' && Number.isFinite(value) && value > 0
    )

    if (!areValidNumbers) {
        return {
            status: 400,
            body: {
                isTriangle: false,
                error: 'a, b i c muszą byc dodatnimi liczbami'
            }
        }
    }

    const isTriangle = a + b > c && a + c > b && b + c > a

    if (!isTriangle) {
        return {
            status: 422,
            body: {
                isTriangle: false,
                error: 'Podane wartości nie tworzą trójkąta'
            }
        }
    }

    const isEquilateral = a === b && b === c // Równoboczny

    const isIsosceles = a === b || a === c || b === c // Równoramienny

    const isRight = // Prostokątny
        a * a + b * b === c * c ||
        a * a + c * c === b * b ||
        b * b + c * c === a * a


    return {
        status: 200,
        body: {
            isTriangle: true,
            isEquilateral: isEquilateral,
            isIsosceles: isIsosceles,
            isRight: isRight,
        }
    }
}

app.get('/triangle/:a/:b/:c/', (req, res) => {
    const a = Number(req.params.a)
    const b = Number(req.params.b)
    const c = Number(req.params.c)

    const result = classifyTriangle(a, b, c)
    return res.status(result.status).json(result.body)
})

app.post('/triangle/', (req, res) => {
    const a = Number(req.body.a)
    const b = Number(req.body.b)
    const c = Number(req.body.c)

    const result = classifyTriangle(a, b, c)
    return res.status(result.status).json(result.body)
})


app.listen(port, () => {
    console.log(`Nasłuchiwanie na porcie ${port}`)
})
