import { defineStore } from 'pinia'
import { ref } from 'vue'

export const boxesList = ref([
    {
        item: 'common crate',
        rarity: 'common',
        value: 1,
        possibleLoot: [
            {
                item: 'regular skibidi toilet',
                itemType: 'skibidi',
                itemrarity: 'common',
                probability: .25,
            },
            {
                item: 'regular cameraman',
                itemType: 'skibidi',
                itemrarity: 'common',
                probability: .25
            },
            {
                item: 'regular big skibidi toilet',
                itemType: 'skibidi',
                itemrarity: 'common',
                probability: .25
            },
            {
                item: 'regular goon toilet',
                itemType: 'skibidi',
                itemrarity: 'common',
                probability: .25
            },
            {
                item: 'regular sawblade skibidi toilet',
                itemType: 'skibidi',
                itemrarity: 'common',
                probability: .25
            },
            {
                item: 'regular speakerman',
                itemType: 'skibidi',
                itemrarity: 'common',
                probability: .25
            },
            {
                item: 'regular tv man',
                itemType: 'skibidi',
                itemrarity: 'common',
                probability: .25
            },
        ],
        itemType: 'crate'
    },
    {
        item: 'uncommon crate',
        rarity: 'uncommon',
        value: 2,
        possibleLoot: [
            {
                item: 'flying skibidi toilet',
                itemType: 'skibidi',
                itemrarity: 'uncommon',
                probability: .25
            },
            {
                item: 'police skibidi toilet',
                itemType: 'skibidi',
                itemrarity: 'uncommon',
                probability: .25
            },
            {
                item: 'military skibidi toilet',
                itemType: 'skibidi',
                itemrarity: 'uncommon',
                probability: .25
            },
            {
                item: 'spider skibidi toilet',
                itemType: 'skibidi',
                itemrarity: 'uncommon',
                probability: .25
            },
            {
                item: 'zombie skibidi toilet',
                itemType: 'skibidi',
                itemrarity: 'uncommon',
                probability: .25
            },
            {
                item: 'spider speakerman',
                itemType: 'skibidi',
                itemrarity: 'uncommon',
                probability: .25
            },
            {
                item: 'recorder cameraman',
                itemType: 'skibidi',
                itemrarity: 'uncommon',
                probability: .25
            },
            {
                item: 'giant cameraman',
                itemType: 'skibidi',
                itemrarity: 'uncommon',
                probability: .25
            },
            {
                item: 'spider cameraman',
                itemType: 'skibidi',
                itemrarity: 'uncommon',
                probability: .25
            },
            {
                item: 'spy cameraman toilet',
                itemType: 'skibidi',
                itemrarity: 'uncommon',
                probability: .25
            },
        ],
        itemType: 'crate'
    },
    {
        item: 'rare crate',
        rarity: 'rare',
        value: 3,
        possibleLoot: [
            {
                item: 'holy skibidi toilet',
                itemType: 'skibidi',
                itemrarity: 'rare',
                probability: .25
            },
            {
                item: 'hydra skibidi toilet',
                itemType: 'skibidi',
                itemrarity: 'rare',
                probability: .25
            },
            {
                item: 'mafia skibidi toilet',
                itemType: 'skibidi',
                itemrarity: 'rare',
                probability: .25
            },
            {
                item: 'lightning skibidi toilet',
                itemType: 'skibidi',
                itemrarity: 'rare',
                probability: .25
            },
            {
                item: 'ninja skibidi toilet',
                itemType: 'skibidi',
                itemrarity: 'rare',
                probability: .25
            },
            {
                item: 'giant speakerman',
                itemType: 'skibidi',
                itemrarity: 'rare',
                probability: .25
            },
            {
                item: 'giant cameraman',
                itemType: 'skibidi',
                itemrarity: 'rare',
                probability: .25
            },
        ],
        itemType: 'crate'
    },
    {
        item: 'epic crate',
        rarity: 'epic',
        value: 4,
        possibleLoot: [
            {
                item: 'dj skibidi',
                itemType: 'skibidi',
                itemrarity: 'epic',
                probability: .25
            },
            {
                item: 'camoflauge skibidi toilet',
                itemType: 'skibidi',
                itemrarity: 'epic',
                probability: .25
            },
            {
                item: 'doctor skibidi',
                itemType: 'skibidi',
                itemrarity: 'epic',
                probability: .25
            },
            {
                item: 'big laser skibidi toilet',
                itemType: 'skibidi',
                itemrarity: 'epic',
                probability: .25
            },
            {
                item: 'quad launcher skibidi toilet',
                itemType: 'skibidi',
                itemrarity: 'epic',
                probability: .25
            },
            {
                item: 'epic beats speakerwoman',
                itemType: 'skibidi',
                itemrarity: 'epic',
                probability: .25
            },
            {
                item: 'commander cameraman',
                itemType: 'skibidi',
                itemrarity: 'epic',
                probability: .25
            },
        ],
        itemType: 'crate'
    },
    {
        item: 'legendary crate',
        rarity: 'legendary',
        value: 5,
        possibleLoot: [
            {
                item: 'the scientist',
                itemType: 'skibidi',
                itemrarity: 'legendary',
                probability: .25
            },
            {
                item: 'detainer astro toilet',
                itemType: 'skibidi',
                itemrarity: 'legendary',
                probability: .25
            },
            {
                item: 'juggernaut astro toilet',
                itemType: 'skibidi',
                itemrarity: 'legendary',
                probability: .25
            },
            {
                item: 'advisor astro toilet',
                itemType: 'skibidi',
                itemrarity: 'c',
                probability: .25
            },
            {
                item: 'cinemaman',
                itemType: 'skibidi',
                itemrarity: 'c',
                probability: .25
            },
            {
                item: 'tv man',
                itemType: 'skibidi',
                itemrarity: 'c',
                probability: .25
            },
        ],
        itemType: 'crate'
    },
    {
        item: 'exotic crate',
        rarity: 'exotic',
        value: 6,
        possibleLoot: [
            {
                item: 'final boss skibidi toilet',
                itemType: 'skibidi',
                itemrarity: 'c',
                probability: .25
            },
            {
                item: 'titan speakerman',
                itemType: 'skibidi',
                itemrarity: 'c',
                probability: .25
            },
            {
                item: 'titan cameraman',
                itemType: 'skibidi',
                itemrarity: 'c',
                probability: .25
            },
            {
                item: 'titan tv man',
                itemType: 'skibidi',
                itemrarity: 'c',
                probability: .25
            },
        ],
        itemType: 'crate'
    }
])