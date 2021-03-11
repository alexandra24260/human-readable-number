module.exports = function toReadable (number) {
    let dg = ['zero','one','two','three','four',
    'five','six','seven','eight','nine']; 
    let tn = ['ten','eleven','twelve','thirteen', 'fourteen','fifteen','sixteen',
    'seventeen','eighteen','nineteen']; 
    let tw = ['twenty','thirty','forty','fifty',
    'sixty','seventy','eighty','ninety'];
    let i;  
    let j;
    let d;
    let strNumber = number.toString(); 
            if  (strNumber.length < 2){
            return dg[number];  
            }
            else if  (strNumber.length < 3){
                if (number % 10 === 0 && number != 10){
                    return tw[number/10 - 2];
                }
                else if (number > 20){
                     i = number - Math.trunc(number/10)*10;
                    return tw[Math.trunc(number/10) - 2] + ' ' + dg[i];
                }
                else {
                    return tn[number - 10]; 
                }
            }
            else if  (strNumber.length == 3){
                  j = Math.trunc(number/100);  
                  d = Math.trunc((number - (j * 100))/10);
                  m = number - (j*100 + d*10);
                  w = number - (j*100);
                  if ( number % 100 === 0){
                      return dg[j] + ' hundred';
                  }
                  if (number % 10 === 0){
                      if ( w == 10){
                        return dg[j] + ' hundred ' + tn[w - 10];
                      }
                      else {
                      return dg[j] + ' hundred ' + tw[ d - 2 ] ;
                  }
                }
                  else {
                      if (!d){
                        return dg[j] + ' hundred ' + dg[w];    
                      }

                      else if ( w < 20){
                          return dg[j] + ' hundred ' + tn[w - 10];
                      }
                      else {
                      return dg[j] + ' hundred ' + tw[ d - 2] + ' ' + dg[m];
                  }
                }
            } 
}
