import {StyleSheet} from 'react-native'

export default styles = StyleSheet.create({
  container:{
    flex:1,
    width:null,
    height:null
  },
  body:{
    flex:3
  },
  footer:{
    flex:1,
    flexDirection:'row'
  },
  containerBody:{
    flex:1,
    marginLeft:30,
    marginRight:30,
    marginTop:30,
    marginBottom:10,
    borderRadius:10,
    backgroundColor:'rgba(0,0,0,0.5)',
  },
  footerLeft:{
    flex:2,
    marginLeft:30,
    justifyContent:'center'
  },
  footerRight:{
    flex:3,
    marginRight:30,
    alignItems:'flex-end',
    justifyContent:'center'
  },
  temp:{
    flexDirection:'row',
  },
  tempMax:{
    fontSize:40,
    color:'white'
  },
  tempOMax:{
    fontSize:25,
    color:'white'
  },
  tempCMax:{
    fontSize:40,
    color:'white'
  },
  tempMin:{
    fontSize:20,
    color:'white',
    marginBottom:30
  },
  tempOMin:{
    fontSize:10,
    color:'white'
  },
  tempCMin:{
    fontSize:20,
    color:'white',
    marginBottom:30,
  },
  tempMinPercent:{
    fontSize:15,
    color:'white'
  },
  placeText:{
    fontSize:20,
    color:'white',
    marginTop:30
  }
})