// ---------------------------------------------------------------------------
// Content layer. The reference site renders this from a CMS; here it is a
// typed, local data module so pages can stay server-rendered and static.
// ---------------------------------------------------------------------------

export type Puppy = {
  slug: string;
  name: string;
  breed: string;
  gender: string;
  age: string;
  origin: "imported" | "local";
  korean: boolean;
  hasVideo: boolean;
  video: string | null;
  cover: string;
  gallery: string[];
};

export type GonePuppy = { name: string; meta: string; from: string; photo: string };

export type Photo = { src: string; caption: string; tilt: number; tape: string };

export const puppies: Puppy[] = [
  {
    "slug": "maltipoo-max-male",
    "name": "Max",
    "breed": "Maltipoo",
    "gender": "Boy",
    "age": "3 months",
    "origin": "imported",
    "korean": false,
    "hasVideo": true,
    "video": "/media/jNYYlZcF2IuE/61af7a5e09/b942a5_a1fa75c7bf2f4d688ec0ce0344baef67.mp4",
    "cover": "/media/Z0ToauDx7Eve/5fffe4d022/b942a5_4b8cfb8204d24eadaf524332aba1dc15-mv2.webp",
    "gallery": [
      "/media/Z0ToauDx7Eve/5fffe4d022/b942a5_4b8cfb8204d24eadaf524332aba1dc15-mv2.webp",
      "/media/RH7J577OfQ7f/e776d07dbd/b942a5_a1fa75c7bf2f4d688ec0ce0344baef67f000.jpg",
      "/media/nZTGFv46hrZI/fb9eeefc9c/b942a5_dcb8eb174915463ea0c40c58b7b0e406-mv2.jpg",
      "/media/gAaGwoGej2g6/5523e884dd/b942a5_50f0ae67c9ff437d911597d52a9e63b3-mv2.jpg"
    ]
  },
  {
    "slug": "korean-teacup-maltipoo-female",
    "name": "Korean Teacup Maltipoo",
    "breed": "Korean Teacup Maltipoo",
    "gender": "Girl",
    "age": "2 months",
    "origin": "imported",
    "korean": true,
    "hasVideo": true,
    "video": "/media/sfXWPM3b8qVt/5b2a08dab3/b942a5_fc2a6555d51b4e65b8ad229592c3755b.mp4",
    "cover": "/media/gAaGwoGej2g6/5523e884dd/b942a5_50f0ae67c9ff437d911597d52a9e63b3-mv2.jpg",
    "gallery": [
      "/media/gAaGwoGej2g6/5523e884dd/b942a5_50f0ae67c9ff437d911597d52a9e63b3-mv2.jpg",
      "/media/lrYgKCzauGW9/862b350f1f/b942a5_dd7daf7c699444a8bfea0bb4dcf963a1-mv2.jpg",
      "/media/2HME5hUXxDGx/c14e39aab8/b942a5_bab687bfd14446ed854f19e1550eb266-mv2.jpg",
      "/media/_I7jTQ-C-Dh5/b09aa1a0f5/b942a5_830ab138aef84b82b3db7b48185ee50c-mv2.jpg",
      "/media/kutyfJpoJ-DA/ca1aa390f9/b942a5_71048e5af78a49e4b6e412bee89631e2-mv2.jpg",
      "/media/NCtufeu82GJy/0cb53c797a/b942a5_ebec2dc631bf4872aeb94a01c0f12dd7-mv2.jpg"
    ]
  },
  {
    "slug": "korean-teacup-poodle-female",
    "name": "Korean Teacup Poodle",
    "breed": "Korean Teacup Poodle",
    "gender": "Girl",
    "age": "2 months",
    "origin": "imported",
    "korean": true,
    "hasVideo": false,
    "video": null,
    "cover": "/media/xeMJCapr5vcU/e618c653b2/b942a5_14376a216177484dbbb27995d0f6aeb7-mv2.jpg",
    "gallery": [
      "/media/xeMJCapr5vcU/e618c653b2/b942a5_14376a216177484dbbb27995d0f6aeb7-mv2.jpg",
      "/media/GcThnLZ1o_XO/f28ac11602/b942a5_e172674fef9e426eaff0e73a7e4eba77-mv2.jpg",
      "/media/-GPU8k3WeJq7/59ae864abe/b942a5_677a4998fefe4388b8c5f79d74129b88-mv2.jpg",
      "/media/9v0TRGsxL1vp/43b2f58f58/b942a5_e17e745414544ea1b578880ea1bf535b-mv2.jpg",
      "/media/gAaGwoGej2g6/5523e884dd/b942a5_50f0ae67c9ff437d911597d52a9e63b3-mv2.jpg",
      "/media/YQhey4j7uWvZ/3ea10db6c1/b942a5_7ce7e7bd18424b6c8fb16dd30113ade2-mv2.jpg"
    ]
  },
  {
    "slug": "maltipoo-cavapoo-male",
    "name": "Maltipoo & Cavapoo",
    "breed": "Maltipoo & Cavapoo",
    "gender": "Boy",
    "age": "3 months Maltipoo & 2 months Cavapoo",
    "origin": "imported",
    "korean": false,
    "hasVideo": true,
    "video": "/media/_cJaO-ryO6ev/af9e004679/b942a5_93358f1b7c434434b226b19e9ee0705b.mp4",
    "cover": "/media/YQhey4j7uWvZ/3ea10db6c1/b942a5_7ce7e7bd18424b6c8fb16dd30113ade2-mv2.jpg",
    "gallery": [
      "/media/YQhey4j7uWvZ/3ea10db6c1/b942a5_7ce7e7bd18424b6c8fb16dd30113ade2-mv2.jpg",
      "/media/jeaf0UcmFDSq/17b98c71ac/b942a5_244840afa15e4b008149736d5b894256-mv2.jpg",
      "/media/czRyKKk8Lm5N/6356959786/b942a5_93358f1b7c434434b226b19e9ee0705bf002.jpg",
      "/media/xeMJCapr5vcU/e618c653b2/b942a5_14376a216177484dbbb27995d0f6aeb7-mv2.jpg",
      "/media/vMu0BPvkAZ-j/c65e53967d/b942a5_0b2c0c0d178c4005acbe28725a5ea573-mv2.jpg"
    ]
  },
  {
    "slug": "toy-poodle-male-female",
    "name": "Toy Poodle",
    "breed": "Toy Poodle",
    "gender": "Boy & girl",
    "age": "2 months",
    "origin": "imported",
    "korean": false,
    "hasVideo": false,
    "video": null,
    "cover": "/media/vMu0BPvkAZ-j/c65e53967d/b942a5_0b2c0c0d178c4005acbe28725a5ea573-mv2.jpg",
    "gallery": [
      "/media/vMu0BPvkAZ-j/c65e53967d/b942a5_0b2c0c0d178c4005acbe28725a5ea573-mv2.jpg",
      "/media/wi6_RA1P4tyP/770eee919a/b942a5_2a0eeb7824e648a7812a4ba0ab504986-mv2.jpg",
      "/media/Yip9Os6wu5UL/9031f811cb/b942a5_ae972de107eb4d9d9cfa33cb26845beb-mv2.jpg",
      "/media/YQhey4j7uWvZ/3ea10db6c1/b942a5_7ce7e7bd18424b6c8fb16dd30113ade2-mv2.jpg",
      "/media/3WJNmn6VVgVu/732f779474/b942a5_2b5dcece361b4589890ae920c66a1b70-mv2.jpg"
    ]
  },
  {
    "slug": "maltipoo-female-2",
    "name": "Maltipoo",
    "breed": "Maltipoo",
    "gender": "Girl",
    "age": "3 months",
    "origin": "imported",
    "korean": false,
    "hasVideo": true,
    "video": "/media/Q6DRbgSnEgtV/f069a77a72/b942a5_867cc819aad8444bbdc7ef58bccc22e3.mp4",
    "cover": "/media/3WJNmn6VVgVu/732f779474/b942a5_2b5dcece361b4589890ae920c66a1b70-mv2.jpg",
    "gallery": [
      "/media/3WJNmn6VVgVu/732f779474/b942a5_2b5dcece361b4589890ae920c66a1b70-mv2.jpg",
      "/media/s4vjs4fDhIH5/13bc63e2d9/b942a5_814fc9ca21e943149ca1b73af08c0d50-mv2.jpg",
      "/media/P339nL9SBx1E/68f8b9aa08/b942a5_f4f6b9eaf3fa434d84e9011b104a2f2e-mv2.jpg",
      "/media/Bba5vIUEEoRl/b9cb795228/b942a5_2cea5a50b30b4e6d81ef2b71a4455d04-mv2.jpg",
      "/media/e9Tc1KFwflMo/bf15ff5eaf/b942a5_867cc819aad8444bbdc7ef58bccc22e3f000.jpg",
      "/media/sE8ic09hv3OL/df0013d33c/b942a5_409c00762732451a9c914fd605f6427bf000.jpg"
    ]
  },
  {
    "slug": "pomeranian-female",
    "name": "Pomeranian",
    "breed": "Pomeranian",
    "gender": "Girl",
    "age": "3 months",
    "origin": "imported",
    "korean": false,
    "hasVideo": false,
    "video": null,
    "cover": "/media/3yOfnmoyPooH/81e0c7e00c/b942a5_556841b9a73942e5a9d782a683f3bc68-mv2.jpg",
    "gallery": [
      "/media/3yOfnmoyPooH/81e0c7e00c/b942a5_556841b9a73942e5a9d782a683f3bc68-mv2.jpg",
      "/media/-kKg81ORXQbR/2df3e9d7fe/b942a5_04ffe4a8ebf2404fad62b654f5ffdf44-mv2.jpg",
      "/media/tWfepr0dPXso/6b8445f11e/b942a5_87c1bf878b9642b0abde73d40a4a672d-mv2.jpg",
      "/media/3WJNmn6VVgVu/732f779474/b942a5_2b5dcece361b4589890ae920c66a1b70-mv2.jpg",
      "/media/O-6w4FYqE10j/be76f399cc/b942a5_bb73ebbb952047988f944f3a8e3052bd-mv2.jpg"
    ]
  },
  {
    "slug": "copper-male",
    "name": "Copper",
    "breed": "Cavapoo",
    "gender": "Boy",
    "age": "2 months",
    "origin": "imported",
    "korean": false,
    "hasVideo": false,
    "video": null,
    "cover": "/media/O-6w4FYqE10j/be76f399cc/b942a5_bb73ebbb952047988f944f3a8e3052bd-mv2.jpg",
    "gallery": [
      "/media/O-6w4FYqE10j/be76f399cc/b942a5_bb73ebbb952047988f944f3a8e3052bd-mv2.jpg",
      "/media/57IVFGZFRSJ1/70ec15d562/b942a5_2c13cdda0a174e33b22cf65063e1aa7f-mv2.jpg",
      "/media/2stMgxztsgXb/8b643b4842/b942a5_ce135cde6ebe45abb75435a7ce7d6910-mv2.jpg",
      "/media/objS5G36nXH0/4d398662f6/b942a5_f29547489be747e597ed20c191e1f24c-mv2.jpg",
      "/media/3yOfnmoyPooH/81e0c7e00c/b942a5_556841b9a73942e5a9d782a683f3bc68-mv2.jpg",
      "/media/qNrTCSrsYyzY/168fa8c4ff/b942a5_eb14616c76c24da89afe7fa3b7d7ae6a-mv2.jpeg"
    ]
  },
  {
    "slug": "shitzu-female",
    "name": "Shih Tzu",
    "breed": "Shih Tzu",
    "gender": "Girl",
    "age": "2 months",
    "origin": "imported",
    "korean": false,
    "hasVideo": false,
    "video": null,
    "cover": "/media/qNrTCSrsYyzY/168fa8c4ff/b942a5_eb14616c76c24da89afe7fa3b7d7ae6a-mv2.jpeg",
    "gallery": [
      "/media/qNrTCSrsYyzY/168fa8c4ff/b942a5_eb14616c76c24da89afe7fa3b7d7ae6a-mv2.jpeg",
      "/media/IiEprGOhv7PA/bc83339b6d/b942a5_c5497befad4d4a70937e669e6c67bbb2-mv2.jpeg",
      "/media/O-6w4FYqE10j/be76f399cc/b942a5_bb73ebbb952047988f944f3a8e3052bd-mv2.jpg",
      "/media/crgs9ih6as_M/e37bafb1bf/b942a5_344e49c6c34940d2b09a3ddd5c2e3234-mv2.jpg"
    ]
  },
  {
    "slug": "shitzu-male",
    "name": "Shih Tzu",
    "breed": "Shih Tzu",
    "gender": "Boy",
    "age": "2 months",
    "origin": "imported",
    "korean": false,
    "hasVideo": false,
    "video": null,
    "cover": "/media/crgs9ih6as_M/e37bafb1bf/b942a5_344e49c6c34940d2b09a3ddd5c2e3234-mv2.jpg",
    "gallery": [
      "/media/crgs9ih6as_M/e37bafb1bf/b942a5_344e49c6c34940d2b09a3ddd5c2e3234-mv2.jpg",
      "/media/nGRgg9NQ0H_U/cb555fde1b/b942a5_38d832caea1148af824ab378c45ea865-mv2.jpg",
      "/media/qNrTCSrsYyzY/168fa8c4ff/b942a5_eb14616c76c24da89afe7fa3b7d7ae6a-mv2.jpeg",
      "/media/wNm2_VIBEQvK/4b68f59e75/b942a5_7dd33c9b78c04f78a6a1c7386fb55620-mv2.jpg"
    ]
  },
  {
    "slug": "maltipoo-female-1",
    "name": "Maltipoo",
    "breed": "Maltipoo",
    "gender": "Girl",
    "age": "2.5 months",
    "origin": "imported",
    "korean": false,
    "hasVideo": false,
    "video": null,
    "cover": "/media/wNm2_VIBEQvK/4b68f59e75/b942a5_7dd33c9b78c04f78a6a1c7386fb55620-mv2.jpg",
    "gallery": [
      "/media/wNm2_VIBEQvK/4b68f59e75/b942a5_7dd33c9b78c04f78a6a1c7386fb55620-mv2.jpg",
      "/media/Zsg0P8hWNXeY/888a9659ac/b942a5_1e2a534b212641c183efa8df90969da0-mv2.jpg",
      "/media/hvIVlpipXnjZ/7c954810e6/b942a5_9537342069974565827ab8ade1a52636-mv2.jpg",
      "/media/YhnrBy6ZwWks/1d241d42bc/b942a5_36c70cdc162d4d308ce2293077961c07-mv2.jpg",
      "/media/crgs9ih6as_M/e37bafb1bf/b942a5_344e49c6c34940d2b09a3ddd5c2e3234-mv2.jpg",
      "/media/lMhASnmIIVQ4/ad2353ad31/b942a5_6a5617708d75408b8f73725080ed0149-mv2.jpg"
    ]
  },
  {
    "slug": "maltipoo-female",
    "name": "Maltipoo",
    "breed": "Maltipoo",
    "gender": "Girl",
    "age": "2 months",
    "origin": "imported",
    "korean": false,
    "hasVideo": false,
    "video": null,
    "cover": "/media/lMhASnmIIVQ4/ad2353ad31/b942a5_6a5617708d75408b8f73725080ed0149-mv2.jpg",
    "gallery": [
      "/media/lMhASnmIIVQ4/ad2353ad31/b942a5_6a5617708d75408b8f73725080ed0149-mv2.jpg",
      "/media/_NpYIcbNGQC0/0dfcc90259/b942a5_34efe8b4c5c244fca7bb059e5b08891e-mv2.jpg",
      "/media/l--XKCkJac6g/9e60957bb7/b942a5_6b2183f855cc4881933923f255131b51-mv2.jpg",
      "/media/N1XdMhMnfw-A/6ba6cbb4d2/b942a5_d7eb4c4b58174a26976134a7db05da78-mv2.jpg",
      "/media/wNm2_VIBEQvK/4b68f59e75/b942a5_7dd33c9b78c04f78a6a1c7386fb55620-mv2.jpg",
      "/media/EsAq2LSRvVCJ/4d553ed044/b942a5_a8d264c1aa754d80bc7c98917dfd1fda-mv2.jpg"
    ]
  },
  {
    "slug": "korean-teacup-pomeranian",
    "name": "Korean Teacup Pomeranian",
    "breed": "Korean Teacup Pomeranian",
    "gender": "Girl",
    "age": "2 months",
    "origin": "imported",
    "korean": true,
    "hasVideo": false,
    "video": null,
    "cover": "/media/vzf7P8SPCZ-Q/a8db4ee114/b942a5_967bb346583b4146acb56607f5da5f21-mv2.jpg",
    "gallery": [
      "/media/vzf7P8SPCZ-Q/a8db4ee114/b942a5_967bb346583b4146acb56607f5da5f21-mv2.jpg",
      "/media/us2RC0-t56MV/755ebb01c3/b942a5_ea69dc41b8bc4f46b52ce710bdbfd947-mv2.jpg",
      "/media/EsAq2LSRvVCJ/4d553ed044/b942a5_a8d264c1aa754d80bc7c98917dfd1fda-mv2.jpg",
      "/media/nZTGFv46hrZI/fb9eeefc9c/b942a5_dcb8eb174915463ea0c40c58b7b0e406-mv2.jpg"
    ]
  },
  {
    "slug": "korean-teacup-pomeranian-1",
    "name": "Korean Teacup Pomeranian",
    "breed": "Korean Teacup Pomeranian",
    "gender": "Girl",
    "age": "2 months",
    "origin": "imported",
    "korean": true,
    "hasVideo": false,
    "video": null,
    "cover": "/media/EsAq2LSRvVCJ/4d553ed044/b942a5_a8d264c1aa754d80bc7c98917dfd1fda-mv2.jpg",
    "gallery": [
      "/media/EsAq2LSRvVCJ/4d553ed044/b942a5_a8d264c1aa754d80bc7c98917dfd1fda-mv2.jpg",
      "/media/NCYZMBazXOyI/a67f6a1316/b942a5_4439600d2b084918be65f14abbd5a67b-mv2.jpg",
      "/media/lMhASnmIIVQ4/ad2353ad31/b942a5_6a5617708d75408b8f73725080ed0149-mv2.jpg",
      "/media/vzf7P8SPCZ-Q/a8db4ee114/b942a5_967bb346583b4146acb56607f5da5f21-mv2.jpg"
    ]
  },
  {
    "slug": "korean-teacup-pomeranian-male",
    "name": "Korean Teacup Pomeranian",
    "breed": "Korean Teacup Pomeranian",
    "gender": "Boy",
    "age": "2 months",
    "origin": "imported",
    "korean": true,
    "hasVideo": false,
    "video": null,
    "cover": "/media/nZTGFv46hrZI/fb9eeefc9c/b942a5_dcb8eb174915463ea0c40c58b7b0e406-mv2.jpg",
    "gallery": [
      "/media/nZTGFv46hrZI/fb9eeefc9c/b942a5_dcb8eb174915463ea0c40c58b7b0e406-mv2.jpg",
      "/media/vxOcjPUQjM2M/768e4b20eb/b942a5_86735dc871b942c8b823521cf5fcf31e-mv2.jpg",
      "/media/U_Qh2K9avqUE/3e9d7625dc/b942a5_f47099133ac14a69b1b1151c8f977a9a-mv2.jpg",
      "/media/b29CnSlKSaNP/f3fd8ae60a/b942a5_287558eefc7e4386ad0c30344e6c4c62-mv2.jpg",
      "/media/vzf7P8SPCZ-Q/a8db4ee114/b942a5_967bb346583b4146acb56607f5da5f21-mv2.jpg",
      "/media/Z0ToauDx7Eve/5fffe4d022/b942a5_4b8cfb8204d24eadaf524332aba1dc15-mv2.webp"
    ]
  }
];

