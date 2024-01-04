// import AWS from 'aws-sdk';

// // Configura la región de AWS
// AWS.config.update({ region: 'us-east-2' });

// // Crea un nuevo objeto de servicio cognito
// const cognito = new AWS.CognitoIdentityServiceProvider();

// // Ejemplo de función para registrar un nuevo usuario
// export async function registrarUsuario(username, password, email) {
//   try {
//     const params = {
//       ClientId: 'buarncjnc7rpqrro0i9vagu26', // ID del cliente de la app creada en Cognito
//       Username: username,
//       Password: password,
//       UserAttributes: [
//         {
//           Name: 'email',
//           Value: email,
//         },
//       ],
//     };

//     const data = await cognito.signUp(params).promise();
//     console.log('Usuario registrado:', data);
//     return data;
//   } catch (error) {
//     console.error('Error al registrar usuario:', error);
//     throw error;
//   }
// }

// // Ejemplo de función para autenticar un usuario
// // async function autenticarUsuario(username, password) {
// //   try {
// //     const params = {
// //       AuthFlow: 'USER_PASSWORD_AUTH',
// //       ClientId: 'buarncjnc7rpqrro0i9vagu26',
// //       AuthParameters: {
// //         USERNAME: username,
// //         PASSWORD: password,
// //       },
// //     };

// //     const data = await cognito.initiateAuth(params).promise();
// //     console.log('Usuario autenticado:', data);
// //     return data;
// //   } catch (error) {
// //     console.error('Error al autenticar usuario:', error);
// //     throw error;
// //   }
// // }

// // Llama a las funciones según lo necesites en tu aplicación
