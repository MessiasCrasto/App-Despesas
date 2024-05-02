import { Image, Text, View } from "react-native";
import icons from "../../constants/icons.js";
import {styles} from "./home.style.js"
import Despesa from "../../components/despesa/despesa.jsx";


const Home = () => {
    return <View style={styles.container}>
        <Image source={icons.logo} style={styles.logo}/>

        <View style={styles.dashboard}>
            <View>
            <Text style={styles.dashboardValor}>R$ 5.000,00</Text>
            <Text style={styles.dashboardText}>Total de Gasto</Text>
            </View>
            <Image style={styles.dashboardImg} source={icons.dinheiro}/>
        </View>

        <View>
            <Text style={styles.despesasTitulo}>Despesas</Text>
            <Despesa/>
            <Despesa/>
            <Despesa/>
            <Despesa/>
            <Despesa/>
            <Despesa/>
            <Despesa/>
            <Despesa/>
        </View>


    </View>
}

export default Home;