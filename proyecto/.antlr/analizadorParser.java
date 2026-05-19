// Generated from c:/Users/fredd/Documents/PSintaxis/CarpetaGit/proyecto/analizador.g4 by ANTLR 4.13.1
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.misc.*;
import org.antlr.v4.runtime.tree.*;
import java.util.List;
import java.util.Iterator;
import java.util.ArrayList;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast", "CheckReturnValue"})
public class analizadorParser extends Parser {
	static { RuntimeMetaData.checkVersion("4.13.1", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		T__0=1, T__1=2, T__2=3, T__3=4, T__4=5, T__5=6, T__6=7, T__7=8, T__8=9, 
		T__9=10, ID=11, NUMERO=12, CADENA=13, WS=14;
	public static final int
		RULE_programa = 0, RULE_funcion = 1, RULE_parametros = 2, RULE_instrucciones = 3, 
		RULE_leer = 4, RULE_escribir = 5, RULE_asignacion = 6, RULE_expresion = 7;
	private static String[] makeRuleNames() {
		return new String[] {
			"programa", "funcion", "parametros", "instrucciones", "leer", "escribir", 
			"asignacion", "expresion"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, "'funcion'", "'('", "')'", "'{'", "'}'", "','", "'leer'", "';'", 
			"'escribir'", "'='"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, null, null, null, null, null, null, null, null, null, null, "ID", 
			"NUMERO", "CADENA", "WS"
		};
	}
	private static final String[] _SYMBOLIC_NAMES = makeSymbolicNames();
	public static final Vocabulary VOCABULARY = new VocabularyImpl(_LITERAL_NAMES, _SYMBOLIC_NAMES);

	/**
	 * @deprecated Use {@link #VOCABULARY} instead.
	 */
	@Deprecated
	public static final String[] tokenNames;
	static {
		tokenNames = new String[_SYMBOLIC_NAMES.length];
		for (int i = 0; i < tokenNames.length; i++) {
			tokenNames[i] = VOCABULARY.getLiteralName(i);
			if (tokenNames[i] == null) {
				tokenNames[i] = VOCABULARY.getSymbolicName(i);
			}

			if (tokenNames[i] == null) {
				tokenNames[i] = "<INVALID>";
			}
		}
	}

	@Override
	@Deprecated
	public String[] getTokenNames() {
		return tokenNames;
	}

	@Override

	public Vocabulary getVocabulary() {
		return VOCABULARY;
	}

	@Override
	public String getGrammarFileName() { return "analizador.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public ATN getATN() { return _ATN; }

	public analizadorParser(TokenStream input) {
		super(input);
		_interp = new ParserATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ProgramaContext extends ParserRuleContext {
		public List<FuncionContext> funcion() {
			return getRuleContexts(FuncionContext.class);
		}
		public FuncionContext funcion(int i) {
			return getRuleContext(FuncionContext.class,i);
		}
		public ProgramaContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_programa; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof analizadorListener ) ((analizadorListener)listener).enterPrograma(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof analizadorListener ) ((analizadorListener)listener).exitPrograma(this);
		}
	}

	public final ProgramaContext programa() throws RecognitionException {
		ProgramaContext _localctx = new ProgramaContext(_ctx, getState());
		enterRule(_localctx, 0, RULE_programa);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(17); 
			_errHandler.sync(this);
			_la = _input.LA(1);
			do {
				{
				{
				setState(16);
				funcion();
				}
				}
				setState(19); 
				_errHandler.sync(this);
				_la = _input.LA(1);
			} while ( _la==T__0 );
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class FuncionContext extends ParserRuleContext {
		public TerminalNode ID() { return getToken(analizadorParser.ID, 0); }
		public InstruccionesContext instrucciones() {
			return getRuleContext(InstruccionesContext.class,0);
		}
		public ParametrosContext parametros() {
			return getRuleContext(ParametrosContext.class,0);
		}
		public FuncionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_funcion; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof analizadorListener ) ((analizadorListener)listener).enterFuncion(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof analizadorListener ) ((analizadorListener)listener).exitFuncion(this);
		}
	}

	public final FuncionContext funcion() throws RecognitionException {
		FuncionContext _localctx = new FuncionContext(_ctx, getState());
		enterRule(_localctx, 2, RULE_funcion);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(21);
			match(T__0);
			setState(22);
			match(ID);
			setState(23);
			match(T__1);
			setState(25);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==ID) {
				{
				setState(24);
				parametros();
				}
			}

			setState(27);
			match(T__2);
			setState(28);
			match(T__3);
			setState(29);
			instrucciones();
			setState(30);
			match(T__4);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ParametrosContext extends ParserRuleContext {
		public List<TerminalNode> ID() { return getTokens(analizadorParser.ID); }
		public TerminalNode ID(int i) {
			return getToken(analizadorParser.ID, i);
		}
		public ParametrosContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_parametros; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof analizadorListener ) ((analizadorListener)listener).enterParametros(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof analizadorListener ) ((analizadorListener)listener).exitParametros(this);
		}
	}

	public final ParametrosContext parametros() throws RecognitionException {
		ParametrosContext _localctx = new ParametrosContext(_ctx, getState());
		enterRule(_localctx, 4, RULE_parametros);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(32);
			match(ID);
			setState(37);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==T__5) {
				{
				{
				setState(33);
				match(T__5);
				setState(34);
				match(ID);
				}
				}
				setState(39);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class InstruccionesContext extends ParserRuleContext {
		public List<LeerContext> leer() {
			return getRuleContexts(LeerContext.class);
		}
		public LeerContext leer(int i) {
			return getRuleContext(LeerContext.class,i);
		}
		public List<EscribirContext> escribir() {
			return getRuleContexts(EscribirContext.class);
		}
		public EscribirContext escribir(int i) {
			return getRuleContext(EscribirContext.class,i);
		}
		public List<AsignacionContext> asignacion() {
			return getRuleContexts(AsignacionContext.class);
		}
		public AsignacionContext asignacion(int i) {
			return getRuleContext(AsignacionContext.class,i);
		}
		public InstruccionesContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_instrucciones; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof analizadorListener ) ((analizadorListener)listener).enterInstrucciones(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof analizadorListener ) ((analizadorListener)listener).exitInstrucciones(this);
		}
	}

	public final InstruccionesContext instrucciones() throws RecognitionException {
		InstruccionesContext _localctx = new InstruccionesContext(_ctx, getState());
		enterRule(_localctx, 6, RULE_instrucciones);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(45);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 2688L) != 0)) {
				{
				setState(43);
				_errHandler.sync(this);
				switch (_input.LA(1)) {
				case T__6:
					{
					setState(40);
					leer();
					}
					break;
				case T__8:
					{
					setState(41);
					escribir();
					}
					break;
				case ID:
					{
					setState(42);
					asignacion();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				setState(47);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class LeerContext extends ParserRuleContext {
		public TerminalNode ID() { return getToken(analizadorParser.ID, 0); }
		public LeerContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_leer; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof analizadorListener ) ((analizadorListener)listener).enterLeer(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof analizadorListener ) ((analizadorListener)listener).exitLeer(this);
		}
	}

	public final LeerContext leer() throws RecognitionException {
		LeerContext _localctx = new LeerContext(_ctx, getState());
		enterRule(_localctx, 8, RULE_leer);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(48);
			match(T__6);
			setState(49);
			match(T__1);
			setState(50);
			match(ID);
			setState(51);
			match(T__2);
			setState(52);
			match(T__7);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class EscribirContext extends ParserRuleContext {
		public ExpresionContext expresion() {
			return getRuleContext(ExpresionContext.class,0);
		}
		public EscribirContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_escribir; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof analizadorListener ) ((analizadorListener)listener).enterEscribir(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof analizadorListener ) ((analizadorListener)listener).exitEscribir(this);
		}
	}

	public final EscribirContext escribir() throws RecognitionException {
		EscribirContext _localctx = new EscribirContext(_ctx, getState());
		enterRule(_localctx, 10, RULE_escribir);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(54);
			match(T__8);
			setState(55);
			match(T__1);
			setState(56);
			expresion();
			setState(57);
			match(T__2);
			setState(58);
			match(T__7);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class AsignacionContext extends ParserRuleContext {
		public TerminalNode ID() { return getToken(analizadorParser.ID, 0); }
		public ExpresionContext expresion() {
			return getRuleContext(ExpresionContext.class,0);
		}
		public AsignacionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_asignacion; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof analizadorListener ) ((analizadorListener)listener).enterAsignacion(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof analizadorListener ) ((analizadorListener)listener).exitAsignacion(this);
		}
	}

	public final AsignacionContext asignacion() throws RecognitionException {
		AsignacionContext _localctx = new AsignacionContext(_ctx, getState());
		enterRule(_localctx, 12, RULE_asignacion);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(60);
			match(ID);
			setState(61);
			match(T__9);
			setState(62);
			expresion();
			setState(63);
			match(T__7);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ExpresionContext extends ParserRuleContext {
		public ExpresionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_expresion; }
	 
		public ExpresionContext() { }
		public void copyFrom(ExpresionContext ctx) {
			super.copyFrom(ctx);
		}
	}
	@SuppressWarnings("CheckReturnValue")
	public static class Expr_NUMEROContext extends ExpresionContext {
		public TerminalNode NUMERO() { return getToken(analizadorParser.NUMERO, 0); }
		public Expr_NUMEROContext(ExpresionContext ctx) { copyFrom(ctx); }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof analizadorListener ) ((analizadorListener)listener).enterExpr_NUMERO(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof analizadorListener ) ((analizadorListener)listener).exitExpr_NUMERO(this);
		}
	}
	@SuppressWarnings("CheckReturnValue")
	public static class Expr_IDContext extends ExpresionContext {
		public TerminalNode ID() { return getToken(analizadorParser.ID, 0); }
		public Expr_IDContext(ExpresionContext ctx) { copyFrom(ctx); }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof analizadorListener ) ((analizadorListener)listener).enterExpr_ID(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof analizadorListener ) ((analizadorListener)listener).exitExpr_ID(this);
		}
	}
	@SuppressWarnings("CheckReturnValue")
	public static class Expr_CADENAContext extends ExpresionContext {
		public TerminalNode CADENA() { return getToken(analizadorParser.CADENA, 0); }
		public Expr_CADENAContext(ExpresionContext ctx) { copyFrom(ctx); }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof analizadorListener ) ((analizadorListener)listener).enterExpr_CADENA(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof analizadorListener ) ((analizadorListener)listener).exitExpr_CADENA(this);
		}
	}

	public final ExpresionContext expresion() throws RecognitionException {
		ExpresionContext _localctx = new ExpresionContext(_ctx, getState());
		enterRule(_localctx, 14, RULE_expresion);
		try {
			setState(68);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case NUMERO:
				_localctx = new Expr_NUMEROContext(_localctx);
				enterOuterAlt(_localctx, 1);
				{
				setState(65);
				match(NUMERO);
				}
				break;
			case CADENA:
				_localctx = new Expr_CADENAContext(_localctx);
				enterOuterAlt(_localctx, 2);
				{
				setState(66);
				match(CADENA);
				}
				break;
			case ID:
				_localctx = new Expr_IDContext(_localctx);
				enterOuterAlt(_localctx, 3);
				{
				setState(67);
				match(ID);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static final String _serializedATN =
		"\u0004\u0001\u000eG\u0002\u0000\u0007\u0000\u0002\u0001\u0007\u0001\u0002"+
		"\u0002\u0007\u0002\u0002\u0003\u0007\u0003\u0002\u0004\u0007\u0004\u0002"+
		"\u0005\u0007\u0005\u0002\u0006\u0007\u0006\u0002\u0007\u0007\u0007\u0001"+
		"\u0000\u0004\u0000\u0012\b\u0000\u000b\u0000\f\u0000\u0013\u0001\u0001"+
		"\u0001\u0001\u0001\u0001\u0001\u0001\u0003\u0001\u001a\b\u0001\u0001\u0001"+
		"\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0002\u0001\u0002"+
		"\u0001\u0002\u0005\u0002$\b\u0002\n\u0002\f\u0002\'\t\u0002\u0001\u0003"+
		"\u0001\u0003\u0001\u0003\u0005\u0003,\b\u0003\n\u0003\f\u0003/\t\u0003"+
		"\u0001\u0004\u0001\u0004\u0001\u0004\u0001\u0004\u0001\u0004\u0001\u0004"+
		"\u0001\u0005\u0001\u0005\u0001\u0005\u0001\u0005\u0001\u0005\u0001\u0005"+
		"\u0001\u0006\u0001\u0006\u0001\u0006\u0001\u0006\u0001\u0006\u0001\u0007"+
		"\u0001\u0007\u0001\u0007\u0003\u0007E\b\u0007\u0001\u0007\u0000\u0000"+
		"\b\u0000\u0002\u0004\u0006\b\n\f\u000e\u0000\u0000F\u0000\u0011\u0001"+
		"\u0000\u0000\u0000\u0002\u0015\u0001\u0000\u0000\u0000\u0004 \u0001\u0000"+
		"\u0000\u0000\u0006-\u0001\u0000\u0000\u0000\b0\u0001\u0000\u0000\u0000"+
		"\n6\u0001\u0000\u0000\u0000\f<\u0001\u0000\u0000\u0000\u000eD\u0001\u0000"+
		"\u0000\u0000\u0010\u0012\u0003\u0002\u0001\u0000\u0011\u0010\u0001\u0000"+
		"\u0000\u0000\u0012\u0013\u0001\u0000\u0000\u0000\u0013\u0011\u0001\u0000"+
		"\u0000\u0000\u0013\u0014\u0001\u0000\u0000\u0000\u0014\u0001\u0001\u0000"+
		"\u0000\u0000\u0015\u0016\u0005\u0001\u0000\u0000\u0016\u0017\u0005\u000b"+
		"\u0000\u0000\u0017\u0019\u0005\u0002\u0000\u0000\u0018\u001a\u0003\u0004"+
		"\u0002\u0000\u0019\u0018\u0001\u0000\u0000\u0000\u0019\u001a\u0001\u0000"+
		"\u0000\u0000\u001a\u001b\u0001\u0000\u0000\u0000\u001b\u001c\u0005\u0003"+
		"\u0000\u0000\u001c\u001d\u0005\u0004\u0000\u0000\u001d\u001e\u0003\u0006"+
		"\u0003\u0000\u001e\u001f\u0005\u0005\u0000\u0000\u001f\u0003\u0001\u0000"+
		"\u0000\u0000 %\u0005\u000b\u0000\u0000!\"\u0005\u0006\u0000\u0000\"$\u0005"+
		"\u000b\u0000\u0000#!\u0001\u0000\u0000\u0000$\'\u0001\u0000\u0000\u0000"+
		"%#\u0001\u0000\u0000\u0000%&\u0001\u0000\u0000\u0000&\u0005\u0001\u0000"+
		"\u0000\u0000\'%\u0001\u0000\u0000\u0000(,\u0003\b\u0004\u0000),\u0003"+
		"\n\u0005\u0000*,\u0003\f\u0006\u0000+(\u0001\u0000\u0000\u0000+)\u0001"+
		"\u0000\u0000\u0000+*\u0001\u0000\u0000\u0000,/\u0001\u0000\u0000\u0000"+
		"-+\u0001\u0000\u0000\u0000-.\u0001\u0000\u0000\u0000.\u0007\u0001\u0000"+
		"\u0000\u0000/-\u0001\u0000\u0000\u000001\u0005\u0007\u0000\u000012\u0005"+
		"\u0002\u0000\u000023\u0005\u000b\u0000\u000034\u0005\u0003\u0000\u0000"+
		"45\u0005\b\u0000\u00005\t\u0001\u0000\u0000\u000067\u0005\t\u0000\u0000"+
		"78\u0005\u0002\u0000\u000089\u0003\u000e\u0007\u00009:\u0005\u0003\u0000"+
		"\u0000:;\u0005\b\u0000\u0000;\u000b\u0001\u0000\u0000\u0000<=\u0005\u000b"+
		"\u0000\u0000=>\u0005\n\u0000\u0000>?\u0003\u000e\u0007\u0000?@\u0005\b"+
		"\u0000\u0000@\r\u0001\u0000\u0000\u0000AE\u0005\f\u0000\u0000BE\u0005"+
		"\r\u0000\u0000CE\u0005\u000b\u0000\u0000DA\u0001\u0000\u0000\u0000DB\u0001"+
		"\u0000\u0000\u0000DC\u0001\u0000\u0000\u0000E\u000f\u0001\u0000\u0000"+
		"\u0000\u0006\u0013\u0019%+-D";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}