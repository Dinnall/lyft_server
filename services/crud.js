class RouteClass {
  constructor() {
  }

getThirdCharFromAstring(str) { 
let result = '';
  for(let x = 2; x < str.length;x+=3){
        result+=str[x]
      }
    return result;
}

}

const httpsRequest = new RouteClass();

module.exports = httpsRequest;