export const goneHome: GonePuppy[] = [
  {
    "name": "Ace",
    "meta": "Pomeranian, boy",
    "from": "TeddyPups",
    "photo": "/media/mihUKGFCatU3/0461cca56e/27b888_bac41adfadc44dce846a1c3fd0cdb0de-mv2.avif"
  },
  {
    "name": "Leo",
    "meta": "Poodle, boy",
    "from": "TeddyPups",
    "photo": "/media/QgFG5s09n-ss/81af626d2d/27b888_5f9a7189bb21477d832047aae2040921-mv2.avif"
  },
  {
    "name": "Mia",
    "meta": "Maltipoo, girl",
    "from": "Dubai showroom",
    "photo": "/media/4vu6_PGfL64H/537c367d85/27b888_747a4667fec640c69aad9bc045d61ac6-mv2.avif"
  },
  {
    "name": "Sadie",
    "meta": "Maltipoo, girl",
    "from": "TeddyPups",
    "photo": "/media/159oT4F46uhk/b66c2be87f/27b888_ea6e7e0fcd43447d854657b6de98d4cb-mv2.avif"
  },
  {
    "name": "Pomeranian",
    "meta": "Boy",
    "from": "TeddyPups",
    "photo": "/media/bMSEHnYcBTFF/970fdc1ee6/27b888_5e612a215bf343328c08d99e0e9c5a37-mv2.avif"
  },
  {
    "name": "Ollie",
    "meta": "Pomsky, boy",
    "from": "TeddyPups",
    "photo": "/media/Qs2IHRk7OQIm/c16bea255c/27b888_ef3324a358d64858b4873a146574c3b9-mv2.avif"
  },
  {
    "name": "Bruno",
    "meta": "Maltipoo, boy",
    "from": "Dubai showroom",
    "photo": "/media/w-F8mJLs2gtj/f06147a6d3/27b888_301f58cbae624a1da36a79d46571043a-mv2.avif"
  },
  {
    "name": "Buddy",
    "meta": "Maltese, boy",
    "from": "Dubai showroom",
    "photo": "/media/5ygCaO2TQb3v/f23ade89fa/27b888_6053b478acb641d1865de22aef938977-mv2.avif"
  },
  {
    "name": "Charlie",
    "meta": "Maltese, boy",
    "from": "TeddyPups",
    "photo": "/media/0c1rFiKXQLLk/75c6a20e15/27b888_b22287e7c1594de7ab2fba46eabea376-mv2.avif"
  },
  {
    "name": "Daisy",
    "meta": "Pomeranian, girl",
    "from": "Dubai showroom",
    "photo": "/media/d_ji2d9LVy0R/b19b4cf1c2/27b888_c6cbb607448f469a96d73f3bc42a992d-mv2.avif"
  },
  {
    "name": "Bella",
    "meta": "Pomeranian, girl",
    "from": "TeddyPups",
    "photo": "/media/9jwfs8kSZW7K/9b8ae31d11/27b888_ab014eabe44c4f6ebaacb9ef1869823f-mv2.avif"
  },
  {
    "name": "Teddy",
    "meta": "Poodle, boy",
    "from": "TeddyPups",
    "photo": "/media/9XFYXsuvjIcz/8d1efc8baa/27b888_430ebbf87dc84b93bcd0b61709a2eaa7-mv2.avif"
  },
  {
    "name": "Molly",
    "meta": "Poodle, girl",
    "from": "Dubai showroom",
    "photo": "/media/WZKcpiogRBW7/9ebcb8d165/27b888_2b9e32b056624a45b62f7d7b4ec7d105-mv2.avif"
  },
  {
    "name": "Coco",
    "meta": "Pomsky, girl",
    "from": "TeddyPups",
    "photo": "/media/CXIzj6hYrmuI/eff60812df/27b888_ce94335cf4714a99a78c799f666f9323-mv2.avif"
  },
  {
    "name": "Rosie",
    "meta": "Pomsky, girl",
    "from": "Dubai showroom",
    "photo": "/media/FhrW7pE84bji/f7c57baf49/27b888_08271c7de284451fb9c848757f4838fb-mv2.avif"
  },
  {
    "name": "Leo",
    "meta": "Pomeranian, boy",
    "from": "Dubai showroom",
    "photo": "/media/5iCniMJshKud/8bfe42003c/27b888_84815fae2bd34283a7c79985cfc8b568-mv2.avif"
  },
  {
    "name": "Molly",
    "meta": "Poodle, girl",
    "from": "TeddyPups",
    "photo": "/media/lsaKvJhLwHB4/4cf2a02ed1/27b888_5aa959cec570411a8bb9372abe23f5e9-mv2.avif"
  },
  {
    "name": "Rocky",
    "meta": "Poodle, boy",
    "from": "TeddyPups",
    "photo": "/media/51aMfxO7oeVe/6b70c96b1e/27b888_77a51d530b694ba58bc207f2a23e8620-mv2.avif"
  },
  {
    "name": "Sophie",
    "meta": "Maltipoo, girl",
    "from": "Dubai showroom",
    "photo": "/media/PYYTxpqgo76_/ae53ae6d3c/27b888_0d89c05fa55c43d4b6d55d573be83e73-mv2.avif"
  },
  {
    "name": "Lola",
    "meta": "Maltipoo, girl",
    "from": "Dubai showroom",
    "photo": "/media/HPs4cYizPzy9/22b104e2c5/27b888_f24865b2456b46feb6ea6694fe90660f-mv2.avif"
  },
  {
    "name": "Rex",
    "meta": "Pomeranian, boy",
    "from": "TeddyPups",
    "photo": "/media/QIIvMqQTe9jr/d997ae172e/27b888_14fd6ec24bd94522bd54a5ae345240b8-mv2.avif"
  },
  {
    "name": "Finn",
    "meta": "Pomsky, boy",
    "from": "TeddyPups",
    "photo": "/media/tEAwWspMD8iG/1f55440daf/27b888_c68794a6e9ee442abb522a1d88a1e8cd-mv2.avif"
  },
  {
    "name": "Zoe",
    "meta": "Maltipoo, girl",
    "from": "TeddyPups",
    "photo": "/media/fxj_9aZOSxQM/90c10b9c91/27b888_89e442e0035442308fc87fe3d2837f1d-mv2.avif"
  },
  {
    "name": "Mimi",
    "meta": "Pomeranian, girl",
    "from": "Dubai showroom",
    "photo": "/media/BLOZLPixUcjE/ea8ee97fd9/27b888_870c748ca6ee45cf8e0a311232dfe289-mv2.avif"
  },
  {
    "name": "Bailey",
    "meta": "Bichon, boy",
    "from": "Dubai showroom",
    "photo": "/media/fI-hlHuSwrRw/e5ae9b6384/27b888_8d87239e23854214a8718ef8f02c2d50-mv2.avif"
  },
  {
    "name": "Maltipoo",
    "meta": "Girl",
    "from": "TeddyPups",
    "photo": "/media/Cl0B4v8U3Y-d/3dea5a9fec/27b888_1ae70e063fd7451a87d4dfe79794d58f-mv2.avif"
  },
  {
    "name": "Poodle",
    "meta": "Girl",
    "from": "Dubai showroom",
    "photo": "/media/sFgPBojUhFBo/5ac1429cf4/27b888_aa0ce426ca3848abbc7d695f8c818568-mv2.avif"
  }
];

