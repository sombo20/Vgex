# Vgex Virtual Regex Test

**
     Em ciência da computação, uma expressão regular ou "Regex" (ou os estrangeirismos regex ou regexp [1] , abreviação do inglês regular expression) provê uma forma concisa e flexível de identificar cadeias de caracteres de interesse, como caracteres particulares, palavras ou padrões de caracteres. 
**

**
    Expressões regulares são escritas numa linguagem formal que pode ser interpretada por um processador de expressão regular, um programa que serve um gerador de analisador sintático ou examina o texto e identifica as partes que casam com a especificação dada.
**

*Vgex É um Simples Testador de expressões Regulares,online*

*Oque  o Vgex  Faz?*

-Lêr uma cadeia de Palavras ou String.
-Escrever expressões para validar essas palavras.
-Retorna a expressão do caracter pedido.
-Analisar se a expressão digitada é válida ou não.

### Exemplo 
**_Na imagem abaixo estamos a validar um conjunto de número se casa com oque nós pedimos na nossa Expressão_**
![](https://github.com/sombo20/Vgex/blob/main/src/2022-03-21%2020.20.37.png)

##Aqui eu listo algumas expressão para serem testadas como:
-[x]Validar Email
*
/^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.([a-z]+)?$/i;
*
-Etc
-Da um clone e contribua...

######Um uso difundido de expressões regulares é a filtragem de informação em bancos de dados de texto. Por exemplo, num arquivo de texto contendo cadastros de pessoas e suas datas de aniversário como a seguir:

|1997-10-22|....|João|
|1836-08-17|....|Miguel|
|2003-10-02|....|Vicente|

**
     Pode-se filtrar pessoas que nasceram num determinado ano, mês ou dia. Por exemplo, o uso do padrão:
**

*
  ^[0-9]{4}-10-[0-9]{2}(.*)$
*

*
   identifica o nome das pessoas que nasceram em outubro (mês 10). Para o cadastro acima seriam retornados dois grupos de captura, \1 contendo "João " e \2 contendo "Vicente". 
*
