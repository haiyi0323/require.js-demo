//  定义需要依赖其他模块的对象模块  这里依赖了 cart 和 inventory 模块，然后通过回调函数的参数，可以获取两个模块的引用。




    define(["js/lib/cart.js","jquery"], function(cart) {
        //return an object to define the "my/shirt" module.
        return {
            dachu:cart,
            ele: $('.llcontent')
        }
    })