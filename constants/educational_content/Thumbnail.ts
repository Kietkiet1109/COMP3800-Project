// This file is where all the imports for the IMAGE assets are located

// Exmaple Usage:
// import images/thumbnails from "../../constants/educational_content/Thumbnail";


const Thumbnail =
{
    anatomy:
    {
        gbiAnatomyExplanation: require("../../assets/images/thumbnails/gbi_anatomy_explanation_video_placeholder.jpg"),
    },
    deviceInsertionAndRemoval: 
    {
        gbiDilatorInsertion: require("../../assets/images/thumbnails/gbi_dilator_insertion_video_placeholder.jpg"),
        gbiFemaleCondomInsertion: require("../../assets/images/thumbnails/gbi_female_condom_insertion_video_placeholder.jpg"),
        gbiMenstrualCupInsertion: require("../../assets/images/thumbnails/gbi_menstrual_cup_insertion_video_placeholder.jpg"),
        gbiPessaryInsertion: require("../../assets/images/thumbnails/gbi_pessary_insertion_video_placeholder.jpg"),
        gbiPessaryRemoval: require("../../assets/images/thumbnails/gbi_pessary_insertion_video_placeholder.jpg"),// This image was not provieded by the client, for now using the same image as gbiPessaryGellhornInsertion
        gbiTamponInsertion: require("../../assets/images/thumbnails/gbi_tampon_insertion_video_placeholder.jpg"),
        gbiVaginalWeightsInsertion: require("../../assets/images/thumbnails/gbi_vaginal_weights_insertion_video_placeholder.jpg"),
    },
    medicalProcedures: 
    {
        gbiEpisimSuturing: require("../../assets/images/thumbnails/gbi_episim_suturing_video_placeholder.jpg"),
        gbiPapSmear: require("../../assets/images/thumbnails/gbi_pap_smear_video_placeholder.jpg"),
    },
    pelvicFloorProcedures: 
    {
        gbiPelvicWandMassage: require("../../assets/images/thumbnails/gbi_pelvic_wand_insertion_video_placeholder.jpg"),
        gbiLamAvulsion: require("../../assets/images/thumbnails/gbi_lam_avulsion_video_placeholder.jpg"),
        gbiPelvicFloorAndKegelExercises: require("../../assets/images/thumbnails/gbi_pelvic_floor_and_kegel_exercises_video_placeholder.jpg"),
        gbiPerinealMassage: require("../../assets/images/thumbnails/gbi_perineal_massage_video_placeholder.jpg"),
        gbiPerinealScarTissueMassage: require("../../assets/images/thumbnails/gbi_perineal_scar_tissue_massage_video_placeholder.jpg"),
    },
};

export default Thumbnail;