export const happyFamilyPhotos: Photo[] = [
  {
    "src": "/media/TUslu26Ueaq-/9c3516c040/edb2f5_6627857aca7e495ea37d9f62d814d323-mv2.jpeg",
    "caption": "Lulu, with her new mummy 🐾",
    "tilt": -2.5,
    "tape": "#f6d79a"
  },
  {
    "src": "/media/OcgEePeBmGuu/41fb22320b/edb2f5_adf88f7400c848249d60698fca0336e9-mv2.jpeg",
    "caption": "Adorable Maltipoo baby 🤍",
    "tilt": -0.5,
    "tape": "#fbe3b4"
  },
  {
    "src": "/media/RYkyuv4DBCTC/d9e02a0dc8/edb2f5_7ed2ee1ba89b4230b52f5e3981b1b198-mv2.jpeg",
    "caption": "My new teddy puppy 🧸",
    "tilt": 1.5,
    "tape": "#e9d7bd"
  },
  {
    "src": "/media/d267R4d3lMSv/96d8604ca3/edb2f5_02b95a69a2c24c7e81b60e6d8c01baf7-mv2.jpeg",
    "caption": "Our new puppies 🐶",
    "tilt": -2,
    "tape": "#f4cf9b"
  },
  {
    "src": "/media/XqxhmNftVKic/5adf2f28fe/edb2f5_37f5218f73e842b88ee3ae0c911bcafa-mv2.jpeg",
    "caption": "New puppy 💛",
    "tilt": 0,
    "tape": "#f6d79a"
  },
  {
    "src": "/media/1II_yVrwWdOG/c07a8ef9f1/edb2f5_258010c661f64f3b8b952c5a2f7677de-mv2.jpeg",
    "caption": "Gang of 3 ☀️",
    "tilt": 2,
    "tape": "#fbe3b4"
  },
  {
    "src": "/media/bKP7vwN0R2OU/1aa47534b5/edb2f5_b8d76dffb97f46b5a9f2aaf9c1067b4b-mv2.jpeg",
    "caption": "So happy 🦴",
    "tilt": -1.5,
    "tape": "#e9d7bd"
  },
  {
    "src": "/media/ToVkYw_K3UrY/81a2bd9ac1/edb2f5_582a3767e5eb408f9684a7e623229dc4-mv2.jpeg",
    "caption": "New pup 💫",
    "tilt": 0.5,
    "tape": "#f4cf9b"
  },
  {
    "src": "/media/stDfO2jMfvb_/6228a11db2/edb2f5_4b08003ef57c4663b55c9ac0c4147c36-mv2.jpeg",
    "caption": "Home at last 🐾",
    "tilt": 2.5,
    "tape": "#f6d79a"
  },
  {
    "src": "/media/K-U7RwW9j2A9/09d7edc058/edb2f5_22d3cc4ae0e14216a0d3a1ec9796649f-mv2.jpeg",
    "caption": "Best decision ever 🤍",
    "tilt": -1,
    "tape": "#fbe3b4"
  },
  {
    "src": "/media/s23WYu0qJQ_h/d0ad444e50/27b888_a887dbff51fb420d95774cce6a8d54fb-mv2.jpg",
    "caption": "Our little family 🧸",
    "tilt": 1,
    "tape": "#e9d7bd"
  },
  {
    "src": "/media/ab5hEGUKO4aY/de923fd8eb/edb2f5_d5177ed7ae1344d7acc11e9770df7b74-mv2.jpeg",
    "caption": "Tiny but mighty 🐶",
    "tilt": -2.5,
    "tape": "#f4cf9b"
  },
  {
    "src": "/media/yEfM9sdMluCX/46ecd570ef/edb2f5_099acc542ba14359aa8c0f933cb4ef2c-mv2.jpeg",
    "caption": "Teddy bear baby 💛",
    "tilt": -0.5,
    "tape": "#f6d79a"
  },
  {
    "src": "/media/_41LE-nBf847/2ea8e152eb/27b888_76aa3ad05faf40bd8eb2a6d826737525-mv2.jpg",
    "caption": "Someone loves the sofa ☀️",
    "tilt": 1.5,
    "tape": "#fbe3b4"
  },
  {
    "src": "/media/tuarxe-C9j5H/913026dd39/27b888_b22e1ced7da74ea7a14a68474d8c2dc0-mv2.jpg",
    "caption": "Puppy cuddles 🦴",
    "tilt": -2,
    "tape": "#e9d7bd"
  },
  {
    "src": "/media/UuJqjsRN-wKL/047b245604/b942a5_a1ead54bc6934e5ab953e98d4aa0312d-mv2.jpg",
    "caption": "Look at that face 💫",
    "tilt": 0,
    "tape": "#f4cf9b"
  },
  {
    "src": "/media/qZ5mPGpLO-G9/1d4c092a1e/27b888_4af83a5cffb44045bcab615b0cbc237c-mv2.jpg",
    "caption": "Sunshine and puppies 🐾",
    "tilt": 2,
    "tape": "#f6d79a"
  },
  {
    "src": "/media/xHEMhVTwflC_/8859dd626c/b942a5_65113182432144f49bd50bb009e7d88c-mv2.jpg",
    "caption": "Our fluffy baby 🤍",
    "tilt": -1.5,
    "tape": "#fbe3b4"
  },
  {
    "src": "/media/QYUwdroeZC35/52e467dddb/b942a5_03ab53e8167c454eaf75e37491e51b03-mv2.jpg",
    "caption": "New best friend 🧸",
    "tilt": 0.5,
    "tape": "#e9d7bd"
  },
  {
    "src": "/media/rZE7ypWUH0wz/3ccfc972cd/27b888_d8c90ec444654b9c964dc2527814ceaf-mv2.jpg",
    "caption": "He picked us 🐶",
    "tilt": 2.5,
    "tape": "#f4cf9b"
  },
  {
    "src": "/media/Sg8iy_EOrJah/684699406d/27b888_3594e056bf964a7a839a1bd5ac0c859e-mv2.jpg",
    "caption": "Too cute 💛",
    "tilt": -1,
    "tape": "#f6d79a"
  },
  {
    "src": "/media/CVsVLsnCV0L3/626d9c9855/27b888_522e394293a845bcae93adec46bf499c-mv2.jpg",
    "caption": "Puppy number two ☀️",
    "tilt": 1,
    "tape": "#fbe3b4"
  },
  {
    "src": "/media/1ziQH1fmyl-k/6193c5fa7f/27b888_d76b636e082842139943ca9fece80632-mv2.jpg",
    "caption": "Finally home 🦴",
    "tilt": -2.5,
    "tape": "#e9d7bd"
  },
  {
    "src": "/media/2BoSaeBhLer8/05c9d02f5a/27b888_48694c17ac634f32b63bcd21052c10c3-mv2.jpg",
    "caption": "Little legend 💫",
    "tilt": -0.5,
    "tape": "#f4cf9b"
  },
  {
    "src": "/media/QLO4DWvoWlJY/7ccb7aae32/27b888_13d2747a7f454379a5670b552690f728-mv2.jpg",
    "caption": "Lulu, with her new mummy 🐾",
    "tilt": 1.5,
    "tape": "#f6d79a"
  },
  {
    "src": "/media/xaIi_2gMoj_N/27123a3e2c/27b888_3375199e717a4f6ca02e902672664e79-mv2.jpg",
    "caption": "Adorable Maltipoo baby 🤍",
    "tilt": -2,
    "tape": "#fbe3b4"
  },
  {
    "src": "/media/GyAYtgNRGHUw/379090aed6/27b888_3f1463156de645feb90bf306b2572b76-mv2.jpg",
    "caption": "My new teddy puppy 🧸",
    "tilt": 0,
    "tape": "#e9d7bd"
  },
  {
    "src": "/media/NCnzIyNwzZiC/11eddf4e8e/27b888_f405d17027174cdfa4437b9b1d84eaa2-mv2.jpg",
    "caption": "Our new puppies 🐶",
    "tilt": 2,
    "tape": "#f4cf9b"
  },
  {
    "src": "/media/2RCKCPAW7oIk/31af5cd06d/27b888_9b40a22ad84e4e8cbf625acab1bc8e4f-mv2.jpg",
    "caption": "New puppy 💛",
    "tilt": -1.5,
    "tape": "#f6d79a"
  },
  {
    "src": "/media/d9RWhCKfRHOc/c549944174/27b888_0ad908eb6ba745b7b3e1426338af1803-mv2.jpg",
    "caption": "Gang of 3 ☀️",
    "tilt": 0.5,
    "tape": "#fbe3b4"
  },
  {
    "src": "/media/tI7E08CB-sVp/b655581264/27b888_a649f91c871046d2a4231ceda00ec982-mv2.jpg",
    "caption": "So happy 🦴",
    "tilt": 2.5,
    "tape": "#e9d7bd"
  },
  {
    "src": "/media/uL-D7uBZjs12/3cc9e2690e/27b888_96b9eb6428164f41b124137673bc865c-mv2.jpg",
    "caption": "New pup 💫",
    "tilt": -1,
    "tape": "#f4cf9b"
  },
  {
    "src": "/media/AK4nDMw3v53a/9ded532913/27b888_89af9713331443c3b9f4b72a83d646e3-mv2.jpg",
    "caption": "Home at last 🐾",
    "tilt": 1,
    "tape": "#f6d79a"
  },
  {
    "src": "/media/SXZSpIZJimpQ/0a488a56a5/27b888_927dffc200a44f9dafcb953b765beec0-mv2.jpg",
    "caption": "Best decision ever 🤍",
    "tilt": -2.5,
    "tape": "#fbe3b4"
  },
  {
    "src": "/media/NBeJ3y_g-Iee/a4a5827b07/27b888_bba195dd5eec46e798d3dc05790f1e99-mv2.jpg",
    "caption": "Our little family 🧸",
    "tilt": -0.5,
    "tape": "#e9d7bd"
  },
  {
    "src": "/media/6Abv8pfqHoEA/a6fb93823b/27b888_ff288b45f9694416b3f3d019d7a9a1d4-mv2.jpg",
    "caption": "Tiny but mighty 🐶",
    "tilt": 1.5,
    "tape": "#f4cf9b"
  },
  {
    "src": "/media/UFzHrheMHQmi/7ce45654d8/27b888_ade4298d721a444888379393d06745cb-mv2.jpg",
    "caption": "Teddy bear baby 💛",
    "tilt": -2,
    "tape": "#f6d79a"
  },
  {
    "src": "/media/937wIvKxefpy/a42f072027/27b888_664db706809c46eea8e75db06885de6a-mv2.jpg",
    "caption": "Someone loves the sofa ☀️",
    "tilt": 0,
    "tape": "#fbe3b4"
  },
  {
    "src": "/media/BxM75hECdt9p/eb17b83cc8/27b888_659cfe02524541e0ab0a94cc71a2a189-mv2.jpg",
    "caption": "Puppy cuddles 🦴",
    "tilt": 2,
    "tape": "#e9d7bd"
  },
  {
    "src": "/media/O88qTc2s7KH8/032fd55fa2/27b888_da4b7d60a604414e95bfb91efcdad6f6-mv2.jpg",
    "caption": "Look at that face 💫",
    "tilt": -1.5,
    "tape": "#f4cf9b"
  },
  {
    "src": "/media/PAAMBTTfmXOK/37d59d6ee3/27b888_dad1db0c47834985a25b98b067cf563e-mv2.jpg",
    "caption": "Sunshine and puppies 🐾",
    "tilt": 0.5,
    "tape": "#f6d79a"
  },
  {
    "src": "/media/9A74-QBbi78w/d788ec6f31/27b888_96324661ab4742649af7d72ba465f0a8-mv2.jpg",
    "caption": "Our fluffy baby 🤍",
    "tilt": 2.5,
    "tape": "#fbe3b4"
  },
  {
    "src": "/media/0wEBefsp1F5j/1b67ab78e0/27b888_8727fecbf89b4648b443b9bfab83fffd-mv2.jpg",
    "caption": "New best friend 🧸",
    "tilt": -1,
    "tape": "#e9d7bd"
  },
  {
    "src": "/media/hu2K_kmYs7s9/0e8b423b7c/27b888_b5a504249d254ac7a02693ba340c74fb-mv2.jpg",
    "caption": "He picked us 🐶",
    "tilt": 1,
    "tape": "#f4cf9b"
  },
  {
    "src": "/media/LpUvbTEyekwN/556d16df42/27b888_74e15c47a77b48a39e5174d2657bc417-mv2.jpg",
    "caption": "Too cute 💛",
    "tilt": -2.5,
    "tape": "#f6d79a"
  },
  {
    "src": "/media/dI8Jv0KRTiLJ/d2d7e5375b/27b888_7d940ce5701f48d98327e4a242b53ac4-mv2.jpg",
    "caption": "Puppy number two ☀️",
    "tilt": -0.5,
    "tape": "#fbe3b4"
  },
  {
    "src": "/media/TI-WtaFssfQt/c41fb2a387/27b888_15920f828b864dd1b44b98ec4e964c53-mv2.jpg",
    "caption": "Finally home 🦴",
    "tilt": 1.5,
    "tape": "#e9d7bd"
  },
  {
    "src": "/media/j6T9eswP2eS8/59c6879a1d/27b888_bc27df54dcce410196c6016475364ff3-mv2.jpg",
    "caption": "Little legend 💫",
    "tilt": -2,
    "tape": "#f4cf9b"
  },
  {
    "src": "/media/HJgL4rRnmReV/533701358f/27b888_082e47dfd8144423a96dc70d966fa5b2-mv2.jpg",
    "caption": "Lulu, with her new mummy 🐾",
    "tilt": 0,
    "tape": "#f6d79a"
  },
  {
    "src": "/media/uc5ANs5jm7r7/7160d8b7b1/27b888_f7f4966e59e94db591784d4ec546682f-mv2.jpg",
    "caption": "Adorable Maltipoo baby 🤍",
    "tilt": 2,
    "tape": "#fbe3b4"
  },
  {
    "src": "/media/pRJubyqHw8p7/d58c4c07ee/27b888_b073c5815f7c4f92ad9a57741a653663-mv2.jpg",
    "caption": "My new teddy puppy 🧸",
    "tilt": -1.5,
    "tape": "#e9d7bd"
  },
  {
    "src": "/media/4wOJk9azop_-/65ecf66bf0/27b888_cfe895dbcc2d4bff85f890be9b496543-mv2.jpg",
    "caption": "Our new puppies 🐶",
    "tilt": 0.5,
    "tape": "#f4cf9b"
  },
  {
    "src": "/media/2ZpD4FCAriYZ/56ea196e78/27b888_160a7ee974d74fc7ae452afc6e5fccea-mv2.jpg",
    "caption": "New puppy 💛",
    "tilt": 2.5,
    "tape": "#f6d79a"
  },
  {
    "src": "/media/BarQuR6VS6XX/3acd4e6449/27b888_2255683016304a278b17353cb21c1f45-mv2.jpg",
    "caption": "Gang of 3 ☀️",
    "tilt": -1,
    "tape": "#fbe3b4"
  },
  {
    "src": "/media/l_M8IYdzFJHb/bc8ad2f58f/27b888_80b7b3c14907460f8dc1457ffd99a99d-mv2.jpg",
    "caption": "So happy 🦴",
    "tilt": 1,
    "tape": "#e9d7bd"
  },
  {
    "src": "/media/aAf69e7YtFrb/e162c491b3/27b888_f18596e1a72543d695d79416569bef23-mv2.jpg",
    "caption": "New pup 💫",
    "tilt": -2.5,
    "tape": "#f4cf9b"
  },
  {
    "src": "/media/qesMnrX7cliq/da5bec6e86/27b888_3def48865368404392a98437a48e6ec7-mv2.jpg",
    "caption": "Home at last 🐾",
    "tilt": -0.5,
    "tape": "#f6d79a"
  },
  {
    "src": "/media/sqPa3JOR3OPc/4273c20214/27b888_62c31ea0db1f452a8ca28369aef45c8d-mv2.jpg",
    "caption": "Best decision ever 🤍",
    "tilt": 1.5,
    "tape": "#fbe3b4"
  },
  {
    "src": "/media/3h20rIasJCOa/10c307cb1c/27b888_a7e7ab6a931e4c79a798bab9927d396e-mv2.jpg",
    "caption": "Our little family 🧸",
    "tilt": -2,
    "tape": "#e9d7bd"
  },
  {
    "src": "/media/NaV9L3-u1vss/cb3d13765a/27b888_91d95c12076a4efd94128b14dceb216f-mv2.avif",
    "caption": "Tiny but mighty 🐶",
    "tilt": 0,
    "tape": "#f4cf9b"
  },
  {
    "src": "/media/EINH5_Xbws14/dae797ecdf/27b888_202b27e8ecca4b4d8715c8f648bd35e4-mv2.avif",
    "caption": "Teddy bear baby 💛",
    "tilt": 2,
    "tape": "#f6d79a"
  },
  {
    "src": "/media/wyDhW6yEQ6ef/e012615aab/b942a5_9381a9a0ca3e40b4b4f31906cf7fda56-mv2.png",
    "caption": "Someone loves the sofa ☀️",
    "tilt": -1.5,
    "tape": "#fbe3b4"
  },
  {
    "src": "/media/n6BJMOg_-QYI/82329c84b0/b942a5_dc4082b7b0454025bcef4c790c4f4e68-mv2.jpg",
    "caption": "Puppy cuddles 🦴",
    "tilt": 0.5,
    "tape": "#e9d7bd"
  },
  {
    "src": "/media/nTiIYDlSaIjG/334a39f6a3/27b888_febae47e079240d28d1602b54813dca4-mv2.avif",
    "caption": "Look at that face 💫",
    "tilt": 2.5,
    "tape": "#f4cf9b"
  }
];

