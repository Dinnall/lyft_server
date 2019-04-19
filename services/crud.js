class RouteClass {
  constructor() {
  }

getThirdCharFromAstring(string_to_cut) { 
let result = '';
  for(let x = 2; x < string_to_cut.length;x+=3){
        result+= string_to_cut.charAt(x)
      }
    return result;
}

}

const httpsRequest = new RouteClass();

module.exports = httpsRequest;