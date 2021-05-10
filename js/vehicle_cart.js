var VehicleCart = (function() {
    // private
    var cart = [];

    // public
    return {
        addToCart: function(id) {
            cart.push(id);
        },

        getCart: function() {
            return cart;
        }
    }
})();
