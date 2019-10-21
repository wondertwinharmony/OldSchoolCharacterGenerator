export const toCamelCase = (stringToConvert: string) => {
    let noHyphens = stringToConvert.replace(/-/g, ' ').split(' ');

    let convertedString = noHyphens.map((word, i)=>{
        if(i !== 0){
            return word.replace(/(\b[a-z](?!\s))/g, (firstLetter) => {
                return firstLetter.toUpperCase();
            });
        }
        return word;
    }).join('');

    return convertedString;
  };
