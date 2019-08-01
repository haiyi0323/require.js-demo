     requirejs.config({
        //By default load any module IDs from js/lib
        baseUrl: 'js/lib', //模块根目录
        //except, if the module ID starts with "app",
        //load it from the js/app directory. paths
        //config is relative to the baseUrl, and
        //never includes a ".js" extension since
        //the paths config could be for a directory.
        paths: {
            "jquery" : ["http://libs.baidu.com/jquery/2.0.3/jquery"], //拥有别名的模块
            "lll" : ["js/lib/lll.js"],
            "cart":["js/lib/cart.js"],
            "big":["js/lib/big.js"],
            "small":["js/lib/small.js"]
        }
    })
    require(["js/lib/index.js","jquery","js/lib/big.js","js/lib/lll.js"], function (index,jq,jjj,lll ) {
        // do something after loading index.js

        console.log($('.llcontent'));

        $('.llcontent').css({"background":jjj.color})
            console.log(lll.dachu);
            console.log(lll.ele);
            
        $('.llcontent').text(lll.dachu)

        
    })


    // define 用来定义模块
        // 定义简单的对象模块  这样定义的对象如果被多处引用，那么引用的地方会共享这个对象的引用。
    // define({
    //     color: "black",
    //     size: "unisize"
    // })



// 定义副本对象模块   通过函数返回一个对象的副本，引用的地方对对象的修改不会相互影响，这是一种典型的工厂模式。
    // define(function () {
    //     //Do setup work here
    
    //     return {
    //         color: "black",
    //         size: "unisize"
    //     }
    // })


    //定义需要依赖其他模块的对象模块  这里依赖了 cart 和 inventory 模块，然后通过回调函数的参数，可以获取两个模块的引用。
    // define(["./cart", "./inventory"], function(cart, inventory) {
    //     //return an object to define the "my/shirt" module.
    //     return {
    //         color: "blue",
    //         size: "large",
    //         addToCart: function() {
    //             inventory.decrement(this)
    //             cart.add(this)
    //         }
    //     }
    // })
   

// 定义一个函数模块  这个模块最后返回的值是一个函数，而非一个对象。
    // define(["my/cart", "my/inventory"], function(cart, inventory) {
    //     //return a function to define "foo/title".
    //     //It gets or sets the window title.
    //     return function(title) {
    //         return title ? (window.title = title) : inventory.storeName + ' ' + cart.name
    //     }
    // })


// 定义一个有名字的模块
    // define("foo/title", ["my/cart", "my/inventory"], function(cart, inventory) {
    //     //Define foo/title object in here.
    // })

    // 理论上来讲，我们定义一个模块是需要名字的。但是实际中，一个模块就是一个文件，而文件名就是模块的名字，
    //并且我们会在 require.config() 中定义别名。所以一般我们是不需要给模块加名字的。


//     老实说这个 require 和 define 函数内部机制差不多，不一样的地方是 define 的回调函数需要有 return 语句返回模块对象，这样 define 定义的模块才能被其他模块引用；require 的回调函数不需要 return 语句。

// 实际中，我们只会在顶层模块（不需要被其他模块调用）才会使用 require 函数。
