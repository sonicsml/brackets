module.exports = function check(str, bracketsConfig) {
  if (str.length % 2 == 0) {
  	var count = 0;
  	for (var i = 0; i < str.length; i++) {
  		if (( str[i] == '(' ) || (str[i] == '[') || (str[i] == '{')) {
  			count++;
  		} 
  		else if ((str[i] == ')') || (str[i] == ']') || (str[i] == '}')) {
  			count--;
  			if (count < 0) {
  				return false;
  			}
  		}
  	}
	if (count != 0) {
		return false;
	}
	else return true;
  }
}
