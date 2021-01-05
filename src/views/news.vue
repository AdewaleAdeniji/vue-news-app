<template>
    <div class="container">
        
        <div class="col-md-12 col-lg-12">
            <div class="row">
                <div class="card text-white  mb-3" style="max-width: 18rem;" v-for="article in news" :key="article.publication_date">
                    <img class="card-img-top" :src="article.image_url" :alt="article.title">
                    <div class="card-header">{{article.author}}</div>
                    <div class="card-body">
                        <h5 class="card-title">{{article.title}}</h5>
                        <p class="card-text">
                            {{article.excerpt}}
                            <br/>
                            Source : {{article.source}}
                        </p>
                    </div>
                    <div class="card-footer">
                        <a class="btn readmore" :href="article.url" target="_blank">Read More</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            news:[],
            maxId:0,
        }
    },
    
    created(){
       fetch("https://newslit-news-search.p.rapidapi.com/news?q=bitcoin", {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "7e5292312dmshc8e56f5d5cd0247p173560jsn746be435caa6",
		"x-rapidapi-host": "newslit-news-search.p.rapidapi.com"
	}
        })
        .then(response =>response.json())
        .then((data)=>{
            var news = data.results.stories;
            this.news = news;
        })
        .catch(err => {
            window.location.reload();
        });
    },
    
}
</script>

<style>
 .container {
     margin-top: 10vh;
     margin-bottom: 10vh;
 }
 .readmore {
     color:#ffffff !important;
     float:right;
     cursor: pointer;
    font-size: .8em !important;

 }
 .readmore:hover {
     color: #00004d !important;
     background:#ffffff !important;
 }
 .card {
     margin: 1vh;
     
 }
 .card {
     background: #00004d !important;
 }
</style>