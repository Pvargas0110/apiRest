const customHeader = (req, res , next) => {
    try {
        const apiKey = req.headers.api_key;
        if(apiKey === "pablo-01"){
            next();
        } else {
            res.status(403);
            res.send({error:"API_KEY no es correcta"});
        }
    } catch (e) {
        res.status(403);
        res.send({error: "Algo ocurrio en el custom header"});
    }
}

module.exports = customHeader;