import { defineStore } from 'pinia'
import { ref } from 'vue'

export const boxesList = ref([
    {
        item: 'common crate',
        value: 1,
        possibleLoot: [
            {
                item: 'regular skibidi toilet',
                itemType: 'skibidi',
            },
            {
                item: 'regular cameraman',
                itemType: 'skibidi',
            },
            {
                item: 'regular big skibidi toilet',
                itemType: 'skibidi',
            },
            {
                item: 'regular goon toilet',
                itemType: 'skibidi',
            },
            {
                item: 'regular sawblade skibidi toilet',
                itemType: 'skibidi',
            },
            {
                item: 'regular speakerman',
                itemType: 'skibidi',
            },
            {
                item: 'regular tv man',
                itemType: 'skibidi',
            },
        ],
        itemType: 'crate'
    },
    {
        item: 'uncommon crate',
        value: 2,
        possibleLoot: [
            {
                item: 'flying skibidi toilet',
                itemType: 'skibidi',
            },
            {
                item: 'police skibidi toilet',
                itemType: 'skibidi',
            },
            {
                item: 'military skibidi toilet',
                itemType: 'skibidi',
            },
            {
                item: 'spider skibidi toilet',
                itemType: 'skibidi',
            },
            {
                item: 'zombie skibidi toilet',
                itemType: 'skibidi',
            },
            {
                item: 'spider speakerman',
                itemType: 'skibidi',
            },
            {
                item: 'recorder cameraman',
                itemType: 'skibidi',
            },
            {
                item: 'giant cameraman',
                itemType: 'skibidi',
            },
            {
                item: 'spider cameraman',
                itemType: 'skibidi',
            },
            {
                item: 'spy cameraman toilet',
                itemType: 'skibidi',
            },
        ],
        itemType: 'crate'
    },
    {
        item: 'rare crate',
        value: 3,
        possibleLoot: [
            {
                item: 'holy skibidi toilet',
                itemType: 'skibidi',
            },
            {
                item: 'hydra skibidi toilet',
                itemType: 'skibidi',
            },
            {
                item: 'mafia skibidi toilet',
                itemType: 'skibidi',
            },
            {
                item: 'lightning skibidi toilet',
                itemType: 'skibidi',
            },
            {
                item: 'ninja skibidi toilet',
                itemType: 'skibidi',
            },
            {
                item: 'giant speakerman',
                itemType: 'skibidi',
            },
            {
                item: 'giant cameraman',
                itemType: 'skibidi',
            },
        ],
        itemType: 'crate'
    },
    {
        item: 'epic crate',
        value: 4,
        possibleLoot: [
            {
                item: 'dj skibidi',
                itemType: 'skibidi',
            },
            {
                item: 'camoflauge skibidi toilet',
                itemType: 'skibidi',
            },
            {
                item: 'doctor skibidi',
                itemType: 'skibidi',
            },
            {
                item: 'big laser skibidi toilet',
                itemType: 'skibidi',
            },
            {
                item: 'quad launcher skibidi toilet',
                itemType: 'skibidi',
            },
            {
                item: 'epic beats speakerwoman',
                itemType: 'skibidi',
            },
            {
                item: 'commander cameraman',
                itemType: 'skibidi',
            },
        ],
        itemType: 'crate'
    },
    {
        item: 'legendary crate',
        value: 5,
        possibleLoot: [
            {
                item: 'the scientist',
                itemType: 'skibidi',
            },
            {
                item: 'detainer astro toilet',
                itemType: 'skibidi',
            },
            {
                item: 'juggernaut astro toilet',
                itemType: 'skibidi',
            },
            {
                item: 'advisor astro toilet',
                itemType: 'skibidi',
            },
            {
                item: 'cinemaman',
                itemType: 'skibidi',
            },
            {
                item: 'tv man',
                itemType: 'skibidi',
            },
        ],
        itemType: 'crate'
    },
    {
        item: 'exotic crate',
        value: 6,
        possibleLoot: [
            {
                item: 'final boss skibidi toilet',
                itemType: 'skibidi',
            },
            {
                item: 'titan speakerman',
                itemType: 'skibidi',
            },
            {
                item: 'titan cameraman',
                itemType: 'skibidi',
            },
            {
                item: 'titan tv man',
                itemType: 'skibidi',
            },
        ],
        itemType: 'crate'
    }
])