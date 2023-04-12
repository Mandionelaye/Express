const express = require("express");
const app = express();
const bd = require("./bd");

//Templete pug
app.set("view engine", "pug");
app.set("views","./views");
app.use(express.static("public"));
//mill
app.use((req,res,next)=>{
    let date = new Date();
    const day=date.getDay();
    const hour =date.getHours();
    if (day >= 1 && day <= 5 && hour >= 9 && hour <= 17) {
      next();
    }else{
        res.render("fermet", { title: 'fermeture'})
     }
     setInterval(()=>date = new Date(),1000);   
})

//Routes
app.get("/", function(req, res){
    const phone = bd.filter(elm=>elm.id===1);
    const tablette = newtab=bd.filter(elm=>elm.id===2);
    const ordinateur = newtab=bd.filter(elm=>elm.id===3);
    res.render("index", { title: 'Accuil',
    phone:phone, tablette:tablette, ordinateur:ordinateur });
});
app.get("/nosService/:tab", function(req, res){
    const chang = req.params.tab;
    let newtab= [];
    switch(chang){
        case "phone":
         newtab=bd.filter(elm=>elm.id===1);
         break;
        case "tablette":
            newtab=bd.filter(elm=>elm.id===2);
            break; 
        case "Ordinateur":
            newtab=bd.filter(elm=>elm.id===3);
            break;
        default:
            res.status(404).render("page introuvable");
            break;
    }
    res.render("nosService", { title: 'Nos Service',
 tab:newtab});
});
app.get("/contact", function(req, res){
    res.render("contact", { title: 'contact'});
});


app.listen(3000,()=>console.log("server lancer http://localhost:3000"));