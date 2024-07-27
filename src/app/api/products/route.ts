import { NextResponse } from "next/server";

const data = [
  {
    Id: "64ef87c93f02133c4986ccd2",
    Name: "School Smart Girl's School Shoe",
    SeName: "school-smart-girls-school-shoe-40511a10",
    ColorVariants: null,
    ShortDescription: null,
    FeaturedImageUrl:
      "https://storage.apex4u.com/e3c38b3d-2ea4-4be7-9b39-d909e3d8c40f.JPG",
    ProductPrice: {
      OldPrice: 1290,
      Price: 1096,
    },
    availableQuantity: 10,
  },
  {
    Id: "64ef87d13f02133c4986cf0e",
    Name: "School Smart Kid's School Shoe",
    SeName: "school-smart-kids-school-shoe-40580a12",
    ColorVariants: null,
    ShortDescription: null,
    FeaturedImageUrl:
      "https://storage.apex4u.com/b9bd8cf0-91a6-47d7-952f-de3e4edcb438.JPG",
    ProductPrice: {
      OldPrice: 1290,
      Price: 1096,
    },
    availableQuantity: 10,
  },
  {
    Id: "64ef87cc3f02133c4986cd9a",
    Name: "School Smart Girl's School Shoe",
    SeName: "school-smart-girls-school-shoe-40511a14",
    ColorVariants: null,
    ShortDescription: null,
    FeaturedImageUrl:
      "https://storage.apex4u.com/9ba19da2-4719-448a-8623-ea136faf4715.JPG",
    ProductPrice: {
      OldPrice: 690,
      Price: 586,
    },
    availableQuantity: 10,
  },
  {
    Id: "64ef87d43f02133c4986cfd9",
    Name: "School Smart Kid's School Shoe",
    SeName: "school-smart-kids-school-shoe-40581a09",
    ColorVariants: null,
    ShortDescription: null,
    FeaturedImageUrl: "https://storage.apex4u.com/40581A09_1.jpeg",
    ProductPrice: {
      OldPrice: 1290,
      Price: 1096,
    },
  },
  {
    Id: "64ef891c3f02133c498723b6",
    Name: "School Smart Kid's School Shoe",
    SeName: "school-smart-kids-school-shoe-50510a10",
    ColorVariants: null,
    ShortDescription: null,
    FeaturedImageUrl:
      "https://storage.apex4u.com/5c7e149a-614f-4e24-aaef-a7786d88fc4f.JPG",
    ProductPrice: {
      OldPrice: 790,
      Price: 672,
    },
    availableQuantity: 10,
  },
  {
    Id: "64ef891f3f02133c4987245d",
    Name: "School Smart Girl's School Shoe",
    SeName: "school-smart-girls-school-shoe-50511a10",
    ColorVariants: null,
    ShortDescription: null,
    FeaturedImageUrl:
      "https://storage.apex4u.com/f30dcb74-dae4-4ace-a239-e37e13ac6512.JPG",
    ProductPrice: {
      OldPrice: 1290,
      Price: 1096,
    },
    availableQuantity: 10,
  },
  {
    Id: "64ef892c3f02133c49872813",
    Name: "School Smart Boy's School Shoe",
    SeName: "school-smart-boys-school-shoe-50581a09",
    ColorVariants: null,
    ShortDescription: null,
    FeaturedImageUrl:
      "https://storage.apex4u.com/bbd0b575-ef8e-47e3-a839-d04b819211b2.jpg",
    ProductPrice: {
      OldPrice: 1490,
      Price: 1266,
    },
    availableQuantity: 10,
  },
  {
    Id: "64ef89213f02133c49872528",
    Name: "School Smart Girl's School Shoe",
    SeName: "school-smart-girls-school-shoe-50511a14",
    ColorVariants: null,
    ShortDescription: null,
    FeaturedImageUrl: "https://storage.apex4u.com/50511A14_1.jpeg",
    ProductPrice: {
      OldPrice: 790,
      Price: 672,
    },
    availableQuantity: 10,
  },
  {
    Id: "64ef89293f02133c49872703",
    Name: "School Smart Boy's School Shoe",
    SeName: "school-smart-boys-school-shoe-50580a18",
    ColorVariants: null,
    ShortDescription: null,
    FeaturedImageUrl:
      "https://storage.apex4u.com/b9a53f94-3bda-428b-8ce8-e2baa991a574.JPG",
    ProductPrice: {
      OldPrice: 1490,
      Price: 1266,
    },
    availableQuantity: 10,
  },
  {
    Id: "657959ceb27b3528b4edea02",
    Name: "School Smart Kid's School Shoe",
    SeName: "school-smart-kids-school-shoe-40512a09",
    ColorVariants: null,
    ShortDescription: null,
    FeaturedImageUrl:
      "https://storage.apex4u.com/a71fd3bb-b8cf-43c9-8fb6-872491414591.JPG",
    ProductPrice: {
      OldPrice: 1290,
      Price: 1096,
    },
    availableQuantity: 10,
  },
  {
    Id: "65784d69d55413c8454c815b",
    Name: "School Smart Kid's School Shoe",
    SeName: "school-smart-kids-school-shoe-50582a13",
    ColorVariants: null,
    ShortDescription: null,
    FeaturedImageUrl:
      "https://storage.apex4u.com/2878dd77-c83f-4aa9-831a-cd326bbb3eb1.JPG",
    ProductPrice: {
      OldPrice: 1490,
      Price: 1266,
    },
    availableQuantity: 10,
  },
  {
    Id: "65783ef9d55413c84545c1ce",
    Name: "School Smart Boy's School Shoe",
    SeName: "school-smart-boys-school-shoe-40510a04",
    ColorVariants: null,
    ShortDescription: null,
    FeaturedImageUrl:
      "https://storage.apex4u.com/efe9e912-df5a-4f31-97cc-6726e58dd646.JPG",
    ProductPrice: {
      OldPrice: 790,
      Price: 672,
    },
    availableQuantity: 10,
  },
  {
    Id: "657aa47b7c6b11d2419f9f70",
    Name: "School Smart Boy's School Shoe",
    SeName: "school-smart-boys-school-shoe-50511a24",
    ColorVariants: null,
    ShortDescription: null,
    FeaturedImageUrl:
      "https://storage.apex4u.com/78ba629d-eaec-4370-883d-e0155b64db6a.JPG",
    ProductPrice: {
      OldPrice: 1490,
      Price: 1266,
    },
    availableQuantity: 10,
  },
  {
    Id: "657ab8b57c6b11d241aa6239",
    Name: "School Smart Boy's School Shoe",
    SeName: "school-smart-boys-school-shoe-50511a25",
    ColorVariants: null,
    ShortDescription: null,
    FeaturedImageUrl:
      "https://storage.apex4u.com/f4828ffe-b1a7-4a8c-a88e-c70a34bb7f68.JPG",
    ProductPrice: {
      OldPrice: 1490,
      Price: 1266,
    },
    availableQuantity: 10,
  },
  {
    Id: "657abe207c6b11d241add3c4",
    Name: "School Smart Kid's School Shoe",
    SeName: "school-smart-kids-school-shoe-50512a09",
    ColorVariants: null,
    ShortDescription: null,
    FeaturedImageUrl:
      "https://storage.apex4u.com/ffc53eca-5a39-45f7-a18a-d7ee9198ab32.JPG",
    ProductPrice: {
      OldPrice: 1490,
      Price: 1266,
    },
    availableQuantity: 10,
  },
];

export async function GET() {
  return NextResponse.json({ data });
}
