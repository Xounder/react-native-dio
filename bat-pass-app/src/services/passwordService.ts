export default function generatePassword(){
  let password = '';
  const characters = 'Aa@$#123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const passwordLength = 8;

  let charactersLength = characters.length;
  for (let index = 0; index < passwordLength; index++) {
    password += characters.charAt(Math.floor(Math.random() * charactersLength));
  }

  return password
}