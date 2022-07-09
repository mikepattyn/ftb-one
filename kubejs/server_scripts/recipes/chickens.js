// priority: 100

const chickenRecipes = [
    ['chickens:white_chicken', 'minecraft:bone'],
    ['chickens:flint_chicken', 'minecraft:flint'],
    ['chickens:log_chicken', 'minecraft:oak_log'],
    ['chickens:quartz_chicken', 'minecraft:quartz'],  
    ['chickens:sand_chicken', 'minecraft:sand'],
    ['chickens:soulsand_chicken', 'minecraft:soul_sand']


    
];

Item.of('chickens:spawn_egg', '{ChickenType:{id:"chickens:white_chicken"}}')

onEvent("recipes", (event) => {
    const { shaped } = event;


    //Chickens from chickenRecipe Array
    for (i = 0; i < chickenRecipes.length; i++) {
        var chickenEgg = '{ChickenType:{id:\"' + chickenRecipes[i][0] + '\"}}';

        shaped(Item.of("chickens:spawn_egg", chickenEgg), 
        ["III", "FEF", "III"], {
            I: chickenRecipes[i][1],
            F: '#forge:feathers',
            E: '#forge:eggs'
        }).id("ftb:chicken_recipes/" + chickenRecipes[i][1].replace('minecraft:', '')
        );
    }
    //End chickens
    
});
