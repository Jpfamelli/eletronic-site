# Manual da loja — Eletronic

Guia completo do site e do painel de controle. Escrito para quem vai usar no dia a dia,
sem tecniquês.

---

## Os endereços

| O quê | Endereço | Quem usa |
|---|---|---|
| **Site da loja** (vitrine) | `https://eletronic-taubate.netlify.app` | Clientes |
| **Painel de controle** (estoque + pedidos) | `https://eletronic-taubate.netlify.app/painel.html` | Só a equipe |

O mesmo site também fica no ar como espelho em `https://jpfamelli.github.io/eletronic-site/`
(painel em `.../painel.html`). Os dois usam o mesmo banco: tanto faz qual abrir.

O painel não aparece em lugar nenhum do site — só entra quem tem o endereço **e** uma conta
aprovada. Guarde o link nos favoritos do celular.

> 💡 **Dica:** no celular, abra o painel no navegador e use "Adicionar à tela de início".
> Ele vira um "aplicativo" com ícone próprio.

---

## Primeiro acesso (importante!)

1. Abra o painel e toque em **Criar conta**.
2. Preencha nome, e-mail e uma senha de pelo menos 8 caracteres.
3. **A primeira conta criada é a do dono** — ela já entra liberada, sem esperar nada.
4. Não pede confirmação por e-mail: criou, entrou.

Quem criar conta depois (funcionários, sócios) fica **aguardando aprovação**:
o dono abre **Equipe** no painel e toca em **Aprovar**. Sem aprovação, a pessoa não
consegue mexer em nada.

⚠️ **Crie a conta do dono antes de passar o link para qualquer pessoa.**

---

## Cadastrar um iPhone

1. Toque em **+ Novo iPhone**.
2. Preencha:
   - **Fotos** — direto da galeria do celular. Pode mandar várias; a primeira é a capa
     (dá para trocar a capa tocando em "★ capa"). As fotos são comprimidas sozinhas,
     não precisa se preocupar com tamanho.
   - **Nome** — ex.: `iPhone 16 Pro Max`
   - **Categoria** — Seminovos, Lacrados, Novos… (cada categoria é uma aba do site)
   - **Armazenamento / Cor** — ex.: `256GB`, `Titânio natural`
   - **Preço** — se deixar vazio, o site mostra **"Consultar preço"**
   - **Preço "De" riscado** — opcional, para promoção (aparece riscado em cima do preço real)
   - **Parcelamento** — texto livre, ex.: `em até 18x no cartão`
   - **Descrição** — estado do aparelho, saúde da bateria, o que acompanha…
3. Toque em **Salvar**. Pronto: **o aparelho já está no site, na mesma hora.**

### Vendeu o aparelho?
Toque em **Tirar do site** na lista. Ele some do site na hora, mas fica guardado no painel —
se entrar outro igual no estoque, é só tocar em **Pôr no site** de novo.

### Chegam vários iguais?
Use **Duplicar**: cria uma cópia pronta (fora do site) para você ajustar cor/preço e ativar.

### Destaque
Marque **Destaque** nos melhores aparelhos: eles ganham selo dourado e aparecem
primeiro na vitrine.

---

## Categorias (as abas do site)

Botão **Categorias** no topo do painel:

- **Criar** — ex.: "Acessórios", "iPads", "Promoção da semana"…
- **Renomear / mudar a ordem** — ordem menor aparece primeiro.
- **Ocultar** — esconde a aba do site sem apagar os aparelhos.
- **Apagar** — os aparelhos da categoria não são apagados, mas ficam fora do site
  até você movê-los para outra categoria.

A aba **⚡ Black Club** é fixa e não precisa de manutenção.

---

## Equipe

Botão **Equipe** no topo (a bolinha vermelha avisa quando alguém está aguardando):

- **Aprovar** — libera o acesso de quem criou conta.
- **Bloquear** — corta o acesso na hora (a pessoa é desconectada).
- **×** — remove a conta de vez.

Todo mundo que é aprovado pode mexer em tudo (produtos, categorias, configurações).
Só aprove gente de confiança.

