Passo a passo para rodar as aplicações 	

-Baixe o arquivo .zip no repositório do GitHub

-Clique em extrair tudo.

-Navegue até a pasta backend(Obs. existem duas pastas chamadas backend. Todos os 
comandos a seguir são executados dentro da primeira pasta, não na pasta mais interna de mesmo nome)

-É necessário ter e o python 3.11 e o comando pip instalado.

-Dentro da pasta backend pelo terminal(recomendo o terminal do VScode) execute o comando : pip install -r requirements.txt

-Em alguns casos algumas versões dos requerimentos são ignorados então se for o caso

execute os seguintes comandos:
python -m pip install Django

pip install djangorestframework django-cors-headers==3.11.0 djangorestframework-simplejwt==5.0.0 PyJWT==2.3.0

pip install requests

-Ainda dentro da mesma pasta backend execute o comando: python manage.py migrate

Agora execute o comando: python manage.py runserver
O servidor vai ser executado na porta: http://127.0.0.1:8000/
abra o navegador e use: http://127.0.0.1:8000/api/register/
pela interface do DRF é possivel que você registre um usuário e senha. 
Por questões de simplicidade para os testes, é permitido qualquer nome de usuário
e uma senha com ao menos um caracter especial, por exemplo: password@123

-Após o cadastro, vá até a rota http://127.0.0.1:8000/api/token/ e teste o usuário cadastrado. Se tudo estiver ok, será retornado um Token JWT. Nesse projeto, essa é a principal função dessa API, registrar e verificar as credenciais de um cliente front-end.
Alguns funcionalidades foram adicionadas como consumo de API externa e resposta mas sem muita complexidade nas views. Inclusive esse consumo poderia ser realizado diretamente entre o front-end e a API de cotação de moedas. Com isso a parte back-end da aplicação está finalizada.

Seguindo agora com a parte front-end

-É necessário que você tenha o node.js instalado 
-Crie uma pasta navegue até ela e execute pelo terminal o comando 
npm install --global yarn 

-Ainda dentro da pasta selecionada execute o comendo: npx create-react-app frontend

-cd frontend 

-Dentro da  pasta execute: yarn add axios dayjs jwt-decode react-router-dom@5.2.0

-  E vamos testar a configuração inicial executando: yarn start

Se tudo estiver ok,em  http://localhost:3000/  estará a configuração inicial de um app react.

-Dentro do arquivo .zip que foi baixado do repositório do GitHub, há uma pasta my-app, abra a pasta e copie duas das pastas em seu interior:  src e public

-Substitua (apague primeiro as de mesmo nome para evitar problemas) as pastas do app criado pelas pastas do arquivo baixado pelo GitHub.

-Execute novamente dentro da pasta frontend: yarn start

-Em http://localhost:3000/   desta vez você verá a página de login da aplicação front-end. 

-Digite o nome de usuário e senha que você cadastrou na etapa do back-end.

-É importante lembrar que as duas aplicações procisam estar ativas para que as partes se comuniquem. Inclusive lembre-se de manter a porta padrão 8000 no back-end devido às 

configurações das rotas no front-end.

-Após feito o login você será redirecionado para o endereço http://localhost:3000/dashboard/

Considerações finais:
Conforme o protótipo disponibilizado no Figma, a aplição buscou se manter o mais fiel possível sendo observado os mínimos detalhes do design. Algumas pequenas alterações foram necessárias para manter a coerência do contexto, como por exemplo os símbolos das moedas Euro e Dolar. O seletor de moeda foi configurado para selecionar entre Dolar, Euro e Bitcoin em relação ao Real. O botão de atualizar pode ser acionado a cada 30 segundos conforme regras da API de cotação. Buscou-se manter o layout responsivo quando visto de um aparelho mobile mas ao mesmo tempo sem distorcer a proposta de design original então optou-se por uma configuração apenas de zoon mas que se adapta a qualquer tamanho de tela, inclusive foi testado em alguns modelos diferentes. A caixa de texto com valores de variação optou-se por usar o campo PCT_change da API que seria a porcentagem de variação. Os valores do dashboard foram comparados com os da API quando atualizados ao mesmo tempo e não foi constatado incoerência. A aplicação foi reconstruída testando esses mesmos passos duas vezes para evitar qualquer transtorno por incoerência ao descrever o passo a passo para execução. Por fim, gostaria de elogiar à toda a equipe por disponibilizar um material de tão elevada qualidade para um desafio tão didático como este. 

