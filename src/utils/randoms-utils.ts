const alphanumericUpperAndLowerCaseCharactersSet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

export function makeRandomToken(length: number): string {
  let result = '';
  const charactersLength = alphanumericUpperAndLowerCaseCharactersSet.length;
  for ( let i = 0; i < length; i++ ) {
    result += alphanumericUpperAndLowerCaseCharactersSet.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}