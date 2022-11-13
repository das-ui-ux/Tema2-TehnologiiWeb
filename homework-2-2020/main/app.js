function addTokens(input, tokens){
    //1
    if(typeof input !== "string" ) throw "Invalid input";
    //2
    if(input.length < 6) throw "Input should have at least 6 characters";
    //3
    if (typeof tokens != 'object') throw 'Invalid array format';
	tokens.map((token) => {
        if (typeof token.tokenName != 'string' || token.hasOwnProperty('tokenName') == false) throw 'Invalid array format';
	});
    //4
    if(!input.includes("...")) return input;
    //5  
    tokens.map((token) => {
		input = input.replace('...', `\${${token.tokenName}}`);
	});
	return input;
}

const app = {
    addTokens: addTokens
}

module.exports = app;



