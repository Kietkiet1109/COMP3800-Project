import { ImageSourcePropType } from "react-native";
import Images from "../images/Images";

export interface Team {
    name: string;
    role: string;
    image: ImageSourcePropType;
}

export const TEAM_MEMBERS: Team[] = [
    {
        name: "Christine Goudie",
        role: "Co-Founder & CEO",
        image: Images.team.christineGoudie,
    },
    {
        name: "Crystal Northcott",
        role: "Co-Founder & COO",
        image: Images.team.crystalNorthcott,
    },
    {
        name: "Rebecca Wytsma",
        role: "R&D Product Manager",
        image: Images.team.rebeccaWytsma,
    },
//  Commented out as requested.
//     {
//         name: "Adam Press",
//         role: "Senior Engineering Specialist",
//         image: Images.team.adamPress,
//     },
    {
        name: "Anjelica Abarra",
        role: "Healthcare Marketing Specialist",
        image: Images.team.anjelicaAbarra,
    },
];