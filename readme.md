# AGENDA DE COMPROMISSOS

  O projeto a seguir foi idealizado de maneira a implementar o conceito de armazenamento de dados no navegador, a partir do Local Storage. Desse modo, a ferramenta permite registrar um novo compromisso, informando a descrição, data e horário. Após incluir um novo compromisso, o sistema permite que você possa definir o compromisso como concluído ou excluí-lo.

![Imagem inicial da ferramenta](/assets/img/1.png)

## Como utilizar

- A ferramenta consiste em apenas uma tela, onde serão inseridos os seguintes valores:
  - uma descrição para o novo compromisso;
  - data do compromisso;
  - hora do compromisso.

![Painel de input de dados](/assets/img/2.png)

- Ao inserir os dados, deve-se apertar o botão de "Criar compromisso", para que os dados possam ser apresentados na tela.

### Por dentro do código

- Primeiramente é criada uma lista para armazenamento dos itens, ou recupera os dados, caso já exista previamente uma lista:
```javascript
const items = JSON.parse(localStorage.getItem("items")) || [];
```

- A partir de um evento de "submit" de um form, o dados serão capturados dos seus respectivos inputs:
```javascript
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const description = e.target.elements["description"];
  const date = e.target.elements["date"];
  const time = e.target.elements["time"];
```

- A partir dos dados inseridos, cria-se um objeto com os atributos correspondentes:
```javascript
const item = {
    id: String(items.length),
    description: description.value,
    date: date.value,
    time: time.value,
    isCompleted: false,
  };
```

### Considerações sobre o projeto

De modo geral, foi a primeira experiência com diversos recursos, como por exemplo:
- armazenamento de dados, juntamente com a criação e conversão de dados de uma lista.
- criação com objetos;
- manipulação de dados de uma lista dentro do Local Storage.

#### Etapas do projeto

- [x] DEFINIR PALETA DE CORES;
- [x] DEFINIR DESIGN DA PÁGINA;
- [x] APLICAR AÇÃO DE CADASTRO DE ITEM;
- [x] APLICAR AÇÃO DE LISTAR ITEM;
- [x] APLICAR AÇÃO DE EDIÇÃO DE ITEM;
- [x] APLICAR AÇÃO DE EXCLUSÃO DE ITEM;
- [ ] VALIDAR CAMPOS VAZIOS;