onEvent("recipes", (event) => {
    const { shaped, shapeless } = event;

    // add shortcut recipes for:
    // chests, hoppers, sticks, dispensers, repeaters, and minecarts and boats with chests

    shaped("4x minecraft:chest", ["LLL", "L L", "LLL"], {
        L: "#minecraft:logs",
    }).id("ftb:shortcut_recipes/chest");

    shaped("minecraft:hopper", ["ILI", "ILI", " I "], {
        I: "#forge:ingots/iron",
        L: "#minecraft:logs",
    }).id("ftb:shortcut_recipes/hopper");

    shaped("16x minecraft:stick", ["L", "L"], {
        L: "#minecraft:logs",
    }).id("ftb:shortcut_recipes/stick");

    shaped("minecraft:dispenser", [" WS", "WDS", " WS"], {
        W: "#forge:rods/wooden",
        S: "#forge:string",
        D: "minecraft:dropper",
    }).id("ftb:shortcut_recipes/dispenser");

    shaped("minecraft:repeater", ["R R", "WRW", "SSS"], {
        R: "#forge:dusts/redstone",
        W: "#forge:rods/wooden",
        S: "minecraft:stone",
    }).id("ftb:shortcut_recipes/repeater");

    for (let wood of ["oak", "spruce", "birch", "jungle", "acacia", "dark_oak", "mangrove"]) {
        shaped(`minecraft:${wood}_chest_boat`, ["PCP", "PPP"], {
            P: `minecraft:${wood}_planks`,
            C: "#forge:chests",
        }).id(`ftb:shortcut_recipes/${wood}_chest_boat`);

        shaped(`minecraft:${wood}_chest_boat`, [" L ", "PLP", "PPP"], {
            P: `minecraft:${wood}_planks`,
            L: `#minecraft:${wood}_logs`,
        }).id(`ftb:shortcut_recipes/${wood}_chest_boat_logs`);
    }

    shaped("minecraft:chest_minecart", ["ICI", "III"], {
        I: "#forge:ingots/iron",
        C: "#forge:chests",
    }).id(`ftb:shortcut_recipes/chest_minecart_0`);

    shaped("minecraft:chest_minecart", ["PPP", "PMP", "PPP"], {
        P: "#minecraft:planks",
        M: "minecraft:minecart",
    }).id(`ftb:shortcut_recipes/chest_minecart_1`);

    shaped("minecraft:furnace_minecart", ["IFI", "III"], {
        I: "#forge:ingots/iron",
        F: "minecraft:furnace",
    }).id(`ftb:shortcut_recipes/furnace_minecart_0`);

    shaped("minecraft:furnace_minecart", ["CCC", "CMC", "CCC"], {
        C: "#minecraft:stone_tool_materials",
        M: "minecraft:minecart",
    }).id(`ftb:shortcut_recipes/furnace_minecart_1`);

    shaped("minecraft:hopper_minecart", ["IHI", "III"], {
        I: "#forge:ingots/iron",
        H: "minecraft:hopper",
    }).id(`ftb:shortcut_recipes/hopper_minecart_0`);

    shaped("minecraft:hopper_minecart", ["ICI", "IMI", " I "], {
        I: "#forge:ingots/iron",
        M: "minecraft:minecart",
        C: "#forge:chests",
    }).id(`ftb:shortcut_recipes/hopper_minecart_1`);

    shaped("minecraft:hopper_minecart", ["IMI", "ICI", " I "], {
        I: "#forge:ingots/iron",
        M: "minecraft:minecart",
        C: "#forge:chests",
    }).id(`ftb:shortcut_recipes/hopper_minecart_2`);

    shapeless("4x minecraft:clay_ball", ["minecraft:clay"]).id("ftb:shortcut_recipes/uncraft_clay_to_balls");
});
