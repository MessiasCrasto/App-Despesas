import { COLORS, FONT_SIZE } from "../../constants/theme.js";


export const styles = {
    despesa: {
        width: "100%",
        backgroundColor: COLORS.c_claro,
        padding: 12,
        borderRadius: 10,
        marginTop: 10,
        flexDirection: "row"   ,
        justifyContent: "space-between"   
    },
    containerIcone: {
        flex: 3
    },
    despesaIcon: {
        width:35,
        height: 35
    },
    containerCategoria: {
        flex: 10
    },
    containerValor: {
        flex: 4
    },
    despesaCategoria:{
        fontSize: FONT_SIZE.sm,
        color: COLORS.c_escuro,
        fontWeight: "bold"        
    },
    despesaDescricao:{
        fontSize: FONT_SIZE.sm,
        color: COLORS.c_escuro,
               
    },
    despesaValor:{
        fontSize: FONT_SIZE.sm,
        color: COLORS.c_escuro,
        fontWeight: "bold",
        textAlign: "right"        
    }
}