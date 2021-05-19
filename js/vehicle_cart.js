var VehicleCart = (function() {
    // private
    var cart = [];

    // public
    return {
        addToCart: function(id) {
            if(cart == null) {
                cart = [];
            }

            cart.push(id);
        },

        checkInCart(id) {
            if(cart == null || cart == undefined) return false;

            for (var i = 0; i < cart.length; i++) {
                if (cart[i] == id) return true;
            }
            return false;
        },

        getCart: function() {
            return cart;
        },

        emplaceCart: function(newCart) {
            cart = newCart;
        },

        clearCart: function() {
            cart = [];
        }
    }
})();
