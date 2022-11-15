//const { info } = require("console")

let infoCars = {
    nationals:[ 
        {id:1, car:"GMC", model:"2500", year:1994},
        {id:2, car:"Chrysler", model:"PT Cruiser", year:2005},
        {id:3, car:"Infiniti", model:"M", year:2009},
        {id:4, car:"Toyota", model:"Yaris", year:2011},
        {id:5, car:"Chevrolet", model:"Silverado 1500", year:2004},
        {id:6, car:"Volkswagen", model:"Type 2", year:1987},
        {id:7, car:"Subaru", model:"Outback", year:2004},
        {id:8, car:"BMW", model:"X3", year:2010},
        {id:9, car:"Dodge", model:"Colt", year:1989},
        {id:10, car:"Infiniti", model:"QX", year:2008}
    ],
    imported:[
        {id:1, car:"Mazda", model:"MPV", year:2003},
        {id:2, car:"Saturn", model:"VUE", year:2008},
        {id:3, car:"Jeep", model:"Wrangler", year:1992},
        {id:4, car:"Ford", model:"Ranger", year:1989},
        {id:5, car:"Maybach", model:"57", year:2009},
        {id:6, car:"Ford", model:"Escape", year:2001},
        {id:7, car:"Buick", model:"Skyhawk", year:1985},
        {id:8, car:"Jeep", model:"Cherokee", year:1997},
        {id:9, car:"Buick", model:"Park Avenue", year:1993},
        {id:10, car:"GMC", model:"Yukon XL 1500", year:2003}
    ]
}
//como es un objeto que tiene dos valores (nationals e imported) se utiliza el modulo exports
module.exports.infoCars = infoCars;