grammar analizador;
programa: funcion+;
funcion: 'funcion' ID '(' parametros? ')' '{' instrucciones '}';
parametros: ID (',' ID)*;
instrucciones: (leer|escribir|asignacion)*;
leer: 'leer' '(' ID ')' ';';
escribir:'escribir' '(' expresion ')' ';';
asignacion: ID '=' expresion ';';
expresion: expresion '+' expresion   #ExprSuma 
    |NUMERO                          #ExprNUMERO
    |CADENA                          #ExprCADENA
    |ID                              #ExprID
;
LPAREN: '(';
RPAREN: ')';
LLLAVE: '{';
RLLAVE: '}';
FUNCION: 'funcion';
LEER: 'leer';
ESCRIBIR: 'escribir';
ASIGNACION: 'asignacion';
ADD: '+';
PUNTOCOMA:';';
ID: [a-zA-Z_][a-zA-Z0-9_]*;
NUMERO:[0-9]+;
CADENA: '"' ~'"'*? '"';
WS: [ \t\r\n]+ -> skip;