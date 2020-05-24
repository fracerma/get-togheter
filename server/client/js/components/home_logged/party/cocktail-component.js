export default{
    props: ["cocktail","btn"],
    template: `
    <div class="item-component">
        <router-link :to="link">
            <h5>{{cocktail.cocktailName}}</h5>
        </router-link>
        
        <img v-bind:src="cocktail.photo">
        <div class="info-item-component">
            <div>
                <svg  enable-background="new 0 0 512 512" height="512" viewBox="0 0 512 512" width="512" xmlns="http://www.w3.org/2000/svg"><g><path d="m417.841 0c-48.526 0-88.59 36.915-93.599 84.14h-65.422c-5.523 0-10 4.477-10 10s4.477 10 10 10h134.88l-58.692 58.714c-10.893 6.111-29.044 5.962-39.514-.49-17.221-10.591-44.176-10.589-61.358 0-10.769 6.624-29.663 6.623-40.424.005-11.133-6.861-26.362-9.273-40.392-7.247l-37.419-50.981h53.119c5.523 0 10-4.477 10-10s-4.477-10-10-10h-67.799l-53.765-73.254c-3.269-4.452-9.526-5.414-13.979-2.145-4.452 3.268-5.413 9.526-2.145 13.979l45.08 61.419h-66.412c-4.044 0-7.69 2.436-9.238 6.172-1.548 3.736-.693 8.037 2.166 10.897l76.683 76.708c.1.101.196.204.301.301l64.398 64.419 20.161 47.266c5.43 12.73 12.306 20.62 29.777 20.62h9.672v117.2l-87.349 66.313c-3.419 2.596-4.8 7.085-3.431 11.155s5.184 6.81 9.478 6.81h182.576c4.293 0 8.107-2.74 9.478-6.81 1.37-4.069-.011-8.558-3.43-11.154l-87.322-66.313v-117.201h9.672c17.471 0 24.346-7.89 29.777-20.62l20.16-47.265 64.398-64.418c.105-.097.202-.201.302-.303l10.487-10.49c16.68 13.528 37.328 20.883 59.123 20.883 51.919 0 94.159-42.244 94.159-94.169.002-51.91-42.237-94.141-94.157-94.141zm-325.009 162.854-58.695-58.714h56.956l42.289 57.617c-.349.202-.701.401-1.043.611-10.463 6.448-28.614 6.597-39.507.486zm182.66 329.146h-123.163l61.591-46.758zm-30.518-209.945c-3.275 7.676-4.338 8.467-11.381 8.467h-39.344c-7.043 0-8.107-.792-11.381-8.467l-14.98-35.121h92.066zm25.974-55.12h-114.055l-39.768-39.781c9.332-.676 18.399-3.256 25.698-7.755 10.772-6.625 29.648-6.627 40.404 0 17.211 10.585 44.175 10.584 61.394-.005 10.747-6.622 29.624-6.62 40.389 0 7.304 4.501 16.372 7.083 25.706 7.76zm73.435-142.795c1.757-12.978 6.896-24.89 14.48-34.842l34.838 34.842zm63.458 83.493c-12.733-1.706-24.692-6.649-34.888-14.446l34.888-34.899zm0-97.637-34.835-34.839c9.951-7.583 21.862-12.72 34.835-14.477zm83.475 14.144h-49.335l34.853-34.857c7.592 9.955 12.72 21.878 14.482 34.857zm-63.475-63.447c12.975 1.757 24.894 6.871 34.847 14.452l-34.847 34.851zm0 146.923v-49.331l34.846 34.85c-9.955 7.583-21.868 12.723-34.846 14.481zm48.993-28.619-34.853-34.857h49.335c-1.762 12.981-6.892 24.903-14.482 34.857z"/><path d="m213.921 104.14h.057c5.523 0 9.972-4.477 9.972-10s-4.505-10-10.028-10-10 4.477-10 10 4.476 10 9.999 10z"/></g></svg>
                {{cocktail.cocktailCat}}
            </div>
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M427.6 163.2c0-62.1-50.5-112.6-112.6-112.6s-112.6 50.5-112.6 112.6c0 5.7 0.6 11.4 1.4 17.1h-83.3c-3.8 0-6.8 3.1-6.8 6.8v143.4c0 27.8 20.9 50.8 47.9 54.2 0 0.2-0.1 0.3-0.1 0.5v75.1h-41c-3.8 0-6.8 3.1-6.8 6.8s3.1 6.8 6.8 6.8h177.5c3.8 0 6.8-3.1 6.8-6.8s-3.1-6.8-6.8-6.8h-41v-75.1c0-0.2-0.1-0.3-0.1-0.5 26.9-3.3 47.9-26.3 47.9-54.2v-55.1c3.4 0.3 6.8 0.5 10.2 0.5C377.1 275.8 427.6 225.3 427.6 163.2zM236.5 163.2c0-43.3 35.2-78.5 78.5-78.5 15.1 0 29.5 4.2 42.1 12.3l-83.3 83.3h-35.3C237.2 174.7 236.5 168.9 236.5 163.2L236.5 163.2zM381.2 121.1c8.1 12.6 12.3 27 12.3 42.1 0 43.3-35.2 78.5-78.5 78.5 -3.4 0-6.8-0.3-10.2-0.7v-43.4L381.2 121.1zM290.8 193.9c-0.3 1.3-0.3 2.7 0.3 4V269h-68.3v-75.1H290.8zM209.2 193.9v54.6h-81.9v-54.6H209.2zM127.3 330.4v-68.3h81.9v68.3c0 22.6-18.4 41-41 41S127.3 353 127.3 330.4zM175.1 460.2v-75.1c0-0.2-0.1-0.3-0.1-0.5 13.6-1.7 25.6-8.3 34.2-18.1 8.8 10 21 16.5 34.3 18.1 0 0.1-0.1 0.3-0.1 0.4v75.1H175.1zM250.1 371.4c-13.1 0-25.3-6.3-33-16.8 3.6-7.3 5.7-15.5 5.7-24.1v-47.8h68.3v47.8C291.1 353 272.7 371.4 250.1 371.4zM304.8 254.7c3.4 0.4 6.8 0.6 10.2 0.6 50.8 0 92.2-41.3 92.2-92.2 0-20.7-6.8-40.4-19.7-56.8 -1.2-1.5-3-2.5-5-2.6 -1.9-0.1-3.9 0.6-5.2 2l-75.7 75.7c-1.1-0.7-2.3-1.2-3.6-1.2h-4.8l79.3-79.3c1.4-1.4 2.1-3.3 2-5.2 -0.1-2-1.1-3.8-2.6-5C355.4 77.9 335.7 71 315 71c-50.8 0-92.2 41.3-92.2 92.2 0 5.7 0.7 11.4 1.8 17.1h-7.1c-1-5.6-1.5-11.3-1.5-17.1 0-54.6 44.4-99 99-99s99 44.4 99 99 -44.4 99-99 99c-3.4 0-6.8-0.2-10.2-0.6L304.8 254.7z"/><circle cx="270.6" cy="310" r="6.8"/><circle cx="250.1" cy="337.3" r="6.8"/><circle cx="154.6" cy="337.3" r="6.8"/><circle cx="168.2" cy="289.5" r="6.8"/></svg>
                {{cocktail.cocktailType}}
            </div>
        </div>
        <span v-if="cocktail.quantity">x {{cocktail.quantity}} </span>
        <a v-if="btn=='add'" class="btn bg-green" v-on:click="addItem">Add to your party</a>
        <a v-if="btn=='remove'" class="btn bg-green" v-on:click="emitRemove">Delete cocktail</a>
    </div>
    `,
    data() {
        return {
            link:"/cocktails/"+this.cocktail.cocktailID
        }
    },
    methods: {
        addItem: function(){
            this.$emit("addItem",this.cocktail)
        },
        emitRemove: function(){
            this.$emit("removeCocktail",this.cocktail);
        }
    },
}