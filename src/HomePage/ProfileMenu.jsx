import React from "react";
import styled from "styled-components";

const menuSections = [
    {
        items: [
            { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/52042e72a974d5dfa1672c509c9d888bf37aafcd2a0ccf38c14c303c22da2b91?placeholderIfAbsent=true&apiKey=484c4e2118754c79890e12514f9d5502", text: "Youtube Studio" },
            { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/e3be7e5f5a7ec8d69abc64f84757bfae09a18d61dd529606caf30470cf604aa7?placeholderIfAbsent=true&apiKey=484c4e2118754c79890e12514f9d5502", text: "Purchases and memberships" }
        ]
    },
    {
        items: [
            { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/95065ba8ceaa1ffd7e3a797d1771de4a8c4e39ca8ec13495c6d3b02b22d41cb6?placeholderIfAbsent=true&apiKey=484c4e2118754c79890e12514f9d5502", text: "Your data in YouTube" },
            { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/cedfe8b593daae127c28399984934b8b0939fe1dd539bb88cdad45845fc9a5a9?placeholderIfAbsent=true&apiKey=484c4e2118754c79890e12514f9d5502", text: "Appearance: Light" },
            { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/b53d3eb4a6208566eac50087885ed7c09abfcb4134d719d5d507912a80dc3e30?placeholderIfAbsent=true&apiKey=484c4e2118754c79890e12514f9d5502", text: "Language: British English" },
            { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/9cc9a553d43976025a15f96c6406b83e2129d1e6c456cb4f95c0801a214605b2?placeholderIfAbsent=true&apiKey=484c4e2118754c79890e12514f9d5502", text: "Restricted Mode: Off" },
            { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/970283239a876bcf077c7566f0dbee2b3bd453adc3fee32057a9e56a036eb467?placeholderIfAbsent=true&apiKey=484c4e2118754c79890e12514f9d5502", text: "Focus Mode: Off" },
            { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/6e747572f27e76e65cd97a01aec73559b327cbc0536ee066269435b4ffc8ba5d?placeholderIfAbsent=true&apiKey=484c4e2118754c79890e12514f9d5502", text: "Location: United States" },
            { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/3d7c10dfe760f7fee2fa28074708d05a33e43d6feb3d556dd6f8491e36c81fd2?placeholderIfAbsent=true&apiKey=484c4e2118754c79890e12514f9d5502", text: "Keyboard shortcuts" }
        ]
    },
    {
        items: [
            { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/745f4c13590a13984ce919034f426909728260cf5acb755f29ae7f0fa71d03d1?placeholderIfAbsent=true&apiKey=484c4e2118754c79890e12514f9d5502", text: "Settings" }
        ]
    },
    {
        items: [
            { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/b09051b41df24f1ff76a37cce7b7e5a43fc0f36cda809393727490fb571c614c?placeholderIfAbsent=true&apiKey=484c4e2118754c79890e12514f9d5502", text: "Help" },
            { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/2d8f1f468d8edcf18d5d6755d68e9b4d92f47a6281bcb55dfb6475c65a5bee6d?placeholderIfAbsent=true&apiKey=484c4e2118754c79890e12514f9d5502", text: "Send feedback" }
        ]
    }
];

function ProfileMenu() {
    return (
        <MenuContainer>
            <MenuContent>
                <ProfileWrapper>
                    <ProfileContent>
                        <Avatar
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/854a70a2e4a920bbc67982f6ed5080bf14779ce2d605df3f32f15476f809d95f?placeholderIfAbsent=true&apiKey=484c4e2118754c79890e12514f9d5502"
                            alt="User avatar"
                        />
                        <UserInfo>
                            <UserName>No Thoughts Head Empty</UserName>
                            <UserHandle>@no_thoughts_head_empty</UserHandle>
                        </UserInfo>
                    </ProfileContent>
                    <ViewChannel>View your channel</ViewChannel>
                </ProfileWrapper>
                <Divider />
                <ControlsWrapper>
                    <AccountItem>
                        <ControlIcon
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/13a1acb5d636af6a71ad07b0283eeb51ca2c97f94462e9ea9ad28c4232a96a2c?placeholderIfAbsent=true&apiKey=484c4e2118754c79890e12514f9d5502"
                            alt="Google Account"
                        />
                        <ControlText>Google Account</ControlText>
                    </AccountItem>
                    <AccountItem>
                        <ControlIcon
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/4b43cb76d884683e6fd31042100e795fe324a6c6089dd5f202f37699067e08e0?placeholderIfAbsent=true&apiKey=484c4e2118754c79890e12514f9d5502"
                            alt="Switch account"
                        />
                        <ControlText>Switch account</ControlText>
                    </AccountItem>
                    <AccountItem>
                        <ControlIcon
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/cafb05cf0908dff8344c416150c78bedf7b9809c8d2373b4bf5967581b68432e?placeholderIfAbsent=true&apiKey=484c4e2118754c79890e12514f9d5502"
                            alt="Sign out"
                        />
                        <ControlText>Sign out</ControlText>
                    </AccountItem>
                </ControlsWrapper>
                <Divider />
                {menuSections.map((section, index) => (
                    <React.Fragment key={index}>
                        <SectionWrapper>
                            {section.items.map((item, idx) => (
                                <MenuItem key={idx}>
                                    <MenuIcon src={item.icon} alt={item.text} />
                                    <MenuText>{item.text}</MenuText>
                                </MenuItem>
                            ))}
                        </SectionWrapper>
                        {index < menuSections.length - 1 && <Divider />}
                    </React.Fragment>
                ))}
            </MenuContent>
        </MenuContainer>
    );
}

const MenuContainer = styled.div`
  border-radius: 0;
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.12);
  display: flex;
  max-width: 300px;
  flex-direction: column;
`;

const MenuContent = styled.div`
  border-radius: 10px;
  background-color: #fff;
  display: flex;
  width: 100%;
  flex-direction: column;
  padding: 17px 0;
`;

const ProfileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  font-family: Roboto, sans-serif;
  padding: 0 15px;
`;

const ProfileContent = styled.div`
  display: flex;
  gap: 11px;
`;

const Avatar = styled.img`
  width: 40px;
  border-radius: 50%;
`;

const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const UserName = styled.div`
  font-size: 17px;
`;

const UserHandle = styled.div`
  font-size: 16px;
  margin-top: 5px;
`;

const ViewChannel = styled.div`
  color: #2d76da;
  font-size: 14px;
  margin-top: 15px;
`;

const Divider = styled.div`
  height: 1px;
  background-color: #e3e3e3;
  margin: 16px 0;
`;

const ControlsWrapper = styled.div`
  padding: 0 15px;
`;

const AccountItem = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 10px;
`;

const ControlIcon = styled.img`
  width: 24px;
`;

const ControlText = styled.div`
  font-size: 14px;
`;

const SectionWrapper = styled.div`
  padding: 0 15px;
`;

const MenuItem = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 10px;
`;

const MenuIcon = styled.img`
  width: 24px;
`;

const MenuText = styled.div`
  font-size: 14px;
`;

export default ProfileMenu;
