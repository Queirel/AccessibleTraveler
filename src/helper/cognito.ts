import { CognitoJwtVerifier } from 'aws-jwt-verify';

// Verifier that expects valid access tokens:
export async function cognitoVerifier(token) {
  const verifier = CognitoJwtVerifier.create({
    userPoolId: 'us-east-2_0jNIt3K3t',
    tokenUse: 'access',
    clientId: 'buarncjnc7rpqrro0i9vagu26',
  });

  try {
    const payload = await verifier.verify(
      token, // the JWT as string
    );
    console.log('Token is valid. Payload:', payload);
    // return payload;
    return true;
  } catch {
    // return console.log('Token not valid!');
    return false;
  }
}
