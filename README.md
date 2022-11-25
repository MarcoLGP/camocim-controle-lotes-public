<h1 align="center">Camocim controle de lotes (proposta)</h1>

<p align="center">
    <img src="./renderer/public/images/camocim-project-image.png" width="1200" height="400">
</p>

<h1 align="center">
    <a href="https://github.com/MarcoLGP/camocim-controle-lotes-public/releases/download/v1.0.0/Camocim-controle-de-lotes-Setup-1.0.0.exe" >🔗 Download link (Windows)</a>
</h1>
<p align="center">🚀 Camocim controle de lotes</p>

Tabela de conteúdos
=================
<!--ts-->
   * [Sobre](#Sobre)
   * [Pedidos](#Pedidos)
   * [Relatórios](#Relatorios)
   * [Notificações](#Notificacoes)
   * [Extra](#Extra)
   * [🚧Considerações finais🚧](#ConsideracoesFinais)
<!--te-->

<h1 id=="Sobre">Sobre</h1>
<p>Projeto possui o propósito de organizar o controle de lotes que antes era feito de forma manual, e algumas funções extras que serão detalhadas logo abaixo.</p>

<h1 id="Pedidos">Pedidos</h1>
<p>Inicialmente os pedidos são puxados da Api externa do sistema de ERP do Omie, no meio do processo, caso haja pedidos que exijam uma quantidade maior de café que possui disponível nos lotes em aberto, o sistema elabora uma lista dos cafés em ordem crescente que mais estão em falta, para que a produção possa torrar os cafés de forma mais acertiva.</p>
<p>Após isso, o sistema coloca os pedidos na lista de pedidos em aberto para que possa alimentar com o lote e a quantidade, após isso, envia as informações para o Omie gerar a NF de acordo com as informações fornecidas.</p>

<h1 id="Relatorios">Relatórios</h1>
<p>A principal funcionalidade que a empresa necessitava, um controle de lotes com consulta e armazenamento de dados de acordo com o que o selo IBD exige.</p>
<p>Consulta poderosa: o usuário pode gerar relatórios de diversos lotes de diversos cafés em um único arquivo xlsx excel.</p> 

<h1 id="Notificacoes">Notificações</h1>
<p>A cada atividade dos funcionários do sistema é gerada uma notificação.</p>
</p>Com a integração da Api externa do sistema da Loja integrada é notificado toda vez que um pedido chegou, e automaticamente é alterado o status e enviado para seção de separar estoque do sistema ERP do Omie (processo anteriormente manual).</p>

<h1 id="Extra">Extra</h1>
<p>Através da Api dos correios e das transportadoras do sistema em que a empresa tem parceria, pode-se atualizar o cliente pelo rastreio, sendo a opção (Local), apenas o informe que saiu para a entrega.</p>
<p>Atualização de quantidade de embalagens para fornecedores, chegando a uma certa quantidade embalagens em estoque o fornecedor é informado da quantidade atual de embalagens e que é necessária uma nova remessa.</p>

<h1 id="ConsideracoesFinais">🚧Considerações Finais🚧</h1>
<p>Versão de proposta, versão final em repositório privado.</p>