export const breeds = [
  { id: "maltipoo", label: "Maltipoo" },
  { id: "pomeranian", label: "Pomeranian" },
  { id: "poodle", label: "Poodle" },
  { id: "cavapoo", label: "Cavapoo" },
  { id: "shih-tzu", label: "Shih Tzu" },
] as const;

export const collections = [
  { id: "imported", label: "Imported" },
  { id: "korean-teacup", label: "Korean Teacup" },
] as const;

export const genders = [
  { id: "male", label: "Boys" },
  { id: "female", label: "Girls" },
] as const;

/** breed id -> does this puppy belong */
export function matchesBreed(p: Puppy, id: string) {
  switch (id) {
    case "maltipoo":
      return /maltipoo/i.test(p.breed);
    case "pomeranian":
      return /pomeranian/i.test(p.breed);
    case "poodle":
      return /poodle/i.test(p.breed);
    case "cavapoo":
      return /cavapoo/i.test(p.breed);
    case "shih-tzu":
      return /shih tzu/i.test(p.breed);
    default:
      return true;
  }
}

export function matchesGender(p: Puppy, id: string) {
  if (id === "male") return /boy/i.test(p.gender);
  if (id === "female") return /girl/i.test(p.gender);
  return true;
}

export function matchesCollection(p: Puppy, id: string) {
  if (id === "imported") return p.origin === "imported";
  if (id === "korean-teacup") return p.korean;
  return true;
}

