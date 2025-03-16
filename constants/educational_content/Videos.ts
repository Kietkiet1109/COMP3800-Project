// This file is where all the imports for the IMAGE assets are located

// Exmaple Usage:
// import Videos from "../../constants/Videos";

// // Usage in a component
// <Video source={Videos.anatomy.gbiAnatomyExplanation} />;

const Videos =
{
    anatomy:
    {
        gbiAnatomyExplanation: require("../../assets/videos/anatomy/gbi_venus_anatomy_01-2025.mp4"),
    },
    deviceInsertionAndRemoval:
    {
        gbiIrisTamponInsertion: require("../../assets/videos/device_insertion_and_removal/gbi_iris_tampon insertion_11-2024.mp4"),
        gbiVenusTamponInsertion: require("../../assets/videos/device_insertion_and_removal/gbi_venus_tampon insertion_11-2024.mp4"),
        gbiIrisMenstrualCupInsertion: require("../../assets/videos/device_insertion_and_removal/gbi_iris_menstrual cup_11-2024.mp4"),
        gbiVenusMenstrualCupInsertion: require("../../assets/videos/device_insertion_and_removal/gbi_venus_menstrual cup_11-2024.mp4"),
        gbiPessaryGellhornInsertion: require("../../assets/videos/device_insertion_and_removal/gbi_iris_gellhorn pessary_front_11-2024.mp4"),
        gbiPessaryRingInsertion: require("../../assets/videos/device_insertion_and_removal/gbi_iris_white ring pessary_front_11-2024.mp4"),
        gbiPessaryCubeInsertion: require("../../assets/videos/device_insertion_and_removal/gbi_iris_cube pessary_front_11-2024.mp4"),
        gbiPessaryHodgeInsertion: require("../../assets/videos/device_insertion_and_removal/gbi_iris_hodge pessary_front_11-2024.mp4"),
        gbiPessaryOvalInsertion: require("../../assets/videos/device_insertion_and_removal/gbi_iris_oval pessary_front_11-2024.mp4"),
        gbiUrestaInsertion: require("../../assets/videos/device_insertion_and_removal/gbi_iris_uresta_11-2024.mp4"),

        // // Video will not be ready before app deployment
        // gbiDilatorInsertion: require("../../assets/videos/device_insertion_and_removal/gbi_dilator_insertion_video_placeholder.mp4"),
        // gbiVaginalWeightsInsertion: require("../../assets/videos/device_insertion_and_removal/gbi_vaginal_weights_insertion_video_placeholder.mp4"),
        // gbiFemaleCondomInsertion: require("../../assets/videos/device_insertion_and_removal/gbi_female_condom_insertion_video_placeholder.mp4"),
        // gbiPessaryRemoval: require("../../assets/videos/device_insertion_and_removal/gbi_pessary_removal_video_placeholder.mp4"),
    },
    medicalProcedures:
    {
        gbiVenusPapSmear: require("../../assets/videos/medical_procedures/gbi_venus_pap_smear_11-2024.mp4"),
        gbiIrisPapSmear: require("../../assets/videos/medical_procedures/gbi_iris_pap smear_11-2024.mp4"),

        // Placeholder video can be used until a new video is filmed
        gbiEpisimSuturing: require("../../assets/videos/medical_procedures/gbi_episim_suturing_video_placeholder.mp4"),
    },
    pelvicFloorProcedures:
    {
        gbiPerinealMassage: require("../../assets/videos/pelvic_floor_procedures/gbi_venus_perineal_massage_11-2024.mp4"),
        gbiVenusPelvicWandMassage: require("../../assets/videos/pelvic_floor_procedures/gbi_venus_pelvic wand_01-2025.mp4"),

        // // Video will not be ready before app deployment
        // gbiPelvicFloorAndKegelExercises: require("../../assets/videos/pelvic_floor_procedures/gbi_pelvic_floor_and_kegel_exercises_video_placeholder.mp4"),
        // gbiPerinealScarTissueMassage: require("../../assets/videos/pelvic_floor_procedures/gbi_perineal_scar_tissue_massage_video_placeholder.mp4"),
        // gbiLamAvulsion: require("../../assets/videos/pelvic_floor_procedures/gbi_lam_avulsion_video_placeholder.mp4"),
    },
};

export default Videos;
