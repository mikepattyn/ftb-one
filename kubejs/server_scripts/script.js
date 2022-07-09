// priority: 0

settings.logAddedRecipes = false;
settings.logRemovedRecipes = false;
settings.logSkippedRecipes = false;
settings.logErroringRecipes = false;

onEvent("recipes", (event) => {});

onEvent("item.tags", (event) => {});