export const faqs = [
  {
    q: "Are your puppies vaccinated and health-checked?",
    a: "Yes. All our puppies come with a verified health certificate from licensed vets. Every puppy is vaccinated, dewormed, and thoroughly checked before joining your family.",
  },
  {
    q: "Can I meet a puppy before I decide?",
    a: "Yes. Come meet our locally available puppies in our Downtown Dubai showroom and spend time bonding before making your decision.",
  },
  {
    q: "Can I take my puppy home the same day?",
    a: "Local puppies are available immediately, so you can take your puppy home the same day.",
  },
  {
    q: "Do you import puppies from abroad?",
    a: "Yes. Through our Order Upon Request service we source rare and premium teacup breeds from the most reputable, certified breeders across Europe, Korea, and beyond — and we handle the import for you.",
  },
  {
    q: "How does an imported puppy travel to Dubai?",
    a: "We manage every part of the import process, including health checks, travel arrangements, and the necessary documentation, so your puppy arrives happy, healthy, and stress-free.",
  },
  {
    q: "Will I see photos and health details first?",
    a: "Yes. Photos, videos, and health certificates are shared before your puppy travels, and our team sends real photos and health details directly on WhatsApp.",
  },
  {
    q: "Do you deliver?",
    a: "Yes. We deliver within Dubai, and our trusted international cargo partners deliver puppies safely to loving homes all around the world.",
  },
  {
    q: "Which breeds do you usually have?",
    a: "Breeds we regularly have include Maltipoo, Pomeranian, Poodle and Bichon, plus rare teacup lines such as Korean teacup poodles, Maltese, Pom and Yorkie.",
  },
  {
    q: "Is there help after my puppy comes home?",
    a: "Yes. Our team is available 24/7 and offers advice on training, nutrition, and general care to ensure a smooth transition for you and your new furry friend.",
  },
];

