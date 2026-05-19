// Generated from c:/Users/fredd/Documents/PSintaxis/CarpetaGit/Analizador sintáctico/proyecto/analizador.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import analizadorListener from './analizadorListener.js';
import analizadorVisitor from './analizadorVisitor.js';

const serializedATN = [4,1,16,80,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
2,5,7,5,2,6,7,6,2,7,7,7,1,0,4,0,18,8,0,11,0,12,0,19,1,1,1,1,1,1,1,1,3,1,
26,8,1,1,1,1,1,1,1,1,1,1,1,1,2,1,2,1,2,5,2,36,8,2,10,2,12,2,39,9,2,1,3,1,
3,1,3,5,3,44,8,3,10,3,12,3,47,9,3,1,4,1,4,1,4,1,4,1,4,1,4,1,5,1,5,1,5,1,
5,1,5,1,5,1,6,1,6,1,6,1,6,1,6,1,7,1,7,1,7,1,7,3,7,70,8,7,1,7,1,7,1,7,5,7,
75,8,7,10,7,12,7,78,9,7,1,7,0,1,14,8,0,2,4,6,8,10,12,14,0,0,80,0,17,1,0,
0,0,2,21,1,0,0,0,4,32,1,0,0,0,6,45,1,0,0,0,8,48,1,0,0,0,10,54,1,0,0,0,12,
60,1,0,0,0,14,69,1,0,0,0,16,18,3,2,1,0,17,16,1,0,0,0,18,19,1,0,0,0,19,17,
1,0,0,0,19,20,1,0,0,0,20,1,1,0,0,0,21,22,5,7,0,0,22,23,5,13,0,0,23,25,5,
3,0,0,24,26,3,4,2,0,25,24,1,0,0,0,25,26,1,0,0,0,26,27,1,0,0,0,27,28,5,4,
0,0,28,29,5,5,0,0,29,30,3,6,3,0,30,31,5,6,0,0,31,3,1,0,0,0,32,37,5,13,0,
0,33,34,5,1,0,0,34,36,5,13,0,0,35,33,1,0,0,0,36,39,1,0,0,0,37,35,1,0,0,0,
37,38,1,0,0,0,38,5,1,0,0,0,39,37,1,0,0,0,40,44,3,8,4,0,41,44,3,10,5,0,42,
44,3,12,6,0,43,40,1,0,0,0,43,41,1,0,0,0,43,42,1,0,0,0,44,47,1,0,0,0,45,43,
1,0,0,0,45,46,1,0,0,0,46,7,1,0,0,0,47,45,1,0,0,0,48,49,5,8,0,0,49,50,5,3,
0,0,50,51,5,13,0,0,51,52,5,4,0,0,52,53,5,12,0,0,53,9,1,0,0,0,54,55,5,9,0,
0,55,56,5,3,0,0,56,57,3,14,7,0,57,58,5,4,0,0,58,59,5,12,0,0,59,11,1,0,0,
0,60,61,5,13,0,0,61,62,5,2,0,0,62,63,3,14,7,0,63,64,5,12,0,0,64,13,1,0,0,
0,65,66,6,7,-1,0,66,70,5,14,0,0,67,70,5,15,0,0,68,70,5,13,0,0,69,65,1,0,
0,0,69,67,1,0,0,0,69,68,1,0,0,0,70,76,1,0,0,0,71,72,10,4,0,0,72,73,5,11,
0,0,73,75,3,14,7,5,74,71,1,0,0,0,75,78,1,0,0,0,76,74,1,0,0,0,76,77,1,0,0,
0,77,15,1,0,0,0,78,76,1,0,0,0,7,19,25,37,43,45,69,76];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class analizadorParser extends antlr4.Parser {

    static grammarFileName = "analizador.g4";
    static literalNames = [ null, "','", "'='", "'('", "')'", "'{'", "'}'", 
                            "'funcion'", "'leer'", "'escribir'", "'asignacion'", 
                            "'+'", "';'" ];
    static symbolicNames = [ null, null, null, "LPAREN", "RPAREN", "LLLAVE", 
                             "RLLAVE", "FUNCION", "LEER", "ESCRIBIR", "ASIGNACION", 
                             "ADD", "PUNTOCOMA", "ID", "NUMERO", "CADENA", 
                             "WS" ];
    static ruleNames = [ "programa", "funcion", "parametros", "instrucciones", 
                         "leer", "escribir", "asignacion", "expresion" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = analizadorParser.ruleNames;
        this.literalNames = analizadorParser.literalNames;
        this.symbolicNames = analizadorParser.symbolicNames;
    }

    sempred(localctx, ruleIndex, predIndex) {
    	switch(ruleIndex) {
    	case 7:
    	    		return this.expresion_sempred(localctx, predIndex);
        default:
            throw "No predicate with index:" + ruleIndex;
       }
    }

    expresion_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 0:
    			return this.precpred(this._ctx, 4);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };




	programa() {
	    let localctx = new ProgramaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, analizadorParser.RULE_programa);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 17; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 16;
	            this.funcion();
	            this.state = 19; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===7);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	funcion() {
	    let localctx = new FuncionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, analizadorParser.RULE_funcion);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 21;
	        this.match(analizadorParser.FUNCION);
	        this.state = 22;
	        this.match(analizadorParser.ID);
	        this.state = 23;
	        this.match(analizadorParser.LPAREN);
	        this.state = 25;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===13) {
	            this.state = 24;
	            this.parametros();
	        }

	        this.state = 27;
	        this.match(analizadorParser.RPAREN);
	        this.state = 28;
	        this.match(analizadorParser.LLLAVE);
	        this.state = 29;
	        this.instrucciones();
	        this.state = 30;
	        this.match(analizadorParser.RLLAVE);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	parametros() {
	    let localctx = new ParametrosContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, analizadorParser.RULE_parametros);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 32;
	        this.match(analizadorParser.ID);
	        this.state = 37;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===1) {
	            this.state = 33;
	            this.match(analizadorParser.T__0);
	            this.state = 34;
	            this.match(analizadorParser.ID);
	            this.state = 39;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	instrucciones() {
	    let localctx = new InstruccionesContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, analizadorParser.RULE_instrucciones);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 45;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 8960) !== 0)) {
	            this.state = 43;
	            this._errHandler.sync(this);
	            switch(this._input.LA(1)) {
	            case 8:
	                this.state = 40;
	                this.leer();
	                break;
	            case 9:
	                this.state = 41;
	                this.escribir();
	                break;
	            case 13:
	                this.state = 42;
	                this.asignacion();
	                break;
	            default:
	                throw new antlr4.error.NoViableAltException(this);
	            }
	            this.state = 47;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	leer() {
	    let localctx = new LeerContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, analizadorParser.RULE_leer);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 48;
	        this.match(analizadorParser.LEER);
	        this.state = 49;
	        this.match(analizadorParser.LPAREN);
	        this.state = 50;
	        this.match(analizadorParser.ID);
	        this.state = 51;
	        this.match(analizadorParser.RPAREN);
	        this.state = 52;
	        this.match(analizadorParser.PUNTOCOMA);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	escribir() {
	    let localctx = new EscribirContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, analizadorParser.RULE_escribir);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 54;
	        this.match(analizadorParser.ESCRIBIR);
	        this.state = 55;
	        this.match(analizadorParser.LPAREN);
	        this.state = 56;
	        this.expresion(0);
	        this.state = 57;
	        this.match(analizadorParser.RPAREN);
	        this.state = 58;
	        this.match(analizadorParser.PUNTOCOMA);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	asignacion() {
	    let localctx = new AsignacionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, analizadorParser.RULE_asignacion);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 60;
	        this.match(analizadorParser.ID);
	        this.state = 61;
	        this.match(analizadorParser.T__1);
	        this.state = 62;
	        this.expresion(0);
	        this.state = 63;
	        this.match(analizadorParser.PUNTOCOMA);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


	expresion(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new ExpresionContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 14;
	    this.enterRecursionRule(localctx, 14, analizadorParser.RULE_expresion, _p);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 69;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 14:
	            localctx = new ExprNUMEROContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;

	            this.state = 66;
	            this.match(analizadorParser.NUMERO);
	            break;
	        case 15:
	            localctx = new ExprCADENAContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 67;
	            this.match(analizadorParser.CADENA);
	            break;
	        case 13:
	            localctx = new ExprIDContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 68;
	            this.match(analizadorParser.ID);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 76;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,6,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                localctx = new ExprSumaContext(this, new ExpresionContext(this, _parentctx, _parentState));
	                this.pushNewRecursionContext(localctx, _startState, analizadorParser.RULE_expresion);
	                this.state = 71;
	                if (!( this.precpred(this._ctx, 4))) {
	                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 4)");
	                }
	                this.state = 72;
	                this.match(analizadorParser.ADD);
	                this.state = 73;
	                this.expresion(5); 
	            }
	            this.state = 78;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,6,this._ctx);
	        }

	    } catch( error) {
	        if(error instanceof antlr4.error.RecognitionException) {
		        localctx.exception = error;
		        this._errHandler.reportError(this, error);
		        this._errHandler.recover(this, error);
		    } else {
		    	throw error;
		    }
	    } finally {
	        this.unrollRecursionContexts(_parentctx)
	    }
	    return localctx;
	}


}

