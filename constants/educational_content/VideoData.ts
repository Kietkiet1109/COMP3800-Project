import Videos from "./Videos";
import Products from "../products/Products";
import Thumbnail from "./Thumbnail";
import Categories from "./Categories";
import { AVPlaybackSource } from "expo-av";

export interface Video {
    id: number;
    models: string[];
    video_category: string;
    video_name: string;
    videoUri: AVPlaybackSource;
    thumbnail: any;
    isPremium: boolean;
}

/* **************************************************************************************
 * ************The commented out videos are not ready before app deloyment***************
 * **************************************************************************************/

export const VIDEO_DATA: Video[] =
    [
        {
            id: 1,
            models: [Products.Venus],
            video_category: Categories.anatomy,
            video_name: "Anatomy Explanation",
            videoUri: Videos.anatomy.gbiAnatomyExplanation,
            thumbnail: Thumbnail.anatomy.gbiAnatomyExplanation,
            isPremium: false,
        },
        // {
        //     id: 2,
        //     models: [Products.Venus],
        //     video_category: Categories.pelvic_floor_procedures,
        //     video_name: "Pelvic Floor/Kegel Exercises",
        //     videoUri: Videos.pelvicFloorProcedures.gbiPelvicFloorAndKegelExercises,
        //     thumbnail: Thumbnail.pelvicFloorProcedures.gbiPelvicFloorAndKegelExercises,
        //     isPremium: true,
        // },
        {
            id: 3,
            models: [Products.Venus],
            video_category: Categories.pelvic_floor_procedures,
            video_name: "Perineal Massage",
            videoUri: Videos.pelvicFloorProcedures.gbiPerinealMassage,
            thumbnail: Thumbnail.pelvicFloorProcedures.gbiPerinealMassage,
            isPremium: true,
        },
        // {
        //     id: 4,
        //     models: [Products.Venus, Products.Iris],
        //     video_category: Categories.pelvic_floor_procedures,
        //     video_name: "Perineal Scar Tissue Massage",
        //     videoUri: Videos.pelvicFloorProcedures.gbiPerinealScarTissueMassage,
        //     thumbnail: Thumbnail.pelvicFloorProcedures.gbiPerinealScarTissueMassage,
        //     isPremium: true,
        // },
        {
            id: 5,
            models: [Products.Venus],
            video_category: Categories.pelvic_floor_procedures,
            video_name: "Pelvic Wand Insertion",
            videoUri: Videos.pelvicFloorProcedures.gbiVenusPelvicWandMassage,
            thumbnail: Thumbnail.pelvicFloorProcedures.gbiPelvicWandMassage,
            isPremium: true,
        },
        {
            id: 6,
            models: [Products.Venus],
            video_category: Categories.medical_procedures,
            video_name: "Pap Smear",
            videoUri: Videos.medicalProcedures.gbiVenusPapSmear,
            thumbnail: Thumbnail.medicalProcedures.gbiPapSmear,
            isPremium: false,
        },
        {
            id: 7,
            models: [Products.Iris],
            video_category: Categories.device_insertion_and_removal,
            video_name: "Menstrual Cup Insertion",
            videoUri: Videos.deviceInsertionAndRemoval.gbiIrisMenstrualCupInsertion,
            thumbnail: Thumbnail.deviceInsertionAndRemoval.gbiMenstrualCupInsertion,
            isPremium: false,
        },
        {
            id: 8,
            models: [Products.Iris],
            video_category: Categories.device_insertion_and_removal,
            video_name: "Tampon Insertion",
            videoUri: Videos.deviceInsertionAndRemoval.gbiIrisTamponInsertion,
            thumbnail: Thumbnail.deviceInsertionAndRemoval.gbiTamponInsertion,
            isPremium: false,
        },
        // {
        //     id: 9,
        //     models: [Products.Iris],
        //     video_category: Categories.device_insertion_and_removal,
        //     video_name: "Dilater Insertion",
        //     videoUri: Videos.deviceInsertionAndRemoval.gbiDilatorInsertion,
        //     thumbnail: Thumbnail.deviceInsertionAndRemoval.gbiDilatorInsertion,
        //     isPremium: true,
        // },
        // {
        //     id: 10,
        //     models: [Products.Iris],
        //     video_category: Categories.device_insertion_and_removal,
        //     video_name: "Vaginal Weights Insertion",
        //     videoUri: Videos.deviceInsertionAndRemoval.gbiVaginalWeightsInsertion,
        //     thumbnail: Thumbnail.deviceInsertionAndRemoval.gbiVaginalWeightsInsertion,
        //     isPremium: true,
        // },
        // {
        //     id: 11,
        //     models: [Products.Iris],
        //     video_category: Categories.device_insertion_and_removal,
        //     video_name: "Female Condom Insertion",
        //     videoUri: Videos.deviceInsertionAndRemoval.gbiFemaleCondomInsertion,
        //     thumbnail: Thumbnail.deviceInsertionAndRemoval.gbiFemaleCondomInsertion,
        //     isPremium: true,
        // },
        {
            id: 12,
            models: [Products.Iris],
            video_category: Categories.device_insertion_and_removal,
            video_name: "Pessary Insertion (Ring)",
            videoUri: Videos.deviceInsertionAndRemoval.gbiPessaryRingInsertion,
            thumbnail: Thumbnail.deviceInsertionAndRemoval.gbiPessaryInsertion,
            isPremium: false,
        },
        {
            id: 13,
            models: [Products.Iris],
            video_category: Categories.device_insertion_and_removal,
            video_name: "Pessary Insertion (Gellhorn)",
            videoUri: Videos.deviceInsertionAndRemoval.gbiPessaryGellhornInsertion,
            thumbnail: Thumbnail.deviceInsertionAndRemoval.gbiPessaryInsertion,
            isPremium: false,
        },
        // {
        //     id: 14,
        //     models: [Products.Iris],
        //     video_category: Categories.device_insertion_and_removal,
        //     video_name: "Pessary Insertion (Ring With Knob)",
        //     videoUri: Videos.deviceInsertionAndRemoval.gbiPessaryRingInsertion, // placeholder video (using "ring" for "ring with knob")
        //     thumbnail: Thumbnail.deviceInsertionAndRemoval.gbiPessaryInsertion,
        //     isPremium: true,
        // },
        {
            id: 15,
            models: [Products.Iris],
            video_category: Categories.device_insertion_and_removal,
            video_name: "Pessary Insertion (Cube)",
            videoUri: Videos.deviceInsertionAndRemoval.gbiPessaryCubeInsertion,
            thumbnail: Thumbnail.deviceInsertionAndRemoval.gbiPessaryInsertion,
            isPremium: true,
        },
        {
            id: 16,
            models: [Products.Iris],
            video_category: Categories.device_insertion_and_removal,
            video_name: "Pessary Insertion (Hodge)",
            videoUri: Videos.deviceInsertionAndRemoval.gbiPessaryHodgeInsertion,
            thumbnail: Thumbnail.deviceInsertionAndRemoval.gbiPessaryInsertion,
            isPremium: true,
        },
        // {
        //     id: 17,
        //     models: [Products.Iris],
        //     video_category: Categories.device_insertion_and_removal,
        //     video_name: "Pessary Insertion (Marland)",
        //     videoUri: Videos.deviceInsertionAndRemoval.gbiPessaryGellhornInsertion, // placeholder video (using "gellhorn" for "Marland")
        //     thumbnail: Thumbnail.deviceInsertionAndRemoval.gbiPessaryInsertion,
        //     isPremium: true,
        // },
        {
            id: 18,
            models: [Products.Iris],
            video_category: Categories.device_insertion_and_removal,
            video_name: "Pessary Insertion (Oval)",
            videoUri: Videos.deviceInsertionAndRemoval.gbiPessaryOvalInsertion,
            thumbnail: Thumbnail.deviceInsertionAndRemoval.gbiPessaryInsertion,
            isPremium: true,
        },
        // {
        //     id: 19,
        //     models: [Products.Iris],
        //     video_category: Categories.device_insertion_and_removal,
        //     video_name: "Pessary Removal (Ring)",
        //     videoUri: Videos.deviceInsertionAndRemoval.gbiPessaryRemoval,
        //     thumbnail: Thumbnail.deviceInsertionAndRemoval.gbiPessaryRemoval,
        //     isPremium: false,
        // },
        // {
        //     id: 20,
        //     models: [Products.Iris],
        //     video_category: Categories.pelvic_floor_procedures,
        //     video_name: "LAM Avulsion",
        //     videoUri: Videos.pelvicFloorProcedures.gbiLamAvulsion,
        //     thumbnail: Thumbnail.pelvicFloorProcedures.gbiLamAvulsion,
        //     isPremium: true,
        // },
        {
            id: 21,
            models: [Products.Episim],
            video_category: Categories.suturing_rehearsal,
            video_name: "Suturing Video",
            videoUri: Videos.medicalProcedures.gbiEpisimSuturing,
            thumbnail: Thumbnail.medicalProcedures.gbiEpisimSuturing,
            isPremium: true,
        },
        // *************** New Video Added ***************
        {
            id: 22,
            models: [Products.Venus],
            video_category: Categories.device_insertion_and_removal,
            video_name: "Menstrual Cup Insertion",
            videoUri: Videos.deviceInsertionAndRemoval.gbiVenusMenstrualCupInsertion,
            thumbnail: Thumbnail.deviceInsertionAndRemoval.gbiMenstrualCupInsertion,
            isPremium: false,
        },
        {
            id: 23,
            models: [Products.Venus],
            video_category: Categories.device_insertion_and_removal,
            video_name: "Tampon Insertion",
            videoUri: Videos.deviceInsertionAndRemoval.gbiVenusTamponInsertion,
            thumbnail: Thumbnail.deviceInsertionAndRemoval.gbiMenstrualCupInsertion,
            isPremium: false,
        },
        {
            id: 24,
            models: [Products.Iris],
            video_category: Categories.medical_procedures,
            video_name: "Pap Smear",
            videoUri: Videos.medicalProcedures.gbiIrisPapSmear,
            thumbnail: Thumbnail.medicalProcedures.gbiPapSmear,
            isPremium: false,
        },
        {
            id: 25,
            models: [Products.Iris],
            video_category: Categories.device_insertion_and_removal,
            video_name: "Uresta Device Insertion",
            videoUri: Videos.deviceInsertionAndRemoval.gbiUrestaInsertion,
            thumbnail: Thumbnail.deviceInsertionAndRemoval.gbiPessaryInsertion,
            isPremium: true,
        },
    ];

export default VIDEO_DATA;
