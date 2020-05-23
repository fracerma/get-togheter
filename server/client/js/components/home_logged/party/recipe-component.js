export default{
    props: ["recipe","type","btn"],
    template: `
    <div class="item-component"> 
        <router-link :to="link">
            <h5>{{recipe.title}}</h5>
        </router-link>
        <img v-bind:src="recipe.image">
        <div class="info-item-component">
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 505.4 505.4"><path d="M437.1 233.5c14.8-10.4 24.6-27.7 24.6-47.2 0-31.9-25.8-57.7-57.7-57.7 -31.9 0-57.7 25.8-57.7 57.7 0 19.5 9.7 36.8 24.6 47.2 -12.7 4.4-24.3 11.2-34.1 20 -13.5-11.5-29.4-20.3-46.8-25.5 21.1-12.8 35.3-36.1 35.3-62.6 0-40.4-32.7-73.1-73.1-73.1 -40.4 0-73.1 32.8-73.1 73.1 0 26.5 14.1 49.8 35.3 62.6 -17.2 5.2-32.9 13.9-46.3 25.2 -9.8-8.6-21.2-15.3-33.7-19.6 14.8-10.4 24.6-27.7 24.6-47.2 0-31.9-25.8-57.7-57.7-57.7s-57.7 25.8-57.7 57.7c0 19.5 9.7 36.8 24.6 47.2C28.5 247.3 0 285 0 329.3v6.6c0 0.2 0.2 0.4 0.4 0.4h122.3c-0.7 5.5-1.1 11.2-1.1 16.9v6.8c0 29.4 23.8 53.2 53.2 53.2h155c29.4 0 53.2-23.8 53.2-53.2v-6.8c0-5.7-0.4-11.4-1.1-16.9H505c0.2 0 0.4-0.2 0.4-0.4v-6.6C505.2 284.9 476.8 247.2 437.1 233.5zM362.3 186.2c0-23 18.7-41.7 41.7-41.7s41.7 18.7 41.7 41.7c0 22.7-18.3 41.2-40.9 41.7 -0.3 0-0.5 0-0.8 0s-0.5 0-0.8 0C380.5 227.5 362.3 209 362.3 186.2zM194.9 165.4c0-31.5 25.6-57.1 57.1-57.1s57.1 25.6 57.1 57.1c0 30.4-23.9 55.3-53.8 57 -1.1 0-2.2 0-3.3 0 -1.1 0-2.2 0-3.3 0C218.8 220.7 194.9 195.8 194.9 165.4zM59.3 186.2c0-23 18.7-41.7 41.7-41.7s41.7 18.7 41.7 41.7c0 22.7-18.3 41.2-40.9 41.7 -0.3 0-0.5 0-0.8 0s-0.5 0-0.8 0C77.6 227.5 59.3 209 59.3 186.2zM125.5 320.2H16.2c4.5-42.6 40.5-76 84.2-76.3 0.2 0 0.4 0 0.6 0s0.4 0 0.6 0c20.8 0.1 39.8 7.8 54.5 20.3C141.7 279.8 131 299 125.5 320.2zM366.8 360c0 20.5-16.7 37.2-37.2 37.2h-155c-20.5 0-37.2-16.7-37.2-37.2v-6.8c0-62.1 49.6-112.9 111.3-114.7 1.1 0.1 2.3 0.1 3.4 0.1s2.3 0 3.4-0.1c61.7 1.8 111.3 52.6 111.3 114.7V360zM378.7 320.2c-5.5-21.1-16-40-30.3-55.6 14.8-12.8 34-20.5 55-20.7 0.2 0 0.4 0 0.6 0s0.4 0 0.6 0c43.7 0.3 79.7 33.7 84.2 76.3H378.7z"/></svg>
                <span>{{recipe.servings}}</span>
            </div>
            <div>
                <svg enable-background="new 0 0 443.294 443.294" viewBox="0 0 443.294 443.294" xmlns="http://www.w3.org/2000/svg"><path d="m221.647 0c-122.214 0-221.647 99.433-221.647 221.647s99.433 221.647 221.647 221.647 221.647-99.433 221.647-221.647-99.433-221.647-221.647-221.647zm0 415.588c-106.941 0-193.941-87-193.941-193.941s87-193.941 193.941-193.941 193.941 87 193.941 193.941-87 193.941-193.941 193.941z"/><path d="m235.5 83.118h-27.706v144.265l87.176 87.176 19.589-19.589-79.059-79.059z"/></svg>
                <span>{{recipe.readyInMinutes}} minutes </span>
            </div>
            <div v-if="dishTypes">
                <svg viewBox="0 0 60 61" xmlns="http://www.w3.org/2000/svg"><g id="Page-1" fill="none" fill-rule="evenodd"><g id="023---Cuisine" fill="rgb(0,0,0)" fill-rule="nonzero"><path id="Shape" d="m18.351 37.522c.2967091-.1991756.4646207-.5415138.4404841-.8980592-.0241366-.3565453-.2366544-.6731302-.5575-.8305s-.701275-.1316164-.9979841.0675592c-1.2541154.8432739-2.423281 1.8064708-3.491 2.876-3.3075266 3.2824443-5.53022989 7.4992638-6.369 12.083-.09941125.5434482.26055181 1.0645887.804 1.164s1.06458875-.2605518 1.164-.804c.7652406-4.1845743 2.7951331-8.033901 5.816-11.029.9753226-.9783691 2.0440868-1.8589022 3.191-2.629z"/><path id="Shape" d="m56.977 54.048c-.4569366-12.842843-9.8990111-23.5855709-22.577-25.687.120186-.24179.2205165-.4929506.3-.751 1.315146.1364652 2.5651257-.6021592 3.08-1.82.7895073-1.8858931 1.2038986-3.9075794 1.22-5.952-.1291861-1.1823581-.4731593-2.3311948-1.015-3.39l10.144 4.8c.4535661.2192957.9512063.3321625 1.455.33 1.5449003-.0029823 2.8911543-1.0530685 3.2701755-2.5507563.3790211-1.4976879-.3056689-3.0617467-1.6631755-3.7992437l-.054-.028c.9773696-.8175661 1.4102201-2.1163611 1.1187247-3.356803-.2914953-1.2404419-1.2575138-2.21051218-2.4967247-2.507197-6.441-1.558-13.041-2.886-18.603-3.736-7.536-3.089-13.316-4.67-17.156-4.67-4.40882981-.04850232-8.77873631.82909019-12.827 2.576-.71634387.32364507-1.17570251 1.03794188-1.173 1.824v12.91c-.0017391.7070136.36993621 1.362411.97758799 1.7238396.60765178.3614285 1.36097723.3751766 1.98141201.0361604l7.219-3.939c1.6843813-.9484965 3.768989-.8180616 5.322.333 1.0644676.8448708 1.9615529 1.881352 2.645 3.056 1.055 1.75 2.215 3.56 3.438 5.382.245.362.483.7.7 1.022l.353.508c.5996195.8594448 1.5820565 1.3708351 2.63 1.369h.048c.081041.217491.1772784.4290129.288.633-12.6769956 2.1001934-22.11955404 12.8404292-22.579 25.682-1.73578173.2218681-3.03307849 1.7041251-3.023 3.454 0 1.9329966 1.56700338 3.5 3.5 3.5h53c1.8378713.002826 3.3633716-1.4193976 3.4891785-3.2529601.1258069-1.8335624-1.1911448-3.4508161-3.0121785-3.6990399zm-29.448-32.369c-.7071744-1.3639381-.9124705-2.9330379-.58-4.433.0447109-.1915299.1786082-.3499751.36-.426 1.0637045-.1538594 2.1478608.0655869 3.068.621 1.3384234.5647277 2.2764929 1.7974669 2.464 3.238-.0201485.371252-.0764142.7396584-.168 1.1-1.5578376-1.0032556-3.5483473-1.0419513-5.144-.1zm22.789-8.808c-.1273666.6895818-.754888 1.1716598-1.454 1.117-3.371-1.781-6.77-3.474-10.016-5 3.4.67 6.937 1.445 10.435 2.293.7114446.1725376 1.1651947.8696029 1.035 1.59zm-26.034 12.352-.355-.512c-.217-.312-.45-.647-.688-1-1.2-1.792-2.342-3.575-3.384-5.3-.8115782-1.3883261-1.8763129-2.6121436-3.139-3.608-2.1808364-1.6348528-5.1196827-1.8327351-7.5-.505l-7.218 3.942-.015-12.906c3.79260233-1.63342845 7.8858868-2.45242602 12.015-2.404 3.916 0 10.119 1.8 18.436 5.359 5.409 2.322 11.73 5.412 17.792 8.7.649182.3524884.9074685 1.1524286.587 1.818-.3389209.6686038-1.1443345.9516227-1.827.642l-13.56-6.42c-.4349617-.2008105-.9513226-.0599081-1.224.334-.2779085.3993597-.2360928.9392004.1 1.291 1.4468329 1.4585765 2.3911904 3.3402859 2.696 5.372-.050307 1.7175862-.4121807 3.4117512-1.068 5-.2035136.4771129-.7380492.7194125-1.231.558-.0469658-.016572-.0930292-.0355982-.138-.057-.0286632-.0208311-.0583683-.0401895-.089-.058-.2944316-.1721298-.475007-.4879463-.474-.829.0039467-.1194465.0265532-.2375406.067-.35l.11-.358c.3522369-1.0831678.5744628-2.2043678.662-3.34-.2083605-2.1819463-1.5850558-4.078684-3.595-4.953-1.1-.528-3.167-1.314-4.715-.661-.7098474.2998282-1.2506078.8984358-1.477 1.635-.727 2.17 0 4.454.906 6.471-.551183.764155-.8734104 1.6694442-.929 2.61-.299848-.0548789-.5668251-.2236658-.745-.471zm2.754 1.212c-.0238667-.1438029-.0365713-.289237-.038-.435-.0018644-.7962196.3136074-1.560365.8766212-2.1233788s1.3271592-.8784856 2.1233788-.8766212c.7958441.0007314 1.5570311.3257164 2.108.9-.2901598 1.0215034.0133773 2.1195594.787 2.847-.1299997.5093138-.39417.9744606-.765 1.347-.705-.058-1.415-.094-2.13-.094s-1.428.036-2.134.091c-.4462675-.4490513-.7365195-1.0295553-.828-1.656zm30.525 32.128c-.2816971.281868-.6645056.4392408-1.063.437h-53c-.82842712 0-1.5-.6715729-1.5-1.5s.67157288-1.5 1.5-1.5h6.5c.5522847 0 1-.4477153 1-1s-.4477153-1-1-1h-4.976c.39358611-9.92171 6.6239243-18.6691416 15.8719433-22.2843019s19.7590268-1.4121195 26.7770567 5.6123019c4.4612407 4.429611 7.0718781 10.3894284 7.303 16.672h-39.976c-.5522847 0-1 .4477153-1 1s.4477153 1 1 1h41.5c.6081495-.0019024 1.1572631.3635818 1.3902494.9253351.2329863.5617534.103731 1.2085899-.3272494 1.6376649z"/><path id="Shape" d="m8.889 5.348c-1.43332742.24144758-2.84416246.60134765-4.218 1.076-.40201569.14006022-.67128523.51928484-.671.945v4.631c0 .5522847.44771525 1 1 1s1-.4477153 1-1v-3.909c1.05608306-.32929084 2.13320092-.58687703 3.224-.771.54455276-.0925077.9110077-.60894724.8185-1.1535s-.60894724-.9110077-1.1535-.8185z"/><circle id="Oval" cx="21" cy="35" r="1"/></g></g>
                </svg> 
                <span>{{dishTypes}}</span>
            </div>
        </div>
        <a v-if="btn=='add'" class="btn bg-blue" v-on:click="emitAdd">Add to your party</a>
        <a v-if="btn=='remove'" class="btn bg-blue" v-on:click="emitRemove">Delete recipe</a>
    </div>
    `,
    data() {
        return {
            link:"/recipes/"+this.recipe.id+"?type="+this.type,
            dishTypes: (this.recipe.dishTypes)?this.recipe.dishTypes.join(", "):null
        }
    },
    methods: {
        emitAdd: function(){
            this.$emit("addItem",this.recipe);
        },
        emitRemove: function(){
            this.$emit("removeItem",this.recipe);
        }
    }
}