analizadorParser.EOF = antlr4.Token.EOF;
analizadorParser.T__0 = 1;
analizadorParser.T__1 = 2;
analizadorParser.LPAREN = 3;
analizadorParser.RPAREN = 4;
analizadorParser.LLLAVE = 5;
analizadorParser.RLLAVE = 6;
analizadorParser.FUNCION = 7;
analizadorParser.LEER = 8;
analizadorParser.ESCRIBIR = 9;
analizadorParser.ASIGNACION = 10;
analizadorParser.ADD = 11;
analizadorParser.PUNTOCOMA = 12;
analizadorParser.ID = 13;
analizadorParser.NUMERO = 14;
analizadorParser.CADENA = 15;
analizadorParser.WS = 16;

analizadorParser.RULE_programa = 0;
analizadorParser.RULE_funcion = 1;
analizadorParser.RULE_parametros = 2;
analizadorParser.RULE_instrucciones = 3;
analizadorParser.RULE_leer = 4;
analizadorParser.RULE_escribir = 5;
analizadorParser.RULE_asignacion = 6;
analizadorParser.RULE_expresion = 7;

class ProgramaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = analizadorParser.RULE_programa;
    }

	funcion = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(FuncionContext);
	    } else {
	        return this.getTypedRuleContext(FuncionContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof analizadorListener ) {
	        listener.enterPrograma(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof analizadorListener ) {
	        listener.exitPrograma(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof analizadorVisitor ) {
	        return visitor.visitPrograma(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class FuncionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = analizadorParser.RULE_funcion;
    }

	FUNCION() {
	    return this.getToken(analizadorParser.FUNCION, 0);
	};

	ID() {
	    return this.getToken(analizadorParser.ID, 0);
	};

	LPAREN() {
	    return this.getToken(analizadorParser.LPAREN, 0);
	};

	RPAREN() {
	    return this.getToken(analizadorParser.RPAREN, 0);
	};

	LLLAVE() {
	    return this.getToken(analizadorParser.LLLAVE, 0);
	};

	instrucciones() {
	    return this.getTypedRuleContext(InstruccionesContext,0);
	};

	RLLAVE() {
	    return this.getToken(analizadorParser.RLLAVE, 0);
	};

	parametros() {
	    return this.getTypedRuleContext(ParametrosContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof analizadorListener ) {
	        listener.enterFuncion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof analizadorListener ) {
	        listener.exitFuncion(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof analizadorVisitor ) {
	        return visitor.visitFuncion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ParametrosContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = analizadorParser.RULE_parametros;
    }

	ID = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(analizadorParser.ID);
	    } else {
	        return this.getToken(analizadorParser.ID, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof analizadorListener ) {
	        listener.enterParametros(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof analizadorListener ) {
	        listener.exitParametros(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof analizadorVisitor ) {
	        return visitor.visitParametros(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class InstruccionesContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = analizadorParser.RULE_instrucciones;
    }

	leer = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(LeerContext);
	    } else {
	        return this.getTypedRuleContext(LeerContext,i);
	    }
	};

	escribir = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(EscribirContext);
	    } else {
	        return this.getTypedRuleContext(EscribirContext,i);
	    }
	};

	asignacion = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(AsignacionContext);
	    } else {
	        return this.getTypedRuleContext(AsignacionContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof analizadorListener ) {
	        listener.enterInstrucciones(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof analizadorListener ) {
	        listener.exitInstrucciones(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof analizadorVisitor ) {
	        return visitor.visitInstrucciones(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class LeerContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = analizadorParser.RULE_leer;
    }

	LEER() {
	    return this.getToken(analizadorParser.LEER, 0);
	};

	LPAREN() {
	    return this.getToken(analizadorParser.LPAREN, 0);
	};

	ID() {
	    return this.getToken(analizadorParser.ID, 0);
	};

	RPAREN() {
	    return this.getToken(analizadorParser.RPAREN, 0);
	};

	PUNTOCOMA() {
	    return this.getToken(analizadorParser.PUNTOCOMA, 0);
	};

	enterRule(listener) {
	    if(listener instanceof analizadorListener ) {
	        listener.enterLeer(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof analizadorListener ) {
	        listener.exitLeer(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof analizadorVisitor ) {
	        return visitor.visitLeer(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class EscribirContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = analizadorParser.RULE_escribir;
    }

	ESCRIBIR() {
	    return this.getToken(analizadorParser.ESCRIBIR, 0);
	};

	LPAREN() {
	    return this.getToken(analizadorParser.LPAREN, 0);
	};

	expresion() {
	    return this.getTypedRuleContext(ExpresionContext,0);
	};

	RPAREN() {
	    return this.getToken(analizadorParser.RPAREN, 0);
	};

	PUNTOCOMA() {
	    return this.getToken(analizadorParser.PUNTOCOMA, 0);
	};

	enterRule(listener) {
	    if(listener instanceof analizadorListener ) {
	        listener.enterEscribir(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof analizadorListener ) {
	        listener.exitEscribir(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof analizadorVisitor ) {
	        return visitor.visitEscribir(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class AsignacionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = analizadorParser.RULE_asignacion;
    }

	ID() {
	    return this.getToken(analizadorParser.ID, 0);
	};

	expresion() {
	    return this.getTypedRuleContext(ExpresionContext,0);
	};

	PUNTOCOMA() {
	    return this.getToken(analizadorParser.PUNTOCOMA, 0);
	};

	enterRule(listener) {
	    if(listener instanceof analizadorListener ) {
	        listener.enterAsignacion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof analizadorListener ) {
	        listener.exitAsignacion(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof analizadorVisitor ) {
	        return visitor.visitAsignacion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ExpresionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = analizadorParser.RULE_expresion;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class ExprSumaContext extends ExpresionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	expresion = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpresionContext);
	    } else {
	        return this.getTypedRuleContext(ExpresionContext,i);
	    }
	};

	ADD() {
	    return this.getToken(analizadorParser.ADD, 0);
	};

	enterRule(listener) {
	    if(listener instanceof analizadorListener ) {
	        listener.enterExprSuma(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof analizadorListener ) {
	        listener.exitExprSuma(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof analizadorVisitor ) {
	        return visitor.visitExprSuma(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

analizadorParser.ExprSumaContext = ExprSumaContext;

class ExprNUMEROContext extends ExpresionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	NUMERO() {
	    return this.getToken(analizadorParser.NUMERO, 0);
	};

	enterRule(listener) {
	    if(listener instanceof analizadorListener ) {
	        listener.enterExprNUMERO(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof analizadorListener ) {
	        listener.exitExprNUMERO(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof analizadorVisitor ) {
	        return visitor.visitExprNUMERO(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

analizadorParser.ExprNUMEROContext = ExprNUMEROContext;

class ExprCADENAContext extends ExpresionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	CADENA() {
	    return this.getToken(analizadorParser.CADENA, 0);
	};

	enterRule(listener) {
	    if(listener instanceof analizadorListener ) {
	        listener.enterExprCADENA(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof analizadorListener ) {
	        listener.exitExprCADENA(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof analizadorVisitor ) {
	        return visitor.visitExprCADENA(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

analizadorParser.ExprCADENAContext = ExprCADENAContext;

class ExprIDContext extends ExpresionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	ID() {
	    return this.getToken(analizadorParser.ID, 0);
	};

	enterRule(listener) {
	    if(listener instanceof analizadorListener ) {
	        listener.enterExprID(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof analizadorListener ) {
	        listener.exitExprID(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof analizadorVisitor ) {
	        return visitor.visitExprID(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

analizadorParser.ExprIDContext = ExprIDContext;


analizadorParser.ProgramaContext = ProgramaContext; 
analizadorParser.FuncionContext = FuncionContext; 
analizadorParser.ParametrosContext = ParametrosContext; 
analizadorParser.InstruccionesContext = InstruccionesContext; 
analizadorParser.LeerContext = LeerContext; 
analizadorParser.EscribirContext = EscribirContext; 
analizadorParser.AsignacionContext = AsignacionContext; 
analizadorParser.ExpresionContext = ExpresionContext; 