---

## Configurações

Botão **Configurações**:

- **WhatsApp da loja** — todos os botões do site passam a chamar esse número
  (formato: só números, com 55 e DDD — ex.: `5512997463135`).
- **Instagram** — atualiza os links do site.
- **Trocar minha senha** — cada um troca a própria senha por aqui.

---

## Pedidos de entrega (aba Pedidos)

No site, a seção **"Fechou a compra? A gente leva."** (link **Entrega** no menu) tem o
agendamento por motoboy: o cliente informa nome, telefone, CPF, endereço, dia, janela de
horário (manhã, tarde, noite ou um horário específico), o produto e como vai pagar na entrega.

Assim que ele toca em **Enviar pedido**, o pedido aparece **na hora** na aba **Pedidos** do
painel — com um aviso sonoro e um número vermelho na aba mostrando quantos estão esperando.

### Os cartões do topo
- **Pedidos hoje / Esta semana / Este mês** — quantos pedidos chegaram em cada período
  (a semana começa na segunda). Toque num cartão para ver só aqueles pedidos.
- **Entregar hoje** — entregas marcadas para hoje que ainda não foram entregues.
  É a lista do motoboy do dia.

### Cada pedido
- **WhatsApp ↗** abre a conversa com o cliente já com uma mensagem pronta.
- **Mapa ↗** abre o endereço no Google Maps.
- **CPF** aparece escondido; toque em **mostrar** para ver inteiro.
- **Status** — siga o caminho: *Recebido → Confirmado → A caminho → Entregue*
  (ou *Cancelado*). Mude e toque em **Salvar**.
- **Motoboy** — escreva quem vai levar e toque em **Salvar**.
- **Copiar para o motoboy** — copia endereço, horário, cliente, produto e pagamento num
  texto pronto; é só colar no WhatsApp do motoboy.
- **Apagar** — remove o pedido de vez (pede confirmação).

Use a busca para achar um pedido pelo nome, telefone, endereço ou número.
O botão **Som de aviso** liga ou desliga o apito de pedido novo.

> Os pedidos são numerados em sequência (#0001, #0002…), e o cliente vê o número na tela
> de confirmação. Se ele mandar mensagem citando o número, é só buscar.

Pedidos feitos antes de 06/10/2026 pelo sistema antigo continuam em
`https://entregas-eletronic.replit.app/admin`.

---

## Como o site se atualiza

O site lê o catálogo direto do banco de dados, ao vivo:

- Salvou no painel → **o site muda em segundos**, até para quem já está com a página aberta.
- Não existe "publicar" nem "sincronizar". Salvou, tá no ar.
- O sistema funciona 24 horas por dia, todos os dias, e tem um vigia automático
  que mantém o banco acordado mesmo em semanas paradas.

---

## Perguntas rápidas

**Esqueci minha senha.**
Outra pessoa aprovada remove sua conta na Equipe e você cria de novo (será aprovado em seguida).
Se for o único dono e perdeu a senha, fale com o suporte técnico que configurou o site.

**Posso usar no celular?**
Sim — o painel inteiro foi desenhado para funcionar bem no celular, incluindo o envio
de fotos pela galeria/câmera.

**Quantos aparelhos posso cadastrar?**
Centenas, sem custo. As fotos são comprimidas automaticamente para não estourar o espaço.

**O que os clientes veem quando uma categoria está vazia?**
Uma mensagem simpática convidando a chamar no WhatsApp — a vitrine nunca fica "quebrada".

**O aviso de pedido novo não tocou.**
O navegador só libera som depois que você toca em qualquer lugar do painel. Deixe o painel
aberto numa aba, toque nele uma vez, e confira se **Som de aviso** está ligado.

**Os dados dos clientes estão seguros?**
Sim. Nome, telefone, CPF e endereço só podem ser lidos por quem está logado no painel.
O site consegue apenas *enviar* pedidos, nunca ler os de outras pessoas.

**Quanto custa manter isso tudo?**
R$ 0. Site e banco de dados rodam em planos gratuitos, com o vigia automático incluso.
