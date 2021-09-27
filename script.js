const app = new Vue({
    el: '#root',
    data: {
        images: [
            "https://image.freepik.com/free-photo/homemade-newyork-cheesecake-with-frozen-berries-mint-healthy-organic-dessert-top-view_114579-9844.jpg",
            "https://image.freepik.com/free-photo/front-view-delicious-round-pie-sweet-bake-dark-background-biscuit-dough-pie-cake-sugar-sweet-tea_140725-115655.jpg",
            "https://image.freepik.com/free-photo/front-view-yummy-apple-pie-sweet-baked-inside-pan-white-desk-pie-cake-biscuit-sweet-sugar-bake_140725-39947.jpg",
            "https://image.freepik.com/free-photo/carrot-cake-decorated-with-berries-figs-white-plate-traditional-donkey-pastries_127032-1897.jpg",
            "https://img.freepik.com/free-photo/close-up-candycane-lollipop-colorful-sweets-background_53876-31923.jpg?size=338&ext=jpg",
            "https://image.freepik.com/free-photo/front-view-sweet-pancakes-tower-arrangement_23-2148654085.jpg",
        ],
        indexImg: 0,
        autoplayID: null,

    },
    methods: {
        nextBtn: function(){
            if(this.indexImg >= this.images.length - 1){
                this.indexImg = 0;
            }else{
                this.indexImg++;
            }   
        },
        prevBtn: function(){
            if(this.indexImg > 0 ||this.indexImg >= this.images.length - 1){
                this.indexImg--;
            }else if(this.indexImg = -1){
                this.indexImg = this.images.length - 1;
            }   
        },
        // funzione di autoplay per slider
        startAutoplay: function() {
			this.autoplayID = setInterval(this.nextBtn, 2000);
		},
		stopAutoplay: function() {
			if(this.autoplayID != null) {
				clearInterval(this.autoplayID);
			}
		},
    },
    
})
