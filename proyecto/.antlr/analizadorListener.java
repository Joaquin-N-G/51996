// Generated from c:/Users/fredd/Documents/PSintaxis/CarpetaGit/proyecto/analizador.g4 by ANTLR 4.13.1
import org.antlr.v4.runtime.tree.ParseTreeListener;

/**
 * This interface defines a complete listener for a parse tree produced by
 * {@link analizadorParser}.
 */
public interface analizadorListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by {@link analizadorParser#programa}.
	 * @param ctx the parse tree
	 */
	void enterPrograma(analizadorParser.ProgramaContext ctx);
	/**
	 * Exit a parse tree produced by {@link analizadorParser#programa}.
	 * @param ctx the parse tree
	 */
	void exitPrograma(analizadorParser.ProgramaContext ctx);
	/**
	 * Enter a parse tree produced by {@link analizadorParser#funcion}.
	 * @param ctx the parse tree
	 */
	void enterFuncion(analizadorParser.FuncionContext ctx);
	/**
	 * Exit a parse tree produced by {@link analizadorParser#funcion}.
	 * @param ctx the parse tree
	 */
	void exitFuncion(analizadorParser.FuncionContext ctx);
	/**
	 * Enter a parse tree produced by {@link analizadorParser#parametros}.
	 * @param ctx the parse tree
	 */
	void enterParametros(analizadorParser.ParametrosContext ctx);
	/**
	 * Exit a parse tree produced by {@link analizadorParser#parametros}.
	 * @param ctx the parse tree
	 */
	void exitParametros(analizadorParser.ParametrosContext ctx);
	/**
	 * Enter a parse tree produced by {@link analizadorParser#instrucciones}.
	 * @param ctx the parse tree
	 */
	void enterInstrucciones(analizadorParser.InstruccionesContext ctx);
	/**
	 * Exit a parse tree produced by {@link analizadorParser#instrucciones}.
	 * @param ctx the parse tree
	 */
	void exitInstrucciones(analizadorParser.InstruccionesContext ctx);
	/**
	 * Enter a parse tree produced by {@link analizadorParser#leer}.
	 * @param ctx the parse tree
	 */
	void enterLeer(analizadorParser.LeerContext ctx);
	/**
	 * Exit a parse tree produced by {@link analizadorParser#leer}.
	 * @param ctx the parse tree
	 */
	void exitLeer(analizadorParser.LeerContext ctx);
	/**
	 * Enter a parse tree produced by {@link analizadorParser#escribir}.
	 * @param ctx the parse tree
	 */
	void enterEscribir(analizadorParser.EscribirContext ctx);
	/**
	 * Exit a parse tree produced by {@link analizadorParser#escribir}.
	 * @param ctx the parse tree
	 */
	void exitEscribir(analizadorParser.EscribirContext ctx);
	/**
	 * Enter a parse tree produced by {@link analizadorParser#asignacion}.
	 * @param ctx the parse tree
	 */
	void enterAsignacion(analizadorParser.AsignacionContext ctx);
	/**
	 * Exit a parse tree produced by {@link analizadorParser#asignacion}.
	 * @param ctx the parse tree
	 */
	void exitAsignacion(analizadorParser.AsignacionContext ctx);
	/**
	 * Enter a parse tree produced by the {@code Expr_NUMERO}
	 * labeled alternative in {@link analizadorParser#expresion}.
	 * @param ctx the parse tree
	 */
	void enterExpr_NUMERO(analizadorParser.Expr_NUMEROContext ctx);
	/**
	 * Exit a parse tree produced by the {@code Expr_NUMERO}
	 * labeled alternative in {@link analizadorParser#expresion}.
	 * @param ctx the parse tree
	 */
	void exitExpr_NUMERO(analizadorParser.Expr_NUMEROContext ctx);
	/**
	 * Enter a parse tree produced by the {@code Expr_CADENA}
	 * labeled alternative in {@link analizadorParser#expresion}.
	 * @param ctx the parse tree
	 */
	void enterExpr_CADENA(analizadorParser.Expr_CADENAContext ctx);
	/**
	 * Exit a parse tree produced by the {@code Expr_CADENA}
	 * labeled alternative in {@link analizadorParser#expresion}.
	 * @param ctx the parse tree
	 */
	void exitExpr_CADENA(analizadorParser.Expr_CADENAContext ctx);
	/**
	 * Enter a parse tree produced by the {@code Expr_ID}
	 * labeled alternative in {@link analizadorParser#expresion}.
	 * @param ctx the parse tree
	 */
	void enterExpr_ID(analizadorParser.Expr_IDContext ctx);
	/**
	 * Exit a parse tree produced by the {@code Expr_ID}
	 * labeled alternative in {@link analizadorParser#expresion}.
	 * @param ctx the parse tree
	 */
	void exitExpr_ID(analizadorParser.Expr_IDContext ctx);
}