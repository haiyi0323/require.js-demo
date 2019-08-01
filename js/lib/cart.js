// 定义一个函数模块  这个模块最后返回的值是一个函数，而非一个对象。
    define(["./big.js", "./small.js"], function(big, small) {
        //return a function to define "foo/title".
        //It gets or sets the window title.
        return function() {
            var title = (big.name + small.name)
            console.log(title);
            
            return title 
        }
    })
