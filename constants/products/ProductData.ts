import { ImageSourcePropType } from "react-native";
import Images from "../images/Images";
import Products from "./Products";

export interface Product
{
    id: number;
    name: string;
    price: number;
    description: string;
    images: ImageSourcePropType[];
}

export interface ProductBackgroundImage
{
    name: string;
    image: ImageSourcePropType;
}

export const PRODUCT_TITLE_IMAGES: ProductBackgroundImage[] = 
[
    {
        name: Products.Venus,
        image: Images.products.thumbnails.venus,
    },
    {
        name: Products.Iris,
        image: Images.products.thumbnails.iris,
    },
    {
        name: Products.Episim,
        image: Images.products.thumbnails.episim,
    },
    //-------This were asked to be hidden by the client for now----------
    //{
    //    name: Products.Luna,
    //    image: Images.products.thumbnails.cervicalPathologyModel
    //},
    // {
    //   name: "Venus Diversity Trio",
    //   image: Images.products.venusDiversityTrio.venusDiversityTrio1,
    // },
    // {
    //   name: "Pelvic Exam",
    //   image: Images.products.pelvicExam.skillsKitMedium,
    // },
];

export const PRODUCT_DATA: Product[] = 
[
    {
        id: 1,
        name: Products.Iris,
        price: 325.0,
        description:
            `Our patent-pending Iris model is designed to provide healthcare ` +
            `professionals and trainees with more detailed hands-on learning opportunities. ` +
            `This anatomical model features a life-like vulva exterior and translucent vaginal ` +
            `canal with visible cervix. This model is ideal for demonstrating the insertion, ` +
            `placement, and removal of pessaries, menstrual cups, tampons, contraceptives, speculums, ` +
            `and so much more. Iris includes a white standing base and a removable pelvic component. ` +
            `It is strongly recommended to use medical-grade lubricant with your IRIS model when inserting ` +
            `or extracting medical devices. Currently available in medium skin tone with additional ` +
            `skin tones coming soon. PATENT PENDING.`,
        images: 
        [
            Images.products.iris.irisCubePessary,
            Images.products.iris.irisDarkFront,
            Images.products.iris.irisGehrungPessary,
            Images.products.iris.irisGellhornPessary,
            Images.products.iris.irisHodgePessary,
            Images.products.iris.irisIncontinencePessary,
            Images.products.iris.irisLightFront,
            Images.products.iris.irisMarlandPessary,
            Images.products.iris.irisMediumBack,
            Images.products.iris.irisMediumFront,
            Images.products.iris.irisMediumRingPessary,
            Images.products.iris.irisMediumSide,
            Images.products.iris.irisOvalPessary,
            Images.products.iris.irisPessaryArray,
            Images.products.iris.irisSmallRingPessary,
        ],
    },
    {
        id: 2,
        name: Products.Venus,
        price: 155.0,
        description:
            `Our patent-pending Venus Pelvic Health Anatomical Model is designed to ` +
            `provide healthcare professionals and trainees with more detailed hands-on learning opportunities. ` +
            `Venus features a life-like vulva exterior, interior vaginal canal with visible cervix. ` +
            `Available in light, medium, and dark skin tones for inclusive teaching and learning. ` +
            `Includes a white standing base.`,
        images: 
        [
            Images.products.venus.venusDarkFront,
            Images.products.venus.venusDarkSide,
            Images.products.venus.venusDarkSpeculum,
            Images.products.venus.venusLightFront,
            Images.products.venus.venusLightSide,
            Images.products.venus.venusLightSpeculum1,
            Images.products.venus.venusLightSpeculum2,
            Images.products.venus.venusLightSpeculum3,
            Images.products.venus.venusLightSpeculum4,
            Images.products.venus.venusMediumFront,
            Images.products.venus.venusMediumSide,
        ],
    },
    {
        id: 3,
        name: "Venus Diversity Trio", // This is hidden and not apart of Products.ts at the moment
        price: 435.0,
        description:
            `Take your teaching to the next level with our Venus Diversity Trio! ` +
            `The trio includes our light, medium, and dark skin tone Venus models to assist with ` +
            `patient representation through diverse teaching and learning. Venus features a life-like ` +
            `vulva exterior and interior vaginal canal with a visible cervix for educational purposes. ` +
            `Ideal for demonstrating pelvic floor physiotherapy procedures, dry needling, pelvic exams, ` +
            `sexual and anatomy education, and so much more. Includes white standing base for each model.`,
        images: 
        [
            Images.products.venusDiversityTrio.venusDarkFrontOldStand,
            Images.products.venusDiversityTrio.venusDiversityTrio1,
            Images.products.venusDiversityTrio.venusDiversityTrio2,
            Images.products.venusDiversityTrio.venusDiversityTrio3,
            Images.products.venusDiversityTrio.venusLightSideOldStand,
            Images.products.venusDiversityTrio.venusMediumFrontOldStand,
        ],
    },
    {
        id: 4,
        name: "Pelvic Exam", // This is hidden and not apart of Products.ts at the moment
        price: 180.0,
        description:
            `Our Pelvic Exam Educational Skills Kit contains our patent pending Venus model, which features a vaginal canal with visible cervix. ` +
            `This kit includes a speculum, cytobrush, pelvic swab, spatula, and Muko lubricant for life-like hands-on training. ` +
            `Ideal for Pelvic Health practitioner trainees, OB/GYN, medical, and nursing students, as well as midwifery and doula trainees. ` +
            `Available in light, medium, and dark skin tones. ` +
            `THIS KIT IS FOR EDUCATIONAL AND RESEARCH PURPOSES ONLY.`,
        images: 
        [
            Images.products.pelvicExam.skillsKitDark,
            Images.products.pelvicExam.skillsKitLight,
            Images.products.pelvicExam.skillsKitMedium,
            Images.products.pelvicExam.venusDarkFrontOldStand,
            Images.products.pelvicExam.venusDarkSpeculum2,
            Images.products.pelvicExam.venusLightFrontOldStand,
            Images.products.pelvicExam.venusLightSideOldStand,
            Images.products.pelvicExam.venusLightSpeculum4,
            Images.products.pelvicExam.venusMediumSpeculum,
        ],
    },
    {
        id: 5,
        name: Products.Episim,
        price: 40.0,
        description:
            `Our EpiSim Suturing Rehearsal Pad is designed to provide medical ` +
            `trainees with an opportunity to advance their suturing skills prior to patient care. ` +
            `Suturing pad measures approx. 5.75 x 5.75" and is available in light, medium, and ` +
            `dark skin tones. EpiSim is reusable for suturing rehearsal.`,
        images: 
        [
            Images.products.episim.episimDark,
            Images.products.episim.episimMed,
            Images.products.episim.episimLight,
        ],
    },
    //  Luna is currently unavailable
    //{
    //    id: 6,
    //    name: Products.Luna,
    //    price: 0.0,
    //    description:
    //        `Our patent-pending Iris model is designed to provide healthcare ` +
    //        `professionals and trainees with more detailed hands-on learning opportunities. ` +
    //        `This anatomical model features a life-like vulva exterior and translucent vaginal ` +
    //        `canal with visible cervix. This model is ideal for demonstrating the insertion, ` +
    //        `placement, and removal of pessaries, menstrual cups, tampons, contraceptives, speculums, ` +
    //        `and so much more. Iris includes a white standing base and a removable pelvic component. ` +
    //        `It is strongly recommended to use medical-grade lubricant with your IRIS model when inserting ` +
    //        `or extracting medical devices. Currently available in medium skin tone with additional ` +
    //        `skin tones coming soon. PATENT PENDING.`, // This is a place holder description copied from IRIS
    //    images:
    //    [
    //        Images.products.cervicalPathologyModel.cervicalPathologyModelFront,
    //        Images.products.cervicalPathologyModel.cervicalPathologyModelBack,
    //        Images.products.cervicalPathologyModel.cervicalPathologyModelSide,
    //    ],
    //},
];


// {           Leave this here in case the client wants it back in the future
//             if you bring this back in, please remember to update the id's of the products.
//   id: 7,
//   name: `Perisim`,
//   price: 0.0, //This is unknown
//   description: `Our PeriSim model is designed to provide healthcare`+
//   `professionals and trainees with more detailed hands-on learning opportunities.`+
//   `This anatomical model features a life-like vulva exterior and translucent vaginal`+
//   `canal with visible cervix. This model is ideal for demonstrating the insertion,`+
//   `placement, and removal of pessaries, menstrual cups, tampons,`+
//   `contraceptives, speculums, and so much more. PeriSim includes a white standing base`+
//   `and a removable pelvic component. It is strongly recommended to use medical-grade lubricant`+
//   `with your PeriSim model when inserting or extracting medical devices. Currently available`+
//   `in medium skin tone with additional skin tones coming soon. PATENT PENDING.`, // this is a place holder`+
//   images: [
//     Images.products.perisim.perisimDark,
//     Images.products.perisim.perisimLight,
//     Images.products.perisim.perisimLightSutured,
//   ],
// },
