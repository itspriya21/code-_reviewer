import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="">
            <div className="">
                    {/* Social Media Section */}
                    <div className='footer'>
                        <div className="flex space-x-4">
                            <a
                                href="https://github.com/itspriya21"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-white transition-colors"
                            >
                                <FaGithub size={24} />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/priyambada-ba456b217/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-white transition-colors"
                            >
                                <FaLinkedin size={24} />
                            </a>
                           
                        </div>
                    </div>
                </div>

               
                
        </footer>
    );
};

export default Footer;