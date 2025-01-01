import products from "../database.json";

export function loadProduct({ params }) {
    const product = products.find((p) => p.id === +params.productId);

    if (!product) {
        throw new Response("404 Not found Error!", { status: 404 })
    }

    // Exemplo de erro, descomente para testar
    // throw new Response("Não autorizado", { status: 401 })

    // Exemplo de erro, descomente para testar
    // throw new Response("Erro no servidor!", { status: 500 })

    return product
}