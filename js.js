var lista_de_produtos = []


function projeto() {
    while (true) {
        var opcao = prompt(`
        bem vindo ao casdatro de produtos! :)
        
        1-cadastrar produto
        2-remover produto
        3-editar produto
        4-ver produtos
        5- sair
        `)
        if (opcao == 1) {
            /**codigo para adicionar produtos */
            cadastro()
        } else if (opcao == 2) {
            /**codigo para remover produtos */
            remover()
        } else if (opcao == 3) {
            /**codigo para editar produtos */
            editar()
        } else if (opcao == 4) {
            /**codigo para ver os produtos */
            olhar_produtos()
        } else if (opcao == 5) {
            break
        }


    }
}

function cadastro() {
    var adicionar = {
        nome: "",
        marca: "",
        preco: ""
    }

    adicionar.nome = prompt("insira o nome")
    adicionar.marca = prompt("insira a marca")
    adicionar.preco = prompt("insira o preço")
    lista_de_produtos.push(adicionar)

}

function olhar_produtos() {
    var texto = ``
    for (let i = 0; i < lista_de_produtos.length; i++) {

        texto += `nome: ${lista_de_produtos[i].nome} marca: ${lista_de_produtos[i].marca} preço: ${lista_de_produtos[i].preco}\n`

    }
    alert(texto)
}

function remover() {
    var remover = `produtos para remover:\n`
    for (let i = 0; i < lista_de_produtos.length; i++) {

        remover += `nome: ${lista_de_produtos[i].nome} marca: ${lista_de_produtos[i].marca} preço: ${lista_de_produtos[i].preco}\n`

    }
    var produto_desejado = alert(remover); 
    var outro=prompt(`qual preduto você deseja remover?`);
    var remove = (remove)-1
    lista_de_produtos.splice(remove,1)
    alert("produto removido :)")
}


function editar() {
    var editar = `produtos:\n`
    for (let i = 0; i < lista_de_produtos.length; i++) {

        editar += `nome: ${lista_de_produtos[i].nome} marca: ${lista_de_produtos[i].marca} preço: ${lista_de_produtos[i].preco}\n`

    }
    var produto_desejado = prompt(editar+`qual preduto você deseja editar?`);
    lista_de_produtos[produto_desejado - 1].nome = prompt("digite o novo nome")
    lista_de_produtos[produto_desejado - 1].marca = prompt("digite a nova marca")
    lista_de_produtos[produto_desejado - 1].preco = prompt("digite o novo preço")
    }