export const testimonials = [
  {
    quote:
      "TeddyPups truly made our dream a reality. They supported us at every step of the import journey. Our Maltipoo arrived healthy, cheerful, and absolutely perfect. Having 24/7 support throughout the process gave us complete peace of mind.",
    name: "Sarah M.",
    where: "Dubai, UAE",
  },
];

export const site = {
  name: "TeddyPups U.A.E.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://teddypups.vercel.app",
  phone: "+971 54 167 6733",
  phoneRaw: "971541676733",
  tagline: "every puppy is family",
  description:
    "Meet your new best friend at our Downtown Dubai showroom, or order a rare miniature breed from trusted breeders worldwide. Health-checked, vaccinated teacup puppies with 24/7 support.",
  email: "teddypupsadmin@gmail.com",
  address: "Downtown Dubai, United Arab Emirates",
  maps: "https://maps.google.com/?q=Downtown+Dubai",
  social: {
    instagram: "https://www.instagram.com/teddypups.worldwide/",
    tiktok: "https://www.tiktok.com/@teddypupsuae",
    facebook: "https://www.facebook.com/profile.php?id=61567496944539",
  },
};

/** Door colours cycle through this warm palette down the hallway. */
export const doorColours = ["#a24a1a", "#5a3a28", "#d4893f", "#b8644a", "#7a4a2e"];

