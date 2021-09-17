const app = new Vue({
    el: '#root',
    data: {
        images: [
            "https://image.freepik.com/free-photo/homemade-newyork-cheesecake-with-frozen-berries-mint-healthy-organic-dessert-top-view_114579-9844.jpg",
            "https://image.freepik.com/free-photo/front-view-delicious-round-pie-sweet-bake-dark-background-biscuit-dough-pie-cake-sugar-sweet-tea_140725-115655.jpg",
            "https://image.freepik.com/free-photo/front-view-yummy-apple-pie-sweet-baked-inside-pan-white-desk-pie-cake-biscuit-sweet-sugar-bake_140725-39947.jpg"
        ],
        indexImg: 0,

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
        }
    },
})
