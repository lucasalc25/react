// 4 - Template Expression

const TemplateExpression = () => {
    const name = "Lucas"

    const data = {
        age: 27,
        job: "Programador"
    }

    return (
        <div>
            <p>A soma é {2+2}</p>
            <h3>Bem vindo {name}</h3>
            <p>Sua idade é {data.age} anos e você é um {data.job}</p>
        </div>
    )
}

export default TemplateExpression