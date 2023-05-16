module.exports.isAuth =  (req, res, next) => {
    const auth = req.headers.authorization;
    
    const credential = {
        "clientId":"FZ_API_Portal",
        "secret":"VHKWhTHg6714ziV"
    }

    // if (auth === 'password') {
    //   next();
    // } else {
    //   res.status(401);
    //   res.send('Access forbidden');
    // }

    if(auth === undefined){
		res.status(401).send('Please provide Authorization using basic in headers with base64 encoding');
	}
	else
	{
		//grab the encoded value
		var encoded = req.headers.authorization.split(' ')[1];
		// decode it using base64
		var decoded = Buffer.from(encoded,'base64').toString();
		var name = decoded.split(':')[0];
		var password = decoded.split(':')[1];
		// check if the passed username and password match with the values in our database.
		// this is dummy validation. 
		if(name === credential.clientId && password === credential.secret){
            next();	
		}
		else{
			res.status(403).send('Invalid Authorization data provided. Please check Username and Password');
		}
	
	}
}
