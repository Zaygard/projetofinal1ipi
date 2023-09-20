function projeto() {
    while (true) {
        
        
        
        var lista_de_produtos = []
        var opcao = prompt(`
        bem vindo ao casdatro de produtos! :)
        
        1-cadastrar produto
        2-remover produto
        3-editar produto
        4-ver produtos
        `)
        if (opcao == 1) {
            /**codigo para adicionar produtos */
            cadastro()
        } else if (opcao == 2) {
            /**codigo para remover produtos */
        } else if (opcao == 3) {
            /**codigo para editar produtos */
        } else if (opcao == 4) {
            /**codigo para ver os produtos */
            olhar_produtos()
        }
    }
        
        function cadastro() {
            var adicionar = {
                nome: "",
                marca: "",
                preco: ""
            }
            adicionar.nome = prompt("nome");
            adicionar.marca = prompt("marca")
            adicionar.preço = prompt("preco")
            lista_de_produtos.push(adicionar)
        }

        function olhar_produtos() {
            var texto =""
            for (let i = 0; i < lista.length; i++) {
                texto+= `nome:${lista_de_produtos[i].nome} marca:${lista_de_produtos[i].marca} preço:${lista_de_produtos[i].preco}\n`
            }
            alert(texto)
        }
    }
