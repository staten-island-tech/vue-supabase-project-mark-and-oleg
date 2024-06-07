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
                imageLink: 'https://i.redd.it/this-may-be-controversial-but-personally-i-really-dont-v0-37slovr1r08b1.jpg?width=1280&format=pjpg&auto=webp&s=87bfe4cdaa37c614a2a9dd2ad318bd3fcfc9aa0e'
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
                imageLink: 'https://m.media-amazon.com/images/M/MV5BMzUwZDdjN2UtZDk3NS00M2IwLTgwNDMtYzQzMmVhZjE3MjJlXkEyXkFqcGdeQXVyOTQ4MDEzMTg@._V1_QL75_UX500_CR0,116,500,281_.jpg'
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
                imageLink: 'https://i.redd.it/who-you-all-betting-on-as-having-been-astro-toilets-v0-fw6kdn6fge1d1.png?width=250&format=png&auto=webp&s=41e5707cf2fb509c87ccb59c751dcf36ed37fa5a'
            },
            {
                item: 'Police Skibidi Toilet',
                itemType: 'skibidi',
                itemrarity: 'uncommon',
                probability: .25,
                imageLink: 'https://preview.redd.it/kyoaubfzetsb1.png?auto=webp&s=f3bd214e8dbde931cadd91798875c258310a4fb6'
            },
            {
                item: 'Military Skibidi Toilet',
                itemType: 'skibidi',
                itemrarity: 'uncommon',
                probability: .25,
                imageLink: 'https://preview.redd.it/who-would-win-v0-zlulxqygouwb1.jpg?width=380&format=pjpg&auto=webp&s=18f0698179210a1afbf9cf6d140fac359a8d412d'
            },
            {
                item: 'Spider Skibidi Toilet',
                itemType: 'skibidi',
                itemrarity: 'uncommon',
                probability: .25,
                imageLink: 'https://i.redd.it/how-many-camera-toilets-will-it-take-to-beat-spider-skibidi-v0-cjhz97encosb1.jpg?width=368&format=pjpg&auto=webp&s=0578962e493aa8dde4780879f948a7699dd704f5'
            },
            {
                item: 'Zombie Skibidi Toilet',
                itemType: 'skibidi',
                itemrarity: 'uncommon',
                probability: .25,
                imageLink: 'https://preview.redd.it/66utz4121mrc1.png?auto=webp&s=04665d43556f8a9fb73baceac095737b208cd683'
            },
            {
                item: 'Spider Speakerman',
                itemType: 'skibidi',
                itemrarity: 'uncommon',
                probability: .25,
                imageLink: 'https://preview.redd.it/favorite-speakerman-v0-z8ukbj467gjb1.png?width=2281&format=png&auto=webp&s=fed0a0c9f23cc62661e871741a4b307fd120b05e'
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
                imageLink: 'https://preview.redd.it/4phcpa4f336c1.png?auto=webp&s=e863e8b10e355b87ee3afe98c701f303e09ecf69'
            },
            {
                item: 'Opium Spider Cameraman',
                itemType: 'skibidi',
                itemrarity: 'uncommon',
                probability: .25,
                imageLink: 'https://ae01.alicdn.com/kf/Sb23e868de5d5458e853f1a915249287ba/Skibidi-Toilet-Cameraman-Battle-Pack-Monsters-Building-Blocks-220-Pieces-DIY-Movie-Role-Model-Toys-Set.jpg'
            },
            {
                item: 'Spy Cameraman Toilet',
                itemType: 'skibidi',
                itemrarity: 'uncommon',
                probability: .25,
                imageLink: 'https://preview.redd.it/give-me-fake-lore-for-these-camera-toilet-forms-best-one-in-v0-9ambbds4x2qb1.jpg?width=537&format=pjpg&auto=webp&s=e4e785c3da969785ad2a9593c39efcf778fe1fe2'
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
                imageLink: 'https://preview.redd.it/if-any-of-these-toilets-were-to-return-as-like-being-v0-vtt7df82uirb1.png?width=640&crop=smart&auto=webp&s=e0254450e3b7d5cef2251ff856ad6de23e0aae39'
            },
            {
                item: 'Hydra Skibidi Toilet',
                itemType: 'skibidi',
                itemrarity: 'rare',
                probability: .25,
                imageLink: 'https://preview.redd.it/wr59jjnxufib1.png?auto=webp&s=b5baae827cde48f5b0c78b2d02962c0c95539102'
            },
            {
                item: 'Mafia Skibidi Toilet',
                itemType: 'skibidi',
                itemrarity: 'rare',
                probability: .25,
                imageLink: 'https://i.redd.it/if-any-of-these-toilets-were-to-return-as-like-being-v0-yo532l13uirb1.png?width=1000&format=png&auto=webp&s=4090e457868472e819ff120793be29b80156bd95'
            },
            {
                item: 'Lightning Skibidi Toilet',
                itemType: 'skibidi',
                itemrarity: 'rare',
                probability: .25,
                imageLink: 'https://preview.redd.it/yall-think-trav-knows-about-skibidi-toilet-v0-3ktlq3eh843d1.jpeg?auto=webp&s=c54dc7ecaa0f2d5893fcc8ec1820a1e90c5153c9'
            },
            {
                item: 'Ninja Skibidi Toilet',
                itemType: 'skibidi',
                itemrarity: 'rare',
                probability: .25,
                imageLink: 'https://i.redd.it/yydh1kv1dlbb1.jpg'
            },
            {
                item: 'Giant Speakerman',
                itemType: 'skibidi',
                itemrarity: 'rare',
                probability: .25,
                imageLink: 'https://i.redd.it/qj7rj2fecxeb1.jpg'
            },
            {
                item: 'Giant Cameraman',
                itemType: 'skibidi',
                itemrarity: 'rare',
                probability: .25,
                imageLink: 'https://preview.redd.it/4phcpa4f336c1.png?auto=webp&s=e863e8b10e355b87ee3afe98c701f303e09ecf69'
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