/* eslint-disable react/prop-types */
import { FaLinkedin } from "react-icons/fa"
import { SiGmail } from "react-icons/si"
import { FaGithub } from "react-icons/fa6"
import { BentoGrid, BentoGridItem } from "./bento-grid"
import { motion } from "framer-motion"

const TeamPage = ({ teamMembers }) => {
    const cardVariants = {
        hidden: { scale: 0, opacity: 0 },
        visible: {
            scale: 1,
            opacity: 1,
            transition: { duration: 0.6, ease: "easeOut" },
        },
    }

    return (
        <div className=" flex flex-col justify-center items-center mx-2 my-14">
            <div>
                <BentoGrid className=" mx-auto">
                    {teamMembers.map((item, i) => (
                        <motion.div
                            key={i}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.4 }}
                            variants={cardVariants}
                        >
                            <BentoGridItem
                                key={i}
                                title={item.name}
                                description={item.role}
                                header={item.imageUrl}
                                // icon={roleIcons[item.role] || <IconUser />} // Default icon if role not found
                                socialMedia={
                                    <div className="social-links flex gap-3 relative group">
                                        {item.linkedinUrl && (
                                                <a
                                                    href={item.linkedinUrl}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-[#55acee] hover:text-[#439fe6] tooltip"
                                                    data-tip="LinkedIn"
                                                >
                                                    <FaLinkedin />
                                                </a>
                                        )}
                                        {item.githubUrl && (
                                            <a
                                                href={item.githubUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-[#f1f1f1] hover:text-[#b1b1b1] tooltip"
                                                data-tip="GitHub"
                                            >
                                                <FaGithub />
                                            </a>
                                        )}
                                        {item.gmailUrl && (
                                            <a
                                                href={`mailto:${item.gmailUrl}`}
                                                className="text-[#E95F54] hover:text-[#b43b33] tooltip"
                                                data-tip="Gmail"
                                            >
                                                <SiGmail />
                                            </a>
                                        )}
                                    </div>
                                }
                            />
                        </motion.div>
                    ))}
                </BentoGrid>
            </div>
        </div>
    )
}

export default TeamPage
