
module.exports={
    getHouses: (req,res) =>{
        req.app.get('db').get_houses().then(houses=>{
            console.log(houses);res.send(houses)})
    },
    deleteHouses: (req,res) =>{
        const {id} = req.params;
        req.app.get('db').delete_house({id:id})
        .then(()=>res.sendStatus(200)
        .then(houses=>{res.send(houses)}))
        .catch(error => {res.status(500).send({errorMessage: "no delete"})
        console.log('delete error', error)})
    },
    addHouse: (req,res) =>{
        console.log('add', req.body)
        const {name, address, city, states, zip, image, monthly, desiredRent} = req.body;
        req.app.get('db').add_house({
            name: name,
            address: address,
            city: city,
            state: states,
            zip: zip,
            image: image,
            monthly: monthly,
            desiredRent: desiredRent
        }).then(house =>res.send(house))
        .catch(error=> {console.log('no add', error)})
    }


}