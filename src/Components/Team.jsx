import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebookF,
    faLinkedinIn,
    faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import PropTypes from "prop-types";

const teamMembers = [
    {
        picture: "https://cdn.easyfrontend.com/pictures/users/user24.jpg",
        fullName: "Akshay Kumar",
        designation: "Founder / CEO",
        bio: "Subscribe Easy Tutorials Youtube Channel watch more videos",
        socialLinks: [
            { icon: faFacebookF, href: "#" },
            { icon: faLinkedinIn, href: "#" },
            { icon: faTwitter, href: "#" },
            
        ]
    },
    {
        picture: "https://cdn.easyfrontend.com/pictures/users/user9.jpg",
        fullName: "Raima Ray",
        designation: "Business Head",
        bio: "Subscribe Easy Tutorials Youtube Channel watch more videos",
        socialLinks: [
            { icon: faFacebookF, href: "#" },
            { icon: faLinkedinIn, href: "#" },
            { icon: faTwitter, href: "#" },
            
        ],
    },
    {
        picture: "https://cdn.easyfrontend.com/pictures/users/user23.jpg",
        fullName: "Arjun Kapur",
        designation: "UI Design",
        bio: "Subscribe Easy Tutorials Youtube Channel watch more videos",
        socialLinks: [
            { icon: faFacebookF, href: "#" },
            { icon: faLinkedinIn, href: "#" },
            { icon: faTwitter, href: "#" },
            
        ],
    },
    {
        picture: "https://cdn.easyfrontend.com/pictures/users/user13.jpg",
        fullName: "Alia Bhatt",
        designation: "Marketing Head",
        bio: "Subscribe Easy Tutorials Youtube Channel watch more videos",
        socialLinks: [
            { icon: faFacebookF, href: "#" },
            { icon: faLinkedinIn, href: "#" },
            { icon: faTwitter, href: "#" },
            
        ],
    },
];

const TeamMemberItem = ({ member }) => (
    <div className="bg-white shadow-xl rounded-xl hover:-translate-y-1 duration-500 h-full p-6 lg:p-8">
        <img
            src={member.picture}
            alt={member.fullName}
            className="max-w-full h-auto rounded-full border-4 p-1 border-[#fbc800] mx-auto -mt-20"
            width="120"
        />
        <div className="mt-6">
            <h4 className="text-2xl font-medium mb-1 text-gray-900">{member.fullName}</h4>
            <p className="mb-4 text-sm text-[#fbc800]">{member.designation}</p>
            {/* <p className="opacity-70 text-gray-600">{member.bio}</p> */}
            <div className="mt-6">
                {member.socialLinks.map((item, i) => (
                    <a
                        href={item.href}
                        className={`inline-block opacity-60 transition duration-300 hover:translate-y-1 hover:opacity-100 ${i + 1 !== member.socialLinks.length && "mr-4"}`}
                        key={i}
                    >
                        <FontAwesomeIcon icon={item.icon} />
                    </a>
                ))}
            </div>
        </div>
    </div>
);

TeamMemberItem.propTypes = {
    member: PropTypes.object.isRequired,
};

const TeamMember10 = () => {
    return (
        <section className="ezy__team10 py-14 md:py-24 bg-white text-gray-900">
            <div className="container px-4 mx-auto">
                <div className="flex justify-center mb-6 md:mb-12">
                    <div className="max-w-lg text-center">
                        <h2 className="text-3xl leading-none font-bold md:text-[45px] mb-4">
                            Our Experts Team
                        </h2>
                        <p className="text-gray-600">
                            Assumenda non repellendus distinctio nihil dicta sapiente,
                            quibusdam maiores, illum at qui.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-4 gap-6 text-center pt-6">
                    {teamMembers.map((member, i) => (
                        <div className="col-span-4 md:col-span-2 lg:col-span-1" key={i}>
                            <TeamMemberItem member={member} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TeamMember10;
