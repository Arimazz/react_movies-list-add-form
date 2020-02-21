(this["webpackJsonpreact_movies-list-add-form"]=this["webpackJsonpreact_movies-list-add-form"]||[]).push([[0],[,,,,,,,,,function(e){e.exports=JSON.parse('[{"title":"Inception","description":"Follows the lives of eight very different couples in dealing with their love lives in various loosely interrelated tales all set during a frantic month before Christmas in London, England.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg","imdbUrl":"https://www.imdb.com/title/tt1375666","imdbId":"tt1375666"},{"title":"Love Actually","description":"A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTY4NjQ5NDc0Nl5BMl5BanBnXkFtZTYwNjk5NDM3._V1_.jpg","imdbUrl":"https://www.imdb.com/title/tt0314331","imdbId":"tt0314331"},{"title":"The Day After Tomorrow","description":"Jack Hall, paleoclimatologist, must make a daring trek from Washington, D.C. to New York City to reach his son, trapped in the cross-hairs of a sudden international storm which plunges the planet into a new Ice Age.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTY4YWMzMTMtZjUyOS00OGY1LTljMGUtOWU5ZjYzMjc2ZTMwXkEyXkFqcGdeQXVyMTYzMDM0NTU@._V1_SY1000_CR0,0,701,1000_AL_.jpg","imdbUrl":"https://www.imdb.com/title/tt0319262","imdbId":"tt0319262"},{"title":"Rogue One","description":"The daughter of an Imperial scientist joins the Rebel Alliance in a risky move to steal the Death Star plans.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMjEwMzMxODIzOV5BMl5BanBnXkFtZTgwNzg3OTAzMDI@._V1_SY1000_SX675_AL_.jpg","imdbUrl":"https://www.imdb.com/title/tt3748528","imdbId":"tt3748528"},{"title":"The Holiday","description":"Two women troubled with guy-problems swap homes in each other\'s countries, where they each meet a local guy and fall in love.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTI1MDk4MzA2OF5BMl5BanBnXkFtZTYwMjQ3NDc3._V1_.jpg","imdbUrl":"https://www.imdb.com/title/tt0457939","imdbId":"tt0457939"}]')},,function(e,t,a){e.exports=a(21)},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var i=a(0),n=a.n(i),r=a(7),l=a.n(r),m=(a(16),a(10)),s=a(1),o=a(2),c=a(4),d=a(3),u=a(5),p=(a(17),a(18),a(19),function(e){var t=e.title,a=e.description,i=e.imgUrl,r=e.imdbUrl;return n.a.createElement("div",{className:"card"},n.a.createElement("div",{className:"card-image"},n.a.createElement("figure",{className:"image is-4by3"},n.a.createElement("img",{src:i,alt:"Film logo"}))),n.a.createElement("div",{className:"card-content"},n.a.createElement("div",{className:"media"},n.a.createElement("div",{className:"media-left"},n.a.createElement("figure",{className:"image is-48x48"},n.a.createElement("img",{src:"images/imdb-logo.jpeg",alt:"imdb"}))),n.a.createElement("div",{className:"media-content"},n.a.createElement("p",{className:"title is-8"},t))),n.a.createElement("div",{className:"content"},a,n.a.createElement("br",null),n.a.createElement("a",{href:r},"IMDB"))))});p.defaultProps={description:""};var h=function(e){var t=e.movies;return n.a.createElement("div",{className:"movies"},t.map((function(e){return n.a.createElement(p,Object.assign({key:e.imdbId},e))})))};h.defaultProps={movies:[]};var g=a(8),b=(a(20),function(e){var t=e.inputs,a=e.handleChange,i=e.getState;return n.a.createElement(n.a.Fragment,null,t.map((function(e){switch(e.type){case"text":return n.a.createElement("input",{key:e.id,onChange:a,value:i(e.stateKey),name:e.title,placeholder:e.title,type:e.type});case"textarea":return n.a.createElement("textarea",{key:e.id,onChange:a,value:i(e.stateKey),name:e.title,placeholder:e.title,type:e.type});default:return n.a.createElement(n.a.Fragment,null)}})))}),v=[{title:"title",stateKey:"title",id:1,type:"text"},{title:"description",stateKey:"description",id:2,type:"textarea"},{title:"imgUrl",stateKey:"imgUrl",id:3,type:"text"},{title:"imdbUrl",stateKey:"imdbUrl",id:4,type:"text"},{title:"imdbId",stateKey:"imdbId",id:5,type:"text"}],f=function(e){function t(){var e,a;Object(s.a)(this,t);for(var i=arguments.length,n=new Array(i),r=0;r<i;r++)n[r]=arguments[r];return(a=Object(c.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(n)))).state={title:"",description:"",imgUrl:"",imdbUrl:"",imdbId:""},a.handleChange=function(e){a.setState(Object(g.a)({},e.target.name,e.target.value))},a.getMovie=function(e){var t=a.state,i=t.title,n=t.description,r=t.imgUrl,l=t.imdbUrl,m=t.imdbId;return e.preventDefault(),{title:i,description:n,imgUrl:r,imdbUrl:l,imdbId:m}},a.resetState=function(){a.setState({title:"",description:"",imgUrl:"",imdbUrl:"",imdbId:""})},a.handleSubmit=function(e){a.props.addMovie(a.getMovie(e)),a.resetState()},a.getState=function(e){return a.state[e]},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return n.a.createElement("form",{onSubmit:this.handleSubmit},n.a.createElement(b,{inputs:v,handleChange:this.handleChange,getState:this.getState}),n.a.createElement("button",{type:"submit"},"Submit"))}}]),t}(i.Component),M=a(9),y=function(e){function t(){var e,a;Object(s.a)(this,t);for(var i=arguments.length,n=new Array(i),r=0;r<i;r++)n[r]=arguments[r];return(a=Object(c.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(n)))).state={movies:M},a.addMovie=function(e){a.setState((function(t){return{movies:[].concat(Object(m.a)(t.movies),[e])}}))},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.state.movies;return n.a.createElement("div",{className:"page"},n.a.createElement("div",{className:"page-content"},n.a.createElement(h,{movies:e})),n.a.createElement("div",{className:"sidebar"},n.a.createElement(f,{addMovie:this.addMovie})))}}]),t}(i.Component);l.a.render(n.a.createElement(y,null),document.getElementById("root"))}],[[11,1,2]]]);
//# sourceMappingURL=main.f1f0bce4.chunk.js.map