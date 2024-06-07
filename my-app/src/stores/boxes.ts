import { defineStore } from 'pinia'
import { ref } from 'vue'

export const boxesList = ref([
    {
        item: 'common crate',
        rarity: 'common',
        value: 1,
        possibleLoot: [
            {
                item: 'Regular Skibidi Toilet',
                itemType: 'skibidi',
                itemrarity: 'common',
                probability: .25,
                imageLink: 'https://static.wikia.nocookie.net/skibitoilets/images/3/34/Skibidi_toilet.png/revision/latest?cb=20230615005152'
            },
            {
                item: 'Regular Cameraman',
                itemType: 'skibidi',
                itemrarity: 'common',
                probability: .25,
                imageLink: 'https://i.pinimg.com/474x/3f/0a/77/3f0a775205c9d1399a3c870f472463b5.jpg'
            },
            {
                item: 'Regular Big Skibidi Toilet',
                itemType: 'skibidi',
                itemrarity: 'common',
                probability: .25,
                imageLink: 'https://static.wikia.nocookie.net/skibidi-toilet-official/images/7/73/LargeST.png/revision/latest/scale-to-width/360?cb=20240304003934'
            },
            {
                item: 'Regular Goon Toilet',
                itemType: 'skibidi',
                itemrarity: 'common',
                probability: .25,
                imageLink: 'https://preview.redd.it/7mtf1q5uiwsc1.jpeg?width=640&crop=smart&auto=webp&s=175562ec85fbf97f10ada2ddbd3a6097eb73a19a'
            },
            {
                item: 'Regular Sawblade Skibidi Toilet',
                itemType: 'skibidi',
                itemrarity: 'common',
                probability: .25,
                imageLink: 'https://static.wikia.nocookie.net/dom-studios-skibidi-multiverse/images/4/44/DualBuzzsawKnives022.png/revision/latest?cb=20240128092115'
            },
            {
                item: 'Regular Speakerman',
                itemType: 'skibidi',
                itemrarity: 'common',
                probability: .25,
                imageLink: 'https://static.wikia.nocookie.net/skibidi-toilet-official/images/9/9c/Skibidi_toilet_speakermanpng.png/revision/latest?cb=20230720114727'
            },
            {
                item: 'Regular TV Man',
                itemType: 'skibidi',
                itemrarity: 'common',
                probability: .25,
                imageLink: 'https://static.wikia.nocookie.net/skibidi-toilet-official/images/e/e3/Skibidi_toilet_39_Tv_Man_Screenshot_Hd_Enchanted.png/revision/latest/scale-to-width-down/1200?cb=20230617101724'
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
                item: 'Flying Skibidi Toilet',
                itemType: 'skibidi',
                itemrarity: 'uncommon',
                probability: .25,
                imageLink: 'https://static.wikia.nocookie.net/skibidi-toilet-official/images/c/c9/5-GiantFlyingSkibidiToilet1.png/revision/latest?cb=20240218053956'
            },
            {
                item: 'Police Skibidi Toilet',
                itemType: 'skibidi',
                itemrarity: 'uncommon',
                probability: .25
            },
            {
                item: 'Military Skibidi Toilet',
                itemType: 'skibidi',
                itemrarity: 'uncommon',
                probability: .25
            },
            {
                item: 'Spider Skibidi Toilet',
                itemType: 'skibidi',
                itemrarity: 'uncommon',
                probability: .25
            },
            {
                item: 'Zombie Skibidi Toilet',
                itemType: 'skibidi',
                itemrarity: 'uncommon',
                probability: .25
            },
            {
                item: 'Spider Speakerman',
                itemType: 'skibidi',
                itemrarity: 'uncommon',
                probability: .25
            },
            {
                item: 'Recorder Cameraman',
                itemType: 'skibidi',
                itemrarity: 'uncommon',
                probability: .25
            },
            {
                item: 'Giant Cameraman',
                itemType: 'skibidi',
                itemrarity: 'uncommon',
                probability: .25
            },
            {
                item: 'Spider Cameraman',
                itemType: 'skibidi',
                itemrarity: 'uncommon',
                probability: .25
            },
            {
                item: 'Spy Cameraman Toilet',
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
                item: 'Holy Skibidi Toilet',
                itemType: 'skibidi',
                itemrarity: 'rare',
                probability: .25
            },
            {
                item: 'Hydra Skibidi Toilet',
                itemType: 'skibidi',
                itemrarity: 'rare',
                probability: .25
            },
            {
                item: 'Mafia Skibidi Toilet',
                itemType: 'skibidi',
                itemrarity: 'rare',
                probability: .25
            },
            {
                item: 'Lightning Skibidi Toilet',
                itemType: 'skibidi',
                itemrarity: 'rare',
                probability: .25
            },
            {
                item: 'Ninja Skibidi Toilet',
                itemType: 'skibidi',
                itemrarity: 'rare',
                probability: .25
            },
            {
                item: 'Giant Speakerman',
                itemType: 'skibidi',
                itemrarity: 'rare',
                probability: .25
            },
            {
                item: 'Giant Cameraman',
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
                item: 'DJ Skibidi',
                itemType: 'skibidi',
                itemrarity: 'epic',
                probability: .25
            },
            {
                item: 'Camoflauge Skibidi Toilet',
                itemType: 'skibidi',
                itemrarity: 'epic',
                probability: .25
            },
            {
                item: 'Doctor Skibidi',
                itemType: 'skibidi',
                itemrarity: 'epic',
                probability: .25
            },
            {
                item: 'Big Laser Skibidi Toilet',
                itemType: 'skibidi',
                itemrarity: 'epic',
                probability: .25
            },
            {
                item: 'Quad Launcher Skibidi Toilet',
                itemType: 'skibidi',
                itemrarity: 'epic',
                probability: .25
            },
            {
                item: 'Epic Beats Speakerwoman',
                itemType: 'skibidi',
                itemrarity: 'epic',
                probability: .25
            },
            {
                item: 'Commander Cameraman',
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
                item: 'The Scientist',
                itemType: 'skibidi',
                itemrarity: 'legendary',
                probability: .25
            },
            {
                item: 'Detainer Astro Toilet',
                itemType: 'skibidi',
                itemrarity: 'legendary',
                probability: .25
            },
            {
                item: 'Juggernaut Astro Toilet',
                itemType: 'skibidi',
                itemrarity: 'legendary',
                probability: .25
            },
            {
                item: 'Advisor Astro Toilet',
                itemType: 'skibidi',
                itemrarity: 'c',
                probability: .25
            },
            {
                item: 'Cinemaman',
                itemType: 'skibidi',
                itemrarity: 'c',
                probability: .25
            },
            {
                item: 'TV Man',
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
                item: 'Final Boss Skibidi Toilet',
                itemType: 'skibidi',
                itemrarity: 'c',
                probability: .25
            },
            {
                item: 'Titan Speakerman',
                itemType: 'skibidi',
                itemrarity: 'c',
                probability: .25
            },
            {
                item: 'Titan Cameraman',
                itemType: 'skibidi',
                itemrarity: 'c',
                probability: .25
            },
            {
                item: 'Titan TV Man',
                itemType: 'skibidi',
                itemrarity: 'c',
                probability: .25
            },
        ],
        itemType: 'crate'
    }
])