import { defineStore } from 'pinia'
import { ref } from 'vue'

export const boxesList = ref([
    {
        item: 'common crate',
        value: 1,
        possibleLoot: [
            'regular skibidi toilet',
            'regular cameraman',
            'regular big skibidi toilet',
            'regular goon toilet',
            'regular sawblade toilet',
            'regular speakerman',
            'regular tv man',
        ],
        itemType: 'crate'
    },
    {
        item: 'uncommon crate',
        value: 2,
        possibleLoot: [
            'flying skibidi toilet',
            'police skibidi toilet',
            'military skibidi toilet',
            'spider skibidi toilet',
            'zombie skibidi toilet',
            'spider speakerman',
            'recorder cameraman',
            'giant cameraman',
            'spider cameraman',
            'spy cameraman toilet'
        ],
        itemType: 'crate'
    },
    {
        item: 'rare crate',
        value: 3,
        possibleLoot: [
            'holy skibidi toilet',
            'hydra skibidi toilet',
            'mafia skibidi toilet',
            'lightning skibidi toilet',
            'ninja skibidi toilet',
            'giant speakerman',
            'giant cameraman',
        ],
        itemType: 'crate'
    },
    {
        item: 'epic crate',
        value: 4,
        possibleLoot: [
            'dj skibidi',
            'camoflauge skibidi toilet',
            'doctor skibidi',
            'big laser skibidi toilet',
            'quad launcher skibidi toilet',
            'epic beats speakerwoman',
            'commander cameraman'
        ],
        itemType: 'crate'
    },
    {
        item: 'legendary crate',
        value: 5,
        possibleLoot: [
            'the scientist',
            'astro 1',
            'astro 2',
            'astro 3',
            'cinemaman',
            'tv woman',
        ],
        itemType: 'crate'
    },
    {
        item: 'exotic crate',
        value: 6,
        possibleLoot: [
            'final boss skibidi toilet',
            'titan speakerman',
            'titan cameraman',
            'titan tv man',
        ],
        itemType: 'crate'
    }
])