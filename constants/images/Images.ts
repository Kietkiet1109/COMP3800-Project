// This file is where all the imports for the IMAGE assets are located

import Thumbnail from "../educational_content/Thumbnail";

// Example Usage:
// import Images from "../constants/Images";

// <View>
//       <Image
//         source={Images.logos.gbLogoEn}
//       />
// </View>


const Images = 
{
    logos: 
    {
        gbLogoEnRgb: require("../../assets/images/logos/gb_logo_en_rgb.jpg"),
        gbLogoEn: require("../../assets/images/logos/gb_logo_en.jpg"),
        gbLogoEnRgbTrp: require("../../assets/images/logos/gb_logo_en_rgb_transparent.png"),
        gbLogoLrg: require("../../assets/images/logos/gb_logo_lrg.jpg"),
        thumbnailGb: require("../../assets/images/logos/thumbnail_gb.jpg"),
        thumbnailGbTrp: require("../../assets/images/logos/thumbnail_gb_transparent.png"),
    },
    ourStory: 
    {
        ourStory: require("../../assets/images/ourStory/our_story.jpg"),
    },
    products: 
    {
        thumbnails: 
        {
            cervicalPathologyModel: require("../../assets/images/products/thumbnails/product_thumbnail_luna.jpg"), //"Luna" - name still subject to change
            episim: require("../../assets/images/products/thumbnails/product_thumbnail_episim.jpg"),
            iris: require("../../assets/images/products/thumbnails/product_thumbnail_iris.jpg"),
            perisim: require("../../assets/images/products/thumbnails/product_thumbnail_perisim.jpg"),//not used at this time
            venus: require("../../assets/images/products/thumbnails/product_thumbnail_venus.jpg"),
        },
        cervicalPathologyModel: 
        {
            cervicalPathologyModelBack: require("../../assets/images/products/cervical_pathology_model/cervical_pathology_model_v5_back.jpeg"),
            cervicalPathologyModelFront: require("../../assets/images/products/cervical_pathology_model/cervical_pathology_model_v5_front.jpeg"),
            cervicalPathologyModelSide: require("../../assets/images/products/cervical_pathology_model/cervical_pathology_model_v5_side.jpeg"),
        },
        episim: 
        {
            episimDark: require("../../assets/images/products/episim/episim_dark.jpg"),
            episimLight: require("../../assets/images/products/episim/episim_light.jpg"),
            episimMed: require("../../assets/images/products/episim/episim_med.jpg"),
        },
        iris: 
        {
            irisCubePessary: require("../../assets/images/products/iris/iris_cube_pessary.jpg"),
            irisDarkFront: require("../../assets/images/products/iris/iris_dark_front.jpg"),
            irisGehrungPessary: require("../../assets/images/products/iris/iris_gehrung_pessary.jpg"),
            irisGellhornPessary: require("../../assets/images/products/iris/iris_gellhorn_pessary.jpg"),
            irisHodgePessary: require("../../assets/images/products/iris/iris_hodge_pessary.jpg"),
            irisIncontinencePessary: require("../../assets/images/products/iris/iris_incontinence_pessary.jpg"),
            irisLightFront: require("../../assets/images/products/iris/iris_light_front.jpg"),
            irisMarlandPessary: require("../../assets/images/products/iris/iris_marland_pessary.jpg"),
            irisMediumBack: require("../../assets/images/products/iris/iris_medium_back.jpg"),
            irisMediumFront: require("../../assets/images/products/iris/iris_medium_front.jpg"),
            irisMediumRingPessary: require("../../assets/images/products/iris/iris_medium_ring_pessary.jpg"),
            irisMediumSide: require("../../assets/images/products/iris/iris_medium_side.jpg"),
            irisOvalPessary: require("../../assets/images/products/iris/iris_oval_pessary.jpg"),
            irisPessaryArray: require("../../assets/images/products/iris/iris_pessary_array.jpg"),
            irisSmallRingPessary: require("../../assets/images/products/iris/iris_small_ring_pessary.jpg"),
        },
        pelvicExam: 
        {
            skillsKitDark: require("../../assets/images/products/pelvic_exam/skills_kit_dark.jpg"),
            skillsKitLight: require("../../assets/images/products/pelvic_exam/skills_kit_light.jpg"),
            skillsKitMedium: require("../../assets/images/products/pelvic_exam/skills_kit_medium.jpg"),
            venusDarkFrontOldStand: require("../../assets/images/products/pelvic_exam/venus_dark_front_old_stand.jpg"),
            venusDarkSpeculum2: require("../../assets/images/products/pelvic_exam/venus_dark_speculum_2.jpg"),
            venusLightFrontOldStand: require("../../assets/images/products/pelvic_exam/venus_light_front_old_stand.jpg"),
            venusLightSideOldStand: require("../../assets/images/products/pelvic_exam/venus_light_side_old_stand.jpg"),
            venusLightSpeculum4: require("../../assets/images/products/pelvic_exam/venus_light_speculum_4.jpg"),
            venusMediumSpeculum: require("../../assets/images/products/pelvic_exam/venus_medium_speculum.jpg"),
        },
        //I'm going to leave this here incase the client wants it back in the future
        // perisim: {
        //   perisimDark: require("../assets/images/products/perisim/perisim_dark.jpg"),
        //   perisimLight: require("../assets/images/products/perisim/perisim_light.jpg"),
        //   perisimLightSutured: require("../assets/images/products/perisim/perisim_light_sutured.jpg"),
        // },
        venus: 
        {
            venusDarkFront: require("../../assets/images/products/venus/venus_dark_front.jpg"),
            venusDarkSide: require("../../assets/images/products/venus/venus_dark_side.jpg"),
            venusDarkSpeculum: require("../../assets/images/products/venus/venus_dark_speculum.jpg"),
            venusLightFront: require("../../assets/images/products/venus/venus_light_front.jpg"),
            venusLightSide: require("../../assets/images/products/venus/venus_light_side.jpg"),
            venusLightSpeculum1: require("../../assets/images/products/venus/venus_light_speculum_1.jpg"),
            venusLightSpeculum2: require("../../assets/images/products/venus/venus_light_speculum_2.jpg"),
            venusLightSpeculum3: require("../../assets/images/products/venus/venus_light_speculum_3.jpg"),
            venusLightSpeculum4: require("../../assets/images/products/venus/venus_light_speculum_4.jpg"),
            venusMediumFront: require("../../assets/images/products/venus/venus_medium_front.jpg"),
            venusMediumSide: require("../../assets/images/products/venus/venus_medium_side.jpg"),
        },
        venusDiversityTrio: 
        {
            venusDarkFrontOldStand: require("../../assets/images/products/venus_diversity_trio/venus_dark_front_old_stand.jpg"),
            venusDiversityTrio1: require("../../assets/images/products/venus_diversity_trio/venus_diversity_trio_1.jpg"),
            venusDiversityTrio2: require("../../assets/images/products/venus_diversity_trio/venus_diversity_trio_2.jpg"),
            venusDiversityTrio3: require("../../assets/images/products/venus_diversity_trio/venus_diversity_trio_3.jpg"),
            venusLightSideOldStand: require("../../assets/images/products/venus_diversity_trio/venus_light_side_old_stand.jpg"),
            venusMediumFrontOldStand: require("../../assets/images/products/venus_diversity_trio/venus_medium_front_old_stand.jpg"),
        },
    },
    team: 
    {
        adamPress: require("../../assets/images/team/adam_press.jpg"),
        anjelicaAbarra: require("../../assets/images/team/anjelica_abarra.jpg"),
        christineGoudie: require("../../assets/images/team/christine_goudie.jpg"),
        crystalNorthcott: require("../../assets/images/team/crystal_northcott.jpg"),
        rebeccaWytsma: require("../../assets/images/team/rebecca_wytsma.jpg"),
    },
    testimonials: 
    {
        alex: require("../../assets/images/testimonials/alex_hill.png"),
        aliya_dhalla: require("../../assets/images/testimonials/aliya_dhalla.png"),
        angelique_montano: require("../../assets/images/testimonials/angelique_montano.png"),
        anjelica_abarra: require("../../assets/images/testimonials/anjelica_abarra.png"),
        beth_hoag: require("../../assets/images/testimonials/beth_hoag.png"),
        everything_natal: require("../../assets/images/testimonials/everything_natal.png"),
        jaclyn_seebach: require("../../assets/images/testimonials/jaclyn_seebach.png"),
        joselyn_rodrigue: require("../../assets/images/testimonials/joselyn_rodriguez.png"),
        kelsey_drew: require("../../assets/images/testimonials/kelsey_drew.png"),
        lissy_changuion: require("../../assets/images/testimonials/lissy_changuion.png"),
        markham_pelvic_health: require("../../assets/images/testimonials/markham_pelvic_health.png"),
        nicole_ranger: require("../../assets/images/testimonials/nicole_ranger.png"),
        omotara_johnson: require("../../assets/images/testimonials/omotara_johnson.png"),
        planned_parenthood: require("../../assets/images/testimonials/planned_parenthood.png"),
        robert_orr: require("../../assets/images/testimonials/robert_orr.png"),
        serena_haines: require("../../assets/images/testimonials/serena_haines.png"),
        university_of_birmingham: require("../../assets/images/testimonials/university_of_birmingham.png"),
        victoria_b: require("../../assets/images/testimonials/victoria_b.png"),
        kim_vopni: require("../../assets/images/testimonials/kim_vopni.png"),
    },
};

export default Images;
