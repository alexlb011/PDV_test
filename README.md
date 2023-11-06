
How test

    swagger: http://localhost:3000/doc

    // run in http://localhost:3000
    BackEnd{
        npm i
        npm run server
    

     // run in http://localhost:5173
    FrontEnd{
        npm i
        npm run dev
    }


### Descriçao:
Um restaurante precisa poder registrar suas vendas de forma fácil e rápida, este trabalha com preparo de comidas rápidas e o método atual por comanda deixa o processo como um todo mais lento. O restaurante gostaria de ter um ambiente intuitivo listando os produtos mais vendidos e possibilitando a fácil inserção desses no checkout, ele também gostaria de um visual simples, porém moderno.

### Histórias de Usuário 🧑‍🍳
* O usuário poderá ver uma pequena quantidade de produtos na tela para seleção rápida.
* O usuário terá a opção de digitar o nome ou código para encontrar o produto.
* O usuário irá poder adicionar/remover itens e acompanhar o resumo do pedido.
* O usuário poderá ver o total e o troco.
* Deverá poder incluir o nome do cliente para ser entregue o pedido.
* Ao finalizar o pedido este deverá ser impresso em uma via para o cliente (impressora térmica), liberando a tela para o próximo pedido.
* O pedido deverá aparecer para a cozinha junto ao nome do cliente.
* A cozinha poderá dar baixa nos pedidos concluídos.
  
### Histórias Bônus (opcionais)
* Os pedidos devem aparecer para a cozinha em tempo real.
* O usuário poderá incluir uma observação a cozinha.
* O usuário poderá atribuir múltiplas formas de pagamento na finalização do pedido.
* Os pedidos baixados devem aparecer em uma tela com o nome do cliente, apitando para ser feito a retirada.

