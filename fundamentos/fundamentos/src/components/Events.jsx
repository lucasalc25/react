// 6 - Eventos

import TemplateExpression from "./TemplateExpression";

const Events = () => {
    const handleClick = (e) => {
        console.log(e)
        console.log("Executou")
    };

    // 8 - Função de renderização
    const renderSomething = (x) => {
        if(x) {
            return <TemplateExpression />
        } else {
            return <h1>Renderizando outra coisa</h1>;
        }
    }

    return (
        <div>
            <div>
                <button onClick={() => console.log("Teste")}>
                    Clique aqui
                </button>
            </div>
            {/* 7 - evento com função */}
            <div>
                <button onClick={handleClick}>
                    Clique aqui - com função
                </button>
            </div>
            {/* 8 - Função com render */}
            {renderSomething(true)}
            {renderSomething(false)}
        </div>
    )
}

export default Events