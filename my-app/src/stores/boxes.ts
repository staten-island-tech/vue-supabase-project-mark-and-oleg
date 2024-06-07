import { defineStore } from 'pinia'
import { ref } from 'vue'

export const boxesList = ref([
    {
        item: 'Common Crate',
        rarity: 'common',
        value: 1,
        possibleLoot: [
            {
                item: 'Regular Skibidi Toilet',
                itemType: 'skibidi',
                itemrarity: 'Common',
                probability: .25,
                imageLink: 'https://i.redd.it/this-may-be-controversial-but-personally-i-really-dont-v0-37slovr1r08b1.jpg?width=1280&format=pjpg&auto=webp&s=87bfe4cdaa37c614a2a9dd2ad318bd3fcfc9aa0e'
            },
            {
                item: 'Regular Cameraman',
                itemType: 'skibidi',
                itemrarity: 'Common',
                probability: .25,
                imageLink: 'https://i.pinimg.com/474x/3f/0a/77/3f0a775205c9d1399a3c870f472463b5.jpg'
            },
            {
                item: 'Regular Big Skibidi Toilet',
                itemType: 'skibidi',
                itemrarity: 'Common',
                probability: .25,
                imageLink: 'https://m.media-amazon.com/images/M/MV5BMzUwZDdjN2UtZDk3NS00M2IwLTgwNDMtYzQzMmVhZjE3MjJlXkEyXkFqcGdeQXVyOTQ4MDEzMTg@._V1_QL75_UX500_CR0,116,500,281_.jpg'
            },
            {
                item: 'Regular Goon Toilet',
                itemType: 'skibidi',
                itemrarity: 'Common',
                probability: .25,
                imageLink: 'https://preview.redd.it/7mtf1q5uiwsc1.jpeg?width=640&crop=smart&auto=webp&s=175562ec85fbf97f10ada2ddbd3a6097eb73a19a'
            },
            {
                item: 'Regular Sawblade Skibidi Toilet',
                itemType: 'skibidi',
                itemrarity: 'Common',
                probability: .25,
                imageLink: 'https://preview.redd.it/skibidi-toilets-got-astro-technology-v0-pjz51cykgyuc1.jpeg?auto=webp&s=183bffed9c5c2f0b43111ebb663c7c3af7842a81'
            },
            {
                item: 'Regular Speakerman',
                itemType: 'skibidi',
                itemrarity: 'Common',
                probability: .25,
                imageLink: 'https://preview.redd.it/speakerman-theory-how-they-know-whats-there-v0-c464nodg2zqc1.png?width=205&format=png&auto=webp&s=4bce51bab65a35c645521c97fe4ca6824a2eaf3c'
            },
            {
                item: 'Regular TV Man',
                itemType: 'skibidi',
                itemrarity: 'Common',
                probability: .25,
                imageLink: 'https://ih1.redbubble.net/image.5221738827.4425/flat,750x,075,f-pad,750x1000,f8f8f8.jpg'
            },
        ],
        itemType: 'crate'
    },
    {
        item: 'Uncommon Crate',
        rarity: 'uncommon',
        value: 2,
        possibleLoot: [
            {
                item: 'Flying Skibidi Toilet',
                itemType: 'skibidi',
                itemrarity: 'Uncommon',
                probability: .25,
                imageLink: 'https://i.redd.it/who-you-all-betting-on-as-having-been-astro-toilets-v0-fw6kdn6fge1d1.png?width=250&format=png&auto=webp&s=41e5707cf2fb509c87ccb59c751dcf36ed37fa5a'
            },
            {
                item: 'Police Skibidi Toilet',
                itemType: 'skibidi',
                itemrarity: 'Uncommon',
                probability: .25,
                imageLink: 'https://preview.redd.it/kyoaubfzetsb1.png?auto=webp&s=f3bd214e8dbde931cadd91798875c258310a4fb6'
            },
            {
                item: 'Military Skibidi Toilet',
                itemType: 'skibidi',
                itemrarity: 'Uncommon',
                probability: .25,
                imageLink: 'https://preview.redd.it/who-would-win-v0-zlulxqygouwb1.jpg?width=380&format=pjpg&auto=webp&s=18f0698179210a1afbf9cf6d140fac359a8d412d'
            },
            {
                item: 'Spider Skibidi Toilet',
                itemType: 'skibidi',
                itemrarity: 'Uncommon',
                probability: .25,
                imageLink: 'https://i.redd.it/how-many-camera-toilets-will-it-take-to-beat-spider-skibidi-v0-cjhz97encosb1.jpg?width=368&format=pjpg&auto=webp&s=0578962e493aa8dde4780879f948a7699dd704f5'
            },
            {
                item: 'Zombie Skibidi Toilet',
                itemType: 'skibidi',
                itemrarity: 'Uncommon',
                probability: .25,
                imageLink: 'https://preview.redd.it/66utz4121mrc1.png?auto=webp&s=04665d43556f8a9fb73baceac095737b208cd683'
            },
            {
                item: 'Spider Speakerman',
                itemType: 'skibidi',
                itemrarity: 'Uncommon',
                probability: .25,
                imageLink: 'https://preview.redd.it/favorite-speakerman-v0-z8ukbj467gjb1.png?width=2281&format=png&auto=webp&s=fed0a0c9f23cc62661e871741a4b307fd120b05e'
            },
            {
                item: 'Recorder Cameraman',
                itemType: 'skibidi',
                itemrarity: 'Uncommon',
                probability: .25,
                imageLink: 'https://i.pinimg.com/originals/53/06/5e/53065e2e5240095da232cab91ddbb0ea.png'
            },
            {
                item: 'Giant Cameraman',
                itemType: 'skibidi',
                itemrarity: 'Uncommon',
                probability: .25,
                imageLink: 'https://preview.redd.it/4phcpa4f336c1.png?auto=webp&s=e863e8b10e355b87ee3afe98c701f303e09ecf69'
            },
            {
                item: 'Opium Spider Cameraman',
                itemType: 'skibidi',
                itemrarity: 'Uncommon',
                probability: .25,
                imageLink: 'https://ae01.alicdn.com/kf/Sb23e868de5d5458e853f1a915249287ba/Skibidi-Toilet-Cameraman-Battle-Pack-Monsters-Building-Blocks-220-Pieces-DIY-Movie-Role-Model-Toys-Set.jpg'
            },
            {
                item: 'Spy Cameraman Toilet',
                itemType: 'skibidi',
                itemrarity: 'Uncommon',
                probability: .25,
                imageLink: 'https://preview.redd.it/give-me-fake-lore-for-these-camera-toilet-forms-best-one-in-v0-9ambbds4x2qb1.jpg?width=537&format=pjpg&auto=webp&s=e4e785c3da969785ad2a9593c39efcf778fe1fe2'
            },
        ],
        itemType: 'crate'
    },
    {
        item: 'Rare Crate',
        rarity: 'rare',
        value: 3,
        possibleLoot: [
            {
                item: 'Holy Skibidi Toilet',
                itemType: 'skibidi',
                itemrarity: 'Rare',
                probability: .25,
                imageLink: 'https://preview.redd.it/if-any-of-these-toilets-were-to-return-as-like-being-v0-vtt7df82uirb1.png?width=640&crop=smart&auto=webp&s=e0254450e3b7d5cef2251ff856ad6de23e0aae39'
            },
            {
                item: 'Hydra Skibidi Toilet',
                itemType: 'skibidi',
                itemrarity: 'Rare',
                probability: .25,
                imageLink: 'https://preview.redd.it/wr59jjnxufib1.png?auto=webp&s=b5baae827cde48f5b0c78b2d02962c0c95539102'
            },
            {
                item: 'Mafia Skibidi Toilet',
                itemType: 'skibidi',
                itemrarity: 'Rare',
                probability: .25,
                imageLink: 'https://i.redd.it/if-any-of-these-toilets-were-to-return-as-like-being-v0-yo532l13uirb1.png?width=1000&format=png&auto=webp&s=4090e457868472e819ff120793be29b80156bd95'
            },
            {
                item: 'Lightning Skibidi Toilet',
                itemType: 'skibidi',
                itemrarity: 'Rare',
                probability: .25,
                imageLink: 'https://preview.redd.it/yall-think-trav-knows-about-skibidi-toilet-v0-3ktlq3eh843d1.jpeg?auto=webp&s=c54dc7ecaa0f2d5893fcc8ec1820a1e90c5153c9'
            },
            {
                item: 'Ninja Skibidi Toilet',
                itemType: 'skibidi',
                itemrarity: 'Rare',
                probability: .25,
                imageLink: 'https://i.redd.it/yydh1kv1dlbb1.jpg'
            },
            {
                item: 'Giant Speakerman',
                itemType: 'skibidi',
                itemrarity: 'Rare',
                probability: .25,
                imageLink: 'https://i.redd.it/qj7rj2fecxeb1.jpg'
            },
            {
                item: 'Giant Cameraman',
                itemType: 'skibidi',
                itemrarity: 'Rare',
                probability: .25,
                imageLink: 'https://preview.redd.it/4phcpa4f336c1.png?auto=webp&s=e863e8b10e355b87ee3afe98c701f303e09ecf69'
            },
        ],
        itemType: 'crate'
    },
    {
        item: 'Epic Crate',
        rarity: 'epic',
        value: 4,
        possibleLoot: [
            {
                item: 'DJ Skibidi',
                itemType: 'skibidi',
                itemrarity: 'Epic',
                probability: .25,
                imageLink: 'https://i.redd.it/i-feel-so-bad-for-skibidi-dj-v0-oy7cak810zcc1.jpg?width=2208&format=pjpg&auto=webp&s=3f375e3aa5e78f49661226ce89b2f3f5b4200f2c'
            },
            {
                item: 'Camoflauge Skibidi Toilet',
                itemType: 'skibidi',
                itemrarity: 'Epic',
                probability: .25,
                imageLink: 'https://preview.redd.it/pc91nmm1woqc1.png?width=640&crop=smart&auto=webp&s=72d3214f0d668d21837664c5eb151e185aecc037'
            },
            {
                item: 'Doctor Skibidi',
                itemType: 'skibidi',
                itemrarity: 'Epic',
                probability: .25,
                imageLink: 'https://preview.redd.it/if1y3pftoerb1.jpg?width=640&crop=smart&auto=webp&s=379e6479ac37647529b89686f4b1a7c55c6b9599'
            },
            {
                item: 'Big Laser Skibidi Toilet',
                itemType: 'skibidi',
                itemrarity: 'Epic',
                probability: .25,
                imageLink: 'https://preview.redd.it/ipkesl3rtyic1.png?auto=webp&s=40bcce5647bcbbbc6aba32e68771d63f8f91c77c'
            },
            {
                item: 'Quad Launcher Skibidi Toilet',
                itemType: 'skibidi',
                itemrarity: 'Epic',
                probability: .25,
                imageLink: 'https://preview.redd.it/1ee5khdewdec1.jpeg?auto=webp&s=9f862121a3d98aaf5ba53cfcdf415e6113a09a0b'
            },
            {
                item: 'Epic Beats Speakerwoman',
                itemType: 'skibidi',
                itemrarity: 'Epic',
                probability: .25,
                imageLink: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDaUJCiVBHe85nJksS9atf_AzXuVC8WhNZjg&s'
            },
            {
                item: 'Commander Cameraman',
                itemType: 'skibidi',
                itemrarity: 'Epic',
                probability: .25,
                imageLink: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/cbdf3bd2-1d81-4b16-91e4-8f006d27f783/dgjmvdh-ec942c32-9df3-4991-93e2-48bd163ad1d0.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2NiZGYzYmQyLTFkODEtNGIxNi05MWU0LThmMDA2ZDI3Zjc4M1wvZGdqbXZkaC1lYzk0MmMzMi05ZGYzLTQ5OTEtOTNlMi00OGJkMTYzYWQxZDAuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.-2wplvCn0PJYsWzfTBTPDXqryOKpgsXe0nCmvJw-SQA'
            },
        ],
        itemType: 'crate'
    },
    {
        item: 'Legendary Crate',
        rarity: 'legendary',
        value: 5,
        possibleLoot: [
            {
                item: 'The Scientist',
                itemType: 'skibidi',
                itemrarity: 'Legendary',
                probability: .25,
                imageLink: 'https://preview.redd.it/because-the-scientist-skibidi-toilet-will-be-out-there-on-v0-vqyeyhzn1hvb1.png?width=2628&format=png&auto=webp&s=82b08024281b53d2d8798ffb6385164126018e97'
            },
            {
                item: 'Detainer Astro Toilet',
                itemType: 'skibidi',
                itemrarity: 'Legendary',
                probability: .25,
                imageLink: 'https://preview.redd.it/i-have-been-seeing-a-lot-of-comments-saying-that-the-v0-7akw6yq1vppc1.jpg?width=640&crop=smart&auto=webp&s=3f4783e8c3543864684bbfd2029bb42df96e5fa7'
            },
            {
                item: 'Juggernaut Astro Toilet',
                itemType: 'skibidi',
                itemrarity: 'Legendary',
                probability: .25,
                imageLink: 'https://i.redd.it/astro-toilet-in-episode-51-is-the-astro-juggernaut-v0-2mganxp58w1d1.png?width=667&format=png&auto=webp&s=b6601cb0170b7125666d611cc4f7222a7ccfeb71'
            },
            {
                item: 'Advisor Astro Toilet',
                itemType: 'skibidi',
                itemrarity: 'Legendary',
                probability: .25,
                imageLink: 'https://i.redd.it/new-astro-toilets-and-refined-titan-astro-toilet-v0-ct77kaf1bpic1.png?width=1280&format=png&auto=webp&s=39e5238f3b8298ab65e3bc7596b540456cab5037'
            },
            {
                item: 'Cinemaman',
                itemType: 'skibidi',
                itemrarity: 'Legendary',
                probability: .25,
                imageLink: 'https://i.redd.it/11w5sdcgn0kb1.jpg'
            },
            {
                item: 'TV Woman',
                itemType: 'skibidi',
                itemrarity: 'Legendary',
                probability: .25,
                imageLink: 'https://preview.redd.it/3zyg9craj2cb1.jpg?auto=webp&s=d1ace587668366ffa42631b787e571a3d92ef136'
            },
        ],
        itemType: 'crate'
    },
    {
        item: 'Exotic Crate',
        rarity: 'exotic',
        value: 6,
        possibleLoot: [
            {
                item: 'Final Boss Skibidi Toilet',
                itemType: 'skibidi',
                itemrarity: 'exotic',
                probability: .25,
                imageLink: 'https://preview.redd.it/so-why-decoy-gman-toilet-is-fearless-also-why-upgraded-gman-v0-7q9psu4d4nac1.png?width=438&format=png&auto=webp&s=beb166961b5dc76a5b33fcb5f649e4746cc8aee8'
            },
            {
                item: 'Titan Speakerman',
                itemType: 'skibidi',
                itemrarity: 'exotic',
                probability: .25,
                imageLink: 'https://preview.redd.it/f8uz3l1v2qfb1.png?auto=webp&s=eace9650d96caa16676999dc8888f431549256b0'
            },
            {
                item: 'Titan Cameraman',
                itemType: 'skibidi',
                itemrarity: 'exotic',
                probability: .25,
                imageLink: 'https://preview.redd.it/my-concept-for-titan-cameraman-3-0-v0-nn5y34vg1duc1.png?width=2011&format=png&auto=webp&s=0a297983c2817a0607c2f1ea2408b75f2158602a'
            },
            {
                item: 'Titan TV Man',
                itemType: 'skibidi',
                itemrarity: 'exotic',
                probability: .25,
                imageLink: 'https://preview.redd.it/ilnnk6efq1lb1.png?auto=webp&s=37b4d27ac99fa3d53b479bd99e686d6f0454c1d3'
            },
        ],
        itemType: 'crate'
    }
])