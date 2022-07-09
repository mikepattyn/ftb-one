// priority: 100
onEvent("worldgen.remove", (event) => {
    //
});

onEvent("worldgen.add", (event) => {
    event.addOre((ore) => {
        ore.id = "minecraft:bonus_iron";
        ore.biomes = {
            not: [
                {
                    category: "the_end",
                },
                {
                    category: "nether",
                },
            ],
        };
        ore.addTarget("minecraft:stone", "minecraft:iron_ore");
        ore.addTarget("minecraft:deepslate", "minecraft:deepslate_iron_ore");
        ore.size = 7;
        ore.count(12);
        ore.triangleHeight(-16, 60);
        ore.squared();
    });
});
