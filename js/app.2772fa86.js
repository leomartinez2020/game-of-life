(function(t){function a(a){for(var g,i,r=a[0],s=a[1],o=a[2],u=0,h=[];u<r.length;u++)i=r[u],Object.prototype.hasOwnProperty.call(e,i)&&e[i]&&h.push(e[i][0]),e[i]=0;for(g in s)Object.prototype.hasOwnProperty.call(s,g)&&(t[g]=s[g]);l&&l(a);while(h.length)h.shift()();return n.push.apply(n,o||[]),c()}function c(){for(var t,a=0;a<n.length;a++){for(var c=n[a],g=!0,r=1;r<c.length;r++){var s=c[r];0!==e[s]&&(g=!1)}g&&(n.splice(a--,1),t=i(i.s=c[0]))}return t}var g={},e={app:0},n=[];function i(a){if(g[a])return g[a].exports;var c=g[a]={i:a,l:!1,exports:{}};return t[a].call(c.exports,c,c.exports,i),c.l=!0,c.exports}i.m=t,i.c=g,i.d=function(t,a,c){i.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:c})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,a){if(1&a&&(t=i(t)),8&a)return t;if(4&a&&"object"===typeof t&&t&&t.__esModule)return t;var c=Object.create(null);if(i.r(c),Object.defineProperty(c,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var g in t)i.d(c,g,function(a){return t[a]}.bind(null,g));return c},i.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(a,"a",a),a},i.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},i.p="/game-of-life/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],s=r.push.bind(r);r.push=a,r=r.slice();for(var o=0;o<r.length;o++)a(r[o]);var l=s;n.push([0,"chunk-vendors"]),c()})({0:function(t,a,c){t.exports=c("56d7")},"034f":function(t,a,c){"use strict";var g=c("85ec"),e=c.n(g);e.a},"091f":function(t,a,c){},1651:function(t,a,c){},"1a38":function(t){t.exports=JSON.parse('{"seq2":"attaaaggtttataccttcccaggtaacaaaccaaccaactttcgatctcttgtagatctgttctctaaacgaactttaaaatctgtgtggctgtcactcggctgcatgcttagtgcactcacgcagtataattaataactaattactgtcgttgacaggacacgagtaactcgtctatcttctgcaggctgcttacggtttcgtccgtgttgcagccgatcatcagcacatctaggtttcgtccgggtgtgaccgaaaggtaagatggagagccttgtccctggtttcaacgagaaaacacacgtccaactcagtttgcctgttttacaggttcgcgacgtgctcgtacgtggctttggagactccgtggaggaggtcttatcagaggcacgtcaacatcttaaagatggcacttgtggcttagtagaagttgaaaaaggcgttttgcctcaacttgaacagccctatgtgttcatcaaacgttcggatgctcgaactgcacctcatggtcatgttatggttgagctggtagcagaactcgaaggcattcagtacggtcgtagtggtgagacacttggtgtccttgtccctcatgtgggcgaaataccagtggcttaccgcaaggttcttcttcgtaagaacggtaataaaggagctggtggccatagttacggcgccgatctaaagtcatttgacttaggcgacgagcttggcactgatccttatgaagattttcaagaaaactggaacactaaacatagcagtggtgttacccgtgaactcatgcgtgagcttaacggaggggcatacactcgctatgtcgataacaacttctgtggccctgatggctaccctcttgagtgcattaaagaccttctagcacgtgctggtaaagcttcatgcactttgtccgaacaactggactttattgacactaagaggggtgtatactgctgccgtgaacatgagcatgaaattgcttggtacacggaacgttctgaaaagagctatgaattgcagacaccttttgaaattaaattggcaaagaaatttgacaccttcaatggggaatgtccaaattttgtatttcccttaaattccataatcaagactattcaaccaagggttgaaaagaaaaagcttgatggctttatgggtagaattcgatctgtctatccagttgcgtcaccaaatgaatgcaaccaaatgtgcctttcaactctcatgaagtgtgatcattgtggtgaaacttcatggcagacgggcgattttgttaaagccacttgcgaattttgtggcactgagaatttgactaaagaaggtgccactacttgtggttacttaccccaaaatgctgttgttaaaatttattgtccagcatgtcacaattcagaagtaggacctgagcatagtcttgccgaataccataatgaatctggcttgaaaaccattcttcgtaagggtggtcgcactattgcctttggaggctgtgtgttctcttatgttggttgccataacaagtgtgcctattgggttccacgtgctagcgctaacataggttgtaaccatacaggtgttgttggagaaggttccgaaggtcttaatgacaaccttcttgaaatactccaaaaagagaaagtcaacatcaatattgttggtgactttaaacttaatgaagagatcgccattattttggcatctttttctgcttccacaagtgcttttgtggaaactgtgaaaggtttggattataaagcattcaaacaaattgttgaatcctgtggtaattttaaagttacaaaaggaaaagctaaaaaaggtgcctggaatattggtgaacagaaatcaatactgagtcctctttatgcatttgcatcagaggctgctcgtgttgtacgatcaattttctcccgcactcttgaaactgctcaaaattctgtgcgtgttttacagaaggccgctataacaatactagatggaatttcacagtattcactgagactcattgatgctatgatgttcacatctgatttggctactaacaatctagttgtaatggcctacattacaggtggtgttgttcagttgacttcgcagtggctaactaacatctttggcactgtttatgaaaaactcaaacccgtccttgattggcttgaagagaagtttaaggaaggtgtagagtttcttagagacggttgggaaattgttaaatttatctcaacctgtgcttgtgaaattgtcggtggacaaattgtcacctgtgcaaaggaaattaaggagagtgttcagacattctttaagcttgtaaataaatttttggctttgtgtgctgactctatcattattggtggagctaaacttaaagccttgaatttaggtgaaacatttgtcacgcactcaaagggattgtacagaaagtgtgttaaatccagagaagaaactggcctactcatgcctctaaaagccccaaaagaaattatcttcttagagggagaaacacttcccacagaagtgttaacagaggaagttgtcttgaaaactggtgatttacaaccattagaacaacctactagtgaagctgttgaagctccattggttggtacaccagtttgtattaacgggcttatgttgctcgaaatcaaagacacagaaaagtactgtgcccttgcacctaatatgatggtaacaaacaataccttcacactcaaaggcggtgcaccaacaaaggttacttttggtgatgacactgtgatagaagtgcaaggttacaagagtgtgaatatcacttttgaacttgatgaaaggattgataaagtacttaatgagaagtgctctgcctatacagttgaactcggtacagaagtaaatgagttcgcctgtgttgtggcagatgctgtcataaaaactttgcaaccagtatctgaattacttacaccactgggcattgatttagatgagtggagtatggctacatactacttatttgatgagtctggtgagtttaaattggcttcacatatgtattgttctttctaccctccagatgaggatgaagaagaaggtgattgtgaagaagaagagtttgagccatcaactcaatatgagtatggtactgaagatgattaccaaggtaaacctttggaatttggtgccacttctgctgctcttcaacctgaagaagagcaagaagaagattggttagatgatgatagtcaacaaactgttggtcaacaagacggcagtgaggacaatcagacaactactattcaaacaattgttgaggttcaacctcaattagagatggaacttacaccagttgttcagactattgaagtgaatagttttagtggttatttaaaacttactgacaatgtatacattaaaaatgcagacattgtggaagaagctaaaaaggtaaaaccaacagtggttgttaatgcagccaatgtttaccttaaacatggaggaggtgttgcaggagccttaaataaggctactaacaatgccatgcaagttgaatctgatgattacatagctactaatggaccacttaaagtgggtggtagttgtgttttaagcggacacaatcttgctaa","seq":"attaaaggtttataccttcccaggtaacaaaccaaccaactttcgatctcttgtagatctgttctctaaacgaactttaaaatctgtgtggctgtcactcggctgcatgcttagtgcactcacgcagtataattaataactaattactgtcgttgacaggacacgagtaactcgtctatcttctgcaggctgcttacggtttcgtccgtgttgcagccgatcatcagcacatctaggtttcgtccgggtgtgaccgaaaggtaagatggagagccttgtccctggtttcaacgagaaaacacacgtccaactcagtttgcctgttttacaggttcgcgacgtgctcgtacgtggctttggagactccgtggaggaggtcttatcagaggcacgtcaacatcttaaagatggcacttgtggcttagtagaagttgaaaaaggcgttttgcctcaacttgaacagccctatgtgttcatcaaacgttcggatgctcgaactgcacctcatggtcatgttatggttgagctggtagcagaactcgaaggcattcagtacggtcgtagtggtgagacacttggtgtccttgtccctcatgtgggcgaaataccagtggcttaccgcaaggttcttcttcgtaagaacggtaataaaggagctggtggccatagttacggcgccgatctaaagtcatttgacttaggcgacgagcttggcactgatccttatgaagattttcaagaaaactggaacactaaacatagcagtggtgttacccgtgaactcatgcgtgagcttaacggaggggcatacactcgctatgtcgataacaacttctgtggccctgatggctaccctcttgagtgcattaaagaccttctagcacgtgctggtaaagcttc"}')},"1db7":function(t,a,c){"use strict";var g=c("091f"),e=c.n(g);e.a},"1f8f":function(t,a,c){"use strict";var g=c("b4e5"),e=c.n(g);e.a},"21b0":function(t,a,c){},"3ebd":function(t,a,c){},"423b":function(t,a,c){"use strict";var g=c("21b0"),e=c.n(g);e.a},5486:function(t,a,c){},"56d7":function(t,a,c){"use strict";c.r(a);c("e260"),c("e6cf"),c("cca6"),c("a79d");var g=c("2b0e"),e=function(){var t=this,a=t.$createElement,c=t._self._c||a;return c("div",{attrs:{id:"app"}},[c("ConwayGame"),c("LangtonAnt"),c("CellularAutomata"),c("DigitsOfPi"),c("corona-dna")],1)},n=[],i=function(){var t=this,a=t.$createElement,c=t._self._c||a;return c("div",{staticClass:"compo"},[c("h1",[t._v(t._s(t.titulo))]),t._m(0),t.notStarted?c("p",[t._v("Waiting for Animation")]):t.noAnimation?c("p",[t._v("Animation stopped")]):c("p",[t._v("Animation started")]),c("div",{staticClass:"buttons"},[c("button",{on:{click:t.startAnimation}},[t._v("Start Animation")]),c("button",{on:{click:t.stopAnimation}},[t._v("Stop Animation")]),c("button",{on:{click:t.resetAnimation}},[t._v("Reset Animation")])]),c("div",{staticClass:"container"},t._l(t.lista,(function(t,a){return c("div",{key:a,staticClass:"cuadro",class:[1===t?"negro":"blanco"]})})),0)])},r=[function(){var t=this,a=t.$createElement,c=t._self._c||a;return c("section",[c("p",[t._v(" In 1970 Martin Gardner, who had a column in the magazin "),c("i",[t._v("Scientific American")]),t._v(" received a letter from a mathematician called John Horton Conway where he described a cellular automaton that consisted of cells that evolved in each iteration. Conway called it "),c("i",[t._v("The Game of Life")]),t._v(". ")]),c("p",[t._v("The game was like this: you put cells on a grid and these cells are going to behave according to three rules: ")]),c("ul",[c("li",[t._v("Birth: an empty cell with exactly three live neighbors becomes alive")]),c("li",[t._v("Death: a live cell with zero or one neighbors dies due to isolation; a live cell with four or more neighbors die due to overcrowding. ")]),c("li",[t._v(" Survival: a cell with two or three neighbors stay alive. ")])]),c("p",[t._v(" Simulating the game in 1970 was possible only by hand. Computers were not so available. The next simulation was made using "),c("strong",[t._v("vue.js")]),t._v(' using a grid of cells. The colored cells are "alive" and the blank cells are "dead". With each iteration the mentioned rules are applied. ')])])}];c("fb6a");function s(t,a){var c=a*a,g=((t-1)%a+a)%a+Math.floor(t/a)*a,e=((t+1)%a+a)%a+Math.floor(t/a)*a,n=((t-a)%c+c)%c,i=(t+a)%c,r=((g-a)%c+c)%c,s=((e-a)%c+c)%c,o=(g+a)%c,l=(e+a)%c;return[g,e,n,i,r,s,o,l]}function o(t){for(var a=[],c=0;c<t*t;c++)a.push(Math.floor(2*Math.random()));return a}var l={name:"ConwayGame",data:function(){return{titulo:"Conway's Game of Life",lista:o(20),animar:null,visible:!0}},computed:{noAnimation:function(){return 0===this.animar},notStarted:function(){return null===this.animar}},methods:{resetAnimation:function(){clearInterval(this.animar),this.animar=null,this.lista=o(20)},startAnimation:function(){null!==this.animar&&0!==this.animar||(this.animar=setInterval(this.evolve,200))},stopAnimation:function(){clearInterval(this.animar),this.animar=0},evolve:function(){for(var t=this.lista.slice(),a=0,c=0;c<t.length;c++){for(var g=this.lista[c],e=s(c,20),n=0;n<e.length;n++)a+=this.lista[e[n]];1==g&&a>3&&(t[c]=0),1==g&&a<2&&(t[c]=0),0==g&&3===a&&(t[c]=1),a=0}this.lista=t}}},u=l,h=(c("606c"),c("2877")),f=Object(h["a"])(u,i,r,!1,null,"26e160c5",null),d=f.exports,m=function(){var t=this,a=t.$createElement,c=t._self._c||a;return c("div",{staticClass:"container"},[c("h1",[t._v("Langton's Ant")]),t._m(0),c("div",{staticClass:"buttons"},[c("button",{on:{click:t.startAnimation}},[t._v("Start Animation")]),c("button",{on:{click:t.stopAnimation}},[t._v("Reset")])]),c("div",{staticClass:"langton-ant-container"},t._l(t.squareList,(function(a,g){return c("Square",{key:g,class:{ant:g===t.antIndex},attrs:{elem:a}})})),1)])},v=[function(){var t=this,a=t.$createElement,c=t._self._c||a;return c("section",[c("p",[t._v(" Langton's ant is a cellular automaton where the color of the cell changes depending on the ant's movement. After more than 10'000 steps of chaotic movement, the ant describes a repetitive pattern. According to Wikipedia: ")]),c("blockquote",[t._v(" Langton's ant is a two-dimensional universal Turing machine with a very simple set of rules but complex emergent behavior. It was invented by Chris Langton in 1986 and runs on a square lattice of black and white cells. The universality of Langton's ant was proven in 2000. The idea has been generalized in several different ways, such as turmites which add more colors and more states. ")])])}],p=function(){var t=this,a=t.$createElement,c=t._self._c||a;return c("div",{staticClass:"square",class:{gris:1===t.elem}})},b=[],_={name:"Square",props:["elem"]},y=_,w=(c("8153"),Object(h["a"])(y,p,b,!1,null,"63f34380",null)),x=w.exports,C=79,k=Math.round(C*C/2)-1,A=function(t){for(var a=[],c=0;c<t;c++)a.push(0);return a[k]=1,a},S={0:1,90:-C,180:-1,270:C},I={name:"LangtonAnt",components:{Square:x},methods:{startAnimation:function(){null!==this.animar&&0!==this.animar||(this.animar=setInterval(this.moveAnt2,5))},stopAnimation:function(){this.squareList=A(C*C),this.animar=null,this.antIndex=k,this.counter=0,this.antDirection=90},getIndex:function(t){var a=this.antDirection+t;-90===a&&(a=270),360===a&&(a=0),this.antIndex=S[a]+this.antIndex,this.antDirection=a},moveAnt:function(){this.counter++,1===this.squareList[this.antIndex]?(this.squareList[this.antIndex]=0,this.getIndex(90)):(this.squareList[this.antIndex]=1,this.getIndex(-90))},moveAnt2:function(){this.counter++,this.counter>110&&(clearInterval(this.animar),this.animar=0);for(var t=0;t<100;t++)1===this.squareList[this.antIndex]?(this.squareList[this.antIndex]=0,this.getIndex(90)):(this.squareList[this.antIndex]=1,this.getIndex(-90))}},data:function(){return{squareList:A(C*C),antIndex:k,antDirection:90,animar:null,counter:0}}},O=I,q=(c("423b"),Object(h["a"])(O,m,v,!1,null,"00e61804",null)),D=q.exports,j=function(){var t=this,a=t.$createElement,c=t._self._c||a;return c("div",{staticClass:"container"},[c("h1",[t._v("Digits of PI")]),c("p",[t._v(" The next grid represents the decimal numbers in the irrational number pi. Each color signifies a number according to this convention: ")]),c("div",{staticClass:"convention"},[t._l(t.nums,(function(a,g){return c("Box",{key:g},[t._v(" "+t._s(a)+" ")])})),t._l(t.nums,(function(t,a){return c("Box",{key:a,attrs:{elem:t}})}))],2),c("p",[t._v(" The result is a pretty randomly distributed grid of colored cells: ")]),c("div",{staticClass:"boxes"},t._l(t.piDigits,(function(t,a){return c("Box",{key:a,attrs:{elem:t}})})),1)])},T=[],L=(c("d81d"),c("ac1f"),c("1276"),c("8ae3")),E=function(){var t=this,a=t.$createElement,c=t._self._c||a;return c("div",{staticClass:"square",class:{gris:1===t.elem},style:{background:t.cssStyle}},[t._t("default")],2)},$=[],P={name:"Box",props:["elem","bgColor"],data:function(){return{cssStyle:"hsl(".concat(25*this.elem,", 95%, 60%)")}}},B=P,M=(c("9635"),Object(h["a"])(B,E,$,!1,null,"48ea4966",null)),G=M.exports,N={name:"DigitsOfPi",components:{Box:G},computed:{piDigits:function(){var t=this.digits.pi.split("").slice(2,902);return t.map((function(t){return parseInt(t)}))}},data:function(){return{digits:L,nums:[0,1,2,3,4,5,6,7,8,9]}},methods:{logPi:function(){console.log(this.piDigits)}}},R=N,J=(c("6065"),Object(h["a"])(R,j,T,!1,null,"cbe82d0a",null)),W=J.exports,z=function(){var t=this,a=t.$createElement,c=t._self._c||a;return c("div",{staticClass:"automata"},[c("h1",[t._v("Cellular Automata")]),t._m(0),c("input",{directives:[{name:"model",rawName:"v-model.number",value:t.rule,expression:"rule",modifiers:{number:!0}}],attrs:{type:"text",placeholder:"write number between 1 and 255"},domProps:{value:t.rule},on:{keyup:function(a){return!a.type.indexOf("key")&&t._k(a.keyCode,"enter",13,a.key,"Enter")?null:t.stepGenerate(a)},input:function(a){a.target.composing||(t.rule=t._n(a.target.value))},blur:function(a){return t.$forceUpdate()}}}),c("button",{on:{click:t.stepGenerate}},[t._v("Click")]),t.rule>255||t.rule<0?c("p",{style:{color:"red"}},[t._v("Input is out of range")]):t._e(),c("div",{staticClass:"squares"},t._l(t.list,(function(t,a){return c("Square",{key:a,staticClass:"cuadro",class:{gris:1===t},attrs:{elem:t}})})),1)])},U=[function(){var t=this,a=t.$createElement,c=t._self._c||a;return c("section",[c("p",[t._v(" Stanisław Marcin Ulam was a polish nuclear physicist who discovered the Monte Carlo method and cellular automata, among other achievements. The idea of a cellular automaton came up from thinking about the growth of crystals as self-replicating robots. A cellular automaton system consists of a grid of cells that have certain mutable state. The cellular automaton showed here was mentioned by Stephen Wolfram in his book "),c("i",[t._v("A new Kind of Science")]),t._v(". ")]),c("p",[t._v(' Starting with one "live" cell in a row, a ruleset determines the next generation in the next row. There are 256 rulesets because a row has 8 cells (256 = 2 to the eigth power). One of the most interesting rulesets is the number 90 which originates the "Sierpiński triangle". ')]),c("p",[t._v(" To originate the different cellular automata, write the number of the ruleset in the input space (a number from 0 to 255) and click the button: ")])])}],H=(c("c975"),c("a15b"),c("d3b7"),c("25f0"),31),V=["111","110","101","100","011","010","001","000"],K=function(t){for(var a=[],c=0;c<t;c++)a.push(0);return a[15]=1,a},F={name:"CellularAutomata",components:{Square:x},methods:{getNeighborsIndices:function(t){var a=0===t?30:(t-1)%H+t-t%H,c=(t+1)%H+t-t%H;return[a,t,c]},applyRuleset:function(t){return parseInt(this.ruleset[V.indexOf(t)])},createRuleset:function(t){for(var a=t.toString(2),c=8-a.length,g=0;g<c;g++)a="0"+a;return a},stepGenerate:function(){var t=this;if(!(this.rule>255||this.rule<0)){this.ruleset=this.createRuleset(this.rule);for(var a=K(496),c=0;c<15;c++){for(var g=c*H;g<c*H+H;g++){var e=this.getNeighborsIndices(g).map((function(a){return t.list[a]})).join(""),n=this.applyRuleset(e);a[g+H]=n}this.list=Object.assign({},a)}}}},data:function(){return{rule:30,list:K(496),ruleset:null}}},Q=F,X=(c("1db7"),Object(h["a"])(Q,z,U,!1,null,"7c853f4b",null)),Y=X.exports,Z=function(){var t=this,a=t.$createElement,c=t._self._c||a;return c("div",{staticClass:"container"},[c("h1",[t._v("Coronavirus Nucleotides")]),c("p"),c("p",[t._v(" The coronavirus genome is made up of nucleotides represented by four basic letters: A (adenine), C (cytosine), G (guanine), and T (thymine). Here we use a grid of cells to represent part of a string of the coronavirus taking into account the next convention: ")]),c("div",{staticClass:"convention"},[t._l(t.bases,(function(a,g){return c("DnaBox",{key:g},[t._v(" "+t._s(a)+" ")])})),t._l(t.bases,(function(t,a){return c("DnaBox",{key:a,attrs:{elem:t}})}))],2),t._m(0),c("p",[t._v("This is the result for the first 900 nucleotides:")]),c("div",{staticClass:"boxes"},t._l(t.piDigits,(function(t,a){return c("DnaBox",{key:a,attrs:{elem:t}})})),1),c("br"),c("p",[t._v("This is the result for the first 3600 nucleotides:")]),c("div",{staticClass:"dna3600"},t._l(t.dnaVals,(function(t,a){return c("DnaBox",{key:a,attrs:{elem:t}})})),1)])},tt=[function(){var t=this,a=t.$createElement,c=t._self._c||a;return c("p",[t._v(" What could be the use of a grahical representation of a genome? Unlike the representation of the digits of pi, a genome carries information to code proteins in a cell. So, the sequence of nitrogen bases should have a pattern in some important functional sections. These patterns can be revealed by machine learning methods such as "),c("strong",[t._v("convolutional neural networks")]),t._v(". ")])}],at=c("1a38"),ct=function(){var t=this,a=t.$createElement,c=t._self._c||a;return c("div",{staticClass:"square",class:{gris:1===t.elem},style:{background:t.cssStyle}},[t._t("default")],2)},gt=[],et={name:"Box",props:["elem","bgColor"],computed:{cssStyle:function(){var t={a:"red",c:"yellow",g:"green",t:"lightblue"};return t[this.elem]}},data:function(){return{}}},nt=et,it=(c("1f8f"),Object(h["a"])(nt,ct,gt,!1,null,"4ad45e4a",null)),rt=it.exports,st={name:"CoronaDna",components:{DnaBox:rt},computed:{dnaVals:function(){return this.nucleotides.seq2.split("")},piDigits:function(){return this.nucleotides.seq.split("")}},data:function(){return{nucleotides:at,bases:["a","c","g","t"]}},methods:{logPi:function(){console.log(this.piDigits)}}},ot=st,lt=(c("bbbe"),Object(h["a"])(ot,Z,tt,!1,null,"369b6194",null)),ut=lt.exports,ht={name:"App",components:{ConwayGame:d,LangtonAnt:D,DigitsOfPi:W,CellularAutomata:Y,CoronaDna:ut}},ft=ht,dt=(c("034f"),Object(h["a"])(ft,e,n,!1,null,null,null)),mt=dt.exports;g["a"].config.productionTip=!1,new g["a"]({render:function(t){return t(mt)}}).$mount("#app")},6065:function(t,a,c){"use strict";var g=c("9eb8"),e=c.n(g);e.a},"606c":function(t,a,c){"use strict";var g=c("1651"),e=c.n(g);e.a},8153:function(t,a,c){"use strict";var g=c("3ebd"),e=c.n(g);e.a},"85ec":function(t,a,c){},"8ae3":function(t){t.exports=JSON.parse('{"pi":"3.141592653589793238462643383279502884197169399375105820974944592307816406286208998628034825342117067982148086513282306647093844609550582231725359408128481117450284102701938521105559644622948954930381964428810975665933446128475648233786783165271201909145648566923460348610454326648213393607260249141273724587006606315588174881520920962829254091715364367892590360011330530548820466521384146951941511609433057270365759591953092186117381932611793105118548074462379962749567351885752724891227938183011949129833673362440656643086021394946395224737190702179860943702770539217176293176752384674818467669405132000568127145263560827785771342757789609173637178721468440901224953430146549585371050792279689258923542019956112129021960864034418159813629774771309960518707211349999998372978049951059731732816096318595024459455346908302642522308253344685035261931188171010003137838752886587533208381420617177669147303598253490428755468731159562863882353787593751957781857780532171226806613001927876611195909216420198938095257201065485863278865936153381827968230301952035301852968995773622599413891249721775283479131515574857242454150695950829533116861727855889075098381754637464939319255060400927701671139009848824012858361603563707660104710181942955596198946767837449448255379774726847104047534646208046684259069491293313677028989152104752162056966024058038150193511253382430035587640247496473263914199272604269922796782354781636009341721641219924586315030286182974555706749838505494588586926995690927210797509302955321165344987202755960236480665499119881834797753566369807426542527862551818417574672890977772793800081647060016145249192173217214772350141441973568548161361157352552133475741849468438523323907394143334547762416862518983569485562099219222184272550254256887671790494601653466804988627232791786085784383827967976681454100953883786360950680064225125205117392984896084128488626945604241965285022210661186306744278622039194945047123713786960956364371917287467764657573962413890865832645995813390478027590099465764078951269468398352595709825822620522489407726719478268482601476990902640136394437455305068203496252451749399651431429809190659250937221696461515709858387410597885959772975498930161753928468138268683868942774155991855925245953959431049972524680845987273644695848653836736222626099124608051243884390451244136549762780797715691435997700129616089441694868555848406353422072225828488648158456028506016842739452267467678895252138522549954666727823986456596116354886230577456498035593634568174324112515076069479451096596094025228879710893145669136867228748940560101503308617928680920874760917824938589009714909675985261365549781893129784821682998948722658804857564014270477555132379641451523746234364542858444795265867821051141354735739523113427166102135969536231442952484937187110145765403590279934403742007310578539062198387447808478489683321445713868751943506430218453191048481005370614680674919278191197939952061419663428754440643745123718192179998391015919\\n"}')},"8e36":function(t,a,c){},9635:function(t,a,c){"use strict";var g=c("5486"),e=c.n(g);e.a},"9eb8":function(t,a,c){},b4e5:function(t,a,c){},bbbe:function(t,a,c){"use strict";var g=c("8e36"),e=c.n(g);e.a}});
//# sourceMappingURL=app.2772fa86.js.map