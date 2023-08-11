import React, { useEffect, useState } from 'react'
import { Text, View , StyleSheet, TextInput, TouchableOpacity, Keyboard, SafeAreaView, ActivityIndicator, FlatList, Image} from 'react-native'

const Home = ({navigation}) => {

    const [searchQuery, setSearchQuery]= useState('');
    const [recipes, setRecipes] = useState([]);
    const [numberOfRecipes, setNumberOfRecipes]= useState('1');
    const [loading, setLoading]= useState(false);

    const apiId ='d99e7c20'
    const apiKey ='5a058e8b068dbea4b766b26a651ac644';
    const apiUrl = `https://api.edamam.com/search?q=${searchQuery}&app_id=${apiId}&app_key=${apiKey}&from=0&to=${numberOfRecipes}&calories=591-722&health=alcohol-free`;

    async function apiCall(){
        setLoading(true);
        let resp = await fetch(apiUrl);
        let respJson = await resp.json();
        setRecipes(respJson.hits);
        setLoading(false);
        Keyboard.dismiss();
        setSearchQuery('');

    }

    // useEffect(() =>  {
    //     setLoading(true);
    //     apiCall();
    // }, [])

  return (
    <View style={styles.container}>
        <Text style={{fontSize: 23, fontWeight: '800', width: '90%', color: '#008080'}}>
            What recipe will you like to search today?
        </Text>
        <View style={{display: 'flex', flexDirection: 'row'}}>
            <TextInput placeholder='search recipe...'
            style={styles.inputField}
            onChangeText={text => setSearchQuery(text)}
            />
            <TextInput
                onChangeText={text => setNumberOfRecipes(text)}
                style={[styles.inputField,{width: '20%', fontSize:18, marginLeft:15,color:'#008080',fontWeight:'bold'}]}
                value={numberOfRecipes}
                keyboardType='number-pad'
            />


        </View>
        <TouchableOpacity style={styles.button}
        onPress={apiCall}
        title='submit'>
            <Text style={styles.buttonText}> Search</Text>
            
        </TouchableOpacity>
        <SafeAreaView style={{flex:1}}>
            {loading ? <ActivityIndicator size='large' color='#008080'/> :
            <FlatList style={styles.recipes}
            data={recipes}
            renderItem={({item}) => (
                <View style={styles.recipe}>
                    <Image style={styles.Image}
                        source={{uri: `${item.recipe.image}`}}


                    />
                    <View style={{padding:20, flexDirection:'row'}}>
                    <Text style={styles.label}>{item.recipe.label}</Text>
                    <TouchableOpacity onPress={() => {navigation.navigate('Details',{recipe: item.recipe})}}>
                        <Text style={{marginLeft:50, fontSize:20, color:'#008080'}}>
                            Details
                        </Text>
                    </TouchableOpacity>
                    </View>

                </View>


            )}
             keyExtractor={(item,index) => index.toString()} />}
        </SafeAreaView>
    </View>
  ) 

  
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        padding:20
    },
    inputField:{
        height:'120%',
        width:'65%',
        backgroundColor:'white',
        borderRadius:20,
        marginTop:10,
        paddingLeft:15
    },
    buttons:{
        flexDirection:'row'
    },
    button:{
        backgroundColor:'#008080',
        width:'90%',
        height: 35,
        borderRadius:20,
        margin:15,
        alignItems:'center'

    },
    buttonText:{
        color:'white',
        fontSize:20,
        fontWeight:'bold',
        
    },
    Image:{
        width: '100%',
        height:200,
        borderRadius:20
    },
    label:{
        fontSize:15,
        width:'60%',
        color:'#008080',
        fontWeight:'700'
    },
    recipe:{
        shadowColor:'black',
        shadowOpacity:0.26,
        shadowOffset:{width:0, height:2},
        shadowRadius:8,
        elevation:5,
        borderRadius:20,
        backgroundColor:'white',
        margin:10,
        marginBottom: 40
    }


})

export default Home