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
                imageLink: 'https://preview.redd.it/skibidi-toilets-got-astro-technology-v0-pjz51cykgyuc1.jpeg?auto=webp&s=183bffed9c5c2f0b43111ebb663c7c3af7842a81'
            },
            {
                item: 'Regular Speakerman',
                itemType: 'skibidi',
                itemrarity: 'common',
                probability: .25,
                imageLink: 'https://preview.redd.it/speakerman-theory-how-they-know-whats-there-v0-c464nodg2zqc1.png?width=205&format=png&auto=webp&s=4bce51bab65a35c645521c97fe4ca6824a2eaf3c'
            },
            {
                item: 'Regular TV Man',
                itemType: 'skibidi',
                itemrarity: 'common',
                probability: .25,
                imageLink: 'https://ih1.redbubble.net/image.5221738827.4425/flat,750x,075,f-pad,750x1000,f8f8f8.jpg'
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
                probability: .25,
                imageLink: 'https://static.wikia.nocookie.net/skibidi-toilet-official/images/9/9e/Newimgmediumpolice.png/revision/latest/scale-to-width-down/1200?cb=20231112052744'
            },
            {
                item: 'Military Skibidi Toilet',
                itemType: 'skibidi',
                itemrarity: 'uncommon',
                probability: .25,
                imageLink: 'https://media.sketchfab.com/models/55d48703e9424b03a90ba43eafe055d2/thumbnails/213540d40bc14197be337c644879c96c/3ab630f5f7a4406b88704f3423cc6899.jpeg'
            },
            {
                item: 'Spider Skibidi Toilet',
                itemType: 'skibidi',
                itemrarity: 'uncommon',
                probability: .25,
                imageLink: 'https://static.wikia.nocookie.net/skibidi-toilet-official/images/e/e0/StriderSkibidi.png/revision/latest/scale-to-width-down/1200?cb=20240202025626'
            },
            {
                item: 'Zombie Skibidi Toilet',
                itemType: 'skibidi',
                itemrarity: 'uncommon',
                probability: .25,
                imageLink: 'https://static.wikia.nocookie.net/skibidi-toilet-zombie-universe/images/f/f0/2024-03-03_18-22-50-666.png/revision/latest?cb=20240303114617'
            },
            {
                item: 'Spider Speakerman',
                itemType: 'skibidi',
                itemrarity: 'uncommon',
                probability: .25,
                imageLink: 'https://static.wikia.nocookie.net/skibidi-toilet-official/images/3/30/Better_SpeakerStrider.png/revision/latest/scale-to-width-down/1200?cb=20230721105829'
            },
            {
                item: 'Recorder Cameraman',
                itemType: 'skibidi',
                itemrarity: 'uncommon',
                probability: .25,
                imageLink: 'https://i.pinimg.com/originals/53/06/5e/53065e2e5240095da232cab91ddbb0ea.png'
            },
            {
                item: 'Giant Cameraman',
                itemType: 'skibidi',
                itemrarity: 'uncommon',
                probability: .25,
                imageLink: 'https://static.wikia.nocookie.net/skibidi-toilet-official/images/6/6c/34-LargeRedSuitedCameramanTransparent.png/revision/latest?cb=20230930193614'
            },
            {
                item: 'Opium Spider Cameraman',
                itemType: 'skibidi',
                itemrarity: 'uncommon',
                probability: .25,
                imageLink: 'https://static.wikia.nocookie.net/skibidi-toilet-official/images/0/0b/32-BetterCameraStrider.png/revision/latest/scale-to-width-down/1200?cb=20230721105826'
            },
            {
                item: 'Spy Cameraman Toilet',
                itemType: 'skibidi',
                itemrarity: 'uncommon',
                probability: .25,
                imageLink: 'https://static.wikia.nocookie.net/skibidi-toilet-official/images/3/3b/Better_CameraToilet.png/revision/latest?cb=20230721105830'
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
                probability: .25,
                imageLink: 'https://static.wikia.nocookie.net/skibidi-toilet-official/images/b/bb/10-SaintSkbidi.png/revision/latest?cb=20240312053622'
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
                itemrarity: 'legendary',
                probability: .25
            },
            {
                item: 'Cinemaman',
                itemType: 'skibidi',
                itemrarity: 'legendary',
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
                itemrarity: 'Exotic',
                probability: .25
            },
            {
                item: 'Titan Speakerman',
                itemType: 'skibidi',
                itemrarity: 'Exotic',
                probability: .25
            },
            {
                item: 'Titan Cameraman',
                itemType: 'skibidi',
                itemrarity: 'Exotic',
                probability: .25
            },
            {
                item: 'Titan TV Man',
                itemType: 'skibidi',
                itemrarity: 'Exotic',
                probability: .25
            },
        ],
        itemType: 'crate'
    }
])