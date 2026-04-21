export function authMiddleware(req, res, next){
    console.log(req.headers.authorization);
    const token = req.headers.authorization;
    if(!token) res.status(401).send("Token invalido");
    next();
}