import { COLORS, FONT_SIZE } from "../../constants/theme.js";


export const styles = ({
    container: {
       //flex:1,
        backgroundColor: COLORS.branco,
        alignItems:"center",
        padding: 20,
    },
    containerImg: {
        alignItems:"center",    
     },
     logo: {
        width: 100,
        height: 100
     },
    
    dashboard: {
        width: "95%",
        backgroundColor: COLORS.verde,
        padding: 20,
        borderRadius: 20,
        margin: 10,
        flexDirection:"row",
        justifyContent:"space-between"
    },
    dashboardValor:{
        color: COLORS.c_escuro,
        fontSize: FONT_SIZE.xl,
        fontWeight: "bold"
    },
    dashboardText:{
        color: COLORS.c_escuro,
        fontSize: FONT_SIZE.md,
    },
    dashboardImg:{
        width: 100,
        height: 50,
    },
    despesasTitulo: {
        color: COLORS.c_escuro,
        fontSize: FONT_SIZE.md,
        marginTop: 15,
        fontWeight: "bold"
    },
    btnadd: {
        position: "absolute",
        bottom: 12,
        
       
    },
    btnaddImage: {
        width: 60,
        height: 60
    }
})