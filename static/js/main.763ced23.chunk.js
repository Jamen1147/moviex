(window.webpackJsonpmoviex=window.webpackJsonpmoviex||[]).push([[0],{173:function(e,t,n){e.exports=n.p+"static/media/page404.1199c36b.jpg"},183:function(e,t,n){e.exports=n(357)},357:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(33),i=n.n(o),c=n(19),l=n(38),m=n(159),s=n(40),u=n(22),d=Object(u.a)({basename:"/moviex"}),p={tech:{name:"Tech",list:[{name:"Semantic UI React",url:"https://react.semantic-ui.com"},{name:"Prop Types",url:"https://reactjs.org/docs/typechecking-with-proptypes.html"},{name:"TMDB API",url:"https://www.themoviedb.org/documentation/api?language=en-US"},{name:"React Item Carousel",url:"https://www.npmjs.com/package/react-items-carousel"},{name:"React Redux",url:"https://react-redux.js.org/"}]}},h={header:"React Example",content:"If you like this example, which I really hope you do, please do clone it and explore more about react yourself"},v={HOME:"/",IN_CINEMAS:"/movie/now_playing",UP_COMING:"/movie/upcoming",POPULAR:"/movie/popular",TOP_RATED:"/movie/top_rated",DETAIL:"/movie/:id/:endPoint",MORE:"/explore"},g=[{name:"Home",link:v.HOME},{name:"In Cinemas",link:v.IN_CINEMAS},{name:"Up Comings",link:v.UP_COMING},{name:"Popular",link:v.POPULAR},{name:"Top Rated",link:v.TOP_RATED},{name:"More",link:v.MORE}],E=n(370),f=n(371),b=n(365),y=n(372),O=n(362),T=n(363);function P(e){var t=e.col1Items,n=e.col2Items,a=e.longContent,o=e.logo,i=e.logoText,c=function(e){if(e)return r.a.createElement(E.a.Column,{width:n?3:5},r.a.createElement(f.a,{inverted:!0,as:"h4",content:e.name}),r.a.createElement(b.a,{link:!0,inverted:!0},e.list.map(function(e,t){return r.a.createElement(b.a.Item,{key:t},r.a.createElement("a",{href:e.url,rel:"noopener noreferrer",target:"_blank"},e.name))})))};return r.a.createElement(y.a,{inverted:!0,vertical:!0,style:{padding:"5em 0em 1.5em 0em"}},r.a.createElement(O.a,{textAlign:"center"},r.a.createElement(E.a,{divided:!0,inverted:!0,stackable:!0},r.a.createElement(E.a.Row,null,c(t),c(n),r.a.createElement(E.a.Column,{width:n?7:8},r.a.createElement(f.a,{as:"h4",inverted:!0},a.header),r.a.createElement("p",null,a.content),r.a.createElement("p",null,"Note: Any hard refreshes on routes that are not the default route (Home) will lead to 404. For more info please check out this"," ",r.a.createElement("a",{href:"https://itnext.io/so-you-want-to-host-your-single-age-react-app-on-github-pages-a826ab01e48",rel:"noopener noreferrer",target:"_blank"},"Article")," ")))),r.a.createElement(T.a,{inverted:!0,section:!0,style:{marginBottom:25}}),o,r.a.createElement("p",{style:{marginTop:30}},i)))}var M=n(80),I=n(50),w=n(367),_=n(39),R=n(23);function x(e){var t=e.isMobile;return r.a.createElement(O.a,{text:!0},r.a.createElement(f.a,{as:"h1",content:"Welcome to R-MovieX",inverted:!0,style:{fontSize:t?"2em":"4em",fontWeight:"normal",marginBottom:0,marginTop:t?"1.5em":"3em"}}),r.a.createElement(f.a,{as:"h2",content:"This is a movie website example built with React, Redux and Semantic-UI",inverted:!0,style:{fontSize:t?"1.5em":"1.7em",fontWeight:"normal",marginTop:t?"0.5em":"1.5em"}}),r.a.createElement(R.a,{to:v.MORE},r.a.createElement(w.a,{primary:!0,size:"huge",style:{marginTop:25}},"Explore",r.a.createElement(_.a,{name:"right arrow"}))))}var k=n(373),j=n(368),D=n(364),N=function(e){var t=e.children,n=e.menuItems,o=e.imgSrc,i=e.currentRoute,c=e.shouldShowBigHeader,l=Object(a.useState)(!1),m=Object(I.a)(l,2),s=m[0],u=m[1],d=function(){return window.scrollTo({top:0,left:0,behavior:"smooth"})};return r.a.createElement(k.a,{getWidth:function(){return"undefined"===typeof window?k.a.onlyTablet.minWidth:window.innerWidth},minWidth:k.a.onlyTablet.minWidth},r.a.createElement(D.a,{once:!1,onBottomPassed:function(){return u(!0)},onBottomPassedReverse:function(){return u(!1)}},r.a.createElement(y.a,{inverted:!0,textAlign:"center",style:{minHeight:c?700:75,padding:"1em oem",borderRadius:"0px",opacity:s?1:.9,backgroundColor:"black"}},function(){if(o&&c)return r.a.createElement(y.a,{style:{backgroundImage:"url(".concat(o,")"),backgroundSize:"cover",backgroundRepeat:"no-repeat",position:"absolute",top:0,left:0,zIndex:s?10:-1,minHeight:700,width:"100%",opacity:.2,borderRadius:"0px"}})}(),r.a.createElement(j.a,{fixed:s?"top":null,inverted:!0,pointing:!s,secondary:!s,size:"large"},r.a.createElement(O.a,null,n.map(function(e,t){return r.a.createElement(j.a.Item,{key:t,active:i===e.link},r.a.createElement(R.a,{to:e.link},e.name))}),function(){if(s)return r.a.createElement(j.a.Item,{onClick:d,position:"right",style:{position:"absolute",right:0}},r.a.createElement(_.a,{name:"up arrow"}))}())),c?r.a.createElement(x,null):"")),t)},A=n(369);function C(e){var t=e.children,n=e.menuItems,o=e.imgSrc,i=e.currentRoute,c=e.shouldShowBigHeader,l=Object(a.useState)(!1),m=Object(I.a)(l,2),s=m[0],u=m[1];return r.a.createElement(k.a,{as:A.a.Pushable,getWidth:function(){return"undefined"===typeof window?k.a.onlyTablet.minWidth:window.innerWidth},maxWidth:k.a.onlyMobile.maxWidth},r.a.createElement(A.a,{as:j.a,animation:"push",inverted:!0,onHide:function(){return u(!1)},vertical:!0,visible:s},n.map(function(e,t){return r.a.createElement(j.a.Item,{active:i===e.link,key:t},r.a.createElement(R.a,{to:e.link},e.name))})),r.a.createElement(A.a.Pusher,{dimmed:s},r.a.createElement(y.a,{inverted:!0,textAlign:"center",style:{minHeight:c?350:75,padding:"1em 0em",borderRadius:"0px",opacity:.9,backgroundColor:"black"},vertical:!0},function(){if(o&&c)return r.a.createElement(y.a,{style:{backgroundImage:"url(".concat(o,")"),backgroundSize:"cover",backgroundRepeat:"no-repeat",position:"absolute",top:0,left:0,zIndex:-1,minHeight:350,width:"100%",opacity:.2,borderRadius:"0px"}})}(),r.a.createElement(O.a,null,r.a.createElement(j.a,{inverted:!0,pointing:!0,secondary:!0,size:"large"},r.a.createElement(j.a.Item,{onClick:function(){return u(!0)}},r.a.createElement(_.a,{name:"sidebar"})))),c?r.a.createElement(x,{isMobile:!0}):""),t))}var B={TMDB:{API_KEY:"7c1ce74a4120dc854d54dad36397c314",ACCESS_TOKEN:"eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3YzFjZTc0YTQxMjBkYzg1NGQ1NGRhZDM2Mzk3YzMxNCIsInN1YiI6IjVkNmJjYTYzNjU2ODZlNWI5Yjg4MmQ4MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.O1f6RnJ3yQVx29Co1a4dTl7-TNscnyDVn45mZTgCLBY",IMG_URL:"http://image.tmdb.org/t/p/w185",IMG_URL_HIGH:"http://image.tmdb.org/t/p/w500",IMG_URL_MID:"http://image.tmdb.org/t/p/w300"}},S={TMDB:{UP_COMING:"/upcoming",TOP_RATED:"/top_rated",POPULAR:"/popular",NOW_PLAYING:"/now_playing",LATEST:"/latest",DISCOVER:"/discover/movie"}},U=n(63),G=n.n(U),L=n(116),H=n(167),W=n.n(H).a.create({baseURL:"https://api.themoviedb.org/3",params:{api_key:B.TMDB.API_KEY}}),z="FETCH_MOVIES",Y="FETCH_MOVIE",J=function(e){return e.then(function(e){return{ok:!0,data:e.data}}).catch(function(e){return Promise.resolve({ok:!1,error:e.response.data})})},V=function(e){return function(){var t=Object(L.a)(G.a.mark(function t(n){var a;return G.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,J(W.get("/movie".concat(e)));case 2:a=t.sent,n({type:z,payload:{result:a.data.results,endPoint:e}});case 4:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},Z=Math.floor(10*Math.random()),Q=Object(c.b)(function(e){return{movies:Object.values(e.movies).filter(function(e){return e.endPoint===S.TMDB.NOW_PLAYING})}},{fetchMovies:V})(Object(s.f)(function(e){var t=e.children,n=Object(M.a)(e,["children"]);Object(a.useEffect)(function(){n.fetchMovies(S.TMDB.NOW_PLAYING)},[]);var o=n.location.pathname,i=o===v.HOME;if(n.movies.length>=1){var c=n.movies.length>Z?Z:0,l="".concat(B.TMDB.IMG_URL_HIGH).concat(n.movies[c].poster_path),m="".concat(B.TMDB.IMG_URL_MID).concat(n.movies[c].poster_path);return r.a.createElement("div",null,r.a.createElement(N,{menuItems:g,imgSrc:l,currentRoute:o,shouldShowBigHeader:i},t),r.a.createElement(C,{menuItems:g,imgSrc:m,currentRoute:o,shouldShowBigHeader:i},t))}return r.a.createElement("div",null,r.a.createElement(N,{menuItems:g,currentRoute:o,shouldShowBigHeader:i},t),r.a.createElement(C,{menuItems:g,currentRoute:o,shouldShowBigHeader:i},t))})),q=n(174),F=n(168),X=n.n(F),K=Object(c.b)(function(e,t){return{movies:Object.values(e.movies).filter(function(e){return e.endPoint===t.endPoint})}},{fetchMovies:V})(function(e){var t=e.margin,n=e.sectionTitle,o=e.endPoint,i=Object(M.a)(e,["margin","sectionTitle","endPoint"]),c=Object(a.useState)(0),l=Object(I.a)(c,2),m=l[0],s=l[1];Object(a.useEffect)(function(){i.fetchMovies(o)},[]);var u;return r.a.createElement(O.a,{textAlign:"center",style:{margin:t||null}},r.a.createElement(T.a,{as:"h4",className:"header",horizontal:!0,style:{margin:"2em 0em",textTransform:"uppercase"}},n),r.a.createElement(y.a,{loading:0===i.movies.length,vertical:!0},(u=i.movies,r.a.createElement(X.a,{enablePlaceholder:!0,numberOfPlaceholderItems:5,minimumPlaceholderTime:1e3,numberOfCards:3,gutter:12,showSlither:!1,firstAndLastGutter:!0,freeScrolling:!0,requestToChangeActive:function(e){return s(e)},activeItemIndex:m,activePosition:"center",chevronWidth:60,rightChevron:">",leftChevron:"<",outsideChevron:!0},function(e){return e.map(function(e,t){return r.a.createElement("div",{key:t},r.a.createElement(R.a,{to:"/movie/".concat(e.id,"/").concat(o.substring(1,o.length))},r.a.createElement(q.a,{src:"".concat(B.TMDB.IMG_URL).concat(e.poster_path),size:"medium",rounded:!0,bordered:!0})))})}(u)))),r.a.createElement(R.a,{to:"/movie".concat(o)},r.a.createElement(w.a,{basic:!0,style:{marginTop:20},color:"black",size:"small",content:"More"})))});function $(){return r.a.createElement("div",null,r.a.createElement(y.a,{vertical:!0,style:{padding:"5em 0em"}},r.a.createElement(K,{sectionTitle:"In Cinemas",endPoint:S.TMDB.NOW_PLAYING}),r.a.createElement(K,{sectionTitle:"Up Comings",endPoint:S.TMDB.UP_COMING,margin:"70px 0 0 0"}),r.a.createElement(K,{sectionTitle:"Popular",endPoint:S.TMDB.POPULAR,margin:"70px 0 0 0"}),r.a.createElement(K,{sectionTitle:"Top Rated",endPoint:S.TMDB.TOP_RATED,margin:"70px 0 0 0"})))}var ee=n(374),te=n(366),ne=Object(c.b)(function(e,t){var n=t.match.params,a=n.id,r=n.endPoint,o="/".concat(r,"_").concat(a);return{movie:e.movies[o]}},{fetchMovie:function(e,t){return function(){var n=Object(L.a)(G.a.mark(function n(a){var r;return G.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,J(W.get("/movie/".concat(e)));case 2:r=n.sent,a({type:Y,payload:{result:r.data,endPoint:t}});case 4:case"end":return n.stop()}},n)}));return function(e){return n.apply(this,arguments)}}()}})(function(e){var t=e.match.params,n=t.id,o=t.endPoint;Object(a.useEffect)(function(){e.fetchMovie(n,"/"+o),window.scrollTo({top:0,left:0,behavior:"smooth"})},[]);var i=window.innerWidth<=k.a.onlyTablet.minWidth;if(e.movie){var c="".concat(B.TMDB.IMG_URL_HIGH).concat(e.movie.poster_path),l="".concat(B.TMDB.IMG_URL).concat(e.movie.poster_path);return console.log(e.movie),r.a.createElement(y.a,{vertical:!0,style:{padding:"5em 0em"}},r.a.createElement(y.a,{inverted:!0,vertical:!0,style:{padding:"3em 0em",opacity:"0.9",height:i?600:420}},r.a.createElement(E.a,{divided:!0,inverted:!0,stackable:!0},r.a.createElement(E.a.Row,{textAlign:"center"},r.a.createElement(E.a.Column,{width:6,textAlign:"center"},r.a.createElement(te.a,{centered:!0,image:l,style:{width:200},extra:r.a.createElement(function(){var t=Math.round(e.movie.vote_average);return r.a.createElement(ee.a,{size:"tiny",defaultRating:t,maxRating:10,disabled:!0})},null)})),r.a.createElement(E.a.Column,{width:10,style:{alignSelf:"center"}},r.a.createElement(f.a,{inverted:!0,size:"large"},e.movie.title," (".concat(e.movie.release_date.split("-")[0],")")),r.a.createElement(f.a,{inverted:!0,size:"small",style:{padding:"0em 1em"}},e.movie.overview)))),r.a.createElement(y.a,{vertical:!0,style:{padding:"3em 0em",opacity:"0.3",height:i?600:420,width:"100%",backgroundImage:"url(".concat(c,")"),backgroundSize:"cover",backgroundRepeat:"no-repeat",position:"absolute",top:0,zIndex:-1}})))}return r.a.createElement(y.a,{vertical:!0,style:{padding:"5em 0em"}},r.a.createElement(y.a,{loading:!e.movie,inverted:!0,vertical:!0,style:{padding:"3em 0em",opacity:"0.9",minHeight:500}}))}),ae=n(5),re=n.n(ae);function oe(e){var t=e.movies,n=e.segmentTitle,a=e.endPoint,o=window.innerWidth>=k.a.onlyTablet.minWidth?4:8;return r.a.createElement(y.a,{vertical:!0,style:{padding:"8em 2em"}},r.a.createElement(T.a,{as:"h4",className:"header",horizontal:!0,style:{margin:"0em 0em 2em 0em",textTransform:"uppercase"}},n),r.a.createElement(y.a,{vertical:!0,loading:0===t.length},r.a.createElement(E.a,null,r.a.createElement(E.a.Row,null,function(e){return e.map(function(e,t){return r.a.createElement(E.a.Column,{width:o,key:t},r.a.createElement(O.a,null,r.a.createElement(R.a,{to:"/movie/".concat(e.id,"/").concat(a.substring(1,a.length))},r.a.createElement(te.a,{link:!0,centered:!0,image:"".concat(B.TMDB.IMG_URL).concat(e.poster_path),style:{marginTop:"20px"},extra:r.a.createElement("p",{style:{fontSize:10}},e.title)}))))})}(t)))))}oe.prototype={movies:re.a.array.isRequired,segmentTitle:re.a.string.isRequired,endPoint:re.a.string.isRequired};var ie=Object(c.b)(function(e){return{movies:Object.values(e.movies).filter(function(e){return e.endPoint===S.TMDB.NOW_PLAYING})}},{fetchMovies:V})(function(e){return Object(a.useEffect)(function(){e.fetchMovies(S.TMDB.NOW_PLAYING)},[]),r.a.createElement(oe,{movies:e.movies,segmentTitle:"In Cinemas",endPoint:S.TMDB.NOW_PLAYING})}),ce=Object(c.b)(function(e){return{movies:Object.values(e.movies).filter(function(e){return e.endPoint===S.TMDB.UP_COMING})}},{fetchMovies:V})(function(e){return Object(a.useEffect)(function(){e.fetchMovies(S.TMDB.UP_COMING)},[]),e.movies?r.a.createElement(oe,{movies:e.movies,segmentTitle:"Up Coming",endPoint:S.TMDB.UP_COMING}):r.a.createElement(y.a,{loading:!0,style:{padding:"8em 2em"}})}),le=Object(c.b)(function(e){return{movies:Object.values(e.movies).filter(function(e){return e.endPoint===S.TMDB.POPULAR})}},{fetchMovies:V})(function(e){return Object(a.useEffect)(function(){e.fetchMovies(S.TMDB.POPULAR)},[]),e.movies?r.a.createElement(oe,{movies:e.movies,segmentTitle:"Popular",endPoint:S.TMDB.POPULAR}):r.a.createElement(y.a,{loading:!0,style:{padding:"8em 2em"}})}),me=Object(c.b)(function(e){return{movies:Object.values(e.movies).filter(function(e){return e.endPoint===S.TMDB.TOP_RATED})}},{fetchMovies:V})(function(e){return Object(a.useEffect)(function(){e.fetchMovies(S.TMDB.TOP_RATED)},[]),e.movies?r.a.createElement(oe,{movies:e.movies,segmentTitle:"Top Rated",endPoint:S.TMDB.TOP_RATED}):r.a.createElement(y.a,{loading:!0,style:{padding:"8em 2em"}})});function se(){return r.a.createElement(y.a,{textAlign:"center",vertical:!0,style:{padding:"16em 0em"}},r.a.createElement(f.a,{as:"h2"},"More to come ..."))}var ue=n(173),de=n.n(ue);function pe(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(y.a,{textAlign:"center",vertical:!0,style:{padding:"8em 0em",minHeight:700,backgroundColor:"black",opacity:"0.9"}},r.a.createElement(y.a,{style:{backgroundImage:"url(".concat(de.a,")"),backgroundSize:"cover",backgroundRepeat:"no-repeat",position:"absolute",top:0,left:0,zIndex:-1,minHeight:700,width:"100%",opacity:.5,borderRadius:"0px"}}),r.a.createElement(f.a,{inverted:!0,as:"h1"},"YOU ARE NOW IN ",r.a.createElement("p",{style:{color:"red"}},"ZONE 404 ",r.a.createElement(_.a,{name:"warning sign"}))),r.a.createElement(w.a,{as:"a",href:"https://www.disney.com.au/",inverted:!0,color:"red"},"Go Home")))}var he=n(119),ve=n(82),ge=n.n(ve);function Ee(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,a)}return n}function fe(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Ee(n,!0).forEach(function(t){Object(he.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ee(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var be=Object(l.c)({movies:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case z:var n=ge.a.map(t.payload.result,function(e){return ge.a.extend({endPoint:t.payload.endPoint},{key_id:"".concat(t.payload.endPoint,"_").concat(e.id)},e)});return fe({},e,{},ge.a.mapKeys(n,"key_id"));case Y:var a="".concat(t.payload.endPoint,"_").concat(t.payload.result.id);return t.payload.result.key_id=a,t.payload.result.endPoint=t.payload.endPoint,fe({},e,Object(he.a)({},a,t.payload.result));default:return e}}}),ye=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||l.d,Oe=Object(l.e)(be,ye(Object(l.a)(m.a)));i.a.render(r.a.createElement(c.a,{store:Oe},r.a.createElement(function(){return r.a.createElement(s.b,{history:d},r.a.createElement(Q,null,r.a.createElement(s.c,null,r.a.createElement(s.a,{path:"".concat(v.HOME),exact:!0,component:$}),r.a.createElement(s.a,{path:"".concat(v.IN_CINEMAS),exact:!0,component:ie}),r.a.createElement(s.a,{path:"".concat(v.POPULAR),exact:!0,component:le}),r.a.createElement(s.a,{path:"".concat(v.TOP_RATED),exact:!0,component:me}),r.a.createElement(s.a,{path:"".concat(v.UP_COMING),exact:!0,component:ce}),r.a.createElement(s.a,{path:"".concat(v.DETAIL),exact:!0,component:ne}),r.a.createElement(s.a,{path:"".concat(v.MORE),exact:!0,component:se}),r.a.createElement(s.a,{path:"*",exact:!0,component:pe})),r.a.createElement(P,{col1Items:p.tech,longContent:h,logo:r.a.createElement(function(){return r.a.createElement("div",null,r.a.createElement(_.a,{name:"film",size:"big"}),r.a.createElement("br",null),r.a.createElement(f.a,{as:"h2",inverted:!0,icon:!0,style:{marginTop:0}},"R-MovieX"))},null),logoText:"By Jamen H"})))},null)),document.querySelector("#root"))}},[[183,1,2]]]);
//# sourceMappingURL=main.763ced23.chunk.js.map