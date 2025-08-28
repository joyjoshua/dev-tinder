//We are maintaining this file to stores all the middlewares for authetication of the apis

//admin auth middleware
const authAdmin = (req, res, next) => {
    console.log('Authenticating Admin...')
    const token = "xyz";
    if(token !== 'xyz') {
        res.status(401).send("Unauthorized user trying admin creds");
    } else {
        next();
    }
}

//users auth middleware
const userAuth = (req, res, next) => {
    console.log('Authenticating user...');
    const token = 'abc';
    if(token!== 'abc') {
        res.status(401).send('Unauthorized user trying to access the app')
    } else {
        next();
    }
}

module.exports = {authAdmin, userAuth};