const app = require("./server")
const supertest = require("supertest")
const request = supertest(app)

// Preguntas
describe("/preguntas", () => {
    it("Debería responder con estado 200", async () => {
        const response = await request.get("/preguntas")
        expect(response.status).toBe(200)
    })
})

describe("/preguntas", () => {
    it("Todas las preguntas deberían de tener la estructura de nuestro modelo de Preguntas.", async () => {
        const response = await request.get("/preguntas")
        listaPreguntas = JSON.parse(response.text)
        for (pregunta of listaPreguntas){
            expect(pregunta).toHaveProperty('pregunta')
            expect(pregunta).toHaveProperty('opciones')
            expect(pregunta).toHaveProperty('categoria')
            expect(pregunta).toHaveProperty('solucion')
        }
    })
})

// Categorias
describe("/categorias", () => {
    it("Debería contener 24 elementos", async () => {
        const response = await request.get("/categorias")
        json = JSON.parse(response.text)
        expect(json).toHaveLength(24)
    })
})

// Partidas
describe("/partidas", () => {
    it("should return a response", async () => {
        const response = await request.get("/partidas")
        expect(response.status).toBe(200)
    })
})

