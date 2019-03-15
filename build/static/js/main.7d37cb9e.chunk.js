(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{103:function(e,t,a){},108:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(43),i=a.n(r),s=(a(68),a(69),a(47)),c=a(18),o=a.n(c),u=(a(70),function(e){return l.a.createElement(o.a,null,l.a.createElement("h1",null,"Welcome to TeachMe"),l.a.createElement("p",null,"Teach Me is a software project designed to connect users to teach each other creative skills. Teach Me provides creatively skilled individuals (musicians, artists etc.) with an additional source of income, while allowing non-skilled individuals to explore skills that they might be interested in learning."),l.a.createElement("hr",null),l.a.createElement("p",{className:"bold-text"},"This website is still under consturction. Please come back later :)"))}),m=(a(71),function(e){return l.a.createElement(o.a,null,l.a.createElement("h1",null,"Oops"),l.a.createElement("p",null,"That's a 404 error - It seems that we cannot find the page you requested."))}),h=a(11),g=a(12),p=a(15),d=a(13),E=a(14),v=a(26),b=a.n(v),y=a(36),f=a.n(y),C=a(21),k=a.n(C),O=a(30),j=a.n(O),P=a(19),S=function(e){function t(){return Object(h.a)(this,t),Object(p.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(E.a)(t,e),Object(g.a)(t,[{key:"render",value:function(){return l.a.createElement(k.a,null,l.a.createElement(k.a.Body,null,l.a.createElement(k.a.Img,{className:"instructor-img",src:"/images/default-user.png"}),l.a.createElement(k.a.Title,null,this.props.title),l.a.createElement(k.a.Text,null,this.props.description),l.a.createElement(k.a.Text,{className:"italics-text"},"Price: $",this.props.price," | Rating: ",this.props.rating," | Category: ",this.props.category),l.a.createElement(P.LinkContainer,{to:"/classes/"+this.props.slug},l.a.createElement(j.a,{variant:"info"},"See Class Details"))))}}]),t}(n.Component),R=a(110),x=function(e){function t(e){var a;return Object(h.a)(this,t),(a=Object(p.a)(this,Object(d.a)(t).call(this,e))).state={maxPrice:"Max Price...",minRating:"Min Rating...",classCategory:"Class Category..."},a}return Object(E.a)(t,e),Object(g.a)(t,[{key:"filterResults",value:function(e){var t=this,a=e.target.id;"maxPrice"===a?this.setState({maxPrice:e.target.value},function(){t.props.filterResults(t.state)}):"minRating"===a?this.setState({minRating:e.target.value},function(){t.props.filterResults(t.state)}):this.setState({classCategory:e.target.value},function(){t.props.filterResults(t.state)})}},{key:"render",value:function(){return l.a.createElement(R.a,{className:"class-filter"},l.a.createElement(R.a.Group,{controlId:"maxPrice",onChange:this.filterResults.bind(this)},l.a.createElement(R.a.Control,{as:"select"},l.a.createElement("option",{value:void 0},"Max Price..."),l.a.createElement("option",{value:50},"$50"),l.a.createElement("option",{value:100},"$100"))),l.a.createElement(R.a.Group,{controlId:"minRating",onChange:this.filterResults.bind(this)},l.a.createElement(R.a.Control,{as:"select"},l.a.createElement("option",{value:void 0},"Min Rating..."),l.a.createElement("option",null,"8"),l.a.createElement("option",null,"9"))),l.a.createElement(R.a.Group,{controlId:"classCategory",onChange:this.filterResults.bind(this)},l.a.createElement(R.a.Control,{as:"select"},l.a.createElement("option",{value:void 0},"Class Category..."),l.a.createElement("option",null,"Music"),l.a.createElement("option",null,"Art"),l.a.createElement("option",null,"Language"))))}}]),t}(n.Component),w=(a(80),function(e){function t(e){var a;return Object(h.a)(this,t),(a=Object(p.a)(this,Object(d.a)(t).call(this,e))).state={classListing:[],allClasses:[],activePage:1,showWarning:!1},a}return Object(E.a)(t,e),Object(g.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("/api/classes").then(function(e){return e.json()}).then(function(t){return e.setState({classListing:t,allClasses:t})})}},{key:"handlePageChange",value:function(e){this.setState({activePage:e})}},{key:"filterResults",value:function(e){console.log(e);for(var t=this.state.allClasses,a=[],n=0;n<t.length;n++){var l=!0,r=t[n];"Max Price..."!==e.maxPrice&&r.price>parseFloat(e.maxPrice)&&(l=!1),"Min Rating..."!==e.minRating&&r.rating<parseFloat(e.minRating)&&(l=!1),"Class Category..."!==e.classCategory&&r.category!==e.classCategory&&(l=!1),l&&a.push(r)}console.log(a.length),0===a.length?this.setState({showWarning:!0,classListing:a,activePage:1}):this.setState({showWarning:!1,classListing:a,activePage:1})}},{key:"render",value:function(){var e=this.state.classListing.map(function(e,t){return l.a.createElement(S,{key:t,title:e.name,description:e.description,price:e.price,instructor:e.instructor,rating:e.rating,category:e.category})}),t=2*(this.state.activePage-1),a=t+2,n=e.slice(t,a),r=Math.min(5,e.length/2+1);return l.a.createElement("div",{className:"class-listing-container"},l.a.createElement(o.a,null,l.a.createElement("h1",null,"Available Classes"),l.a.createElement("p",null,"Below is the list of classes that are available on TeachMe.")),l.a.createElement("div",{className:"filter-container"},l.a.createElement(x,{filterResults:this.filterResults.bind(this)})),l.a.createElement("div",{className:"class-listing-display"},n,this.state.showWarning?l.a.createElement(b.a,{variant:"danger"},"It seems that we don't have any classes that satisfy your filter. Try resetting the filter to see more results!"):null,l.a.createElement("div",{className:"pagination-container"},l.a.createElement(f.a,{activePage:this.state.activePage,itemsCountPerPage:2,totalItemsCount:e.length,pageRangeDisplayed:r,onChange:this.handlePageChange.bind(this)}))))}}]),t}(n.Component)),T=a(17),I=a(59),L=(a(92),function(e){function t(e){var a;return Object(h.a)(this,t),(a=Object(p.a)(this,Object(d.a)(t).call(this,e))).handleSubmit=a.handleSubmit.bind(Object(T.a)(Object(T.a)(a))),a.state={successRedirect:void 0},a}return Object(E.a)(t,e),Object(g.a)(t,[{key:"handleSubmit",value:function(e){var t=this;e.preventDefault();var a=new FormData(e.target),n={},l=!0,r=!1,i=void 0;try{for(var s,c=a.entries()[Symbol.iterator]();!(l=(s=c.next()).done);l=!0){var o=s.value;n[o[0]]=o[1]}}catch(m){r=!0,i=m}finally{try{l||null==c.return||c.return()}finally{if(r)throw i}}var u=this.props.match.params.instructorId;n.instructorId=u,console.log(n),fetch("/api/create-class/",{method:"POST",body:JSON.stringify(n),headers:{"Content-Type":"application/json"}}).then(function(e){return e.json()}).then(function(e){return t.setState({successRedirect:e})})}},{key:"render",value:function(){return this.state.successRedirect&&"success"===this.state.successRedirect.result?l.a.createElement(I.a,{to:"/home"}):l.a.createElement("div",{id:"submit-form"},l.a.createElement("h3",null,"Create a Class"),l.a.createElement("form",{onSubmit:this.handleSubmit},l.a.createElement("label",null,"Name"),l.a.createElement("br",null),l.a.createElement("input",{type:"text",name:"name",required:!0}),l.a.createElement("br",null),l.a.createElement("label",null,"Description"),l.a.createElement("br",null),l.a.createElement("input",{type:"text",name:"description",required:!0}),l.a.createElement("br",null),l.a.createElement("label",null,"Price"),l.a.createElement("br",null),l.a.createElement("input",{type:"number",name:"price",required:!0}),l.a.createElement("br",null),l.a.createElement("label",null,"Proposed Schedule"),l.a.createElement("br",null),l.a.createElement("input",{type:"text",name:"proposedSchedule",required:!0}),l.a.createElement("br",null),l.a.createElement("label",null,"Category"),l.a.createElement("br",null),l.a.createElement("input",{type:"text",name:"category",required:!0}),l.a.createElement("br",null),l.a.createElement("input",{type:"submit",value:"Publish"}),l.a.createElement("input",{type:"button",value:"Cancel"})))}}]),t}(n.Component)),N=(a(93),function(e){function t(e){return Object(h.a)(this,t),Object(p.a)(this,Object(d.a)(t).call(this,e))}return Object(E.a)(t,e),Object(g.a)(t,[{key:"componentDidMount",value:function(){console.log(this.props.match.params.classId)}},{key:"render",value:function(){return l.a.createElement("div",{id:"edit-form"},l.a.createElement("h3",null,"Edit the Class"),l.a.createElement("form",{method:"post",action:""},l.a.createElement("label",null,"Name"),l.a.createElement("br",null),l.a.createElement("input",{type:"text",name:"name",value:"intro to javascript",required:!0}),l.a.createElement("br",null),l.a.createElement("label",null,"Description"),l.a.createElement("br",null),l.a.createElement("input",{type:"text",name:"description",value:"learning programming with the best programming language ever! (haha no...",required:!0}),l.a.createElement("br",null),l.a.createElement("label",null,"Price"),l.a.createElement("br",null),l.a.createElement("input",{type:"number",name:"price",value:"123",required:!0}),l.a.createElement("br",null),l.a.createElement("label",null,"Proposed Schedule"),l.a.createElement("br",null),l.a.createElement("input",{type:"text",name:"proposedSchedule",value:"Saturdays 3-5pm",required:!0}),l.a.createElement("br",null),l.a.createElement("label",null,"Category"),l.a.createElement("br",null),l.a.createElement("input",{type:"text",name:"category",value:"Technology",required:!0}),l.a.createElement("br",null),l.a.createElement("input",{type:"submit",value:"Publish"}),l.a.createElement("a",{href:"#"},l.a.createElement("input",{type:"button",value:"Cancel"}))))}}]),t}(n.Component)),M=(a(94),function(e){function t(e){var a;return Object(h.a)(this,t),(a=Object(p.a)(this,Object(d.a)(t).call(this,e))).state={IsReadOnly:!0,imageIsReadOnly:!0,value:"roger"},a.handleSubmit=a.handleSubmit.bind(Object(T.a)(Object(T.a)(a))),a.handleChange=a.handleChange.bind(Object(T.a)(Object(T.a)(a))),a.handleEditClick=a.handleEditClick.bind(Object(T.a)(Object(T.a)(a))),a}return Object(E.a)(t,e),Object(g.a)(t,[{key:"handleChange",value:function(e){this.setState({value:e.target.value})}},{key:"handleSubmit",value:function(e){alert("A new profile is submitted! "),e.preventDefault()}},{key:"handleEditClick",value:function(e){this.setState({IsReadOnly:!1})}},{key:"render",value:function(){return l.a.createElement("div",{className:"myaccount-page"},l.a.createElement("h3",null,"My Account Page"),l.a.createElement("br",null),l.a.createElement("form",{onSubmit:this.handleSubmit},l.a.createElement("label",null,"Name"),l.a.createElement("input",{type:"text",name:"name",value:this.state.value,readOnly:this.state.IsReadOnly,onChange:this.handleChange,required:!0}),l.a.createElement("input",{type:"button",name:"editname",value:"Edit",onClick:this.handleEditClick}),l.a.createElement("br",null),l.a.createElement("label",null,"Email"),l.a.createElement("input",{type:"text",name:"email",value:"roger@gmail.com",readOnly:this.state.IsReadOnly,onChange:this.handleChange,required:!0}),l.a.createElement("input",{type:"button",name:"editemail",value:"Edit",onClick:this.handleEditClick}),l.a.createElement("br",null),l.a.createElement("input",{type:"submit",value:"Submit"})),l.a.createElement("input",{type:"button",name:"viewclasshistory",value:"View Class History"}))}}]),t}(n.Component)),W=a(20),q=a.n(W),D=(a(95),function(e){function t(e){var a;return Object(h.a)(this,t),(a=Object(p.a)(this,Object(d.a)(t).call(this,e))).state={classListing:[],allClasses:[],activePage:1,filterWarning:!1,noTeachClassWarning:!1,noTakeClassWarning:!1},a}return Object(E.a)(t,e),Object(g.a)(t,[{key:"displayTeach",value:function(){var e=this,t="/api/class-history-teach/"+this.props.match.params.userId;console.log(t),fetch(t).then(function(e){return e.json()}).then(function(t){console.log(t),0===t.length?e.setState({noTeachClassWarning:!0,classListing:t,allClasses:t}):e.setState({noTeachClassWarning:!1,classListing:t,allClasses:t})})}},{key:"displayTake",value:function(){var e=this;fetch("/api/classes").then(function(e){return e.json()}).then(function(t){return e.setState({noTeachClassWarning:!1,classListing:t,allClasses:t})})}},{key:"componentDidMount",value:function(){this.displayTeach()}},{key:"handlePageChange",value:function(e){this.setState({activePage:e})}},{key:"filterResults",value:function(e){console.log(e);for(var t=this.state.allClasses,a=[],n=0;n<t.length;n++){var l=!0,r=t[n];"Max Price..."!==e.maxPrice&&r.price>parseFloat(e.maxPrice)&&(l=!1),"Min Rating..."!==e.minRating&&r.rating<parseFloat(e.minRating)&&(l=!1),"Class Category..."!==e.classCategory&&r.category!==e.classCategory&&(l=!1),l&&a.push(r)}0===a.length?this.setState({filterWarning:!0,classListing:a,activePage:1}):this.setState({filterWarning:!1,classListing:a,activePage:1})}},{key:"render",value:function(){var e=this.state.classListing.map(function(e,t){return l.a.createElement(S,{key:t,title:e.name,description:e.description,price:e.price,instructor:e.instructor,rating:e.rating,category:e.category})}),t=2*(this.state.activePage-1),a=t+2,n=e.slice(t,a),r=Math.min(5,e.length/2+1);return l.a.createElement("div",{className:"class-history-container"},l.a.createElement(o.a,null,l.a.createElement("h1",null,"My Class History"),l.a.createElement("p",null,"Below are the classes you have either taught or taken at TeachMe.")),l.a.createElement(q.a,{fill:!0,variant:"tabs",defaultActiveKey:"teach",className:"class-history-nav"},l.a.createElement(q.a.Item,null,l.a.createElement(q.a.Link,{eventKey:"teach",onSelect:this.displayTeach.bind(this)},"Classes I Teach")),l.a.createElement(q.a.Item,null,l.a.createElement(q.a.Link,{eventKey:"take",onSelect:this.displayTake.bind(this)},"Classes I Take"))),l.a.createElement("div",{className:"filter-container filter-container-ch"},l.a.createElement(x,{filterResults:this.filterResults.bind(this)})),l.a.createElement("div",{className:"class-listing-display"},n,this.state.noTakeClassWarning?l.a.createElement(b.a,{variant:"danger"},"It seems that you have no registered class at this time. Go to the class listing page and register for a new class!"):null,this.state.noTeachClassWarning?l.a.createElement(b.a,{variant:"danger"},"It seems that you are not teaching any class at this time."):null,this.state.filterWarning?l.a.createElement(b.a,{variant:"danger"},"It seems that we don't have any classes that satisfy your filter. Try resetting the filter to see more results!"):null,l.a.createElement("div",{className:"pagination-container"},l.a.createElement(f.a,{activePage:this.state.activePage,itemsCountPerPage:2,totalItemsCount:e.length,pageRangeDisplayed:r,onChange:this.handlePageChange.bind(this)}))))}}]),t}(n.Component)),A=a(44),B=a.n(A),F=a(27),G=a.n(F),$=(a(103),function(){return l.a.createElement(B.a,{bg:"primary",variant:"dark"},l.a.createElement(P.LinkContainer,{to:"/home"},l.a.createElement(B.a.Brand,null,"TeachMe")),l.a.createElement(q.a,{className:"mr-auto"},l.a.createElement(P.LinkContainer,{to:"/home"},l.a.createElement(G.a,{className:"nav-link"},"Home")),l.a.createElement(P.LinkContainer,{to:"/classes"},l.a.createElement(G.a,{className:"nav-link"},"Class Listing")),l.a.createElement(P.LinkContainer,{to:"/teach-others"},l.a.createElement(G.a,{className:"nav-link"},"Teach Others")),l.a.createElement(P.LinkContainer,{to:"/about"},l.a.createElement(G.a,{className:"nav-link"},"About"))),l.a.createElement(q.a,null,l.a.createElement(P.LinkContainer,{to:"/log-in"},l.a.createElement(j.a,{variant:"outline-light"},"Log In")),l.a.createElement(P.LinkContainer,{to:"/register"},l.a.createElement(j.a,{variant:"outline-light"},"Sign Up"))))}),H=a(58),J=a(34);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(l.a.createElement(s.a,null,l.a.createElement(function(){return l.a.createElement("div",null,l.a.createElement($,null),l.a.createElement(H.a,null,l.a.createElement(J.a,{exact:!0,path:"/home",component:u}),l.a.createElement(J.a,{exact:!0,path:"/"},l.a.createElement(I.a,{to:"/home"})),l.a.createElement(J.a,{exact:!0,path:"/classes",component:w}),l.a.createElement(J.a,{exact:!0,path:"/create-class/:instructorId",component:L}),l.a.createElement(J.a,{exact:!0,path:"/edit-class/:classId",component:N}),l.a.createElement(J.a,{exact:!0,path:"/my-account",component:M}),l.a.createElement(J.a,{exact:!0,path:"/class-history/:userId",component:D}),l.a.createElement(J.a,{component:m})))},null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},62:function(e,t,a){e.exports=a(108)},68:function(e,t,a){},70:function(e,t,a){},71:function(e,t,a){},80:function(e,t,a){},92:function(e,t,a){},93:function(e,t,a){},94:function(e,t,a){},95:function(e,t,a){}},[[62,1,2]]]);
//# sourceMappingURL=main.7d37cb9e.chunk.js.map