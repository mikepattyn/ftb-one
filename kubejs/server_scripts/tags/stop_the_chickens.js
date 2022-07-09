onEvent("tags.entity_types", (event) => {
    console.log("hi");
    event.add("ftb:modded_chickens", "@chickens");
});
