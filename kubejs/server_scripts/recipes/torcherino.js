// priority: 100


onEvent("recipes", (event) => {

    event.remove({ id: 'torcherino:torcherino' })
    event.shaped('torcherino:torcherino',
        ['CTC', 'TST', 'CTC'], { C: 'minecraft:clock', T: 'minecraft:soul_torch', S: 'minecraft:sculk_catalyst' }).id("ftb:torcherino");

});



