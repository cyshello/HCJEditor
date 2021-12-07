module.exports = function(app){
    app.get('/',function(req,res){
        var name = req.query.name;
        res.render('main.ejs');
    })
}