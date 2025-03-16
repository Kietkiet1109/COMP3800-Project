import { ImageSourcePropType } from "react-native";
import Images from "../images/Images";

export interface Testimonial
{
    id: number;
    name: string;
    occupation: string;
    description: string;
    image: ImageSourcePropType;
}

export const TESTIMONIALS_DATA: Testimonial[] = 
[
    {
        id: 1,
        name: "University of Birmingham",
        occupation: "Clinical Skills Department",
        description:
            `We purchased the Venus Diversity Trios for us to use as part of our student lending library, ` +
            `to help consolidate the teaching that our Medicine, Midwifery and PA students receive as part of their degrees. ` +
            `I really appreciated the range of skin tones available – we work incredibly hard to make sure that all of our ` +
            `clinical skills equipment accurately reflects the diverse patient pool that they will see in clinical practice, ` +
            `so I’m very happy that this is reflected in this line! The delivery was incredibly fast – especially considering ` +
            `the thousands of miles they had to travel, and when the products arrived they are very high quality – really impressive! ` +
            `Thank you so much!`,
        image: Images.testimonials.university_of_birmingham,
    },
    {
        id: 2,
        name: "Everything Natal",
        occupation: "Women’s Health Company",
        description:
            `Everything Natal is comprised of two highly experienced women’s health physiotherapists. ` +
            `We teach health and fitness professionals how to effectively treat the postnatal population. In order to do ` +
            `this we need to use the best products and this is why the Venus model is imperative to our teaching. ` +
            `We wouldn’t be able to do what we do without them. Thank you, Granville Biomedical!`,
        image: Images.testimonials.everything_natal,
    },
    {
        id: 3,
        name: "Dr. Alex Hill",
        occupation: "Oncology & Pelvic Health Physical Therapist",
        description:
            `Representation is critical in healthcare, including how topics are taught. OncoPelvic PT ` +
            `has been able to use the darker skin tone Venus model in teaching, both to patients and clinicians, ` +
            `to provide inclusive education that ALL people can relate to. As an Oncology and Pelvic Health Physical Therapist, ` +
            `I'm so grateful for the high quality and different skin tones of the Venus model.`,
        image: Images.testimonials.alex,
    },
    {
        id: 4,
        name: "Kim Vopni (The Vagina Coach)",
        occupation:
            "Pelvic Health Coach & Menopause Support Practitioner in training",
        description:
            `I am a huge fan of the Venus model when ` +
            `I am teaching clients and workshop participants about vulvovaginal anatomy. It is a beautiful model that is so life-like and made really well. ` +
            `I highly recommend Granville Biomedical!`,
        image: Images.testimonials.kim_vopni,
    },
    {
        id: 5,
        name: "Aliya Dhalla",
        occupation: "Pelvic Floor Physiotherapist + Educator",
        description:
            `I am a Pelvic Floor Physiotherapist and have two models from Granville Biomedical. ` +
            `I absolutely LOVE them for teaching my patients about their anatomy, perineal care, and so much more. The new Venus model in the medium skin tone is perfection - it’s so meaningful to have my ` +
            `own skin tone represented in this way and I know that it is impactful for my patients as well. ` +
            `I also use these models in my online educational workshops and they are very helpful tools, even virtually. ` +
            `Thank you for making these - they truly help me provide better care + pelvic health education.`,
        image: Images.testimonials.aliya_dhalla,
    },
    {
        id: 6,
        name: "Dr. Joselyn Rodriguez, DPT, OCS, ATC",
        occupation: "Physical Therapist",
        description:
            `The Venus models are an integral part of my practice as it's a way to ` +
            `educate potential clients and current clients on their anatomy, pathology, and treatment. ` +
            `Many vulva owners have never looked at their own; having a life-like model with two colour ` +
            `variations can make it more real for them and help them better understand with a visual aide. ` +
            `I love my models, and so do my clients.`,
        image: Images.testimonials.joselyn_rodrigue,
    },
    {
        id: 7,
        name: "Beth Hoag, PT, CLT",
        occupation: "Physical Therapist",
        description:
            `The Venus model is a wonderful tool for educating patients about their anatomy ` +
            `and teaching them various treatment techniques. As a cancer rehab physio, I find this model ` +
            `especially useful when demonstrating scar and soft tissue release techniques.`,
        image: Images.testimonials.beth_hoag,
    },
    {
        id: 8,
        name: "Lissy Changuion",
        occupation: "Pelvic Health Physiotherapist",
        description:
            `The Venus models have been such a fabulous addition to our women's health physio ` +
            `clinic. They are very effective for providing education to patients. I feel that the model is ` +
            `more realistic and less overwhelming or clinical for patients, which is important for patient ` +
            `comfort when treating female health concerns. The product itself is of exceptional quality and ` +
            `could not recommend using the Venus model within clinic enough.`,
        image: Images.testimonials.lissy_changuion,
    },
    {
        id: 9,
        name: "Planned Parenthood NL",
        occupation: "Sexual Health Educator",
        description:
            `Granville Biomedical's anatomical models have drastically improved sexual ` +
            `health education in both virtual and in-person settings. Further, Venus is great for making ` +
            `demonstration videos that help younger folks learn about tampons, menstrual cups, and pap ` +
            `testing. Along with this, Venus allows participants to understand anatomy at a deeper level ` +
            `and enables people to feel empowered in their healthcare decisions. Thanks, Granville Biomedical!`,
        image: Images.testimonials.planned_parenthood,
    },
    {
        id: 10,
        name: "Jaclyn Seebach, PT",
        occupation: "Pelvic Floor Physiotherapist",
        description:
            `I adore my Venus model from Granville Biomedical! I use it on a daily basis to ` +
            `provide a more realistic visual for patients struggling with vulvodynia, vestibulodynia, ` +
            `vaginismus, painful intercourse, and more. I couldn't do without it to teach perineal massage ` +
            `to moms-to-be so they are more confident in their upcoming birth. I HIGHLY recommend this ` +
            `as a staple education tool for all pelvic health educators.`,
        image: Images.testimonials.jaclyn_seebach,
    },
    {
        id: 11,
        name: "Angelique Montano-Bresolin",
        occupation: "Pelvic Health Physiotherapist",
        description:
            `The Venus vulva model makes teaching so easy! Thanks Granville Biomedical ` +
            `for creating it!`,
        image: Images.testimonials.angelique_montano,
    },
    {
        id: 12,
        name: "Victoria B.",
        occupation: "Pelvic Floor Physiotherapist",
        description:
            `I ordered Granville’s Venus model for my Physiotherapy practice, ` +
            `and when it arrived, my daughter asked how to insert a tampon. After using Venus to ` +
            `demonstrate the process, and having her practice with the model as well, she successfully ` +
            `used a tampon on the first try! Thank you for creating these multipurpose models as well ` +
            `as representing different skin tones.`,
        image: Images.testimonials.victoria_b,
    },
    {
        id: 13,
        name: "Serena Haines",
        occupation: "Sexual Health Educator",
        description:
            `This product is the main event at my shows and clients just adore how easy ` +
            `it is for me to explain their anatomy with it. I’ve taught young women to insert tampons ` +
            `and clean themselves and 40-year old women how to become orgasmic! I’ve also taught men all ` +
            `the sex-ed they wish they knew for partnered pleasure. I can’t love this enough!!!`,
        image: Images.testimonials.serena_haines,
    },
    {
        id: 14,
        name: "Markham Pelvic Health",
        occupation: "",
        description: `Love these vulvar models! One of the best teaching tools for perineal stretching!`,
        image: Images.testimonials.markham_pelvic_health,
    },
    {
        id: 15,
        name: "Kelsey Drew",
        occupation: "Pelvic Floor Physiotherapist",
        description:
            `Granville Biomedical’s attention to detail with respect to anatomical accuracy ` +
            `and quality is unmatched. The pelvic health model is a staple in my practice and has been an ` +
            `incredible asset in terms of technique demonstration and client education/engagement. ` +
            `If you are a women's health practitioner or educator, I strongly recommend adding one of ` +
            `Granville Biomedical's products to your toolbox!`,
        image: Images.testimonials.kelsey_drew,
    },
    {
        id: 16,
        name: "Omotara Johnson",
        occupation: "Founder, Freedom Tree",
        description:
            `Our team used various anatomical models designed by Granville Biomedical ` +
            `during our recent educational program implementation in Sierra Leone, West Africa. ` +
            `The models provided an incredible tool for teaching, learning and collaboration. ` +
            `They also enabled our team to deliver quality education within our outreach program.`,
        image: Images.testimonials.omotara_johnson,
    },
    {
        id: 17,
        name: "Anjelica Abarra",
        occupation: "Co-Founder, Alt Med Creative Inc.",
        description:
            `Christine and Granville Biomedical have been instrumental in helping expand ` +
            `Alt Med Creative's patient education offering. Christine's ideas are fresh and innovative, ` +
            `which have proven to be very valuable to our company. In collaboration with Christine's team, ` +
            `healthcare providers who wish to work with Alt Med Creative will now have access ` +
            `to their simulation solutions that are designed to improve patient retention and education.`,
        image: Images.testimonials.anjelica_abarra,
    },
    {
        id: 18,
        name: "Robert Orr",
        occupation: "President + CEO, Life360 Innovations",
        description:
            `Granville Biomedical designed a custom anatomical model that allowed our ` +
            `incontinence specialists to simulate product use, which eased patient anxiety and improved ` +
            `training outcomes. We currently use the models in all of our clinic partner locations, ` +
            `which is a key training demonstration tool that has resulted in improved product uptake.`,
        image: Images.testimonials.robert_orr,
    },
    {
        id: 19,
        name: "Nicole Ranger",
        occupation: "VP Engineering, Life360 Innovations",
        description:
            `The custom anatomical models that Granville Biomedical designed exceeded our ` +
            `expectations in terms of quality, functionality, and accuracy. The models provide advanced ` +
            `patient education, instilling confidence in product use resulting in an improved quality ` +
            `of life.`,
        image: Images.testimonials.nicole_ranger,
    },
];
