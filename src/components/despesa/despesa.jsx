import { Image, Text, View } from "react-native";
import { styles} from "./despesa.style.js"
import icons from "../../constants/icons.js";


const Despesa = () =>{
return <View style={styles.despesa}>
    <View style={styles.containerIcone}>
        <Image source={icons.car} style={styles.despesaIcon}/>
    </View>
    <View style={styles.containerCategoria}>
        <Text>Transporte</Text>
        <Text>Uber</Text>
    </View>
    <View style={styles.containerValor}>
        <Text>R$ 50,00</Text>
    </View>
</View>
}

export default Despesa;