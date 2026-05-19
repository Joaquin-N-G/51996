import analizadorVisitor from "./generated/analizadorVisitor.js";
export default class CustomanalizadorVisitor extends analizadorVisitor {


visitPrograma(ctx) {
    let jsCode = "";
    for (let i = 0; i < ctx.getChildCount(); i++) {
        jsCode += this.visit(ctx.getChild(i));
    }
    return jsCode;
}
visitFuncion(ctx) {
    const nombreFuncion=ctx.ID().getText();
    const parametros= ctx.parametros()? this.visit(ctx.parametros()):"";
    const instrucciones= this.visit(ctx.instrucciones());
    return `function ${nombreFuncion}(${parametros}){${instrucciones}}\n`;   
}
visitParametros(ctx) {
    const listaParametros = ctx.ID().map(id => id.getText());
    return listaParametros.join(", ");
}
visitInstrucciones(ctx) {
    let bloqueDeCodigo = "";
        for (let i=0; i< ctx.getChildCount(); i++) {
            bloqueDeCodigo += this.visit(ctx.getChild(i));
        }
        return bloqueDeCodigo;
}
visitLeer(ctx) {
        const nombreLeer = ctx.ID().getText();
        return `const ${nombreLeer} = prompt("Ingrese un valor:");\n`;
}
visitEscribir(ctx) {
 const valorEscribir = this.visit(ctx.expresion());
 return `console.log(${valorEscribir});\n`;
}
visitAsignacion(ctx) {
    const nombreAsignacion = ctx.ID().getText();
    const valorAsignacion = this.visit(ctx.expresion());
   return `${nombreAsignacion} = ${valorAsignacion};\n`;
}
visitExprSuma(ctx) {
    const izquierda = this.visit(ctx.expresion(0));
    const derecha = this.visit(ctx.expresion(1));
    return `(${izquierda} + ${derecha})`;
}
visitExprID(ctx){
    return ctx.ID().getText();
}
visitExprNUMERO(ctx) {
    return ctx.NUMERO().getText();
}
visitExprCADENA(ctx) {
    return ctx.CADENA().getText();
}
}