/** How a puppy is introduced on its door plate and card. */
export function doorPlate(p: Puppy) {
  const named = p.name !== p.breed;
  const base = named ? `${p.breed}, ${p.gender.toLowerCase()}` : p.gender.toLowerCase();
  const video = p.hasVideo ? ", with video" : "";
  return {
    name: named ? p.name : p.breed,
    meta: `${base}, ${p.age}${video}`,
    metaShort: `${p.gender.toLowerCase()}, ${p.age}${video}`,
  };
}

export function puppyLabel(p: Puppy) {
  return `${p.breed}, ${p.gender.toLowerCase()}`;
}

/**
 * Reservation terms. These are demo figures — the real business quotes the
 * balance privately once the puppy and the delivery route are confirmed.
 */
export const reservation = {
  depositAed: 2000,
  holdHours: 48,
  balanceNote: "Balance quoted privately, before travel or collection",
};

export function aed(value: number) {
  return `AED ${value.toLocaleString("en-AE")}`;
}

export const deliveryMethods = [
  {
    id: "collect",
    label: "Collect in Dubai",
    hint: "Downtown showroom, today or this week",
    fee: "Free",
  },
  {
    id: "dubai",
    label: "Deliver in Dubai",
    hint: "Door to door, usually same day",
    fee: "Quoted",
  },
  {
    id: "worldwide",
    label: "International",
    hint: "We handle the paperwork and the flight",
    fee: "Quoted",
  },
] as const;

export type DeliveryId = (typeof deliveryMethods)[number]["id"];

export function wa(message: string) {
  return `https://wa.me/${site.phoneRaw}?text=${encodeURIComponent(message)}`;
}
