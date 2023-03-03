Dashboard de cotações de moedas

O projeto em questão trata-se de um dashboard que apresenta a cotação de moedas que foi desenvolvido durante um processo seletivo para a empresa Beeteller. O objetivo 
do projeto é justamente avaliar as habilidades dos aspirantes a desenvolvedor fullstack da empresa. A aplicação integra um app React.js no front-end e um app Django 
no back-end. A aplicação front-end conta com uma página de login, onde os dados de login são enviados para autenticação através da API backend que em seguida retorna 
um token JWT que é então verificado na aplicação front-end antes de liberar a página do dashboard de cotações. A API então cumpre a função de cadastro e armazenamento 
de dados de usuários, além de retransmitir dados consumidos através de uma API de cotações de moedas externa. 
Motivações para escolha das tecnologias envolvidas

Para esse tipo de aplicação existem muitas bibliotecas e frameworks capazes de entregar excelentes resultados, inclusive o uso de JavaScript puro e node.js seria 
perfeitamente possível.
Conforme os interesses da empresa em questão, seria preferível o uso da biblioteca React para o front-end e node.js ou Django para o back-end, mas foi deixado bem 
claro que poderia ser usado a tecnologia que o candidato se sinta mais confortável e com maior performance. O Django web framework é uma excelente escolha para 
aplicações back-end. Trata-se de uma ferramenta robusta, fácil de escalar e com uma grande gama de recursos nativos para aplicações como autenticação de usuário, ORM 
(Object Relational Model) para manipulação de banco de dados, views baseadas em classes genéricas entre outros recursos que tornam o desenvolvimento de APIs muito 
mais rápido e inclusive com bastante recursos de segurança. Permitindo assim que o desenvolvedor possa dedicar mais tempo configurando e resolvendo problemas 
relacionados às regras de negócios e menos problemas relacionados à codificação.

Passo a passo para iniciar as aplicações
Back-end
É necessário instalar 
-Python 3.11
-Instale o pip(windows) ou pip3(linux)
-Instale o django: pip install django
-Instale o Django REST Framework: pip install djangorestframework
-pip install djangorestframework django-cors-headers==3.11.0 djangorestframework-simplejwt==5.0.0 PyJWT==2.3.0 
-git clone o repositório ou baixe o arquivo.zip e extraia se preferir
-No mesmo repositório onde estiver o arquivo ‘manage.py’ execute o comando:
python manage.py runserver

O servidor está configurado por padrão para rodar na porta http://127.0.0.1:8000/
Você pode então desejar rodar essa aplicação em outra porta por exemplo: http://0.0.0.0:8000/ lembrando que a aplicação front-end está configurada para a porta 
padrão. Então caso essa configuração seja alterada lembre de alterar em ambos os casos.

A escolha da porta fica a critério das suas necessidades. Por exemplo, caso você deseje rodar essa aplicação em um servidor na nuvem e deseja usar a configuração de 
ip público da máquina, é interessante usar http://0.0.0.0:8000/

Na maioria dos casos essas configurações são suficientes para iniciar a aplicação mas pode ocorrer um caso ou outro de ser necessário adicionar algum módulo 
remanescente.
O arquivo de requerimentos contém uma lista muito extensa de módulos e se preferir pode executa-lo: -pip install -r requirements.txt

A partir deste ponto já é possível verificar o funcionamento da nossa API. Abra o seu navegador no endereço http://127.0.0.1:8000/ você verá o modo debug indicando as 
rotas configuradas na raiz, nesse caso /admin e /api.

Navegando até http://127.0.0.1:8000/api você verá a lista com as rotas da API de cotações. 
[
    "/api/token/",
    "/api/register/",
    "/api/token/refresh/"
]
Veja que temos "/api/token/" onde o front-end envia os dados de login e recebe de volta um token JWT para acessar a página privada de dashboard. Em "/api/register/" 
temos a rota para o registro de usuários e por fim a ultima rota para renovar a seção de usuário sem ser necessário solicitar novamente e-mail e senha.

Front-end

É necessário que você tenha o node.js instalado 

No mesmo diretório onde se encontra o arquivo yarn.lock

-npm install

-npm install yarn 
-Dentro do mesmo diretório execute: yarn add axios dayjs jwt-decode react-router-dom@5.2.0

-npm start ou yarn start

-Em http://localhost:3000/   desta vez você verá a página de login da aplicação front-end. 

-Digite o nome de usuário e senha que você cadastrou na etapa do back-end.

-É importante lembrar que as duas aplicações procisam estar ativas para que as partes se comuniquem. Inclusive lembre-se de manter a porta padrão 8000 no back-end devido às 

configurações das rotas no front-end.

-Após feito o login você será redirecionado para o endereço http://localhost:3000/dashboard/

Considerações finais:
Conforme o protótipo disponibilizado no Figma, a aplição buscou se manter o mais fiel possível sendo observado os mínimos detalhes do design. Algumas pequenas 
alterações foram necessárias para manter a coerência do contexto, como por exemplo os símbolos das moedas Euro e Dolar. O seletor de moeda foi configurado para 
selecionar entre Dolar, Euro e Bitcoin em relação ao Real. O botão de atualizar pode ser acionado a cada 30 segundos conforme regras da API de cotação. Buscou-se 
manter o layout responsivo quando visto de um aparelho mobile mas ao mesmo tempo sem distorcer a proposta de design original então optou-se por uma configuração 
apenas de zoon mas que se adapta a qualquer tamanho de tela, inclusive foi testado em alguns modelos diferentes. A caixa de texto com valores de variação optou-se por 
usar o campo PCT_change da API que seria a porcentagem de variação. Os valores do dashboard foram comparados com os da API quando atualizados ao mesmo tempo e não foi 
constatado incoerência. A aplicação foi reconstruída testando esses mesmos passos duas vezes para evitar qualquer transtorno por incoerência ao descrever o passo a 
passo para execução. Por fim, gostaria de elogiar à toda a equipe por disponibilizar um material de tão elevada qualidade para um desafio tão didático como este. 

