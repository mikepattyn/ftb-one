let metadataFile = JsonIO.read("config/metadata.json");

onEvent("ui.main_menu", (event) => {
    event.replace((ui) => {
        ui.fillBackground("ui:textures/bg.png", 1920, 1080);
        ui.widgetTexture = "ui:textures/widgets.png";

        const buttonSize = 175;
        const textColor = 0xffffff

        // If MT is loaded
        if (Platform.mods.minetogether) {
            // MineTogether friends list
            ui.button((b) => {
                b.name = "Friends list";
                b.w = 70;
                b.x = ui.w - b.w - 5;
                b.y = ui.h - b.h - 4;
                b.action = "minetogether:friends_list";
                b.shadow = false;
                b.color = textColor;
            });

            // MineTogether chat
            ui.imageButton((b) => {
                b.w = 20;
                b.x = ui.w - b.w - 80;
                b.y = ui.h - b.h - 4;
                b.action = "minetogether:chat";
                b.texture = "ui:textures/chat.png";
            });

            // MineTogether order server
            ui.imageButton((b) => {
                b.w = 20;
                b.x = ui.w - b.w - 105;
                b.y = ui.h - b.h - 4;
                b.action = "minetogether:order";
                b.texture = "ui:textures/creeper.png";
            });
        }

        // Singleplayer
        ui.button((b) => {
            b.name = Text.translate("menu.singleplayer");
            b.w = buttonSize;
            b.x = ui.w / 2 - b.w / 2;
            b.y = ui.h / 2 - 20;
            b.action = "minecraft:singleplayer";
            b.shadow = false;
            b.color = textColor;
        });

        // Multiplayer
        ui.button((b) => {
            b.name = Text.translate("menu.multiplayer");
            b.w = buttonSize;
            b.x = ui.w / 2 - b.w / 2;
            b.y = ui.h / 2 + 6;
            b.action = "minecraft:multiplayer";
            b.shadow = false;
            b.color = textColor;
        });

        // Mods
        ui.button((b) => {
            b.name = Text.translate("fml.menu.mods");
            b.w = buttonSize / 2 - 2;
            b.x = ui.w / 2 - b.w - 3;
            b.y = ui.h / 2 + 31;
            b.action = "forge:mod_list";
            b.shadow = false;
            b.color = textColor;
        });

        // Issue tracker
        ui.button((b) => {
            b.name = Text.of("Support");
            b.w = buttonSize / 2 - 2;
            b.x = ui.w / 2 + 2;
            b.y = ui.h / 2 + 31;
            b.action = "https://www.feed-the-beast.com/support";
            b.shadow = false;
            b.color = textColor;
        });

        // Options
        ui.button((b) => {
            b.name = Text.translate("menu.options");
            b.w = buttonSize / 2 - 2;
            b.x = ui.w / 2 - b.w - 3;
            b.y = ui.h / 2 + 69;
            b.action = "minecraft:options";
            b.shadow = false;
            b.color = textColor;
        });

        // Quit
        ui.button((b) => {
            b.name = Text.of("Quit");
            b.w = buttonSize / 2 - 2;
            b.x = ui.w / 2 + 2;
            b.y = ui.h / 2 + 69;
            b.action = "minecraft:quit";
            b.shadow = false;
            b.color = textColor;
        });

        // Aux
        ui.imageButton((b) => {
            b.w = 20;
            b.x = 5;
            b.y = 5;
            b.action = "ftbauxilium:opt_out";
            b.texture = "ui:textures/auxilium.png";
        });

        // Discord
        ui.imageButton((b) => {
            b.texture = "ui:textures/discord.png";
            b.w = 20;
            b.x = 30;
            b.y = 5;
            b.action = "https://go.ftb.team/Grms";
            // b.color = textColor;
            b.hoverColor = 0x8B9EFF;
        });

        // Pack logo
        ui.image((i) => {
            i.h = 619 / 2 * 0.0014 * ui.h;
            i.w = 1024 / 2 * 0.0014 * ui.h;
            i.x = ui.w / 2 - i.w / 2;

            i.texture = "ui:textures/logo.png";
        });

        // Forge version
        ui.label((l) => {
            l.h = 8;
            l.name = Text.of("Forge Version: " + Platform.mods.forge.version).color(
                textColor
            );
            l.x = 4;
            l.y = ui.h - 28;
        });

        // Mods loaded
        ui.label((l) => {
            l.h = 8;
            l.name = Text.of(Platform.mods.size() + " Mods Loaded").color(textColor);
            l.x = 4;
            l.y = ui.h - 19;
        });

        // Mojang
        ui.label((l) => {
            l.h = 8;
            l.name = Text.of("Copyright Mojang AB").color(textColor);
            l.x = 4;
            l.y = ui.h - 10;
        });

        // Pack name and version from metadata file
        // metadataFile.name + " v" + metadataFile.version.name
        if (metadataFile) {
            ui.label((l) => {
                l.h = 8;
                l.name = Text.of(
                    metadataFile.name + " v" + metadataFile.version.name
                ).color(textColor);
                l.x = 4;
                l.y = ui.h - 37;
            });
        }
    });
});
