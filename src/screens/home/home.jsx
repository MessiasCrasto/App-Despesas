import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import icons from "../../constants/icons.js";
import {styles} from "./home.style.js"
import Despesa from "../../components/despesa/despesa.jsx";


const Home = () => {
    return <View style={styles.container}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={styles.containerImg}>
                        <Image source={icons.logo} style={styles.logo}/>
                    </View>

                    <View style={styles.dashboard}>
                        <View>
                            <Text style={styles.dashboardValor}>R$ 5.000,00</Text>
                            <Text style={styles.dashboardText}>Total de Gasto</Text>
                        </View>
                        <Image style={styles.dashboardImg} source={icons.dinheiro}/>
                    </View>
                
                    <View>
                        <Text style={styles.despesasTitulo}>Despesas</Text>
                        <Despesa id={1}
                                icon={icons.car} 
                                categoria="Mercado"
                                descricao="Uber Trabalho"
                                valor={100} />
                        <Despesa id={2}
                                icon={icons.car} 
                                categoria="Transporte"
                                descricao="Uber Casa"
                                valor={200} />
                        <Despesa id={3}
                                icon={icons.car} 
                                categoria="Transporte"
                                descricao="Uber Casa"
                                valor={300} />
                        <Despesa id={3}
                                icon={icons.car} 
                                categoria="Transporte"
                                descricao="Uber Casa"
                                valor={300} />
                        <Despesa id={3}
                                icon={icons.car} 
                                categoria="Transporte"
                                descricao="Uber Casa"
                                valor={300} />
                        <Despesa id={3}
                                icon={icons.car} 
                                categoria="Transporte"
                                descricao="Uber Casa"
                                valor={300} />
                        <Despesa id={3}
                                icon={icons.car} 
                                categoria="Transporte"
                                descricao="Uber Casa"
                                valor={300} />
                        <Despesa id={3}
                                icon={icons.car} 
                                categoria="Transporte"
                                descricao="Uber Casa"
                                valor={300} />
                        <Despesa id={3}
                                icon={icons.car} 
                                categoria="Transporte"
                                descricao="Uber Casa"
                                valor={300} />
                        <Despesa id={3}
                                icon={icons.car} 
                                categoria="Transporte"
                                descricao="Uber Casa"
                                valor={300} />
                        <Despesa id={3}
                                icon={icons.car} 
                                categoria="Transporte"
                                descricao="Uber Casa"
                                valor={300} />
                        <Despesa id={3}
                                icon={icons.car} 
                                categoria="Transporte"
                                descricao="Uber Casa"
                                valor={300} />
                        <Despesa id={3}
                                icon={icons.car} 
                                categoria="Transporte"
                                descricao="Uber Casa"
                                valor={300} />
                        <Despesa id={3}
                                icon={icons.car} 
                                categoria="Transporte"
                                descricao="Uber Casa"
                                valor={300} />
                        <Despesa id={3}
                                icon={icons.car} 
                                categoria="Transporte"
                                descricao="Uber Casa"
                                valor={300} />
                        <Despesa id={3}
                                icon={icons.car} 
                                categoria="Transporte"
                                descricao="Uber Casa"
                                valor={300} />
                        <Despesa id={3}
                                icon={icons.car} 
                                categoria="Transporte"
                                descricao="Uber Casa"
                                valor={300} />
                        <Despesa id={3}
                                icon={icons.car} 
                                categoria="Transporte"
                                descricao="Uber Casa"
                                valor={300} />
                        <Despesa id={3}
                                icon={icons.car} 
                                categoria="Transporte"
                                descricao="Uber Casa"
                                valor={300} />
                        <Despesa id={3}
                                icon={icons.car} 
                                categoria="Transporte"
                                descricao="Uber Casa"
                                valor={300} />
                        <Despesa id={3}
                                icon={icons.car} 
                                categoria="Transporte"
                                descricao="Uber Casa"
                                valor={300} />
                        <Despesa id={3}
                                icon={icons.car} 
                                categoria="Transporte"
                                descricao="Uber Casa"
                                valor={300} />
                        <Despesa id={3}
                                icon={icons.car} 
                                categoria="Transporte"
                                descricao="Uber Casa"
                                valor={300} />
                        <Despesa id={3}
                                icon={icons.car} 
                                categoria="Transporte"
                                descricao="Uber Casa"
                                valor={300} />
                        <Despesa id={3}
                                icon={icons.car} 
                                categoria="Transporte"
                                descricao="Uber Casa"
                                valor={300} />
                        <Despesa id={3}
                                icon={icons.car} 
                                categoria="Transporte"
                                descricao="Uber Casa"
                                valor={300} />
                        <Despesa id={3}
                                icon={icons.car} 
                                categoria="Transporte"
                                descricao="Uber Casa"
                                valor={300} />
                        <Despesa id={3}
                                icon={icons.car} 
                                categoria="Transporte"
                                descricao="Uber Casa"
                                valor={300} />
                        <Despesa id={3}
                                icon={icons.car} 
                                categoria="Transporte"
                                descricao="Uber Casa"
                                valor={300} />
                        <Despesa id={3}
                                icon={icons.car} 
                                categoria="Transporte"
                                descricao="Uber Casa"
                                valor={300} />
                        <Despesa id={3}
                                icon={icons.car} 
                                categoria="Transporte"
                                descricao="Uber Casa"
                                valor={300} />
                        <Despesa id={3}
                                icon={icons.car} 
                                categoria="Transporte"
                                descricao="Uber Casa"
                                valor={300} />
                        <Despesa id={3}
                                icon={icons.car} 
                                categoria="Transporte"
                                descricao="Uber Casa"
                                valor={300} />
                        <Despesa id={3}
                                icon={icons.car} 
                                categoria="Transporte"
                                descricao="Uber Casa"
                                valor={300} />
                        <Despesa id={3}
                                icon={icons.car} 
                                categoria="Transporte"
                                descricao="Uber Casa"
                                valor={300} />
    
                    </View>

                </ScrollView>

               <TouchableOpacity style={styles.btnadd}>
                    <Image source={icons.add} style={styles.btnaddImage} /> 
                </TouchableOpacity>

            </View>
             
            
}

export default Home;