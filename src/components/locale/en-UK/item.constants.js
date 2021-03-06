/*global angular */
angular.module('mathCraft').config(function ($translateProvider) {
    $translateProvider.translations('en', {
            TITLE: 'Hello',
            FOO: 'This is a paragraph.',
            BUTTON_LANG_EN: 'english',
            BUTTON_LANG_DE: 'german',
            START: 'Start',
            LANE: 'Lane',
            JUNGLE: 'Jungle',
            TOOLS: 'Tools',
            CONSUMABLE: 'Consumable',
            GOLDPER: 'Gold trickle',
            VISION: 'Vision',
            DEFENSE: 'Defense',
            HEALTH: 'Health',
            ARMOR: 'Armour',
            SPELLBLOCK: 'Magic Resist',
            HEALTHREGEN: 'Health Regen',
            ATTACK: 'Attack',
            DAMAGE: 'Damage',
            CRITICALSTRIKE: 'Critical Strike',
            ATTACKSPEED: 'Attack Speed',
            LIFESTEAL: 'Life Steal',
            MAGIC: 'Magic',
            SPELLDAMAGE: 'Ability Power',
            COOLDOWNREDUCTION: 'Cooldown Reduction',
            MANA: 'Mana',
            MANAREGEN: 'Mana Regen',
            MOVEMENT: 'Movement',
            BOOTS: 'Boots',
            NONBOOTSMOVEMENT: 'Boot Upgrades',
            UNCATEGORIZED: 'Uncategorised',
            ACTIVE: 'Active',
            ARMORPENETRATION: 'Armour Penetration',
            AURA: 'Aura',
            MAGICPENETRATION: 'Magic Penetration',
            ONHIT: 'On-hit',
            SLOW: 'Slow',
            STEALTH: 'Stealth',
            TRINKET: 'Trinket',
            SPELLVAMP: 'Spell Vamp',
            TENACITY: 'Tenacity'
        })
        .fallbackLanguage('en');

    $translateProvider.preferredLanguage('en');
});