import React from 'react';

const BandMembers = () => {
  const members = [
    {
      name: "Ethan Carter",
      role: "Guitarist",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDkE-fkOMugoA074gsgGTjr607GffVWg3olbOIstHh_4su1iqVLfAA_7FUTLBOW9sZlKFZoPOQMvB8sR_RtsklcUBgLsdNiqQxU1VTMGsMVMktorDBWalhCW0E6vH_OetxQ4aKgmd9XKqqPg6bdSrN4y0kZ0ig10UvM3Fo6T4RYx3rnt1BHB8M0o8hT4IE-YB6Epltxi41hoVr9LORuGYX7zKGzyIP6fqaMOSRz37KZtdGgdydikn0VhQI2IiQRRo8V9xFMll0mlEE"
    },
    {
      name: "Olivia Bennett",
      role: "Keyboardist",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCTKFYtqYCx9M1yQGGt1o1STnC0l0SyTwrs-WbKe1LPlSFxi5Ki3YaJkE_IoE5_I_TqquJkz8L9-gyVdZyR70Az4nqsMxSEXyDBToW-b-5L2Ve9oJXaDC0uBi1TfnDJPrnMMWv_ZOkZCdogstRY-nqTCHKsjFSWNL5XEfB0yGbcNj_KcpTBUjFUZJt-0xb0adPr-EuEPDRF6G4V7Tix01TFd5Zy0CIfuqbeFATDqtEdsz_tuFnXdgXBTRQBz0qk_mPG1k3X98Wc-nU"
    },
    {
      name: "Noah Thompson",
      role: "Drummer",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAjsPDrANRTa-IM4OuDd9MY6Ge7Q9BbexM8OIvHcSkkiXkmwOYRWDG5bongmcr3oSHkneJowalc5kySO5rtPyytcnSij7cgzTP71GWNT2a4OpxVmoi1TlLfI0_4NvEHGjurCZW4WDTGi6l1PwLUJ35H1lFTqR2lfP_JUsXtegre9zRA-cIayyPe25kN5M4dQXk8VNHaSwE_-aFlR7u5AaGzdLSdqLyfSazCxQ7DjmjfcmmOVQob_3XPhUbXJq6zji-5gWik_VkVc7Y"
    },
    {
      name: "Sophia Clark",
      role: "Vocalist",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBUIsOz57VgXqWsp0lUkI4VEza9Odd_TaSxh7brRv0eB2kjg596r8Ez_sUwxNSGSe_VOcOC74aNQ_jA6jCu3dXw2QXl9mkxP_dEdzDPvidXLyht1zx3j0JTC029vsd2YIK3UnvHbWpgZeKqX-ACdlnSyHBhBH3kVTKHo3RWmMV51glhYA-hpW2xC4L9hwqq5AFGAo9peXdmozgCdbW01jX5lMJK4Gxl9GhUe4ZBlKHvbT9ef2NvrnLVkw4Ef_OcZ-gMXEReCZJePBA"
    }
  ];

  return (
    <div className="band-members">
      <div className="members-container">
        {members.map((member, index) => (
          <div key={index} className="member-card">
            <div className="member-image" style={{ backgroundImage: `url(${member.image})` }}></div>
            <div className="member-info">
              <h3 className="member-name">{member.name}</h3>
              <p className="member-role">{member.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BandMembers;
