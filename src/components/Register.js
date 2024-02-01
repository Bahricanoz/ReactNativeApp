import { View, StyleSheet, TextInput,Text, Button } from 'react-native'
import React from 'react'
import { Formik } from 'formik'
import validations from './Validation'
import  { UseContext } from '../context/UserContext'
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';


const Register = ({navigation}) => {
  const {addUser} = UseContext()
  return (
    <View style={styles.container}>
      

      <Formik 
        initialValues={{
          name : "",
          mail : "",
          password : "",
          passwordConfirm : "",
        }}
        onSubmit={ (values) => {
          addUser({id : uuidv4(),name : values.name, mail : values.mail, password : values.password})
          navigation.goBack();
        }}
        validationSchema={validations}
      >
        {({handleChange, handleSubmit, errors, values, handleBlur, touched})=> (
         <View>
            <View style={styles.item}>
              <TextInput
                style={styles.input}
                placeholder='UserName...'
                value={values.name}
                onChangeText={handleChange("name")}
                onBlur={handleBlur("name")}
              >
              </TextInput>
              {
                errors.name && touched.name &&<Text style={styles.error} >{errors.name}</Text>
              }
            </View>
            <View style={styles.item}>
              <TextInput
                style={styles.input}
                placeholder='E-Mail...'
                autoCapitalize="none"
                value={values.mail}
                onChangeText={handleChange("mail")}
                keyboardType="email-address"
                onBlur={handleBlur("mail")}
              >
              </TextInput>
              {
                errors.mail && touched.mail && <Text style={styles.error}>{errors.mail}</Text>
              }
            </View>
            <View style={styles.item}>
              <TextInput
                style={styles.input}
                placeholder='Password...'
                value={values.password}
                onChangeText={handleChange("password")}
                onBlur={handleBlur("password")}
              >
              </TextInput>
              {
                errors.password && touched.password && <Text style={styles.error} >{errors.password}</Text>
              }
            </View>
            <View style={styles.item}>
              <TextInput
                style={styles.input}
                placeholder='Password Confirm...'
                value={values.passwordConfirm}
                onChangeText={handleChange("passwordConfirm")}
                onBlur={handleBlur("passwordConfirm")}
              >
              </TextInput>
              {
                errors.passwordConfirm &&  touched.passwordConfirm &&<Text style={styles.error}>{errors.passwordConfirm}</Text>
              }
            </View>
          
          <Button title='Register' onPress={handleSubmit}></Button>
         </View>
          
        )}
      </Formik>
    </View>
  )
}
const styles = StyleSheet.create({
  input : {
    height : 50,
    borderWidth : 1,
    padding : 10,
    width : "100%"
  },
  container : {
    margin : 10,
    justifyContent : "center",
    flex : 1,

  },
  item : {
    marginBottom : 6
  },
  error :{
    color : "red"
  }
})
export default Register